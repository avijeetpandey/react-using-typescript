import { type FC, type PropsWithChildren } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
};

// use this if the component needs to wrapped , gives children property by default
type CourseGoalPropsWithChildren = PropsWithChildren<CourseGoalProps>;

export default function CourseGoal({
  id,
  title,
  description,
  children,
  onDelete
}: CourseGoalPropsWithChildren) {
  return (
    title &&
    description && (
      <article>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </article>
    )
  );
}

// another way of using the same component
export const CourseGoalArrowFunctionVersion: FC<
  CourseGoalPropsWithChildren
> = ({ title, description, children }) => {
  return (
    title &&
    description && (
      <article>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
        </div>
        <button>Delete</button>
      </article>
    )
  );
};
