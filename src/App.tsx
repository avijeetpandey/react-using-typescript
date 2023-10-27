import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import Input from "./components/Input";
import { Button } from "./components/Button";

export type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
};

function App() {
  // can be useState<Array<CourseGoal>
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((previousGoals) => {
      const newGoal: CourseGoalProps = {
        title: goal,
        description: summary,
        id: Math.random()
      };
      return [...previousGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((previousGoals) => previousGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Input label="Your name" id="name" />
      <Input label="Your age" id="age" />
      <p>
        <Button el="anchor" href="https://google.com">
          A Link
        </Button>
        <Button el="button">A button</Button>
      </p>
      <Header image={{ src: goalsImage, altText: "alt" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
