import styled from "styled-components";

export const StyledApp = styled.div`
  .wrapper {
    width: 100%;
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .images {
    margin-top: 35px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, 250px);
  }
`;
