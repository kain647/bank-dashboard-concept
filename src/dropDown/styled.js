import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  cursor: pointer;
`;

export const DropDownHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  border: 1px solid gray;
`;

export const DropDownList = styled.div`
  display: block;
  position: absolute;
  flex-direction: column;
  width: inherit;
  margin-top: 40px;
`;

export const ListItem = styled.div`
  display: flex;
  padding: 5px;
  margin-bottom: 2px;
  background-color: gray;
  cursor: pointer;
`;
