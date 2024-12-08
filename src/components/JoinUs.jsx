const JoinUs = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-10">
      <section className="lg:flex items-center justify-between">
        <div className="lg:w-6/12">
          <p className="uppercase font-bold font-oxanium text-white pb-3 md:text-xl text-lg">
            Send Us a Mail
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-oxanium uppercase">
            Join Us As a Super Fans and Get{" "}
            <span className="text-[#9742ff]">all the Benefits</span>
          </h1>
          <p className="text-white font-oxanium pt-4">
            Our success in creating business solutions is due in large part{" "}
            <br />
            <span className="hidden md:block">
              to our talented and highly committed team.
            </span>
          </p>
          <button className="btn mt-3">Join Our Team</button>
        </div>
        <div className="lg:mt-0 mt-10">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-white bg-opacity-10"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-white bg-opacity-10"
            />
          </div>
          <textarea
            className="textarea focus:outline-[#9742ffc9] w-full bg-[#fff] bg-opacity-10 mt-4 mb-4 h-36"
            placeholder="Write your review here"
            name="description"
          ></textarea>
          <button className="btn">Send Massage</button>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
