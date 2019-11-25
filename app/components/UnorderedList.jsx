import React from 'react';

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const UnorderedList = ({ items }) => (
  <ul>
    {items.map(function(item, i) {
      return <li key={i}>{item}</li>;
    })}
  </ul>
)

export default UnorderedList;
