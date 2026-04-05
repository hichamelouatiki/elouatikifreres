import { Fragment } from "react";

const AMPERSAND_SEP = " & ";

/**
 * Space Grotesk dessine « & » avec un glyphe très calligraphique ; on le remplace visuellement
 * par Inter (géométrique) tout en héritant du graisse du parent.
 */
export function NeutralAmpersandText({ text }: { text: string }) {
  if (!text.includes(AMPERSAND_SEP)) {
    return <>{text}</>;
  }
  const parts = text.split(AMPERSAND_SEP);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={`${i}-${part.slice(0, 16)}`}>
          {i > 0 ? (
            <span className="font-[family-name:var(--font-inter)] not-italic [font-weight:inherit]">
              {" & "}
            </span>
          ) : null}
          {part}
        </Fragment>
      ))}
    </>
  );
}

export function textHasAmpersandJoin(text: string): boolean {
  return text.includes(AMPERSAND_SEP);
}
