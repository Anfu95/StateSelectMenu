import React, { useState } from "react";
import { Icon, Button, Box, Flex } from "@chakra-ui/core";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/core";
import { FaCircle } from "react-icons/fa";

const SelectEstate = () => {
  const ICON = FaCircle;
  const [itemSelected, setitemSelected] = useState(
    <span>
      <Icon name="drag-handle" mr="4" />
      Escoge un equipo nuevo
    </span>
  );
  const select = event => {
    const identifier = event.currentTarget.name;
    const text = event.currentTarget.innerText;
    const content = (
      <Flex w="100%" flexDirection="row" justifyContent="center">
        <Box as={ICON} mr="2" color={identifier} /> {text}
      </Flex>
    );
    setitemSelected(content);
  };
  const Estados = [
    {
      color: "green.400",
      text: "Normal"
    },
    {
      color: "yellow.400",
      text: "Pendiente"
    },
    {
      color: "red.400",
      text: "Urgente"
    }
  ];

  return (
    <Menu>
      <MenuButton
        m="4"
        as={Button}
        rightIcon="chevron-down"
        width="auto"
        minWidth="200px"
      >
        {itemSelected}
      </MenuButton>
      <MenuList>
        {Estados.map((co, index) => (
          <MenuItem onClick={select} name={co.color} key={index}>
            <Box as={FaCircle} mr="2" color={co.color} />
            {co.text}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectEstate;
