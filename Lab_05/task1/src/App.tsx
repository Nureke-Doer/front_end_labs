import { UserCard } from './UserCard';
import { SkillList } from './SkillList';
import type { User, Skill } from './types';

const App = () => {
  const sampleUser: User = {
    name: "Alice",
    email: "alice@mail.com",
    age: 25
  };

  const sampleSkills: Skill[] = [
    { id: 1, name: "React", level: "Beginner" },
    { id: 2, name: "TypeScript", level: "Intermediate" }
  ];

  return (
    <div>
      <UserCard user={sampleUser}>
        <p>Student Bio section</p>
      </UserCard>
      <SkillList skills={sampleSkills} />
    </div>
  );
};

export default App;