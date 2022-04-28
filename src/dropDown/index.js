import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
} from "./styled";

const options = ["Home", "Work"];

const DropDownSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Selected");
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption}
        <FaAngleDown />
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {options.map((option) => (
            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
              {option}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};

export default DropDownSelect;
