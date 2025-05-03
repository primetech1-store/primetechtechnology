import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentStarted, setPaymentStarted] = useState(false);

  //fetch from local storage instead of hardcoded items
  const items = JSON.parse(localStorage.getItem("cart")) || [];

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

  const handleRemove = (item) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    alert(`${item.name} removed from cart`);
    window.location.reload(); // Refresh the page to reflect changes
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
            <button onClick={() => handleRemove(item)}>Remove from Cart</button>
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
