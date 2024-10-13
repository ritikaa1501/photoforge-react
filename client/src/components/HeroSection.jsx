import { TbPhotoSearch } from "react-icons/tb";

const HeroSection = () => {
  return (
    <div className="sm:w-[60vw] h-[30vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center ">
      <form className="absolute flex justify-center items-center">
      <input
          type="search"
          id="search"
          name="search"
          className="py-5 px-3 w-[80vw] text-xl sm:text-3xl mx-auto outline-none border-b-2 bg-bgcolor rounded-2xl"
          placeholder="Search your asset..."
        />
        <TbPhotoSearch className="text-3xl sm:text-5xl text-gray-400 -ml-20" />
      </form>
      
    </div>
  );
};

export default HeroSection;