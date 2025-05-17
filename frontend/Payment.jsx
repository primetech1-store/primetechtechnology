import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const items = [
    {
      id: 1,
      name: "T-shirt",
      description: "Comfortable cotton t-shirt",
      price: 2000,
    },
    {
      id: 2,
      name: "Mug",
      description: "Coffee mug",
      price: 520,
    },
    {
      id: 3,
      name: "Book",
      description: "Book with blank pages",
      price: 15,
    },
  ];

  useEffect(() => {
    fetch("https://primetech-store.vercel.app/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("https://primetech-store.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data.clientSecret);
      });
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ZAR {item.price}</p>
        </div>
      ))}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
