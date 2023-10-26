type CourseGoalProps = {
  title: string;
  description: string;
};

export default function CourseGoal({ title, description }: CourseGoalProps) {
  return (
    title &&
    description && (
      <article>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button>Delete</button>
      </article>
    )
  );
}
