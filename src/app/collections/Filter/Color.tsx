import { Accordion } from "./Accordion";

export const Color = () => {
  return (
    <Accordion
      title="Color"
      content={
        <div className="px-1 flex items-center flex-wrap gap-2.5">
          <button
            style={{ background: "oklch(64.6% 0.222 41.116)" }}
            className="ring ring-offset-2 ring-neutral-300 size-6 rounded-full"
          ></button>
          <button
            style={{ background: "oklch(91% 0.096 180.426)" }}
            className="ring ring-offset-2 ring-neutral-300 size-6 rounded-full"
          ></button>
          <button
            style={{ background: "oklch(76.8% 0.233 130.85)" }}
            className="ring ring-offset-2 ring-neutral-300 size-6 rounded-full"
          ></button>
          <button
            style={{ background: "oklch(70.9% 0.01 56.259)" }}
            className="ring ring-offset-2 ring-neutral-300 size-6 rounded-full"
          ></button>
          <button
            style={{ background: "oklch(55.2% 0.016 285.938)" }}
            className="ring ring-offset-2 ring-neutral-300 size-6 rounded-full"
          ></button>
          <button
            style={{ background: "oklch(26.8% 0.007 34.298)" }}
            className="ring ring-offset-2 ring-neutral-300 size-6 rounded-full"
          ></button>
        </div>
      }
    />
  );
};
