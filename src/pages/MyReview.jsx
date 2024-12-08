import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { Card, IconButton, Typography } from "@material-tailwind/react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyReview = () => {
  const reviews = useLoaderData();
  const { user } = useContext(AuthProvider);

  const [filterData, setFilterData] = useState(
    reviews.filter((review) => review.email === user?.email)
  );

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-one-jade.vercel.app/reviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Review has been deleted.",
                icon: "success",
              });
              const remaining = filterData.filter((data) => data._id !== _id);
              setFilterData(remaining);
            }
          });
      }
    });
  };

  useEffect(() => {
    document.title = "My Review | Chill Gamer";
  }, []);


  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mb-10">
      <h1 className="text-center text-4xl font-bold text-white font-oxanium py-10">
        My <span className="text-[#9742ff]">Reviews</span>
      </h1>
      <Card className="shadow-none bg-opacity-20 backdrop-blur-3xl border border-[#9742ff] md:overflow-auto overflow-scroll">
        <table className="">
          <thead>
            <tr>
              <th className="p-4 pt-10 md:block hidden">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none text-[#d1aefc]"
                >
                  <p>Name</p>
                </Typography>
              </th>
              <th className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none text-[#d1aefc]"
                >
                  <p>Game Name</p>
                </Typography>
              </th>
              <th className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none text-[#d1aefc]"
                >
                  <p>Rating</p>
                </Typography>
              </th>
              <th className="p-4 pt-10 hidden md:block">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none text-[#d1aefc]"
                >
                  <p>Option</p>
                </Typography>
              </th>
              <th className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none text-[#d1aefc]"
                >
                  <p>Release Date</p>
                </Typography>
              </th>
              <th className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none text-[#d1aefc]"
                >
                  <p>Actions</p>
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData.length > 0 ? (
              filterData.map((review) => {
                return (
                  <tr key={review._id}>
                    <td className="p-4 hidden md:block">
                      <Typography
                        variant="small"
                        className="text-center text-gray-300"
                      >
                        {review.name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-500 text-center"
                      >
                        {review.gameName}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-500 text-center"
                      >
                        {review.rating}
                      </Typography>
                    </td>
                    <td className="p-4 hidden md:block">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-500 text-center"
                      >
                        {review.option}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-500 text-center"
                      >
                        {review.publishYear}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 justify-center">
                        <Link to={`/update-review/${review._id}`}>
                          <IconButton variant="text" size="sm">
                            <MdModeEdit className="h-4 w-4 text-[#d1aefc]" />
                          </IconButton>
                        </Link>
                        <IconButton
                          onClick={() => handleDelete(review._id)}
                          variant="text"
                          size="sm"
                        >
                          <MdDelete className="h-4 w-4 text-red-800" />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div className="flex justify-center items-center pb-5 pt-2">
                <h1 className="font-bold text-gray-500">No Data Found</h1>
              </div>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default MyReview;
