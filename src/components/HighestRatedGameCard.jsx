import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HighestRatedGameCard = ({ topReview }) => {
  console.log(topReview);
  const {_id, photo, gameName, rating, description, option } = topReview;
  return (
    <div className="">
      <Card className="w-full max-w-[26rem] bg-opacity-20 backdrop-blur-lg bg-[#9742ff] rounded-2xl">
        <CardHeader
          floated={false}
          color="blue-gray"
          className="shadow-none mt-0 mx-0 rounded-none rounded-t-2xl"
        >
          <img
            src={photo}
            alt={gameName}
            className="min-h-60 h-full object-cover"
          />
          <div className="to-bg-black-10 absolute inset-0 w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <div className="px-6 flex pt-5">
          <h1 className="px-4 p-1 bg-[#9742ff] text-sm backdrop-blur-3xl bg-opacity-10 rounded-md text-[#fb0aff]">
            {option}
          </h1>
        </div>
        <CardBody className="p-0 px-6 pt-3">
          <div className="mb-3 flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-medium text-white"
            >
              {gameName}
            </Typography>
          </div>
          <Typography className="text-gray-400 text-justify">
            {description.slice(0, 72)} ....
          </Typography>
        </CardBody>
        <div className="flex justify-between p-6 items-center">
          <div>
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
              {rating}
            </Typography>
          </div>
          <Link to={`/review-details/${_id}`}>
            <Button size="lg" fullWidth={false} className="btn">
              Explore
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

HighestRatedGameCard.propTypes = {
  topReview: PropTypes.any,
};

export default HighestRatedGameCard;
