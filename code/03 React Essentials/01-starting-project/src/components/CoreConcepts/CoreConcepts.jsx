import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from '../CoreConcept/CoreConcept.jsx';

export default function CoreConcepts() {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} key={conceptItem.title} />
        ))}
        {/* Uncomment the following lines to use hardcoded values instead of mapping */}
        {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} alt={CORE_CONCEPTS[0].alt} />
        <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} alt={CORE_CONCEPTS[1].alt} />
        <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} alt={CORE_CONCEPTS[2].alt} />
        <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} alt={CORE_CONCEPTS[3].alt} /> */}
      </ul>
    </section>
  )
};
