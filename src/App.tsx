import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import Form from "./components/Form";
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

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="name" type="text" id="name" />
        <Input label="age" type="number" id="age" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
      <Header image={{ src: goalsImage, altText: "alt" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
