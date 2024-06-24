import { Button, Checkbox, Fieldset, Group, NumberInput, Rating, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { number } from 'prop-types';
import React from 'react';
import { useState } from 'react';


class Example extends React.Component {
    constructor(props: number) {
      super(props);
      this.state = {value: 0}
    }
}


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
            <form onSubmit={handleSubmit} style={{marginTop: '70px'}}>
                <Fieldset legend="Entry">

                    <NumberInput
                        hideControls
                        label="Distance:"
                        suffix=" km"
                        defaultValue={0}
                        mt="md"
                        allowNegative={false}

                    />
                    <NumberInput
                        hideControls
                        label="Time:"
                        suffix=" min"
                        defaultValue={0}
                        mt="md"
                        allowNegative={false}

                    />
                    <br></br>
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
                </Fieldset>

                <Group justify="center" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </div>
    );
}