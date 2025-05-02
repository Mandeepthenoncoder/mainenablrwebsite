import SolutionsHeading from "./SolutionsHeading";
import SolutionsTab from "./SolutionsTab";

const SolutionsContent = () => {
  return (
    <div className="py-2 md:py-6">
      <div className="w-full px-1 sm:px-2 md:container md:mx-auto md:px-4">
        <SolutionsHeading />
        <SolutionsTab />
      </div>
    </div>
  );
};

export default SolutionsContent;
