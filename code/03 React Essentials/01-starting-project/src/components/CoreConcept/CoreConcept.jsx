import './CoreConcept.css';

export default function CoreConcept({image, title, description, alt}) { 
  // Destructuring props for better readability
  return (
    <li>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
