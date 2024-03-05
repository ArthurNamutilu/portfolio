import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className=" text-green-600 ">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Arthur Namutilu
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am passionate and results-driven software developer specializing in
          front-end development. With a strong foundation in computer science
          and a keen eye for detail, I thrive on crafting elegant and efficient
          solutions to complex problems.
        </p>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-green-500"
          >
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
          {/* <button className="text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-green-500  ">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
