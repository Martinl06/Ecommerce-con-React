import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="backgroudCards" display = "flex">
      <Card maxW="sm" bg="white" m={8} mt="20" height={650} width={320} display="flex">
        <CardBody className="cardGrid">
          <Image
            height={300}
            width={320}
            src={product.image}
            borderRadius="lg"
          />
          <Stack className="cardCard" spacing="3">
            <Heading className="cardCard" size="md" color="black">
              {product.title}
            </Heading>
          </Stack>
        </CardBody>
        <CardFooter className="cardFooter">
        <div>
            <div className="target-Price">
            <Text color="white" fontSize="2xl" fontWeight="bold">
              U$S {product.price}
            </Text>
            </div>
            </div>
          <div className="divButton">
            <ButtonGroup spacing={2}>
              <NavLink to={`/product/${product.id}`}>
                <Button variant="solid" colorScheme="blue" mx="8" mt='6'>
                  Ver Detalle
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
