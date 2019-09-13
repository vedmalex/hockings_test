import React, { useState } from 'react';
import { LevelOfConcious, Section } from '../lib/types';
import { useFetch } from '../lib/useFetch';
import { useRouter } from 'next/router';

import Link from 'next/link';

let res = 20;
let quest = 0;
const Index = () => {
  const router = useRouter();
  let n = router.query.number;
  let number: number;
  if (Array.isArray(n)) {
    number = parseInt(n[0]);
  } else if (n) {
    number = parseInt(n);
  } else {
    number = 1;
  }

  const [result, setResult] = useState(res);
  const [answers, setAnswer] = useState({});

  const [section, loadingSection] = useFetch<Section>(
    `/api/questions?question=${number - 1 || quest}`,
  );
  const [levelDescription, loadingLevel] = useFetch<LevelOfConcious>(
    `/api/levels?level=${result || res}`,
  );
  const [level, setLevel] = useState<LevelOfConcious>({} as LevelOfConcious);
  if (!loadingLevel) {
    if (level.mark != levelDescription.mark) {
      setLevel(levelDescription);
    }
  }
  return (
    <>
      <h1> Результат теста Хокингса на осознанность: {result} </h1>
      <h4>множественный выбор</h4>
      <ol>
        <li>Восприятие Бога:{level.whoIsGod}</li>
        <li>Восприятие жизни: {level.lifeIs}</li>
        <li>Уровень: {level.level}</li>
        <li>Оценка: {level.mark}</li>
        <li>Эмоция: {level.emotion}</li>
        <li>Процесс: {level.process}</li>
      </ol>
      {loadingSection ? (
        'Loading...'
      ) : (
        <>
          <h2>
            {number}. {section.name}
          </h2>
          {section.questions.map((sq, item) => (
            <p key={`${number}${item}`}>
              {item + 1}. {sq.name}
              <input
                type="checkbox"
                onChange={e => {
                  e.target.checked
                    ? setResult((result * 10 + sq.mark) / 10)
                    : setResult((result * 10 - sq.mark) / 10);
                  e.target.checked
                    ? setAnswer({
                        ...answers,
                        [`${number}${item}`]: true,
                      })
                    : setAnswer({
                        ...answers,
                        [`${number}${item}`]: false,
                      });
                }}
                checked={answers[`${number}${item}`]}
              />
              ({sq.state})
            </p>
          ))}
          {section.hasPrev ? (
            <Link href={`/?number=${number - 1}`}>
              <a>Prev</a>
            </Link>
          ) : (
            <a>Prev</a>
          )}{' '}
          {section.hasNext ? (
            <Link href={`/?number=${number + 1}`}>
              <a>Next</a>
            </Link>
          ) : (
            <a>Prev</a>
          )}
        </>
      )}
    </>
  );
};

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
