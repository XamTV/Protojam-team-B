import { useState } from "react";
import MCQ from "../components/MCQ";
import "../style/Quizz.scss";
import Result from "../components/Result";

export default function Quizz() {
  const [data, setData] = useState(null);

  return !data ? (
    <div id="QuizzContainer">
      <MCQ setData={setData} />
    </div>
  ) : (
    <div id="QuizzContainer">
      <Result data={data} />
    </div>
  );
}
