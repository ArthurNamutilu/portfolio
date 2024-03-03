const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl=4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
          <div className="sm:text-4xl font-bold">
            <p>Hi, I'm Arthur, nice to meet you have a look around</p>
          </div>
          <div>
            <p>
              As a perpetual learner, I stay ahead in the dynamic landscape of
              web development, embracing emerging technologies and best
              practices. Whether it's collaborating with cross-functional teams,
              architecting scalable applications, or troubleshooting intricate
              issues, I am dedicated to delivering solutions that not only meet
              but exceed expectations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
