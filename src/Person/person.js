// import React from "react";

// const person = (props) => {
//   return (
//     <div className="person">
//       <p onClick={props.click}>
//         I am {props.name} and my age is {props.age}.
//       </p>
//       <input type="text" onChange={props.changed} />
//     </div>
//   );
// };
// export default person;

import React from "react";

const Person = (props) => {
  return (
    <div className="person">
      <p onClick={props.clicked}>
        Hello I am {props.name} and my age is {props.age}
      </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
