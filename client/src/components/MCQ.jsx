import { useState, useEffect } from "react";
import axios from "axios";

import "../style/MCQ.scss";

function MCQ() {
  const [index, setIndex] = useState(1);
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState();
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(10);

  const handlePlusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 10;
      return newProgress;
    });
  };

  useEffect(() => {
    const getQuestions = () => {
      axios
        .get(import.meta.env.VITE_API_URL)
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
            <p>{question.question}</p>
            <form>
              <div>
                <input
                  type="radio"
                  name="questions"
                  checked
                  onChange={() => setSelected(1)}
                />
                <p>{question.reponse1}</p>
              </div>
              <div>
                <input
                  type="radio"
                  name="questions"
                  onChange={() => setSelected(2)}
                />
                <p>{question.reponse2}</p>
              </div>
              <div>
                <input
                  type="radio"
                  name="questions"
                  onChange={() => setSelected(3)}
                />
                <p>{question.reponse3}</p>
              </div>
              <div>
                <input
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
          id="plus-button"
          onClick={() => {
            setIndex(index + 1);
            handlePlusClick();
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
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <div className="progress-value">{progress} %</div>
      </div>
    </section>
  );
}

export default MCQ;
