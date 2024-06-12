"use client";
import useAuthSession from "@/hooks/useAuthSession";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";

type Props = {};

const page = (props: Props) => {
  const { user, isAuthenticated } = useAuthSession();

  if (!isAuthenticated) {
    return <p>Unauthorized</p>;
  }

  return (
    <Box
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={"15px"}
    >
      <Text fontSize={"27px"} fontWeight={"bold"}>
        Profile
      </Text>
      <List spacing={3}>
        <ListItem fontSize={"20px"}>Name : {user.name}</ListItem>
        <ListItem fontSize={"20px"}>Email : {user.email}</ListItem>
      </List>
    </Box>
  );
};

export default page;
