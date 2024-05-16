import { useState } from "react";

import questions from "../services/question";
import "../style/MCQ.scss";

function MCQ() {
  const [index, setIndex] = useState(1);
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState();

  return (
    <section className="MCQComponent">
      {questions
        .filter((question) => question.id === index)
        .map((question) => (
          <section key={question}>
            <h1>Question {question.id} </h1>
            <p>{question.question}</p>
            <form>
              <div>
                <input
                  id={question.id}
                  type="radio"
                  name="questions"
                  onChange={() => setSelected(1)}
                />
                <p>{question.reponse1}</p>
              </div>
              <div>
                <input
                  id={question.id}
                  type="radio"
                  name="questions"
                  onChange={() => setSelected(2)}
                />
                <p>{question.reponse2}</p>
              </div>
              <div>
                <input
                  id={question.id}
                  type="radio"
                  name="questions"
                  onChange={() => setSelected(3)}
                />
                <p>{question.reponse3}</p>
              </div>
              <div>
                <input
                  id={question.id}
                  type="radio"
                  name="questions"
                  onChange={() => setSelected(4)}
                />
                <p>{question.reponse4}</p>
              </div>
            </form>
          </section>
        ))}
      <div className="buttons">
        <button
          className={index >= questions.length ? "button hidden" : "button"}
          type="button"
          onClick={() => {
            setIndex(index + 1);

            setPoints(points + selected);
          }}
        >
          Question suivante
        </button>
        <button
          className={index === questions.length ? "button" : "button hidden"}
          type="button"
        >
          Voir mon résultat
        </button>
      </div>
    </section>
  );
}

export default MCQ;
