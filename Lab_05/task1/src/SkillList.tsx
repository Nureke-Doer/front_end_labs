import type { Skill } from './types';

interface SkillListProps {
  skills: Skill[];
}

export const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id} style={{ color: skill.level === 'Expert' ? 'red' : skill.level === 'Intermediate' ? 'orange' : 'green' }}>
          {skill.name} - {skill.level}
        </li>
      ))}
    </ul>
  );
};