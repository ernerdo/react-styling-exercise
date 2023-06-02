import { ProfileEducation } from "../ProfileEducation";
import { ProfileExperience } from "../ProfileExperience";
import personPropTypes from "../../types/person";
import PropTypes from "prop-types";

export const Card = ({ person }) => {
  return (
    <div className="border border-3 border-slate-300 rounded-lg shadow-xl p-5">
      <div className="flex flex-row p-2 gap-2">
        <p className=" italic font-semibold text-lg">{person.name}</p>
        <p>Phone</p>
        <p>Email</p>
        <div className="h-auto w-0 border border-r"></div>
        <p>Linkedin</p>
      </div>
      <div className="flex flex-row p-2 gap-2 items-center">
        <p>{person.current_title}</p>
        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        <p className="text-gray-500">{person.location}</p>
      </div>
      <div className="border-1 border-b mb-2"></div>
      <div className="flex flex-row p-2 gap-2">
        <div className="w-28">
          <p className="italic font-medium text-left">Experience</p>
        </div>
        <div className="flex flex-col">
          {person.experience &&
            person.experience.map((experience, index) => {
              return (
                <ProfileExperience
                  experience={experience}
                  key={index}
                  isLastItem={index === person.experience.length - 1}
                />
              );
            })}
        </div>
      </div>
      <div className="flex flex-row p-2 gap-2">
        <div className="w-28">
          <p className="italic font-medium text-left">Education</p>
        </div>
        <div className="flex flex-col">
          {person.education &&
            person.education.map((education, index) => {
              return (
                <ProfileEducation
                  education={education}
                  key={index}
                  isLastItem={index === person.education.length - 1}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  person: PropTypes.shape(personPropTypes).isRequired,
};
