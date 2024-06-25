import { Button, Fieldset, Slider } from "@mantine/core";
import { useState } from "react";
import goalStyle from './SetGoal.module.css'


export function SetGoal(){
    
    const [value, setValue] = useState(0);

    function handeClick(value: number){
        console.log(value)
    }

    return (    
        


        <div className={goalStyle.goalcontainer}>
            <h1>Set Weekly Goal</h1>
            <Slider value={value} onChange={setValue} label={(value) => `${value} km`} labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}

            color="blue"
            marks={[
                { value: 0, label: '0km' },
                { value: 25, label: '25km' },
                { value: 50, label: '50km' },
                { value: 75, label: '75km' },
                { value: 100, label: '100km' },

            ]}

            
            />

            <Button variant="filled" style={{marginTop: '50px'}} onClick={() => handeClick(value)}>Set Goal</Button>


        </div>
      );



}