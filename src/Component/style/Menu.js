import styled from "styled-components";

export const ContentHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8%;
  /* background-color: green; */
`;
export const Logo = styled.div`
  height: 100%;
  max-width: 10rem;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */

  img {
    width: 100%;
  }
`;

export const ContainerUser = styled.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  align-items: center;

  .welcome,
  .name {
    display: flex;
    align-items: flex-end;
    color: #fff;
  }

  .welcome {
    flex: 1;
    /* background-color: yellow; */
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 0.6rem;
    opacity: 0.5;
  }
  .name {
    flex: 2;
    /* background-color: green; */
    height: 100%;
    opacity: 0.9;
  }
`;
