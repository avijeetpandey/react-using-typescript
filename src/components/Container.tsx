import {
  ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode
} from "react";

// Creating a polymorphic component
export type ContainerProps = {
  as: ElementType;
  children: ReactNode;
};

// destructuring `as` as Component
export default function Container({ as: Component, children }: ContainerProps) {
  return <Component>{children}</Component>;
}

// another way of doing making it a generic one
export type ContainerPropsV2<T extends ElementType> = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function ContainerV2<C extends ElementType>({
  as: Component,
  children,
  ...props
}: ContainerPropsV2<C>) {
  return <Component {...props}>{children}</Component>;
}
