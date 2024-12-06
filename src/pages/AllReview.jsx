import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReview = () => {
  const reviews = useLoaderData();

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="py-10">
        <h1 className="text-center text-4xl font-bold text-white font-oxanium">
          Explore All <span className="text-[#9742ff]">Game Reviews</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {reviews.map((review) => (
            <div key={review._id}>
              <ReviewCard review={review}></ReviewCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReview;
