import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingProps {
    rating: number; // Rating between 1 and 10
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    // Pastikan rating berada dalam rentang 1 hingga 10
    const validRating = Math.max(1, Math.min(rating, 10));
    const starRating = validRating / 2;

    const fullStars = Math.floor(starRating);
    const hasHalfStar = starRating % 1 >= 0.5; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

    return (
        <div className="flex items-center text-sm text-blue-950">
            {/* Render full stars */}
            {Array.from({ length: fullStars }).map((_, index) => (
                <FaStar key={`full-${index}`} />
            ))}

            {/* Render half star if applicable */}
            {hasHalfStar && <FaStarHalfAlt key="half-star" />}

            {/* Render empty stars */}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <FaRegStar key={`empty-${index}`} />
            ))}
        </div>
    );
};

export default Rating;
