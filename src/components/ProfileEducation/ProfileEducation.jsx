import PropTypes from "prop-types";
export const ProfileEducation = ({ education, isLastItem }) => {
  return (
    <div className="flex flex-row items-center gap-2 relative">
      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      {!isLastItem && (
        <div className="absolute top-[20px] mt-0 left-[0.15rem] w-px h-[0.5rem] border border-r bg-gray-200"></div>
      )}
      <p>Logo</p>
      <div className="w-52 overflow-hidden">
        <p className="truncate">{education}</p>
      </div>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.string,
  isLastItem: PropTypes.bool,
};
