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

// Another way of doing it

export type ButtonPropsV2 = {
  href?: never;
} & ComponentPropsWithoutRef<"button">;

export type AnchorPropsV2 = { href?: string } & ComponentPropsWithoutRef<"a">;

// creating a type predicate
function isAnchorProps(
  props: ButtonPropsV2 | AnchorPropsV2
): props is AnchorPropsV2 {
  return "href" in props;
}

export function ButtonV2(props: AnchorPropsV2 | ButtonPropsV2) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
