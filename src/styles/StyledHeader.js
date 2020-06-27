import styled from "styled-components";

export const StyledHeader = styled.div`
  h1 {
    text-align: center;
    color: #fff;
    margin: 10px;
    font-family: "MuseoModerno", cursive;
    font-weight: 400;
    font-size: 60px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(216, 216, 216);

    span {
      color: #4181ee;
      font-family: "MuseoModerno", cursive;
      font-weight: 700;
    }
  }

  form {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      max-width: 950px;
      height: 50px;
      font-size: 20px;
      margin-left: 2px;
      padding: 5px 10px;

      border-top: 3px solid #4181ee;
      border-right: 0;
      border-bottom: 3px solid #4181ee;
      border-left: 3px solid #4181ee;
      border-radius: 5px 0px 0px 5px;

      outline: 0;
      transition: all 0.2s ease-in-out;

      &:focus {
        background-color: #095ef1;
        color: #fff;
      }

      &:focus::-webkit-input-placeholder {
        color: #fff;
      }
    }

    button {
      color: #fff;
      background-color: #4181ee;

      width: 50px;
      height: 50px;
      margin-right: 2px;
      border-radius: 0px 5px 5px 0px;
      border: 0;
      outline: 0;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover,
      &:focus {
        background-color: #095ef1;
      }

      .icon {
        fill: #fff;
        height: 20px;
        width: 20px;
      }
    }
  }
`;
