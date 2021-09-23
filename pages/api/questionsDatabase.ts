import QuestaoModel from "../../model/Question";
import RespostaModel from "../../model/Answer";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, "Qual bicho transmite a doença de chagas", [
    RespostaModel.errada("Abelha"),
    RespostaModel.errada("Barata"),
    RespostaModel.errada("Pulga"),
    RespostaModel.certa("Barbeiro"),
  ]),
  new QuestaoModel(203, "Qual é o coletivo de cães", [
    RespostaModel.errada("Manada"),
    RespostaModel.errada("Alcateia"),
    RespostaModel.errada("Rebanho"),
    RespostaModel.certa("Matilha"),
  ]),
];

export default questoes;
