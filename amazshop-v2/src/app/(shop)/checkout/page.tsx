import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-black tracking-tight mb-4">Checkout</h1>
      <p className="text-secondary mb-8">
        This page is under construction. Your cart has been saved.
      </p>
      <Link
        href="/cart"
        className="inline-block bg-main text-white px-8 py-3 rounded-xl font-bold hover:bg-accent transition-colors"
      >
        Back to Cart
      </Link>
    </div>
  );
}
