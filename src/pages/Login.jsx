import { Button, Carousel } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { toast } from 'react-toastify';

const Login = () => {
  const { userLogin, setUser, handleGoogleLogin } = useContext(AuthProvider);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : '/');
        toast.success('Login Success')
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleGoogleLoginN = () => {
    handleGoogleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : '/');
        toast.success('Login Success')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert.error(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    document.title = "Login | Chill Gamer";
  }, []);


  return (
    <div>
      <section className="flex md:flex-row flex-col w-11/12 lg:w-10/12 mx-auto mt-10 p-5 bg-[#0c0c36] rounded-xl bg-opacity-50 backdrop-blur-lg gap-10">
        <div className="md:w-2/4 w-full">
          <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5747.jpg?semt=ais_hybrid"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://4kwallpapers.com/images/wallpapers/republic-of-gamers-asus-rog-cityscape-neon-2048x2048-129.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://img.freepik.com/premium-photo/gaming-desktop-pc-computer-setup-gamer-illustration_691560-5750.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
        <div className="mx-auto flex flex-col justify-center">
          <h1 className="text-4xl text-white font-semibold">
            Welcome Back ! 🎮
          </h1>
          <p className="text-gray-400 pt-5 pb-6">
            Don&apos;t have account?{" "}
            <Link className="text-[#9742ff]" to="/register">
              Register
            </Link>
          </p>
          <form onSubmit={handleLogin} className="text-white">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-[#fff] bg-opacity-10 mt-4"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="At least 6 characters"
                className="input input-bordered focus:outline-[#9742ffc9] w-full border-none bg-[#fff] bg-opacity-10 mt-4"
                required
              />
              <button
                type="button"
                className="absolute top-[50%] left-[90%] "
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? (
                  <BsEyeFill></BsEyeFill>
                ) : (
                  <BsEyeSlashFill></BsEyeSlashFill>
                )}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm pt-2">{error}</p>}
            <div className="form-control mt-5">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
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
            <button className="btn w-full mt-6">Log In</button>
            <div className="divider text-gray-400 divider-neutral py-3">
              Or login with
            </div>
            <div className="flex gap-5">
              <Button
                onClick={handleGoogleLoginN}
                variant="outlined"
                fullWidth
                className="focus:ring-0 text-white font-normal border-gray-600 flex items-center justify-center gap-2 normal-case text-base"
              >
                <FcGoogle /> Google
              </Button>
              <Button
                variant="outlined"
                fullWidth
                className="focus:ring-0 text-white font-normal border-gray-600 flex items-center justify-center gap-2 normal-case text-base"
              >
                <VscGithubInverted /> Github
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
