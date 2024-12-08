const WatchStreaming = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-10">
      <p className="uppercase font-bold font-oxanium text-white text-center pb-3 md:text-xl text-lg">
        Watch the Gameplay
      </p>
      <h1 className="text-4xl md:text-5xl text-center font-bold text-white font-oxanium">
        Highest Rated <span className="text-[#9742ff]">Games</span>
      </h1>
      <p className="text-white font-oxanium text-center pt-4 md:w-3/6 w-5/6 mx-auto">
        Our success in creating business solutions is due in large part <br />
        <span className="hidden md:block">to our talented and highly committed team.</span>
      </p>
      <div className="p-4 border border-[#9742ff] bg-white bg-opacity-10 backdrop-blur-3xl rounded-xl mt-5">
        <a href="www.youtube.com" target="_blank">
          {" "}
          <img
            className="w-full rounded-xl"
            src="https://w0.peakpx.com/wallpaper/387/706/HD-wallpaper-bgmi-thumbnail-ideas-in-2022-computer-gaming-room-thumbnail-design-for-mobile.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default WatchStreaming;
