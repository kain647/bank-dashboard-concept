import React, { useState } from "react";
import DropDownSelect from "../dropDown";
import { Link } from "react-router-dom";
import { RiGlobalLine, RiExchangeDollarFill } from "react-icons/ri";
import { HiTemplate } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineFire, AiOutlineFile, AiFillApple } from "react-icons/ai";
import { BiTransfer, BiSearch } from "react-icons/bi";
import { BsLightningCharge, BsFunnel, BsPlus, BsPinterest } from "react-icons/bs";
import { FiSearch, FiBell } from "react-icons/fi";
import { SiWarnerbros } from "react-icons/si";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { MdDashboardCustomize, MdOutlineCheckBox } from "react-icons/md";
import {
  Container,
  Header,
  LogoBox,
  Title,
  NavigateBox,
  NavBtn,
  ActionsBox,
  UserProfileBox,
  ActionsButtons,
  ActionsContainer,
  AppBody,
  AppBodyNavigation,
  Nav,
  MenuBoxContainer,
  IconMenu,
  NameMenu,
  Content,
  Sidebar,
  Service,
  Transfer,
  HeaderContentTitle,
  HeaderSidebarTitle,
  HeaderSearch,
  SearchBox,
  DropDownBox,
  ButtonBox,
  BtnSearch,
  HeaderTransfer,
  TitleTransfer,
  Cards,
  CardsBox,
  CardTitle,
  IconBox,
  CardBoxHeader,
  CardTitleBox,
  CardSubtitle,
  CardBoxFooter,
  FooterCardTitle,
  FooterCardIcon,
  SidebarHeader,
  TitleSidebarHeader,
  SideBarButtons,
  PayCardSidebar,
  PayCardSidebarContainer,
  PaymentsCardsContainer,
  PaymentsContainer,
  CardPayBox,
  DateCard,
  NumberCard,
  PaymentDetails,
  TitleDetails,
  TotalCard,
  BtnTotal,
  FaqContainer,
  TitleFaq,
  QuestionBox,
  ButtonSubmitFaq,
  HeaderFaq,
  IconsTrasfersHeader,
  Transfers,
  TransfersPaymentContainer,
  PaymentIcon,
  NameBox,
  Name,
  SubName,
  NumCard,
  Number,
  SubNumber,
  ContentTransfer,
  DatePayment,
  Date,
  SubDate,
  TotalPayment,
  TotalPay
} from "./styled";

const navMenu = [
  {
    icon: <MdDashboardCustomize />,
    nameMenu: "Dashboard",
  },
  {
    icon: <MdOutlineCheckBox />,
    nameMenu: "Scheduled",
  },
  {
    icon: <BiTransfer />,
    nameMenu: "Transfers",
  },
  {
    icon: <HiTemplate />,
    nameMenu: "Templates",
  },
  {
    icon: <RiGlobalLine />,
    nameMenu: "SWIFT",
  },
  {
    icon: <RiExchangeDollarFill />,
    nameMenu: "Exchange",
  },
];
const cardsService = [
  {
    background: "#e3ffa8",
    icon: <BsLightningCharge />,
    title: "Electricity",
    subtitle: "Authority of Cyprus",
    footerTitle: "Go to service",
    footerIcon: <FaAngleRight />,
  },
  {
    background: "#45ffbc",
    icon: <AiOutlineFire />,
    title: "Heating Gas",
    subtitle: "Calor Gas",
    footerTitle: "Go to service",
    footerIcon: <FaAngleRight />,
  },
  {
    background: "#bdbbb7",
    icon: <AiOutlineFile />,
    title: "Tax online",
    subtitle: "Online services",
    footerTitle: "Go to service",
    footerIcon: <FaAngleRight />,
  },
];
const transfers = [
  {
    icon: <AiFillApple />,
    name: "Apple Inc.",
    subName: "Apple ID Payment",
    number: "4012",
    subNumber: "Last four digits",
    date: "28 Oct.21",
    subDate: "Date payment",
    totalCard: "-$550"
  },
  {
    icon: <BsPinterest />,
    name: "Pinterest",
    subName: "2 year subscription",
    number: "5214",
    subNumber: "Last four digits",
    date: "26 Oct.21",
    subDate: "Date payment",
    totalCard: "-$120"
  },
  {
    icon: <SiWarnerbros />,
    name: "Warner Bros.",
    subName: "Cinema",
    number: "2222",
    subNumber: "Last four digits",
    date: "20 Oct.21",
    subDate: "Date payment",
    totalCard: "$340"
  }
]

