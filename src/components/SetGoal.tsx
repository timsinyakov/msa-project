import { Button, Slider } from '@mantine/core';
import { useState } from 'react';

import { useUsers } from '../Hooks/useUsers';

export function SetGoal() {
  const [value, setValue] = useState(40);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    // Call your second function here
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', paddingTop: '50px' }}>
      <Slider
        value={value}
        onChange={handleChange}
        color="blue"
        marks={[
          { value: 0, label: '0km' },
          { value: 25, label: '25km' },
          { value: 50, label: '50km' },
          { value: 75, label: '75km' },
          { value: 100, label: '100km' },
        ]}
      />
    </div>
  );
}
