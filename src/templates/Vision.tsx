import { Section } from "../layout/Section";

const Vision = () => {
  return (
    <Section title="Vision" description="What we aim for" >
      <div className="flex flex-col md:flex-row items-center h-max">
        <div className="flex flex-col items-center justify-center h-auto pb-8 md:pb-0 md:h-96">
          <p className="flex px-6 text-lg text-gray-900 text-center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla, libero vel aliquam tincidunt, augue velit aliquam leo, ut
            aliquam felis nisl et sapien. Sed euismod, orci sit amet lacinia
         
            nisl lacus eget augue. Donec eget ligula a mi lacinia aliquam."
         
          </p>
        </div>
        <div className="bg-gray-400 w-full max-w-md flex-shrink-0 rounded-md h-96">
          
        </div>
      </div>
    </Section>
  );
};

export default Vision;