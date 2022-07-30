import { useQuery } from "@apollo/client";
import {
  HStack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Avatar,
  Image,
  useDisclosure,
  Show
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      justify="space-between"
      spacing="12"
      className="w-full h-[76px]"
      mr={8}
    >
      <InputGroup w="80%" maxW="700px">
        <Input
          placeholder="Search posts"
          backgroundColor="#2F9FF80A"
          borderColor="rgba(0%, 0%, 100%, 0)"
        />
        <InputRightElement children={<Icon as={FiSearch} />} />
      </InputGroup>
      <Menu onOpen={onOpen} onClose={onClose}>
        <MenuButton variant="ghost" h={50} as={Button}>
          <HStack spacing="3">
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Show breakpoint="(min-width: 1035px)">
              <Text className="w-[80px]">My Profile</Text>
              <Icon as={FiChevronDown} className={isOpen && "rotate-180"} />
            </Show>
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={
                true ? "https://placekitten.com/120/120" : "../public/logo.png"
              }
              alt="Simon the pensive"
              mr="12px"
            />
            <span>Simon the pensive</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};
export default Header;
