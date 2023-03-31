import React from "react";
import { Blockquote, Container, Flex, Text } from "@mantine/core";

interface ResultProps {
  answers: number[];
}

const Result: React.FC<ResultProps> = ({ answers }) => {
  const sumResult = (answers: number[]) => {
    let sum = 0;
    for (let answer of answers) {
      sum += answer;
    }
    return sum;
  };

  return (
    <Container w="80vw">
      <Flex direction="column" align="center" justify="center">
        <Text size={50} weight="bold" color="secondary">
          Results Are In!
        </Text>

        {sumResult(answers) <= 8 ? (
          <>
            <Text size="1.5rem">You are more of an introvert..</Text>
            <Blockquote cite="- Susan Cain" color="tertiary">
              <Text size="1.2rem">
                Stay true to your own natue. If you like to do things in a slow
                and steady way, don't let others make you feel as if you have to
                race.
              </Text>
            </Blockquote>
            <iframe
              src="https://giphy.com/embed/3CZPYQta5i61l4s1Hw"
              width="480"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/eonline-3CZPYQta5i61l4s1Hw">
                <Text>via GIPHY</Text>
              </a>
            </p>
          </>
        ) : (
          <>
            <Text size="1.5rem">You are more of an extrovert..</Text>
            <Blockquote cite="- Susan Cain" color="tertiary">
              <Text size="1.2rem">
                Stay true to your own natue. If you like to do things in a slow
                and steady way, don't let others make you feel as if you have to
                race.
              </Text>
            </Blockquote>
            <iframe
              src="https://giphy.com/embed/lO1WQH2ZyqwgRfninw"
              width="480"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/abcnetwork-abc-a-million-little-things-amillionlittlethings-lO1WQH2ZyqwgRfninw">
                via GIPHY
              </a>
            </p>
          </>
        )}
      </Flex>
    </Container>
  );
};

export default Result;
