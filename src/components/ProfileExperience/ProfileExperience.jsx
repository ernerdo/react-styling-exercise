import PropTypes from "prop-types";
export const ProfileExperience = ({ experience, isLastItem }) => {
  return (
    <div className="flex flex-row items-center gap-2 relative">
      <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
      {!isLastItem && (
        <div className="absolute top-[20px] mt-0 left-[0.15rem] w-px h-[0.5rem] border border-r bg-gray-200"></div>
      )}
      <div className="w-5 h-5 rounded-full overflow-hidden">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/694/171/non_2x/letter-c-minimalist-art-monogram-hexogen-shape-logo-white-color-on-black-background-free-vector.jpg"
          alt="Logo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-56 overflow-hidden">
        <p className="truncate">{experience}</p>
      </div>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.string,
  isLastItem: PropTypes.bool,
};
