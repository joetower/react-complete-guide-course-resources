import './TabButton.css';

export default function TabButton({ title, isSelected, ...props }) {
  return (
  <li>
    <button className={isSelected ? 'active' : undefined} {...props}>{title}</button>
  </li>
  );
}
