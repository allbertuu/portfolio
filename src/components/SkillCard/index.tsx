import {
  Description,
  ExperienceTime,
  IconWrapper,
  Separator,
  Text,
  Title,
  Wrapper,
} from "./styles";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { colors } from "../../styles/colors";
import { useState } from "react";

type SkillCardProps = {
  name: string;
  description: string;
  IconSVG: JSX.Element;
  yearsExperience: number;
  colorOnFocus: string;
};

export default function SkillCard({
  name,
  description,
  IconSVG,
  yearsExperience,
  colorOnFocus,
}: SkillCardProps) {
  const [clicked, setClicked] = useState(false);

  const skillCard = document.getElementById(`skill-${name}`);
  skillCard?.addEventListener("focus", () => setClicked(true));

  return (
    <Wrapper
      id={`skill-${name}`}
      className="intervalCardRevealSmall"
      colorOnFocus={colorOnFocus}
    >
      {!clicked && (
        <TouchAppIcon
          className="absolute top-4 right-2 animate-bounce"
          style={{ color: `${colors.primary}` }}
        />
      )}

      <IconWrapper>{IconSVG}</IconWrapper>
      <Separator></Separator>
      <Description>
        <Title>{name}</Title>
        <ExperienceTime>
          Tempo de experiência: {yearsExperience} ano
          {yearsExperience > 1 ? "s" : ""}
        </ExperienceTime>
        <Text>{description}</Text>
      </Description>
    </Wrapper>
  );
}
