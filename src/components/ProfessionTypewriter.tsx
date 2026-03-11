import { SITE, COLORS } from "@/config";
import { useState, useEffect } from "react";

const TYPE_SPEED  = 60;
const DELETE_SPEED = 35;
const HOLD_AFTER_TYPE   = 1800;
const HOLD_AFTER_DELETE = 400;

export default function ProfessionTypewriter() {
  const [index, setIndex]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase]   = useState<"typing" | "holding" | "deleting" | "waiting">("typing");

  const current = SITE.display[index];

  const getColor = (colorType: string) => {
    return colorType === "primary" ? COLORS.primary : COLORS.secondary;
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.text.length) {
        timer = setTimeout(() => setDisplayed(current.text.slice(0, displayed.length + 1)), TYPE_SPEED);
      } else {
        timer = setTimeout(() => setPhase("holding"), HOLD_AFTER_TYPE);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETE_SPEED);
      } else {
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % SITE.display.length);
          setPhase("typing");
        }, HOLD_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timer);
  }, [phase, displayed, current]);

  return (
    <p className="text-sm text-n500 dark:text-n200 h-5">
      Développeur {" "}
      <span style={{ color: getColor(current.color), fontWeight: 600 }}>
        {displayed}
      </span>
      <span
        style={{ color: getColor(current.color) }}
        className="inline-block w-0.5 h-3.5 ml-0.5 align-middle animate-pulse bg-current"
      />
    </p>
  );
}
