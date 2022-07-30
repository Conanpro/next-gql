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
  Link,
  useDisclosure,
  FormErrorMessage
} from "@chakra-ui/react";
import { useState } from "react";
import SignUp from "./SignUp";
import { useAuth } from "../lib/auth";
import { Field, Formik } from "formik";
import { LoginSchema } from "../schemas";

const SignIn = ({ initialRef, isOpen, onOpen, onClose }) => {
  const { signIn } = useAuth();

  const {
    isOpen: isOpenT,
    onOpen: onOpenT,
    onClose: onCloseT
  } = useDisclosure();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={onSubmit}
          validationSchema={LoginSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <ModalContent>
              <ModalHeader>Sign In</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel ref={initialRef} htmlFor="email">
                    Email
                  </FormLabel>
                  <Field as={Input} id="email" name="email" type="email" />
                </FormControl>

                <FormControl
                  mt={4}
                  isInvalid={!!errors.password && touched.password}
                >
                  <FormLabel ref={initialRef} htmlFor="password">
                    Password
                  </FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <Text mt={6} className="text-sm">
                  Dont have an account?{" "}
                  <Link
                    onClick={() => {
                      onClose();
                      onOpenT();
                    }}
                    color="blue.500"
                  >
                    Sign Up
                  </Link>
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    signIn(values);
                  }}
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          )}
        </Formik>
      </Modal>
      <SignUp
        initialRef={initialRef}
        onOpen={onOpenT}
        onClose={onCloseT}
        isOpen={isOpenT}
        onOpenT={onOpen}
      />
    </>
  );
};

export default SignIn;
