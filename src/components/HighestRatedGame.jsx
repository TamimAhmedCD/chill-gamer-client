import { Link } from "react-router-dom";

const HighestRatedGame = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="py-10 flex justify-between">
        <h1 className="text-center text-3xl font-bold text-white font-oxanium">
          Highest Rated <span className="text-[#9742ff]">Games</span>
        </h1>
        <Link to='/all-review'>
          <p className="text-[#9742ff]">View All</p>
        </Link>
      </div>
    </div>
  );
};

export default HighestRatedGame;
