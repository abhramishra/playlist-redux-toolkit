// import React from "react";

// export default function Child({ handleClick }) {
// console.log("Child re-render")
//   return (
//     <>
//       <div>Child</div>
//       <button onClick={handleClick}>Child click</button>
//     </>
//   );
// }

import React from 'react';

// ✅ Using React.memo to avoid unnecessary re-renders
const Child = React.memo(({ onClick }) => {
  console.log('👶 Child rendered');

  return (
    <div>
      <button onClick={onClick}>Click Me (Child)</button>
    </div>
  );
});

export default Child;

