import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//     background-image: url(${db.bg});
//     flex: 1;
//     background-size: cover;
//     background-position: center;
// `;

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    };
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Meu quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Título do Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            {/* eslint-disable-next-line func-names */}
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                // eslint-disable-next-line func-names
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Qual seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Outros Quizes</h1>

          </Widget.Header>
          <Widget.Content>
            <p>Aqui vem a explicação...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dlcorreia/aluraQuiz" />
    </QuizBackground>
  );
}
