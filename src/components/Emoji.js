import React from "react";
import { StyledEmoji } from "../styles/StyledEmoji";

export default function EmojiButton({ emoji, name, onClick }) {
  return (
    <StyledEmoji onClick={onClick} role="img" aria-label={name}>
      {emoji}
    </StyledEmoji>
  );
}
