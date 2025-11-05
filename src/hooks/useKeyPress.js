import { useEffect } from "react";

/**
 * useKeyPress("Escape", handler) 
 * useKeyPress(["Escape", "Enter"], handler)
 */
export function useKeyPress(targetKeys, handler, deps = []) {
  useEffect(() => {
    const keys = Array.isArray(targetKeys) ? targetKeys : [targetKeys];

    function onKeyDown(e) {
      if (keys.includes(e.key)) handler(e);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // caller controls deps (e.g., [handler])
}
