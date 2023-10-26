import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
};

function App() {
  // can be useState<Array<CourseGoal>
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGoal() {
    setGoals((previousGoals) => {
      const newGoal: CourseGoalProps = {
        title: "Learn React + TS2",
        description: "Learn from the ground up two",
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
      <Header image={{ src: goalsImage, altText: "alt" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
