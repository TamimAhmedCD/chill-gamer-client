import { Link, useLoaderData } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AllReview = () => {
  const reviews = useLoaderData();
  const [sortField, setSortField] = useState("");
  const [reviewsS, setReviews] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  // sort by rating
  useEffect(() => {
    const sortedData = [...reviews].sort((a, b) => {
      if (a[sortField] === b[sortField]) {
        const secondaryField =
          sortField === "rating" ? "publishYear" : "rating";
        return b[secondaryField] - a[secondaryField];
      }
      return b[sortField] - a[sortField];
    });
    setReviews(sortedData);
  }, [sortField, reviews]);

  // sort by genres

  useEffect(() => {
    fetch("https://server-one-jade.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);

        const genreSet = new Set(data.map((review) => review.option));
        setGenres([...genreSet]);
      });
  }, []);

  const filteredReviews = selectedGenre
    ? reviewsS.filter((review) => review.option === selectedGenre)
    : reviewsS;

    useEffect(() => {
      document.title = "All Review | Chill Gamer";
    }, []);
  

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="py-10">
        {" "}
        <h1 className="text-4xl font-bold text-white font-oxanium">
          Explore All <span className="text-[#9742ff]">Game Reviews</span>
        </h1>
        <div className="flex justify-between items-center pt-5">
          <select
            name="option"
            onChange={(e) => setSelectedGenre(e.target.value)}
            value={selectedGenre}
            required
            className="select select-bordered focus:outline-[#9742ffc9] bg-opacity-10 text-[#9742ff]"
          >
            <option value="" selected>
              All Genres
            </option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>{" "}
          <select
            name="option"
            onChange={(e) => setSortField(e.target.value)}
            required
            className="select select-bordered focus:outline-[#9742ffc9] bg-opacity-10 text-[#9742ff]"
          >
            <option value="" disabled selected>
              Sort by
            </option>
            <option value="rating">Rating</option>
            <option value="publishYear">Year</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center">
          {filteredReviews.map((review) => (
            <div key={review._id}>
              <Card className="w-full max-w-[26rem] bg-opacity-20 backdrop-blur-lg bg-[#9742ff] border border-[#9742ff]">
                <CardHeader
                  floated={false}
                  color="blue-gray"
                  className="shadow-none"
                >
                  <img
                    src={review.photo}
                    alt={review.gameName}
                    className="min-h-56 h-full object-cover"
                  />
                  <div className="to-bg-black-10 absolute inset-0 w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody className="p-0 px-6 pt-6">
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium text-white"
                    >
                      {review.gameName}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {review.rating}
                    </Typography>
                  </div>
                  <Typography className="text-gray-400 text-justify">
                    {review.description.slice(0, 140)} ....
                  </Typography>
                </CardBody>
                <div className="flex justify-between p-6 items-center">
                  <div>
                    <p className="text-gray-300">
                      Release Date:{" "}
                      <span className="text-gray-500">
                        {review.publishYear}
                      </span>
                    </p>
                    <p className="text-gray-300">
                      Genres:{" "}
                      <span className="text-gray-500">{review.option}</span>
                    </p>
                  </div>
                  <Link to={`/review-details/${review._id}`}>
                    <Button size="lg" fullWidth={false} className="btn">
                      Explore
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReview;
