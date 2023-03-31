import React from "react";
import { Text } from "@mantine/core";

interface ResultProps {
  answers: number[];
}

const Result: React.FC<ResultProps> = ({ answers }) => {
  return (
    <div>
      <Text>Results Are In!</Text>
    </div>
  );
};

export default Result;
