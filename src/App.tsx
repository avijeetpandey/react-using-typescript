import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImage, altText: "alt" }}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoal
        title="Learn React + TS"
        description="Learn from the ground up"
      />
    </main>
  );
}

export default App;
