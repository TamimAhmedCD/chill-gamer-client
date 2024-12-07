import { Card, IconButton, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const WatchList = () => {
  const watchList = useLoaderData();
  const { user } = useContext(AuthProvider);
  const [filterData, setFilterData] = useState(
    watchList.filter((review) => review.userMail === user?.email)
  );

  console.log(filterData);
  
  const TABLE_HEAD = [
    "Name",
    "Game Name",
    "Rating",
    "Option",
    "Release Date",
    "Actions",
  ];

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto h-screen">
      <h1 className="text-center text-4xl font-bold text-white font-oxanium py-10">
        My <span className="text-[#9742ff]">Reviews</span>
      </h1>
      <Card className="shadow-none bg-opacity-20 backdrop-blur-3xl border border-[#9742ff]">
        <table className="">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none text-[#d1aefc]"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterData.length > 0 ? (
              filterData.map((review) => {
                return (
                  <tr key={review._id}>
                    <td className="p-4">
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
                    <td className="p-4">
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

export default WatchList;
