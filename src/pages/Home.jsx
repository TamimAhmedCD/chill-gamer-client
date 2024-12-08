import { useLoaderData } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import HighestRatedGame from "../components/HighestRatedGame";
import HighestRatedGameCard from "../components/HighestRatedGameCard";
import WatchStreaming from "../components/WatchStreaming";
import JoinUs from "../components/JoinUs";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

const Home = () => {
  const topReviews = useLoaderData();

  useEffect(() => {
    document.title = "Home | Chill Gamer";
  }, []);

  return (
    <div className="">
    <Fade>
    <BannerSlider />
    </Fade>

      {/* Top rated game */}
      <HighestRatedGame />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-11/12 lg:w-10/12 mx-auto place-items-center">
        {topReviews.map((topReview) => (
          <HighestRatedGameCard
            key={topReview._id}
            topReview={topReview}
          ></HighestRatedGameCard>
        ))}
      </section>

      {/* Watch live streaming */}
        <WatchStreaming/>

        {/* Join us section */}
        <JoinUs/>

    </div>
  );
};

export default Home;
