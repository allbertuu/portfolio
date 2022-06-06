import SkillCardIcon from "../SkillCardIcon";

type SkillCardProps = {
  name: string,
  description: string,
  yearsExperience: number,
  iconPath: string,
  iconViewBox: string,
  colorOnHover: string,
};

export default function SkillCard({ name, description, yearsExperience, iconPath, iconViewBox, colorOnHover }: SkillCardProps) {

  const toggleCardColor = () => {
    const cardIcon = document.getElementById(name);
    const card = document.getElementById(`c-skill-card-${name}`);

    if (!card || !cardIcon) {
      return;
    }

    if (card.style.borderColor === colorOnHover) {
      card.style.borderColor = '#da0941';
    }
    else {
      card.style.borderColor = colorOnHover;
    }

    const cardIconFillValue = cardIcon.attributes.getNamedItem('fill')?.value;
    if (cardIconFillValue === colorOnHover) {
      cardIcon.setAttribute("fill", "rgb(218, 9, 65)");
    }
    else {
      cardIcon.setAttribute("fill", colorOnHover);
    }
  }

  return (
    <div id={`c-skill-card-${name}`} className="intervalCardReveal c-skill-card flex flex-col sm:flex-row p-5 gap-4" onMouseOver={toggleCardColor} onMouseOut={toggleCardColor}>
      <div className="flex justify-center items-center sm:w-16">
        <SkillCardIcon id={name} path={iconPath} viewBox={iconViewBox}/>
      </div>
      <span className="separator"></span>
      <div className="flex flex-col gap-1 items-center sm:items-start">
        <h2>{name}</h2>
        <small>Tempo de experiência: {yearsExperience} ano{yearsExperience > 1 ? 's' : ''}</small>
        <p>{description}</p>
      </div>
    </div>
  );
}