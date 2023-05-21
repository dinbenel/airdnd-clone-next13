"use client";
import { useEffect, useRef } from "react";

export const useClickAwayLisiner = (handler: () => void) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const evLisiner = (ev: globalThis.MouseEvent) => {
      ev.stopPropagation();
      if (!domRef?.current?.contains(ev.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", evLisiner);
    return () => document.removeEventListener("mousedown", evLisiner);
  }, []);
  return domRef;
};
