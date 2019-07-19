
import React, { useState } from 'react';
import { LevelOfConcious } from '../lib/types';
import { useFetch } from '../lib/useFetch';

let res = 20;
let quest = 0;
const Index = () => {
  const [result, setResult] = useState(res)
  const [question, setQuestion] = useState(quest)

  const [questions, loadingQuestions] = useFetch<any>("/api/questions");
  const [levelDescription, loadingLevel] = useFetch<LevelOfConcious>(`/api/levels?level=${result || 20}`);
  const [level, setLevel] = useState<LevelOfConcious>({} as LevelOfConcious);
  if(!loadingLevel){
    if (level.mark != levelDescription.mark) {
      setLevel(levelDescription)
    }
  }
  return (<>
    <h1> Результат теста Хокингса на осознанность: {result} </h1>
    <ol>
      <li>Восприятие Бога:{level.whoIsGod}</li>
      <li>Восприятие жизни: {level.lifeIs}</li>
      <li>Уровень: {level.level}</li>
      <li>Оценка: {level.mark}</li>
      <li>Эмоция: {level.emotion}</li>
      <li>Процесс: {level.process}</li>
    </ol>
    {
      loadingQuestions ? ("Loading...") : questions.map((q, index) => (
        <>
          <h2>{index + 1}. {q.name}</h2>
          {
            q.questions.map((sq, item) => (
              <p key={item}>
                {item + 1}. {sq.name}
                <input type="checkbox" onChange={(e) => e.target.checked ? setResult((result * 10 + sq.mark) / 10) : setResult((result * 10 - sq.mark) / 10)} />
                ({sq.state})
            </p>
            ))
          }
        </>)
      )}
  </>)
}

// Index.getInitialProps = async ()=>{
//   const res = await fetch('http://localhost:3000/api/levels');
//   const map = await res.json();

//   const resQ = await fetch('http://localhost:3000/api/questions');
//   const questions = await resQ.json();

//   return {
//     map,
//     questions
//   };
// }

export default Index;

