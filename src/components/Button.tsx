import { type ComponentPropsWithoutRef } from "react";

export type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

export type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

export function Button(props: AnchorProps | ButtonProps) {
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