const SideNav = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  return (
    <AppBodyNavigation>
      <Nav>
        {navMenu.map((navMenu) => {
          return (
            <NavMenu
              icon={navMenu.icon}
              name={navMenu.nameMenu}
              active={selectedMenu === navMenu.nameMenu}
              key={navMenu.nameMenu}
              onClick={() => setSelectedMenu(navMenu.nameMenu)}
            />
          );
        })}
      </Nav>
    </AppBodyNavigation>
  );
};
const HeaderNav = () => {
  const [selected, setSelected] = useState("Payments");
  return (
    <NavigateBox>
      {["Overview", "Payments", "Cards", "Account", "System", "Business"].map(
        (item) => (
          <NavBtn
            key={item}
            onClick={() => setSelected(item)}
            active={selected === item}
          >
            {item}
          </NavBtn>
        )
      )}
    </NavigateBox>
  );
};
const PayCard = () => {
  const [selectedCard, setSelectedCard] = useState(true);
  const cards = [
    {
      name: "mastercard",
      icon: <FaCcMastercard />,
    },
    {
      name: "visa",
      icon: <FaCcVisa />,
    },
  ];
  return (
    <SideBarButtons>
      {cards.map((cards) => {
        return <PayCardButtons {...cards} key={cards.name} />;
      })}
    </SideBarButtons>
  );
};
const Payments = () => {
  const payCards = [
    {
      colorCard: "#45ffbc",
      date: "01/23",
      numberCard: "****5142",
      titleCard: "Internet",
      total: "$ 2.354",
      icon: "",
    },
    {
      colorCard: "#e3ffa8",
      date: "12/23",
      numberCard: "****2389",
      titleCard: "Classic",
      total: "$ 5.632",
      icon: "",
    },
    {
      colorCard: "#bdbbb7",
      date: "05/25",
      numberCard: "****1412",
      titleCard: "Gold",
      total: "$ 7.511",
      icon: "",
    },
  ];
  return (
    <PaymentsCardsContainer>
      {payCards.map((paymentCard) => {
        return <PaymentCard {...paymentCard} />;
      })}
    </PaymentsCardsContainer>
  );
};
const Dashboard = () => {
  return (
    <Container>
      <Header>
        <LogoBox>
          <img src={"icon/almeria-logo.svg"} />
          <Title>
            <span>Almeria</span>
            <span>NeoBank</span>
          </Title>
        </LogoBox>
        <HeaderNav />
        <ActionsContainer>
          <ActionsBox>
            <UserProfileBox>
              <span>Max Harvey</span>
              <img src={"images/MaxHarvey.jpg"} />
            </UserProfileBox>
          </ActionsBox>
          <ActionsButtons>
            <FiSearch />
            <FiBell />
          </ActionsButtons>
        </ActionsContainer>
      </Header>
      <AppBody>
        <SideNav />
        <Content>
          <Service>
            <HeaderContentTitle>Service</HeaderContentTitle>
            <HeaderSearch>
              <SearchBox>
                <BiSearch />
                <input placeholder="Account number" type={"number"} />
              </SearchBox>
              <DropDownBox>
                <DropDownSelect />
              </DropDownBox>
              <ButtonBox>
                <BtnSearch>Search</BtnSearch>
              </ButtonBox>
            </HeaderSearch>
            <Cards>
              {cardsService.map((card) => {
                return <Card {...card} key={card.title} />;
              })}
            </Cards>
          </Service>
          <Transfer>
            <HeaderTransfer>
              <TitleTransfer>Latest transfers</TitleTransfer>
              <IconsTrasfersHeader>
                <BsFunnel />
                <BsPlus />
              </IconsTrasfersHeader>
            </HeaderTransfer>
            <Transfers>
              {transfers.map((transfersPaymment)=>{
                return <TransfersPayment {...transfersPaymment} key={transfersPaymment.name}/>
              })}
            </Transfers>
          </Transfer>
        </Content>
        <Sidebar>
          <HeaderSidebarTitle>New Payment</HeaderSidebarTitle>
          <SidebarHeader>
            <TitleSidebarHeader>
              Choose a card to transfer money
            </TitleSidebarHeader>
            <PayCard />
          </SidebarHeader>
          <Payments />
          <FaqContainer>
            <HeaderFaq>
              <TitleFaq>Most frequently asked questions</TitleFaq>
              <Link to={"/faq"}>
                <p>Question</p>
              </Link>
            </HeaderFaq>
            <QuestionBox>
              <input type="text" placeholder="Ask a Question" />
              <ButtonSubmitFaq>Submit</ButtonSubmitFaq>
            </QuestionBox>
          </FaqContainer>
        </Sidebar>
      </AppBody>
    </Container>
  );
};

