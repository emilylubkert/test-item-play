function AnswerInput({value, onChange, onClick, status}) {
     return (
        <div className='answer-input'>
        <label hidden>Type answer here</label>
        <input type='number' className='studentInput' value={value} onChange={onChange} placeholder='Type answer here...' />
        <button className="submit-btn" onClick={onClick}>Submit</button>
        <p className='status'>{status}</p>
      </div>
     )
}

export default AnswerInput;