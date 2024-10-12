import NavBar from "./navBar";
function Hero() {
  return (
    <div className="h-screen bg-cyan-800 w-full">
      <NavBar />

      <div className="p-4 w-[500px] flex flex-col items-start justify-center ml-10 h-[60%] mt-2">
        <h3 className="text-gray-400 font-bold text-3xl mb-4 ">I'm a</h3>
        <h1 className="text-white font-bold text-8xl">
          FRONTEND WEB DEVELOPER
        </h1>
        <button className="mt-8 bg-gradient-to-r from-blue-400 to-blue-800 rounded-md px-6 py-3 text-white md:text-xl">
          Previous Projects
        </button>
      </div>
    </div>
  );
}

export default Hero;