const PayCardButtons = (props) => {
  const { icon } = props;
  return (
    <PayCardSidebarContainer>
      <PayCardSidebar>{icon}</PayCardSidebar>
    </PayCardSidebarContainer>
  );
};

const NavMenu = (props) => {
  const { icon, active, name, onClick } = props;
  return (
    <MenuBoxContainer onClick={onClick} active={active} icon={icon}>
      <IconMenu>{icon}</IconMenu>
      <NameMenu>{name}</NameMenu>
    </MenuBoxContainer>
  );
};

const Card = (props) => {
  const { title, subtitle, background, icon, footerTitle, footerIcon } = props;
  return (
    <CardsBox background={background}>
      <CardBoxHeader>
        <IconBox>{icon}</IconBox>
        <CardTitleBox>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardTitleBox>
      </CardBoxHeader>
      <CardBoxFooter>
        <FooterCardTitle>{footerTitle}</FooterCardTitle>
        <FooterCardIcon>{footerIcon}</FooterCardIcon>
      </CardBoxFooter>
    </CardsBox>
  );
};

const PaymentCard = (props) => {
  const { colorCard, date, numberCard, titleCard, total, icon } = props;
  return (
    <PaymentsContainer>
      <CardPayBox colorCard={colorCard}>
        <DateCard>{date}</DateCard>
        <NumberCard>{numberCard}</NumberCard>
      </CardPayBox>
      <PaymentDetails>
        <TitleDetails>{titleCard}</TitleDetails>
        <TotalCard>
          <span>{total}</span>
          <BtnTotal>
            <FaAngleRight />
          </BtnTotal>
        </TotalCard>
      </PaymentDetails>
    </PaymentsContainer>
  );
};

const TransfersPayment = (props) => {
  const { icon, name, subName, number, subNumber, date, subDate, totalCard } = props;
  return (
    <TransfersPaymentContainer>
      <PaymentIcon>
        {icon}
      </PaymentIcon>
      <ContentTransfer>
        <NameBox>
        <Name>{name}</Name>
        <SubName>{subName}</SubName>
      </NameBox>
        <NumCard>
        <Number>{number}</Number>
        <SubNumber>{subNumber}</SubNumber>
      </NumCard>
        <DatePayment>
          <Date>{date}</Date>
          <SubDate>{subDate}</SubDate>
        </DatePayment>
        <TotalPayment>
          <TotalPay>{totalCard}</TotalPay>
        </TotalPayment>
      </ContentTransfer>
    </TransfersPaymentContainer>
  )
}

export default Dashboard;
