import { sortRandom } from '../functions/arrays';
import RespostaModel from './Answer';

export default class QuestaoModel {
  #id: number;
  #enunciado: string;
  #respostas: RespostaModel[];
  #acertou: boolean;

  constructor(
    id: number,
    enunciado: string,
    respostas: RespostaModel[],
    acertou = false,
  ) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
  }

  get id() {
    return this.#id;
  }
  get enunciado() {
    return this.#enunciado;
  }

  get acertou() {
    return this.#acertou;
  }
  get respostas() {
    return this.#respostas;
  }

  get notAnswers() {
    return !this.respondida;
  }

  get respondida() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }

  setAnswer(selectedIndex: number): QuestaoModel {
    const isCorrect = this.#respostas[selectedIndex]?.certa;
    const answers = this.#respostas.map((answer) => {
      return answer.reveal();
    });
    return new QuestaoModel(this.#id, this.#enunciado, answers, isCorrect);
  }

  sortAnswers(): QuestaoModel {
    const sorted = sortRandom(this.#respostas);
    return new QuestaoModel(this.#id, this.#enunciado, sorted, this.#acertou);
  }

  static toModel(objQuestion: QuestaoModel): QuestaoModel {
    const answersModel = objQuestion.respostas.map((resp) =>
      RespostaModel.toModel(resp),
    );

    return new QuestaoModel(
      objQuestion.id,
      objQuestion.enunciado,
      answersModel,
      objQuestion.acertou,
    );
  }

  toObject() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map((resp) => resp.toObject()),
      acertou: this.#acertou,
    };
  }
}
