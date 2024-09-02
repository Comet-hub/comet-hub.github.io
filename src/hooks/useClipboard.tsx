import { useState } from "react";

export const useClipboard = () => {
  const [clipboardState, setClipboardState] = useState("pending");

  const copy = async (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setClipboardState("success");
        setTimeout(() => setClipboardState("pending"), 1000);
      })
      .catch(() => {
        setClipboardState("error");
        setTimeout(() => setClipboardState("pending"), 1000);
      });
  };

  return { clipboardState, copy };
};
