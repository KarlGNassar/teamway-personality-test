import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Center,
  Divider,
  Flex,
  Group,
  Modal,
  Space,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import q from "@/data/questions";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

enum Action {
  UPDATE,
  ADD,
}

const index = () => {
  const [questions, setQuestions] = useState<typeof q>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [action, setAction] = useState<Action>();
  const [questionPrompt, setQuestionPrompt] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(-1);

  useEffect(() => {
    setQuestions(q);
  }, []);

  const handleDelete = (id: number) => {
    setQuestions((curr) => curr.filter((q) => q.id !== id));
  };

  const openModal = (id: number, open: any) => {
    // reset
    setQuestionPrompt("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");

    const question = questions.find((q) => q.id == id)!;
    setQuestionPrompt(question.prompt);
    setAnswer1(question.answers[0].text);
    setAnswer2(question.answers[1].text);
    setAnswer3(question.answers[2].text);
    setAnswer4(question.answers[3].text);

    setAction(Action.UPDATE);
    open();
    setSelectedQuestion(id);
  };

  const handleEdit = (id: number, close: any) => {
    const editedQuestions = questions.map((q) => {
      if (q.id == id) {
        return {
          id: id,
          prompt: questionPrompt,
          answers: [
            {
              text: answer1,
              points: 1,
            },
            {
              text: answer2,
              points: 2,
            },
            {
              text: answer3,
              points: 3,
            },
            {
              text: answer4,
              points: 4,
            },
          ],
        };
      }
      return q;
    });
    setQuestions(editedQuestions);
    close();
  };

  const handleAdd = (close: any) => {
    const newQuestion = {
      id: questions.length + 1,
      prompt: questionPrompt,
      answers: [
        {
          text: answer1,
          points: 1,
        },
        {
          text: answer2,
          points: 2,
        },
        {
          text: answer3,
          points: 3,
        },
        {
          text: answer4,
          points: 4,
        },
      ],
    };

    setQuestions((curr) => [...curr, newQuestion]);
    close();
  };

  const header = (
    <tr>
      <th>Id:</th>
      <th>Question:</th>
      <th>Actions</th>
    </tr>
  );

  const rows = questions.map((question) => (
    <tr key={question.id}>
      <td>
        <Badge variant="outline" color="secondary" size="lg">
          {question.id}
        </Badge>
      </td>
      <td>{question.prompt}</td>
      <td>
        <Group>
          <IconTrash
            color="red"
            cursor="pointer"
            onClick={() => handleDelete(question.id)}
          />
          <IconEdit
            cursor="pointer"
            onClick={() => {
              openModal(question.id, open);
            }}
          />
        </Group>
      </td>
    </tr>
  ));

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Modal opened={opened} onClose={close} withCloseButton={false} size="xl">
        <TextInput
          label="Question"
          placeholder="question"
          required
          value={questionPrompt}
          onChange={(e) => setQuestionPrompt(e.currentTarget.value)}
        />
        <Divider my="md" variant="dashed" />
        <TextInput
          label="Answer 1"
          placeholder="answer"
          required
          value={answer1}
          onChange={(e) => setAnswer1(e.currentTarget.value)}
        />
        <TextInput
          label="Answer 2"
          placeholder="answer"
          required
          value={answer2}
          onChange={(e) => setAnswer2(e.currentTarget.value)}
        />
        <TextInput
          label="Answer 3"
          placeholder="answer"
          required
          value={answer3}
          onChange={(e) => setAnswer3(e.currentTarget.value)}
        />
        <TextInput
          label="Answer 4"
          placeholder="answer"
          required
          value={answer4}
          onChange={(e) => setAnswer4(e.currentTarget.value)}
        />
        {action == Action.UPDATE ? (
          <>
            <Space h="md" />
            <Button
              color="secondary"
              onClick={() => handleEdit(selectedQuestion, close)}
            >
              Update
            </Button>
          </>
        ) : (
          <>
            <Space h="md" />
            <Button color="secondary" onClick={() => handleAdd(close)}>
              Add Question
            </Button>
          </>
        )}
      </Modal>
      <Center>
        <Flex direction="column">
          <Text size={40} py="xl">
            Admin Dashboard
          </Text>

          <Table striped highlightOnHover withBorder w="60vw">
            <thead>{header}</thead>
            <tbody>{rows}</tbody>
          </Table>
          <Space h="xl" />
          <Button
            color="tertiary"
            onClick={() => {
              setAction(Action.ADD);
              // reset
              setQuestionPrompt("");
              setAnswer1("");
              setAnswer2("");
              setAnswer3("");
              setAnswer4("");
              open();
            }}
          >
            Add Question
          </Button>
        </Flex>
      </Center>
    </div>
  );
};

export default index;
