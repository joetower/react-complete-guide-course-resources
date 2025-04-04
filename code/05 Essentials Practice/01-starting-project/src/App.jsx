import { useState } from 'react';
import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Results from './components/Results/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 0, 
      annualInvestment: 0, 
      expectedReturn: 0, 
      duration: 0
    }
  );

  const inputIsValid = userInput.initialInvestment > 0 && userInput.annualInvestment > 0 && userInput.expectedReturn > 0 && userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className='error'>Please enter valid values</p>}
      {inputIsValid && <Results userInput={userInput} results={handleChange}/>}
    </>
  )
}

export default App
