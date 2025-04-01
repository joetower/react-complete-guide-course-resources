import { useState } from 'react';
import { EXAMPLES } from '../../data.js';
import Tabs from '../Tabs/Tabs.jsx';
import TabButton from '../TabButton/TabButton.jsx';
import Section from '../Section/Section.jsx';
import Button from '../Button/Button.jsx';
import HomeIcon from '../Icons/HomeIcon.jsx';

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState();
      
    function handleSelect(selectedTab) {
      // selectedTab is the title of the tab that was clicked => 'component', 'jsx', 'props', 'state'
      setSelectedTab(selectedTab);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTab) {
      tabContent = (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTab].code}
          </code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" className="section--examples" title="Examples" level={2} custom-attribute="custom-value"> 
      <p>Time to get started!</p>
      <Button mode="filled" Icon={HomeIcon}>Start</Button>
      <Button mode="filled" disabled>
        Disabled
      </Button>
      <Button mode="outline">Outline</Button>
      <Button mode="text">Text</Button>
      <Tabs buttonsContainer="menu" buttons={
        <>
        <TabButton isSelected={selectedTab === 'components'} onClick={() => handleSelect('components')} title="Components"></TabButton>
        <TabButton isSelected={selectedTab === 'jsx'} onClick={() => handleSelect('jsx')} title="JSX"></TabButton>
        <TabButton isSelected={selectedTab === 'props'} onClick={() => handleSelect('props')} title="Props"></TabButton>
        <TabButton isSelected={selectedTab === 'state'} onClick={() => handleSelect('state')} title="State"></TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  );
}
