import { Fragment } from "react";

/** Renders text from the config, turning "\n" into line breaks (hidden on small screens if `desktopOnly`). */
export default function Lines({ text, desktopOnly = false }: { text: string; desktopOnly?: boolean }) {
  const parts = text.split("\n");
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {p}
          {i < parts.length - 1 && (desktopOnly ? <><br className="hidden sm:block" /><span className="sm:hidden"> </span></> : <br />)}
        </Fragment>
      ))}
    </>
  );
}
