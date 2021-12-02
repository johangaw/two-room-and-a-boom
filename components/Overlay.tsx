import { FC, MouseEventHandler, useRef } from "react";

interface OverlayProps {}

export const Overlay: FC<OverlayProps> = ({ children }) => {
  const initialYRef = useRef(0);
  const draggingRef = useRef(false);

  const onDragStart: MouseEventHandler<HTMLDivElement> = (ev) => {
    initialYRef.current = ev.clientY;
    draggingRef.current = true;
    (ev.target as HTMLDivElement).style.transform = "";
    (ev.target as HTMLDivElement).style.transition = "";
  };

  const onDrag: MouseEventHandler<HTMLDivElement> = (ev) => {
    if (!draggingRef.current) return;
    (ev.target as HTMLDivElement).style.transform = `translateY(${
      ev.clientY - initialYRef.current
    }px)`;
  };

  const onDragStop: MouseEventHandler<HTMLDivElement> = (ev) => {
    draggingRef.current = false;
    (ev.target as HTMLDivElement).style.transform = "translateY(0px)";
    (ev.target as HTMLDivElement).style.transition = "all ease 0.5s";
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          backgroundColor: "aqua",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
      <div
        onMouseDown={onDragStart}
        onMouseMove={onDrag}
        onMouseUp={onDragStop}
        onMouseLeave={onDragStop}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          backgroundColor: "gray",
        }}
      ></div>
    </div>
  );
};
