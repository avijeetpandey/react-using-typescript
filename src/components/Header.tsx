import { type ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    altText: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    image && (
      <header>
        <img {...image} />
        {children}
      </header>
    )
  );
}
