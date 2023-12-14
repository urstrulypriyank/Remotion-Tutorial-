import Image from "next/image";
import { Player } from "@remotion/player";
import { MyComposition } from "@/remotion/Composition";
export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col justify-center items-center border border-orange-500">
      <h2>Demo NextJS App</h2>
      <Player
        component={MyComposition}
        durationInFrames={120}
        compositionWidth={1280}
        compositionHeight={1080}
        fps={30}
        style={{
          height: "10vh",
          width: "10vw",
          display: "flex",
          // fontSize: 120,
        }}
        className=" text-blue-700 m-0 p-0 inline-block"
        autoPlay
      />
    </main>
  );
}
