import { type FormEvent, type ComponentPropsWithoutRef } from "react";

export type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export default function Form({ children, onSave, ...otherProps }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}
