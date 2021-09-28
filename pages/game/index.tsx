import { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import QuestaoModel from "../../model/Question";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestaoModel>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const loadQuestionsIds = async () => {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const ids = await resp.json();
    setQuestionsIds(ids);
  };

  const loadQuestion = async (questionId: number) => {
    const resp = await fetch(`${BASE_URL}/questoes/${questionId}`);
    const question = await resp.json();
    const newQuestion = QuestaoModel.toModel(question);
    setCurrentQuestion(newQuestion);
  };

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0]);
  }, [questionsIds]);

  const responseQuestion = (question: QuestaoModel) => {
    setCurrentQuestion(question);
    const isCorrect = question.acertou;
    setCorrectAnswers(correctAnswers + (isCorrect ? 1 : 0));
  };

  const getNextQuestionId = () => {
    const nextId = questionsIds.indexOf(currentQuestion.id) + 1;
    return questionsIds[nextId];
  };

  const goToNext = () => {
    const nextId = getNextQuestionId();
    nextId ? nextQuestion(nextId) : endGame();
  };

  const nextQuestion = (nextId: number) => {
    loadQuestion(nextId);
  };

  const endGame = () => {
    router.push({
      pathname: "/resultado",
      query: {
        totalQuestions: questionsIds.length,
        correctAnswers: correctAnswers,
      },
    });
  };

  return currentQuestion ? (
    <Form
      question={currentQuestion}
      last={getNextQuestionId() === undefined}
      responseQuestion={responseQuestion}
      next={goToNext}
    />
  ) : (
    false
  );
}
