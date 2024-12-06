import ReviewCard from "../components/ReviewCard";

const AllReview = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="py-10">
        <h1 className="text-center text-4xl font-bold text-white font-oxanium">Explore All <span className="text-[#9742ff]">Game Reviews</span></h1>
        <ReviewCard></ReviewCard>
      </div>
    </div>
  );
};

export default AllReview;
