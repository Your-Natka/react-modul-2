// import { useState } from 'react';
// import { Clicker } from './Clicker';
import { Reader } from './Reader';
import articles from '../articles.json';

export const App = () => {
  return (
    <div>
      <Reader items={articles} />
    </div>
  );
};

// export const App = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <p>Total click: {count}</p>
//       <Button value={count} onUpdate={handleClick} />
//       <Button value={count} onUpdate={handleClick} />
//       <Button value={count} onUpdate={handleClick} />
//     </div>
//   );
// };
