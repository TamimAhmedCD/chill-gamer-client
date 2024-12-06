import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { Card, IconButton, Typography } from "@material-tailwind/react";
import { MdDelete, MdModeEdit } from "react-icons/md";

const MyReview = () => {
  const reviews = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthProvider);
  console.log(user);
  console.log(reviews);

  const [filterData, setFilterData] = useState(
    reviews.filter((review) => review.email === user?.email)
  );

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
                        <IconButton variant="text" size="sm">
                          <MdModeEdit className="h-4 w-4 text-[#d1aefc]" />
                        </IconButton>
                        <IconButton variant="text" size="sm">
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
// import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons
// import { Link, useLoaderData, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"; // For sweet alert
// import { AuthContext } from "../Provider/AuthProvider";

// const MyReviews = () => {
//   const reviews = useLoaderData(); // Fetch reviews data
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   // Filter reviews by the logged-in user's email
//   const [filteredData, setFilteredData] = useState(
//     reviews.filter((list) => list.userEmail === user?.email)
//   );

//   // Handle the delete operation
//   const handleDelete = (_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(http://localhost:5000/review/${_id}, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", "Your review has been deleted.", "success");

//               // Update the filtered data state
//               const remaining = filteredData.filter(
//                 (review) => review._id !== _id
//               );
//               setFilteredData(remaining);
//             }
//           })
//           .catch((error) => console.error("Error deleting review:", error));
//       }
//     });
//   };

//   // Handle the update operation
//   const handleUpdate = (id) => {
//     navigate(/updateReview/${id}); // Redirect to the Update Review page
//   };

//   return (
//     <div className="min-h-screen text-white py-8">
//       <div className="container mx-auto px-4">
//         {/* Page Title */}
//         <div className="mb-8 text-center">
//           <h1 className="text-4xl font-bold text-yellow-400">Your Reviews</h1>
//           <p className="mt-2 text-gray-300">
//             Explore the games you have reviewed!
//           </p>
//         </div>

//         {/* Table Section */}
//         <div className="overflow-x-auto bg-gray-800 shadow-lg rounded-lg">
//           <table className="table w-full">
//             {/* Table Header */}
//             <thead className="bg-yellow-500 text-black">
//               <tr>
//                 <th>#</th>
//                 <th>Game Title</th>
//                 <th>Genre</th>
//                 <th>Publishing Year</th>
//                 <th>Rating</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             {/* Table Body */}
//             <tbody>
//               {filteredData.length > 0 ? (
//                 filteredData.map((list, index) => (
//                   <tr
//                     key={list._id}
//                     className={`${
//                       index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
//                     } hover:bg-gray-500 transition-all`}
//                   >
//                     <td className="text-yellow-400 font-bold">{index + 1}</td>
//                     <td className="font-semibold text-white">
//                       {list.gameTitle}
//                     </td>
//                     <td className="text-gray-300">{list.genre}</td>
//                     <td className="text-gray-300">{list.publishingYear}</td>
//                     <td className="text-yellow-400 font-bold">{list.rating}</td>

//                     <td className="flex items-center justify-center gap-2">
//                       <Link to={`/updateReview/${list._id}`}>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-md flex items-center gap-1 transition-all">
//                           <FaEdit />
//                         </button>
//                       </Link>

//                       <button
//                         onClick={() => handleDelete(list._id)}
//                         className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md flex items-center gap-1 transition-all"
//                       >
//                         <FaTrashAlt />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center text-gray-500">
//                     No reviews found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyReviews;
