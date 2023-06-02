import { ProfileEducation } from "../ProfileEducation";
import { ProfileExperience } from "../ProfileExperience";

export const Card = () => {
  return (
    <div className="border border-3 border-slate-300 rounded-lg shadow-xl p-5">
      <div className="flex flex-row p-2 gap-2">
        <p className=" italic font-semibold text-lg">James Hiddlestone</p>
        <p>Phone</p>
        <p>Email</p>
        <div className="h-auto w-0 border border-r"></div>
        <p>Linkedin</p>
      </div>
      <div className="flex flex-row p-2 gap-2 items-center">
        <p>Machine Learning Engineer</p>
        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        <p className="text-gray-500">San francisco Bay Area</p>
      </div>
      <div className="border-1 border-b mb-2"></div>
      <div className="flex flex-row p-2 gap-2">
        <div className="w-28">
          <p className="italic font-medium text-left">Experience</p>
        </div>
        <div className="flex flex-col">
          <ProfileExperience />
          <ProfileExperience />
        </div>
      </div>
      <div className="flex flex-row p-2 gap-2">
        <div className="w-28">
          <p className="italic font-medium text-left">Education</p>
        </div>
        <div className="flex flex-col">
          <ProfileEducation />
          <ProfileEducation />
        </div>
      </div>
    </div>
  );
};
