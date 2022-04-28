import React from "react";
import SlideToggle from "react-slide-toggle";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {
  Container,
  Header,
  Content,
  SearchContainer,
  BlockControl,
  Block,
  BlockContent,
} from "./styled";

const Expandable = (props) => {
  const { isCollapsed = true, duration = 0, name, content } = props;
  return (
    <SlideToggle
      collapsed={isCollapsed}
      duration={duration}
      render={({ toggle, setCollapsibleElement, progress }) => {
        const expanded = progress === 1;
        const icon = expanded ? <FaAngleUp /> : <FaAngleDown />;
        return (
          <Block>
            <BlockControl onClick={toggle}>
              {name}
              {icon}
            </BlockControl>
            <BlockContent ref={setCollapsibleElement}>{content}</BlockContent>
          </Block>
        );
      }}
    />
  );
};

const Faq = () => {
  return (
    <Container>
      <Header>Frequently Asked Questions</Header>
      <Content>
        <SearchContainer>
          <BsSearch />
          <input placeholder={`Search`} />
        </SearchContainer>
        <Expandable
          isCollapsed={true}
          name={"Can I cancel my subscription at anytime?"}
          content={
            "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan."
          }
        />
        <Expandable
          isCollapsed={true}
          name={"Can I change my plan later on?"}
          content={
            "Absolutely! You can upgrade or downgrade your plan anytime. The money paid for the previous subscription will be recalculated to the new plan."
          }
        />
        <Expandable
          isCollapsed={true}
          name={"Will you renew my subscription automatically?"}
          content={
            "Yes, your subscription will be automatically renewed according to your pay period."
          }
        />
        <Expandable
          isCollapsed={true}
          name={"Do you offer any discounts?"}
          content={
            "Yes! We offer 17% discount for payment per year. There may be other temporary discounts, check for this inside the service."
          }
        />
        <Expandable
          isCollapsed={true}
          name={"Can I request a refund?"}
          content={
            "Sure, you will be welcome to request your refund within 14 days of subscribing to any paid plan."
          }
        />
      </Content>
    </Container>
  );
};

export default Faq;
