import {
  Container,
  Text,
  HStack,
  Avatar,
  Flex,
  VStack
} from "@chakra-ui/react";
import ta from "time-ago";
import FavPost from "./FavPost";
import { GET_ME } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const Post = ({ post, reference }) => {
  const { loading, data } = useQuery(GET_ME);
  if (loading) return <p>Loading...</p>;

  return (
    <Container
      px="23px"
      bg="white"
      h="193px"
      className="cursor-pointer py-[15px] mt-4"
      boxShadow="sm"
      ref={reference}
    >
      <Flex direction="column" h="full" justify="space-between">
        <VStack spacing="9px" className="h-[130px] overflow-hidden">
          <Text
            noOfLines={2}
            className="text-[#072D4B] font-medium font-sans text-lg leading-6"
          >
            {post.title}
          </Text>
          <Text
            noOfLines={3}
            className="text-[#072D4B] opacity-[85%] text-sm font-sans leading-normal"
          >
            {post.content}
          </Text>
        </VStack>
        <HStack justify="space-between">
          <HStack>
            <Avatar
              size="xs"
              name={post.author.username}
              src={post.author.avatar}
            />
            <Text className="text-xs leading-loose text-[#072D4B] opacity-60">
              {post.author.username}
            </Text>
            <Text className="opacity-60">·</Text>
            <Text className="text-xs leading-loose text-[#072D4B] opacity-60">
              {ta.ago(post.createdAt)}
            </Text>
          </HStack>
          <FavPost me={data?.me} post={post} />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Post;
