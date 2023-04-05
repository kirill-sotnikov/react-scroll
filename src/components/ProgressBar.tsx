import { useEffect, useState } from "react";

export const ProgressBar = ({ progress }: { progress: number }) => {
  const [heightWidth, setHeightWidth] = useState(0);

  useEffect(() => {
    document.body.style.margin = "0";
    setHeightWidth(document.body.scrollHeight - window.innerHeight);
    console.log();
  }, []);

  if (heightWidth === 0) {
    return null;
  }

  return (
    <div
      style={{
        width:
          (progress / heightWidth) * 100 > 100
            ? "100%"
            : (progress / heightWidth) * 100 + "%",
        height: 20,
        top: 0,
        left: 0,
        position: "fixed",
        backgroundColor: "blue",
      }}
    >
      {(progress / heightWidth) * 100 > 100
        ? "100%"
        : Math.round((progress / heightWidth) * 100) + "%"}
    </div>
  );
};
