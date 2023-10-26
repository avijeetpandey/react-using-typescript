import { type ReactNode } from "react";

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type InfoBoxProps = WarningBoxProps | HintBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2></h2>
      <p>{children}</p>
    </aside>
  );
}
