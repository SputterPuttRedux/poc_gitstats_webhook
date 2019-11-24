const React = require('react');

/* takes an array prop 'items' and returns a <ul> element
=======
/* takes an array prop 'items' and returns a <ul> element
>>>>>>> 2d5746ea6447da40d219733fdcd7ea044d1148c5
   with each item as <li> elements */
const UnorderedList = function({ items }) {
  return (
    <ul>
      {items.map(function(item, i) {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
}

module.exports = UnorderedList;
