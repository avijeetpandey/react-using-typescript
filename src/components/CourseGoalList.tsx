import { CourseGoalProps } from "../App";
import CourseGoal from "./CourseGoal";

export type CourseGoalListProps = {
  goals: CourseGoalProps[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDelete
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map(({ id, title, description }: CourseGoalProps) => {
        return (
          <li key={id}>
            <CourseGoal
              id={id}
              title={title}
              description={description}
              key={title}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}
