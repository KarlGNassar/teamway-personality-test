import {
  Text,
  Container,
  Group,
  Flex,
  createStyles,
  rem,
  Modal,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import users from "@/data/users";
import React, { useState } from "react";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "#ffffff",
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    const user = users.find((u) => u.username == username);

    if (!user) {
      setShowError(true);
      return;
    }

    if (user.password != password) {
      setShowError(true);
      return;
    }
    router.push("/admin");
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        overlayProps={{
          opacity: 0.55,
          blur: 3,
        }}
      >
        <TextInput
          label="Username"
          placeholder="username"
          required
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          mt="md"
        />
        {showError ? (
          <>
            <Space h="lg" />
            <Text color="#FF0000">Invalid Credentials</Text>
          </>
        ) : null}
        <Button fullWidth mt="xl" color="secondary" onClick={handleLogin}>
          Sign in
        </Button>
      </Modal>
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <Flex>
            <Image
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/epxhx28prlql5lqhajbu"
              height={28}
              width={28}
              alt={"teamway logo"}
            />
            <Text weight="bold">Karl Nasar</Text>
          </Flex>
          <Group pl={50}>
            <Text>
              Are you an admin? Log in{" "}
              <Text
                span
                underline
                style={{ cursor: "pointer" }}
                color="tertiary"
                onClick={open}
              >
                here
              </Text>
            </Text>
          </Group>
        </Container>
      </div>
    </>
  );
};

export default Footer;
