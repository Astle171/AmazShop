"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function StripeProvider({
  clientSecret,
  children,
}: {
  clientSecret: string;
  children: React.ReactNode;
}) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
          variables: {
            colorPrimary: "#635BFF",
            colorBackground: "#FFFFFF",
            colorText: "#2D241E",
            colorDanger: "#EF4444",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            borderRadius: "8px",
          },
          rules: {
            ".Input": {
              border: "1.5px solid rgba(45,36,30,0.1)",
              padding: "12px 16px",
              fontSize: "14px",
            },
            ".Input:focus": {
              border: "1.5px solid #635BFF",
              boxShadow: "0 0 0 3px rgba(99,91,255,0.12)",
            },
            ".Label": {
              fontSize: "11px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "8px",
            },
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}
