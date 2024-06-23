import { Button, Slider } from "@mantine/core";
import { useState } from "react";
import goalStyle from './SetGoal.module.css'


export function SetGoal(){
    
    const [value, setValue] = useState(0);

    function handeClick(value: number){
        console.log(value)
    }

    return (    


        <div className={goalStyle.goalcontainer}>
            <p>Weekly</p>
            <Slider value={value} onChange={setValue}
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