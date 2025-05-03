import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentStarted, setPaymentStarted] = useState(false);

  const items = [
    {
      id: 1,
      name: "T-shirt",
      description: "Comfortable cotton t-shirt",
      price: 1000,
    },
    { id: 2, name: "Mug", description: "Coffee mug", price: 520 },
    { id: 3, name: "Book", description: "Book with blank pages", price: 15 },
  ];

  useEffect(() => {
    fetch("https://react-stripe-payment-two.vercel.app/config").then(
      async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      }
    );
  }, []);

  const startPayment = () => {
    setPaymentStarted(true);
    fetch("https://react-stripe-payment-two.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  };

  return (
    <>
      <h2>Cart</h2>
      <section className="item-container">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img
              src={`https://picsum.photos/200/200?random=${item.id}`}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: KES {item.price}</p>
          </div>
        ))}
      </section>
      {!paymentStarted && <button onClick={startPayment}>Start Payment</button>}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
