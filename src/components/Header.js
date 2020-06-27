import React from "react";
import { ReactComponent as Icon } from "../images/magnifier.svg";
import { StyledHeader } from "../styles/StyledHeader";

export default function Header({ value, onSubmit, onChange }) {
  return (
    <StyledHeader>
      <h1>
        <span>IMG</span>allery
      </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Images..."
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <Icon className="icon" />
        </button>
      </form>
    </StyledHeader>
  );
}
