import reactImg from '../../assets/investment-calculator-logo.png';
import './Header.css';


export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized money" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
