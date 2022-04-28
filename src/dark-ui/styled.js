import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //min-height: 100vh;
  //min-width: 1400px;
  //padding: 2vw 4vw 2vw;
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 175px) minmax(max-content, 1fr) minmax(
      max-content,
      400px
    );
  column-gap: 64px;
  margin-bottom: 40px;
`;
export const LogoBox = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #313131;
  img {
    max-width: 100%;
    width: var(--size);
    height: var(--size);
    --size: 32px;
  }
`;
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  line-height: 1.25;
  margin-left: 0.75rem;
  span {
    font-size: 18px;
    :first-child {
      color: #ffffff;
      font-weight: 500;
    }
    :last-child {
      color: #969593;
      font-weight: 400;
    }
  }
`;
export const NavigateBox = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: space-between;
  color: #969593;
  border-bottom: 1px solid #313131;
`;
export const NavBtn = styled.div`
  display: flex;
  height: 60px;
  box-sizing: border-box;
  align-items: end;
  justify-content: flex-end;
  padding-bottom: 1rem;
  color: ${({ active }) => (active ? "#fff" : "")};
  border-top: ${({ active }) => (active ? "2px solid #fff" : "none")};
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
export const ActionsBox = styled.div`
  display: flex;
  align-items: end;
`;
export const UserProfileBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    display: flex;
    font-size: 1.125rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #969593;
    border-bottom: 1px solid #313131;
    font-weight: 300;
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 1.5rem;
    flex-shrink: 0;
  }
`;
export const ActionsButtons = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #313131;
  margin-left: 2rem;
  padding-left: 2rem;
  svg {
    display: flex;
    width: var(--size);
    height: var(--size);
    --size: 18px;
    border-radius: 50%;
    border: 1px solid #969593;
    color: #ffffff;
    padding: 12px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.25s ease;
    :first-child {
      margin-right: 20px;
    }
  }
`;
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const AppBody = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 175px) minmax(max-content, 1fr) minmax(
      min-content,
      400px
    );
  column-gap: 64px;
`;
export const AppBodyNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MenuBoxContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? "#fff" : "#969593")};
  margin-bottom: 20px;
  cursor: pointer;
  transform: ${({ active }) => (active ? "translateX(4px)" : "none")};
  :hover {
    transform: translateX(4px);
    color: #fff;
  }
  :last-child {
    margin-bottom: 0;
  }
`;
export const IconMenu = styled.div`
  display: flex;
  margin-right: 5px;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 20px;
  }
`;
export const NameMenu = styled.div`
  display: flex;
  font-weight: 500;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Service = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Transfer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderContentTitle = styled.h2`
  display: flex;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
`;
export const HeaderSidebarTitle = styled.h2`
  display: flex;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
`;
export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #313131;
  margin-bottom: 25px;
`;
export const SearchBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 25px;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 18px;
    color: #fff;
    margin-left: 8px;
    z-index: 1;
  }
  input {
    position: absolute;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
    height: 38px;
    border: 1px solid gray;
    color: #fff;
    background-color: transparent;
    outline: none;
    padding: 5px 0px 5px 30px;
    ::-webkit-input-placeholder {
      color: #fff;
      //opacity: 0.5;
    }
  }
`;
export const DropDownBox = styled.div`
  display: flex;
  margin-bottom: 25px;
  margin-left: 150px;
`;
export const ButtonBox = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
export const BtnSearch = styled.button`
  display: flex;
  border-radius: 6px;
  background-color: #2e2e2e;
  padding: 14px 20px;
  border: 0;
  color: #f1f1f1;
  cursor: pointer;
  :active {
    transform: translateY(-1px);
  }
`;
export const HeaderTransfer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #313131;
`;
export const TitleTransfer = styled.h2`
  display: flex;
  padding: 0;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  //row-gap: 10px;
`;
export const CardsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  height: 200px;
  color: #000000;
  padding: 15px;
  background-color: ${({ background }) => background};
  transition: 0.25s ease;
  cursor: pointer;
  :hover {
    transform: translateY(-5px);
  }
`;
export const CardTitle = styled.div`
  display: flex;
  font-weight: 500;
`;
export const IconBox = styled.div`
  display: flex;
  margin-right: 10px;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 34px;
  }
`;
export const CardBoxHeader = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
`;
export const CardTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardSubtitle = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 200;
`;
export const CardBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
`;
export const FooterCardTitle = styled.div`
  display: flex;
