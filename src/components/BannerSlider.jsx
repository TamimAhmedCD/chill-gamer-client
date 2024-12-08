import { Button, Carousel, Typography } from "@material-tailwind/react";
import { Typewriter } from "react-simple-typewriter";


const BannerSlider = () => {
  return (
    <div className="">
      <Carousel className="">
        <div className="relative w-full flex">
          <img
            src="https://wallpapersmug.com/download/1366x768/b455a3/pc-gaming-honor-of-kings.jpg"
            alt="image 1"
            className="lg:h-[90vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex h-ful w-full bg-[#1a0d2196]">
            <div className="lg:w-10/12 w-11/12 mx-auto lg:mt-20 mt-3 flex flex-col justify-center">
              <Typography
                variant="h1"
                color="white"
                className="lg:mb-3 text-2xl md:text-4xl lg:text-6xl font-oxanium"
              >
                BEAUTIFUL GAME,
                <br />{" "}
                <Typewriter
                  words={[
                    "INTENSE REALITY",
                    "VIVID REALITY",
                    "DYNAMIC REALITY",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-3 opacity-80 w-3/4 md:w-2/4 text-base md:text-xl"
              >
                
              </Typography>
              <div className="flex gap-2 lg:mt-10">
                <Button className="btn">Explore</Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex">
          <img
            src="https://w0.peakpx.com/wallpaper/124/354/HD-wallpaper-garena-fire-bunny-fire.jpg"
            alt="image 1"
            className="lg:h-[90vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex h-ful w-full bg-[#1a0d2196]">
            <div className="lg:w-10/12 w-11/12 mx-auto lg:mt-20 mt-3 flex flex-col justify-center">
              <Typography
                variant="h1"
                color="white"
                className="lg:mb-3 text-2xl md:text-4xl lg:text-6xl font-oxanium"
              >
                BEAUTIFUL GAME,
                <br />{" "}
                <Typewriter
                  words={[
                    "INTENSE REALITY",
                    "VIVID REALITY",
                    "DYNAMIC REALITY",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-3 opacity-80 w-3/4 md:w-2/4 text-base md:text-xl"
              >
                Review games, manage your watchlist, and elevate your gaming
                experience—all in one place! 🎮
              </Typography>
              <div className="flex gap-2 lg:mt-10">
                <Button className="btn">Explore</Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex">
          <img
            src="https://wallpapersmug.com/download/1366x768/b9ef84/beautiful-akali-league-of-legends.jpg"
            alt="image 1"
            className="lg:h-[90vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex h-ful w-full bg-[#1a0d2196]">
            <div className="lg:w-10/12 w-11/12 mx-auto lg:mt-20 mt-3 flex flex-col justify-center">
              <Typography
                variant="h1"
                color="white"
                className="lg:mb-3 text-2xl md:text-4xl lg:text-6xl font-oxanium"
              >
                BEAUTIFUL GAME,
                <br />{" "}
                <Typewriter
                  words={[
                    "INTENSE REALITY",
                    "VIVID REALITY",
                    "DYNAMIC REALITY",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-3 opacity-80 w-3/4 md:w-2/4 text-base md:text-xl"
              >
                Review games, manage your watchlist, and elevate your gaming
                experience—all in one place! 🎮
              </Typography>
              <div className="flex gap-2 lg:mt-10">
                <Button className="btn">Explore</Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
