import { type ReactNode } from "react";
import { CourseGoalProps } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBoxProps";

export type CourseGoalListProps = {
  goals: CourseGoalProps[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDelete
}: CourseGoalListProps) {
  let warningBox: ReactNode;
  if (goals.length === 0) {
    return <InfoBox mode="hint">You are not having any goals yet</InfoBox>;
  }

  if (goals.length >= 2) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You are having too much goals , dont put so much on your plate
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
}
