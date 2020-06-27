import React from "react";
import Emoji from "./Emoji";
import { StyledEmojiList } from "../styles/StyledEmojiList";

export default function EmojiList({ handleEmoji }) {
  return (
    <StyledEmojiList>
      <Emoji emoji="🐕" name="dog" onClick={() => handleEmoji("dog")} />
      <Emoji emoji="🐈" name="cat" onClick={() => handleEmoji("cat")} />
      <Emoji emoji="🌲" name="nature" onClick={() => handleEmoji("nature")} />
      <Emoji emoji="⚽" name="sport" onClick={() => handleEmoji("sport")} />
      <Emoji emoji="🌙" name="night" onClick={() => handleEmoji("night")} />
      <Emoji emoji="🍄" name="mashroom" onClick={() => handleEmoji("mashroom")} />
      <Emoji emoji="❄️" name="winter" onClick={() => handleEmoji("winter")} />
      <Emoji emoji="🍉" name="fruit" onClick={() => handleEmoji("fruit")} />
      <Emoji emoji="🎸" name="music" onClick={() => handleEmoji("music")} />
      <Emoji emoji="🏡" name="house" onClick={() => handleEmoji("house")} />
      <Emoji emoji="❤️" name="love" onClick={() => handleEmoji("love")} />
      <Emoji emoji="🇯🇵" name="japan" onClick={() => handleEmoji("japan")} />
      <Emoji emoji="📊" name="business" onClick={() => handleEmoji("business")} />
      <Emoji emoji="📖" name="book" onClick={() => handleEmoji("book")} />
    </StyledEmojiList>
  );
}
