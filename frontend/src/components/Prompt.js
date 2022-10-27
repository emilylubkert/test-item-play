function Prompt({ category, questionText }) {
  return (
    <>
      <h2 className='category'>{category}</h2>
      <div className='question-text'>{questionText}</div>
    </>
  );
}

export default Prompt;