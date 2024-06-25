import { Button, Checkbox, Fieldset, Group, NumberInput, Rating, Space, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { number } from 'prop-types';
import React from 'react';
import { useState } from 'react';
import classes from './RunForm.module.css'


export function Demo() {

    const [enjoyment, setEnjoyment] = useState(0);
    const [challenge, setChallenge] = useState(0);
    const [effort, setEffort] = useState(0);
    const [soreness, setSoreness] = useState(0);

    const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            console.log({ enjoyment, challenge, effort, soreness });
            setEnjoyment(0);
            setChallenge(0);
            setEffort(0);
            setSoreness(0);
    };

    const form = useForm({
        mode: 'uncontrolled',
    });



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
                        classNames={{wrapper: classes.wrapper}}
                    />
                    <NumberInput
                        hideControls
                        label="Time:"
                        suffix=" min"
                        defaultValue={0}
                        mt="md"
                        allowNegative={false}

                    />
                    <Space h="xl"/>
                    
                    <Group justify='space-between'>
                        Enjoyment:
                        <Rating defaultValue={2} value={enjoyment} onChange={setEnjoyment} size="xl"/>
                    </Group>
                    <Group justify='space-between'>
                        Challange: 
                        <Rating defaultValue={2} value={challenge} onChange={setChallenge} size="xl"/>
                    </Group>

                    <Group justify='space-between'>
                        Soreness:
                        <Rating defaultValue={2} value={soreness} onChange={setSoreness} size="xl" />
                    </Group>

                    <Group justify='space-between'>                   
                        Effort: 
                        <Rating defaultValue={2} value={effort} onChange={setEffort} size="xl"/>
                    </Group>
                    <Space h="lg"/>
                    <Textarea label="Notes" description="This will be visible in journal" autosize minRows={3}/>
                </Fieldset>

                <Group justify="center" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </div>
    );
}