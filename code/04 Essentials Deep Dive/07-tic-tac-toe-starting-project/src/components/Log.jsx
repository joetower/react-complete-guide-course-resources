export default function Log({turns}) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row}-${turn.square.col}-${index}`}>
          <span>{turn.player}</span>
          <span>({turn.square.row}, {turn.square.col})</span>
        </li>
      ))}
    </ol>
  );
}
