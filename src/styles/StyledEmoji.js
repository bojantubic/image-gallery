import styled from "styled-components";

export const StyledEmoji = styled.button`
  margin: 5px;
  padding: 15px;
  outline: 0;
  border: 0;
  border-radius: 50%;
  font-size: 25px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    font-size: 20px;
    margin: 3px;
    padding: 10px;
  }
}
`;
