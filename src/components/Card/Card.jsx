import { ProfileEducation } from "../ProfileEducation";
import { ProfileExperience } from "../ProfileExperience";

export const Card = () => {
  return (
    <div className="border border-3 border-slate-300 rounded-lg shadow-xl p-5">
      <div className="flex flex-row p-2 gap-2">
        <p className="font-semibold">James Hiddlestone</p>
        <p>Phone</p>
        <p>Email</p>
        <div className="h-auto w-0 border border-r"></div>
        <p>Linkedin</p>
      </div>
      <div className="flex flex-row p-2 gap-2">
        <p>Machine Learning Engineer</p>
        <p className="text-gray-500">San francisco Bay Area</p>
      </div>
      <div className="border-1 border-b"></div>
      <div className="flex flex-row p-2 gap-2">
        <p>Experience</p>
        <div className="flex flex-col">
          <ProfileExperience />
          <ProfileExperience />
        </div>
      </div>
      <div className="flex flex-row p-2 gap-2">
        <p>Education</p>
        <div className="flex flex-col">
          <ProfileEducation />
          <ProfileEducation />
        </div>
      </div>
    </div>
  );
};
