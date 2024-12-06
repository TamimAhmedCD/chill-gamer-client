import { useLoaderData } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import HighestRatedGame from "../components/HighestRatedGame";
import HighestRatedGameCard from "../components/HighestRatedGameCard";

const Home = () => {
    const topReviews = useLoaderData()

    return (
        <div>
            <BannerSlider/>
            <HighestRatedGame/>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-11/12 lg:w-10/12 mx-auto">
                {topReviews.map(topReview => <HighestRatedGameCard key={topReview._id} topReview={topReview}></HighestRatedGameCard>)}
            </section>
        </div>
    );
};

export default Home;