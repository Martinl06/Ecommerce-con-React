import React from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <Flex
      bg="black"
      width="100%"
      height="6rem"
      justifyContent="space-around"
      alignItems="center"
      fontFamily="sans-serif"
      fontSize="26px"
      textAlign="center"
      color="red"
    >
      <h1>Bookstore</h1>
      <Button bg="black">Inicio</Button>
      <Button bg="black">Sobre Nosotros</Button>
      <Button bg="black">Contacto</Button>
      <Menu>
        <MenuButton fontSize="20px">Productos</MenuButton>
        <CartWidget />
        <Portal>
          <MenuList>
            <MenuItem>Novelas</MenuItem>
            <MenuItem>Terror</MenuItem>
            <MenuItem>Fantasía</MenuItem>
            <MenuItem>Comic</MenuItem>
            <MenuItem>Suspenso</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Flex>
  );
};

export default Navbar;
