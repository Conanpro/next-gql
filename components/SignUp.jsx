import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../lib/auth";

const SignUp = ({ initialRef, isOpen, onOpen, onOpenT, onClose }) => {
  const { signUp } = useAuth();

  const [values, setValues] = useState({
    email: null,
    username: null,
    password: null
  });

  const onChange = ({ target }) => {
    console.log(values);
    setValues({
      ...values,
      [target.name]: target.value
    });
  };

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                required
                ref={initialRef}
                name="username"
                placeholder="Username"
                onChange={onChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                required
                name="email"
                placeholder="Email"
                onChange={onChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                required
                name="password"
                placeholder="Password"
                onChange={onChange}
              />
            </FormControl>
            <Text mt={6} className="text-sm">
              Already have an account?{" "}
              <Link
                onClick={() => {
                  onClose();
                  onOpenT();
                }}
                color="blue.500"
              >
                Sign In
              </Link>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                signUp(values);
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUp;
