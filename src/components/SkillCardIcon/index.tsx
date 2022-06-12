type SkillCardIconProps = {
  id: string;
  path: string;
  viewBox: string;
};

export default function SkillCardIcon({
  id,
  path,
  viewBox,
}: SkillCardIconProps) {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(218, 9, 65)"
      viewBox={viewBox}
    >
      <path d={path} />
    </svg>
  );
}
