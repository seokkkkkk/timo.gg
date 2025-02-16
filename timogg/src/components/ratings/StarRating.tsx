import { useState } from 'react';
import { ReactComponent as Star } from '../../assets/svgs/star.svg';

interface StarRatingProps {
  defaultRating?: number;
  onChange?: (rating: number) => void;
}

function StarRating({ defaultRating = 0, onChange }: StarRatingProps) {
  const [rating, setRating] = useState<number>(defaultRating);

  const handleClick = (value: number) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex gap-[8px]">
      {[1, 2, 3, 4, 5].map(value => (
        <button
          key={value}
          type="button"
          onClick={() => handleClick(value)}
          className="cursor-pointer p-0 m-0"
          aria-label={`Set rating to ${value}`}
        >
          <Star
            className={
              value <= rating
                ? 'fill-[#46cfa7] transition-colors duration-200'
                : 'fill-[#9aa4af] transition-colors duration-200'
            }
          />
        </button>
      ))}
    </div>
  );
}

StarRating.defaultProps = {
  defaultRating: 0,
  onChange: () => {},
};

export default StarRating;
