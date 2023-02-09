import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="backgroudCards" display = "flex">
      <Card maxW="lg" flexWrap="wrap" bg="white" m={10} mt="20" height={700} display="flex">
        <CardBody className="cardGrid">
          <Image
            height={300}
            width={320}
            src={product.image}
            borderRadius="lg"
          />
          <Stack className="cardCard" spacing="3">
            <Heading size="md" color="black">
              {product.title}
            </Heading>
            <Text color="white" fontSize="15" fontWeight="bold"></Text>
            <Text color="blue.600" fontSize="3xl" fontWeight="bold">
              U$S {product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter className="cardGrid">
          <div className="divButton">
            <ButtonGroup spacing={2}>
              <NavLink to={`/product/${product.id}`}>
                <Button variant="solid" colorScheme="blue" mx="10">
                  Ver Detalle del producto
                </Button>
              </NavLink>
            </ButtonGroup>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
