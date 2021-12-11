import { FC, ReactNode, useRef } from "react";
import { centerCenter } from "./css";

interface OverlayProps {
  cover: ReactNode;
}

export const Overlay: FC<OverlayProps> = ({ children, cover }) => {
  const initialYRef = useRef(0);
  const draggingRef = useRef(false);
  const coverRef = useRef<HTMLDivElement>(null);

  const onDragStart = (initialYOffset: number) => {
    initialYRef.current = initialYOffset;
    draggingRef.current = true;
    coverRef.current!.style.transform = "";
    coverRef.current!.style.transition = "";
  };

  const onDrag = (offsetY: number) => {
    if (!draggingRef.current) return;
    coverRef.current!.style.transform = `translateY(${
      offsetY - initialYRef.current
    }px)`;
  };

  const onDragStop = () => {
    draggingRef.current = false;
    coverRef.current!.style.transform = "translateY(0px)";
    coverRef.current!.style.transition = "all ease 0.5s";
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
        ref={coverRef}
        onMouseDown={(ev) => onDragStart(ev.clientY)}
        onMouseMove={(ev) => onDrag(ev.clientY)}
        onMouseUp={onDragStop}
        onMouseLeave={onDragStop}
        onTouchStart={(ev) => onDragStart(ev.touches.item(0).clientY)}
        onTouchMove={(ev) => onDrag(ev.touches.item(0).clientY)}
        onTouchEnd={onDragStop}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          backgroundColor: "gray",
          ...centerCenter,
        }}
      >
        {cover}
      </div>
    </div>
  );
};
