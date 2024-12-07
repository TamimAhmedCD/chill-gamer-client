import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { MdBookmarkAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

const ReviewDetails = () => {
  const reviews = useLoaderData();
  const {user} = useContext(AuthProvider)
  const userMail = user.email
  const {
    name,
    email,
    photo,
    gameName,
    description,
    rating,
    publishYear,
    option,
  } = reviews;

  const handleAddToWatchList = () => {
    const watchList = {
      name,
      userMail,
      email,
      photo,
      gameName,
      description,
      rating,
      publishYear,
      option,
    };
  
    fetch('https://server-one-jade.vercel.app/watch-list', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(watchList)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId) {
        Swal.fire({
          title: 'success!',
          text: 'Your review added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    })
  }

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="py-10">
        <h1 className="text-4xl font-bold text-white font-oxanium text-center">
          Review <span className="text-[#9742ff] ">Details</span>
        </h1>
      </div>
      <section className="flex gap-5 flex-col lg:flex-row bg-white bg-opacity-10 backdrop-blur-3xl p-5 rounded-xl border border-[#9742ff]">
        <div className="lg:w-2/5">
          <img
            src={photo}
            alt=""
            className="rounded-xl w-full max-w-xl h-full object-cover"
          />
        </div>
        <div className="text-white flex flex-col gap-2 lg:w-3/5">
          <h1 className="text-2xl font-bold">{gameName}</h1>
          <p className="text-gray-400">Release Year: {publishYear}</p>
          <div className="flex">
            <h1 className="px-4 p-1 bg-[#9742ff] text-sm backdrop-blur-3xl bg-opacity-10 rounded-md text-[#fb0aff]">
              {option}
            </h1>
          </div>
          <p className="text-gray-400 text-justify mb-3">
            <span className="font-medium text-gray-300">
              Review Description:
            </span>{" "}
            {description}
          </p>
          <p className="text-gray-400 text-justify flex items-center gap-2">
            <FaUser className="text-gray-400" />{" "}
            <span className="font-medium text-gray-300">Name:</span> {name}
          </p>
          <p className="text-gray-400 text-justify flex items-center gap-2">
            <IoMail className="text-gray-400" />{" "}
            <span className="font-medium text-gray-300">Email:</span> {email}
          </p>
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
            <span className="text-gray-300">Rating:</span> {rating}
          </Typography>
          <div className="mt-3 flex gap-3 items-center">
            <Button className="bg-[#9742ff] rounded-full normal-case font-medium text-sm flex items-center gap-2" onClick={handleAddToWatchList}>
              Add To Watchlist <MdBookmarkAdd className="text-xl" />
            </Button>
            <IconButton className="bg-transparent rounded-full border border-[#9742ff]">
              <FaHeart />
            </IconButton>
          </div>
        </div>
      </section>
      <div className="pt-10"></div>
    </div>
  );
};

export default ReviewDetails;
