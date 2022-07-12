import styled from "styled-components";
export const AppointmentContainer = styled.div`
  .active > div {
    border-top-right-radius: 12px 56px !important;
    border-top-left-radius: 12px 56px !important;
    border-bottom-right-radius: 12px 56px !important;
    border-bottom-left-radius: 12px 56px !important;
  }
  button {
    width: 23%;
    background-color: var(--backWhite);
    height: 50px;
    border: none;
    color: var(--darkPen);
    border-radius: var(--inputRadius);
    cursor: pointer;
    &:hover {
      background-color: var(--bluePen);
      color: var(--whitePen);
    }
  }
`;

export const DropDownContainer = styled.div`
  width: 25%;
  cursor: pointer;
  .item {
    width: ${(props) => (props.active ? "99%" : "90%")};
    background-color: var(--backWhite);
    height: ${(props) => (props.active ? "288px" : "50px")};
    border-radius: var(--inputRadius);
    position: relative;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
    }
    svg {
      position: absolute;
      left: 3px;
    }
  }
`;

export const TimeStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    border: 1px solid var(--bluePen);
    width: 90px;
    text-align: center;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    border-radius: 6px;
    &:hover {
      background-color: var(--bluePen);
      color: var(--whitePen);
    }
  }
`;
