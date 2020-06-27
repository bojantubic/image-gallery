import styled from "styled-components";

export const StyledImage = styled.a`
  border: 6px solid var(--color-white);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.2s cubic-bezier(0.75, 0.25, 0.25, 0.75);

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 5px solid #fff;
    border-radius: 5px;
    transition: all 0.2s cubic-bezier(0.75, 0.25, 0.25, 0.75);

    &:hover {
      transform: scale(1.1);
    }
  }
`;
