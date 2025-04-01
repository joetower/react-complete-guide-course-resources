import React from 'react';
export default function Section({ title, children, level = 2, id, className = 'section', ...props }) {
  return (
    <section id={id} className={className} {...props}>
      {React.createElement(`h${level}`, null, title)}
      {children}
    </section>
  );
}