`;
export const FooterCardIcon = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
`;
export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleSidebarHeader = styled.p`
  display: flex;
  color: #969593;
  font-size: 13px;
`;
export const SideBarButtons = styled.div`
  display: flex;
`;
export const PayCardSidebar = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  svg {
    width: 40px;
    height: auto;
    margin-right: 10px;
  }
  :hover {
    color: #fff;
  }
`;
export const PayCardSidebarContainer = styled.div`
  display: flex;
`;
export const PaymentsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
export const PaymentsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const CardPayBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ colorCard }) => colorCard};
  width: 125px;
  padding: 0.375rem;
  aspect-ratio: 3/2;
  flex-shrink: 0;
  border-radius: 6px;
  color: #1f1f1f;
  margin-right: 24px;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 600;
`;
export const DateCard = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 700;
`;
export const NumberCard = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 700;
  margin-left: auto;
`;
export const PaymentDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const TitleDetails = styled.h3`
  display: flex;
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #969593;
  font-weight: 500;
`;
export const TotalCard = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top: 1px solid #313131;
  border-bottom: 1px solid #313131;
  span {
    font-size: 24px;
  }
`;
export const BtnTotal = styled.button`
  display: flex;
  align-items: center;
  margin-left: 15px;
  background-color: transparent;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: 1px solid #969593;
  color: #ffffff;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 16px;
  }
  :hover {
    background-color: #313131;
    box-shadow: 0 0 0 4px #1f1f1f, 0 0 0 5px #969593;
  }
`;
export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleFaq = styled.div`
  display: flex;
  color: #969593;
  font-size: 0.875rem;
  margin-bottom: 24px;
  margin-right: 15px;
`;
export const QuestionBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  input {
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
    height: 38px;
    border: 1px solid gray;
    color: #fff;
    background-color: transparent;
    outline: none;
    padding: 5px 0px 5px 5px;
  }
`;
export const ButtonSubmitFaq = styled.button`
  display: flex;
  width: 100px;
  height: 38px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #2e2e2e;
  padding: 14px 20px;
  border: 0;
  font-size: 14px;
  color: #f1f1f1;
  cursor: pointer;
  :active {
    transform: translateY(-1px);
  }
`;
export const HeaderFaq = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #fff;
  }
  p {
    display: flex;
    width: 100px;
    height: 38px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #2e2e2e;
    padding: 14px 20px;
    border: 0;
    color: #f1f1f1;
    cursor: pointer;
    margin: 0;
    font-size: 14px;
    :active {
      transform: translateY(-1px);
    }
  }
`;
export const IconsTrasfersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease;
  svg {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #969593;
    padding: 5px;
    color: #ffffff;
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
    :hover  {
      background-color: #313131;
      box-shadow: 0 0 0 4px #1f1f1f, 0 0 0 5px #969593;
    }
  }
`;
export const Transfers = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TransfersPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 10px 0px;
`;
export const PaymentIcon = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
  background-color: #f1f1f1;
  margin-right: 20px;
  svg {
    width: 28px;
    height: 28px;
    color: black;
  }
`;
export const NameBox = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  margin-right: 20px;
`;
export const Name = styled.div`
  display: flex;
`;
export const SubName = styled.div`
  display: flex;
  color: #969593;
`;
export const NumCard = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  margin-right: 20px;
`;
export const Number = styled.div`
  display: flex;
`;
export const SubNumber = styled.div`
  display: flex;
  color: #969593;
`;
export const ContentTransfer = styled.div`
  display: flex;
	width: 100%;
	justify-content: space-between;
`;
export const DatePayment = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  margin-right: 20px;
`;
export const Date = styled.div`
  display: flex;
`;
export const SubDate = styled.div`
  display: flex;
  color: #969593;
`;
export const TotalPayment = styled.div`
  display: flex;
`;
export const TotalPay = styled.div`
  display: flex;
	align-items: center;
  font-size: 1.125rem;
`;
