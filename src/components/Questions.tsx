import {
  Button,
  Container,
  createStyles,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import React, { useState, useRef, useEffect } from "react";
import questions from "../data/questions";
import indexMapper from "@/utils/indexMapper";
import Result from "./Result";

const useStyles = createStyles((theme) => ({
  answer: {
    border: "1px solid #808080",
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  },
  answerLabel: {
    borderRadius: 5,
    transition: "background-color 200ms ease-in",
  },
  answerSelected: {
    border: "2px solid #630063",
  },
}));

const Questions = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [hasFinished, setHasFinished] = useState(false);

  const { classes, cx } = useStyles();

  const handleNextQuestion = () => {
    setAnswers((curr) => [
      ...curr,
      questions[questionNumber].answers[selectedAnswer].points,
    ]);
    if (questionNumber == questions.length - 1) {
      setHasFinished(true);
    }
    setQuestionNumber(questionNumber + 1);
    setSelectedAnswer(-1);

    // scroll to top on mobile when pressing button
    containerRef.current?.scrollIntoView();
  };

  const handlePrevQuestion = () => {
    setAnswers((curr) => curr.slice(0, -1));
    setQuestionNumber(questionNumber - 1);
    setSelectedAnswer(-1);

    // scroll to top on mobile when pressing button
    containerRef.current?.scrollIntoView();
  };

  return (
    <>
      {hasFinished ? (
        <Result answers={answers} />
      ) : (
        <Container bg="white" p="xl" w="80vw" ref={containerRef}>
          <Flex direction="column" pb="lg" mih={150}>
            <Text size="lg" weight="lighter">
              Questions {questionNumber + 1}/{questions.length}
            </Text>
            <Text size="xl" weight="bold" color="secondary">
              {questions[questionNumber].prompt}
            </Text>
            <Text size="lg" weight="lighter" color="tertiary" italic>
              All questions are required
            </Text>
          </Flex>
          <Flex direction="column">
            {questions[questionNumber].answers.map((answer, i) => (
              <Flex
                bg="gray"
                p="sm"
                align="center"
                justify="flex-start"
                mb="xl"
                key={`${answer.text}-${i}`}
                className={cx(classes.answer, {
                  [classes.answerSelected]: selectedAnswer == i,
                })}
                onClick={() => setSelectedAnswer(i)}
              >
                <Text
                  className={classes.answerLabel}
                  color={selectedAnswer == i ? "#fff" : "#000"}
                  weight={selectedAnswer == i ? "bold" : "initial"}
                  bg={selectedAnswer == i ? "secondary" : "#c4c4c4"}
                  py={5}
                  px="sm"
                  mx="md"
                >
                  {indexMapper[i]}
                </Text>
                <Text weight={selectedAnswer == i ? "bold" : "initial"}>
                  {answer.text}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Group grow pt="lg">
            <Button
              color="secondary"
              size="lg"
              variant="outline"
              style={{ borderWidth: 2 }}
              disabled={questionNumber == 0 ? true : false}
              onClick={handlePrevQuestion}
            >
              <Flex align="center">
                <IconArrowLeft />
                <Text m="md">Previous</Text>
              </Flex>
            </Button>
            <Button
              bg="secondary"
              variant="white"
              size="lg"
              disabled={selectedAnswer == -1 ? true : false}
              onClick={handleNextQuestion}
            >
              <Flex align="center">
                <Text mr="sm">Next Question</Text>
                <IconArrowRight />
              </Flex>
            </Button>
          </Group>
        </Container>
      )}
    </>
  );
};

export default Questions;
