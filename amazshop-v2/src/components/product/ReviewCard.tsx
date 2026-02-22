import StarRating from "@/components/common/StarRating";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="bg-white p-8 rounded-[32px] shadow-soft flex flex-col h-full">
      <div className="mb-4">
        <StarRating rating={review.rating} size="sm" />
      </div>
      <h4 className="font-black text-lg mb-2">{review.title}</h4>
      <p className="text-sm text-secondary leading-relaxed mb-6">
        {review.comment}
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent text-xs">
          {review.initials}
        </div>
        <div>
          <span className="block font-bold text-xs">{review.userName}</span>
          {review.verified && (
            <span className="text-[10px] text-secondary/60 font-bold uppercase tracking-widest">
              Verified Buyer
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
