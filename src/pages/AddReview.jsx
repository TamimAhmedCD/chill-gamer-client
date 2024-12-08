import { useContext, useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
  const { user } = useContext(AuthProvider);
  const navigate = useNavigate();

  const handleReview = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const gameName = form.get("gameName");
    const description = form.get("description");
    const rating = form.get("rating");
    const publishYear = form.get("publishYear");
    const option = form.get("option");
    const newReview = {
      name,
      email,
      photo,
      gameName,
      description,
      rating,
      publishYear,
      option,
    };
    console.log(newReview);

    // send data to the server
    fetch('https://server-one-jade.vercel.app/reviews', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'Your review added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
      navigate('/my-review')
    })
  };

  useEffect(() => {
    document.title = "Add Review | Chill Gamer";
  }, []);


  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="py-10">
        <div className="border bg-white backdrop-blur-3xl bg-opacity-5 text-white p-5 md:p-10 rounded-xl border-[#9742ff]">
          <h1 className="text-center font-bold text-3xl">Add a New Review</h1>
          <form className="text-white mt-10" onSubmit={handleReview}>
            <div className="flex gap-4 w-full">
              <input
                type="text"
                readOnly
                name="name"
                defaultValue={user.displayName}
                className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-white cursor-not-allowed bg-opacity-10"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                readOnly
                defaultValue={user.email}
                className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-white bg-opacity-10 cursor-not-allowed"
              />
            </div>
            <input
              type="text"
              placeholder="Game cover img URL"
              name="photo"
              required
              className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-[#fff] bg-opacity-10 mt-4"
            />
            <input
              type="text"
              placeholder="Game Title"
              required
              name="gameName"
              className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-[#fff] bg-opacity-10 mt-4"
            />
            <textarea
              className="textarea focus:outline-[#9742ffc9] w-full bg-[#fff] bg-opacity-10 mt-4 mb-4 h-36"
              placeholder="Write your review here"
              name="description"
            ></textarea>
            <div className="flex gap-4 w-full">
              <input
                type="text"
                placeholder="Rating"
                required
                name="rating"
                className="input focus:outline-[#9742ffc9] w-full bg-[#fff] bg-opacity-10 mb-4"
              />
              <input
                type="text"
                required
                placeholder="Publishing year"
                name="publishYear"
                className="input focus:outline-[#9742ffc9] w-full bg-[#fff] bg-opacity-10 mb-4"
              />
            </div>
            <select
              name="option"
              required
              className="select select-bordered w-full focus:outline-[#9742ffc9] g-[#fff] bg-opacity-10"
            >
              <option disabled selected>
                Select Genre
              </option>
              <option>Action</option>
              <option>RPG</option>
              <option>Adventure</option>
              <option>Puzzle</option>
              <option>Horror</option>
              <option>Strategy</option>
              <option>Shooter</option>
            </select>
            <div className="form-control mt-2">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="checkbox [--chkbg:theme(colors.white)] [--chkfg:black]"
                />
                <span className="label-text text-gray-400">
                  I agree to the{" "}
                  <span className="text-[#9742ff] border-b border-[#9742ff]">
                    Terms & Conditions
                  </span>
                </span>
              </label>
            </div>
            <button className="btn w-full mt-6">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
