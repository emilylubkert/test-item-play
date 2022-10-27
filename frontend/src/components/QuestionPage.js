import { useState } from 'react';
import items from '../items'
import AnswerInput from './AnswerInput';
import Prompt from './Prompt';
import { testAPI } from '../services/'

function QuestionPage() {
    const testItems = items;
    const [currentItem, setCurrentItem] = useState(0)
    const [status, setStatus] = useState(`Items remaining: 6`)
    const [score, setScore] = useState(0)
    const [isCorrect, setIsCorrect ] = useState(false);
    const [studentInput, setStudentInput] = useState('');
    
     const handleAnswerButtonClick = async (answerInput) => {
      let nextItem = currentItem + 1;
      if(nextItem < testItems.length) {
          setCurrentItem(nextItem)
          setStatus(`Items remaining: ${testItems.length - nextItem}`)
      } else {
          setStatus('You have reached the end of the assessment')
      }
      let newScore = score;
      let isCurrentItemCorrect;
      if(answerInput === testItems[currentItem].answer) {
          newScore++;
          isCurrentItemCorrect = true;
          setScore(newScore);
          setIsCorrect(isCurrentItemCorrect);
          console.log('correct answer', isCurrentItemCorrect)
          console.log('score: ', newScore)
      } else {
        isCurrentItemCorrect = false;
          setIsCorrect(isCurrentItemCorrect);
          console.log('incorrect answer')
          console.log('score: ', newScore)
      }
      setStudentInput('');
      const response = await testAPI.answer(answerInput, isCurrentItemCorrect, newScore)
      console.log('response', response.data)
    }
  
    const handleChange = (event) => {
      setStudentInput(Number(event.target.value));
    }
  
    return (
      <div className='container'>
        <Prompt category={testItems[currentItem].category} questionText={testItems[currentItem].question} />
        <AnswerInput value={studentInput} onChange={handleChange} onClick={() => handleAnswerButtonClick(studentInput)} status={status}/>
      </div>
      
    );

}

export default QuestionPage;