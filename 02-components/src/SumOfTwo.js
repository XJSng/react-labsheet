import React, { useState } from 'react';

const SumOfTwo = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleCalculate = () => {
    const total = parseInt(num1) + parseInt(num2);
    setSum(total);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button style={{
        backgroundColor: "cyan"
        
      }} onClick={handleCalculate}>Calculate Sum</button>
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
};

export default SumOfTwo;
