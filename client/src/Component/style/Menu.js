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
`;
export const Logo = styled.div`
  height: 100%;
  max-width: 10rem;
  padding: 0 1.5rem;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const ContainerUser = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.2rem;

  .logout-icon {
    align-self: flex-end;
    font-size: 1.5rem;
    color: #fff;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
    cursor: pointer;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #4e0093;
    }
  }

  .welcome,
  .name {
    display: flex;
    align-items: flex-end;
    color: #fff;
  }

  .welcome {
    font-size: 0.8rem;
    flex: 1;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 0.6rem;
    opacity: 0.5;
  }
  .name {
    flex: 2;
    height: 100%;
    opacity: 0.9;
  }
`;
