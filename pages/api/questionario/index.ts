import { sortRandom } from "../../../functions/arrays";
import questoes from "../bancoquestoes";

export default (req, res) => {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(sortRandom(ids));
};
