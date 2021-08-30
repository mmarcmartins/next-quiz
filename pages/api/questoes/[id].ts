import questoes from "../bancoquestoes";

export default function handler(req, res) {
  const currentId = +req.query.id;
  const currentQuestion = questoes.filter(
    (questao) => questao.id === currentId
  );
  if (currentQuestion.length === 1) {
    const selectedQuestion = currentQuestion[0];
    res.status(200).json(selectedQuestion.toObject());
    return;
  }
  res.status(204).send();
}
