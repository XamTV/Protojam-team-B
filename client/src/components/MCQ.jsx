import { useState, useEffect } from "react";
import axios from "axios";

import "../style/MCQ.scss";

function MCQ() {
  const [index, setIndex] = useState(1);
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = () => {
      axios
        .get(`https://protojam-team-b.onrender.com/questions`)
        .then((res) => {
          setQuestions(res.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getQuestions();
  }, []);

  return (
    <section className="MCQComponent">
      {questions
        .filter((question) => question.id === index)
        .map((question) => (
          <section key={question}>
            <h1>Question {question.id} </h1>
            <h2>{question.question}</h2>
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
          onClick={() =>
            axios
              .post("https://protojam-team-b.onrender.com/results", {
                result: `${points}`,
              })
              .then((res) => {
                console.info(res);
              })
              .catch((err) => {
                console.error(err);
              })
          }
        >
          Voir mon résultat
        </button>
      </div>
    </section>
  );
}

export default MCQ;
