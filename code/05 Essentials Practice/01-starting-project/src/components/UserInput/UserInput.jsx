export default function UserInput({onChange, userInput, label, type}) {
  return (
    <section id="user-input" className="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type={type} required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type={type} required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type={type} required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type={type} required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)}/>
        </p>
      </div>
    </section>
  );
}
