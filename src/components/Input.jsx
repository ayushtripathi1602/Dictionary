import React, { useState } from 'react';
import './Input.css';

let apiKey = 'dfc059d9-282d-455e-9e39-eddf20614b3b';

async function getData(word, setDefinition) {
  const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);
  const data = await response.json();
  
  console.log(data);
  
  if (!data.length) {
    return;
  }
  
  workay.innerHTML= ''; 
  
  //if result are suggestions
  if(typeof data[0]==='string'){
    let heading= document.createElement('h3');
    heading.innerHTML = 'did you mean?'
    workay.appendChild(heading);
    
    
    data.forEach(element =>{
      let suggestion = document.createElement('span');
      suggestion.classList.add('suggested')
      suggestion.innerText = element;
      
      workay.appendChild(suggestion);
    })
    
    return ;
    
    
  }
  
  // Result when found
  const definition = data[0].shortdef[0];
  setDefinition(definition);
}

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [definition, setDefinition] = useState('');
  
  const handleSearchClick = async (e) => {
    e.preventDefault();
    
    let word = document.getElementById('input').value;
    
    if (word === '') {
      return;
    }
    
    await getData(word, setDefinition);
  };
  
  return (
    <div>
      <section className="input">
        <h2>Find Any word Exist in the word :)</h2>
        <h2 id='workay'></h2>
        <div className="form_wrap">
          <div className="input_wrap">
            <input
              type="text"
              id="input"
              placeholder="Type a Word"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              />
            <button id="search" onClick={handleSearchClick}>
              Search
            </button>
          </div>
          
        </div>
          
          {definition && (
            <div className="def">
              <p>{definition}</p>
            </div>
          )}
          
      </section>
    </div>
  );
};

export default Input;
