import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";


export default function Question({ data }) {

  const questions = data.results;

  const playerInfo = useSelector((state) => state);

  const[currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const[score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if(answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    };
    questions.shift();
    setCurrentQuestion(questions[0]);
  };

  return questions.length <= 0 ? (
    <StyledFieldSet>
    <StyledLegend>Score</StyledLegend>
    <h1>{score}</h1>
    <StyledPlayAgain onClick={() => window.location.reload()}>Play Again</StyledPlayAgain>
  </StyledFieldSet>
  ) : questions ? (<StyledDivWrapper>
    <StyledPainel>
      {/* <StyledPainelQuestion>{questions.length}/10</StyledPainelQuestion> */}
      <StyledRestart onClick={() => window.location.reload()}>Restart</StyledRestart>
     <StyledPainelPlayerName>{playerInfo.name}</StyledPainelPlayerName>
     <StyledPainelScore>{score}</StyledPainelScore>
    </StyledPainel>
    {currentQuestion.question && (<StyledQuestion><h1 dangerouslySetInnerHTML={{__html: currentQuestion.question}}></h1> </StyledQuestion>)}
    <StyledListOfAnswers>
      {currentQuestion.question && ([currentQuestion.correct_answer, 
      ...currentQuestion.incorrect_answers].sort(() => Math.random() - 0.5).map(
      answer => (<StyledAnswer key={answer} onClick={() => handleAnswer(answer)} 
      ><h2 dangerouslySetInnerHTML={{__html: answer}}></h2></StyledAnswer>)))} 
    </StyledListOfAnswers>
  </StyledDivWrapper>) : (<h1>Loading</h1>);
};

const StyledDivWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 0.25fr 0.6fr 0.05fr;
  width: 1000px;
  min-height: 800px;
  padding: 0 20px;
  border-radius: 5px;
  border: solid 5px #3cc368;
`;

const StyledPainel = styled.div`
  box-shadow:0 2px 8px rgba(0, 0, 0, 0.5), 0 0 80px rgba(0, 0, 0, 0.3) inset;
  background-color: #312520;
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  grid-template-rows: repeat(1, 1fr);
  border-radius: 5px;
  height: 50px;
  margin: 10px 10px 10px 10px;
`;

const StyledPainelQuestion = styled.div`
  width: auto/3;
  background-color: #1d2935;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 900;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  font-size: 20px;
  color: white;
`;

const StyledPainelPlayerName = styled.div`
  width:auto/3;
  background-color: #1d2935;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  font-weight: 900;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  font-size: 20px;
`;

const StyledPainelScore = styled.div`
  width:auto/3;
  background-color: #1d2935;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.6rem;
`;

const StyledAnswer = styled.button`
  background: red;
  padding: 5px;
  border-radius: 5px;
  min-width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 900;
  background-color: transparent;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  border: solid 3px #3cc368;
  color: whitesmoke;
  &:hover {
    box-shadow: 0 0 40px 40px #3cc368 inset;
    cursor: pointer;
  }  
`;

const StyledListOfAnswers = styled.div`
  list-style-type: none;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
  gap: 20px;
`;

const StyledPlayAgain = styled(StyledAnswer)`
  margin-top: 20px ;
`;

const StyledFieldSet = styled.fieldset`
  border-radius: 10px;
  padding: 30px;
  border: solid 5px #3cc368;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.7rem;
  font-weight: 900;
`;

const StyledLegend = styled.legend`
  font-size: 2rem;
  font-weight: 900;
  margin-left: auto;
  margin-right: auto;
`;

const StyledRestart = styled(StyledAnswer)`
  border: 0;
  background: #1d2935;
`;


