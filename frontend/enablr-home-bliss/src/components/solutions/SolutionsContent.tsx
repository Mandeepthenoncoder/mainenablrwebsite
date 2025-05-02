import SolutionsHeading from "./SolutionsHeading";
import SolutionsTab from "./SolutionsTab";

const SolutionsContent = () => {
  return (
    <div className="py-2 md:py-6">
      <div className="container mx-auto px-4">
        <SolutionsHeading />
        <SolutionsTab />
      </div>
    </div>
  );
};

export default SolutionsContent;
