import React, { useCallback, useState } from 'react';

const Child = React.memo(function Child({ onClick, count }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me {count}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

//   // without useCallback
//   const handleClick = () => {
//   console.log('clicked');
// };

//with useCallback

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);


  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} count={count} />
    </div>
  );
}
export default Parent;