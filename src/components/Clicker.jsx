import { useState } from 'react';

export const Clicker = ({ value, onUpdate }) => {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
    onUpdate();
  };

  return (
    <div style={{ padding: 4, border: '1px solid black' }}>
      <button onClick={onUpdate}>Update total clicks - {value}</button>
      <button onClick={handleClicks}>Update my clicks - {clicks}</button>
    </div>
  );
};
