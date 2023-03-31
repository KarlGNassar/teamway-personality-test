import Questions from "@/components/Questions";
import { Center } from "@mantine/core";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personality Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Center mih="100vh">
          <Questions />
        </Center>
      </main>
    </>
  );
}
