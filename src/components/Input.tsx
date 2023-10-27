import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}

// creating the same input component with refs using react's way
export const InputWithForwardRef = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, id, ...props }, ref) {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} />
      </p>
    );
  }
);
