import ReviewCard from "./ReviewCard";
import type { Review } from "@/types";

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="mt-24 border-t border-main/5 pt-16">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-black">Customer Reviews</h2>
        <button className="text-sm font-black text-accent border-b-2 border-accent hover:text-main hover:border-main transition-colors pb-1">
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
}
