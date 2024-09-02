//TYPES

interface ToolIconProps {
  name: string;
  className?: string;
}

//COMPONENT

const ToolIcon: React.FC<ToolIconProps> = ({ name, className }) => {
  const toolsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Wordpress",
    "Figma",
    "Photoshop",
    "Illustrator",
    "Substance",
    "Maya",
    "Blender",
    "Unity",
  ];

  const icon = toolsList.find((tool) => tool === name) || "Tool";

  const file = icon.toLowerCase().split(" ").join("-");

  return <img className={className} src={`/${file}.svg`} alt={name} />;
};

export default ToolIcon;
