"use client";
import { AbsoluteFill, useCurrentFrame } from "remotion";
export const MyComposition = () => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid red",
      }}
      className="inline-flex text-blue-500 text-6xl "
    >
      The current frame is {frame}.
    </div>
  );
};
