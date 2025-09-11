import { FlickeringGrid } from "../magicui/flickering-grid";

export function FlickeringGridRoundedDemo() {
  return (
    <div className="absolute size-[600px] bottom-0 right-[100px] overflow-hidden rounded-l-2xl">
      <FlickeringGrid
        className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#000"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
    </div>
  );
}
