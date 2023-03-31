import React, { Dispatch, SetStateAction } from "react";
import {
  Blockquote,
  Button,
  Container,
  Flex,
  Space,
  Text,
} from "@mantine/core";

interface ResultProps {
  answers: number[];
  setQuestionNumber: Dispatch<SetStateAction<number>>;
  setSelectedAnswer: Dispatch<SetStateAction<number>>;
  setAnswers: Dispatch<SetStateAction<number[]>>;
  setHasFinished: Dispatch<SetStateAction<boolean>>;
}

const Result: React.FC<ResultProps> = ({
  answers,
  setQuestionNumber,
  setSelectedAnswer,
  setAnswers,
  setHasFinished,
}) => {
  const sumResult = (answers: number[]) => {
    let sum = 0;
    for (let answer of answers) {
      sum += answer;
    }
    return sum;
  };

  const resetTest = () => {
    setQuestionNumber(0);
    setSelectedAnswer(-1);
    setAnswers([]);
    setHasFinished(false);
  };

  return (
    <Container bg="white" p="xl" w="80vw">
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
            <Blockquote cite="- Random Pinterest" color="tertiary">
              <Text size="1.2rem">
                I desperately need people. I recharge by sitting near those I
                love, laughing at their antics, and sharing stories. Being by
                myself is exhausting.
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

        <Button color="secondary" mt="xl" onClick={resetTest}>
          Retake Test
        </Button>
      </Flex>
    </Container>
  );
};

export default Result;
