import styled from "styled-components";

export const Container = styled.div`
  display: flex;
	box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  padding: 2vw 4vw 2vw;
  background-color: #1f1f1f;
`;
export const Header = styled.div`
  display: flex;
  margin-bottom: 40px;
  font-size: 28px;
`;
export const Content = styled.div`
  display: flex;
	flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
	margin-bottom: 25px;
  input {
	  box-sizing: border-box;
    font-size: 20px;
    height: 50px;
    width: 400px;
	  outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgb(250, 250, 250);
	  padding: 0 40px 0 10px;
  }
  svg {
    position: absolute;
    color: #000000;
    opacity: 0.3;
    width: 20px;
    height: 20px;
	  right: 10px;
  }
`;
export const Block = styled.div`
	display: flex;
	width: 700px;
	flex-direction: column;
	border-bottom: 1px solid lightgray;
`;
export const BlockControl = styled.div`
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	width: 700px;
	background-color: white;
	color: #000000;
	padding: 24px;
  transition: 0.5s;
	cursor: pointer;
	svg {
		width: 18px;
		height: 18px;
		color: lightgray;
	}
`;
export const BlockContent = styled.div`
	display: flex;
	background-color: #fff;
	color: #000000;
  padding: 0px 0px 20px 30px;
	font-weight: 500;
`;
