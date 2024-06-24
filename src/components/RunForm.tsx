import { Button, Checkbox, Group, Rating, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { number } from 'prop-types';
import { useState } from 'react';

export function Demo() {

    const [value, setValue] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
                <Group>
                    Enjoyment 
                    <Rating defaultValue={2} value={value} onChange={setValue} />
                </Group>

                <Group>
                    Challange 
                    <Rating defaultValue={2} value={value} onChange={setValue} />
                </Group>

                <Group>
                    Effort 
                    <Rating defaultValue={2} value={value} onChange={setValue} />
                </Group>

                <Group>
                    Soreness 
                    <Rating defaultValue={2} value={value} onChange={setValue} />
                </Group>
                <Group justify="center" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </div>
    );
}