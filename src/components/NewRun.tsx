import { Button, Center, Progress, Rating, Transition } from "@mantine/core";
import { useState } from "react";
import runStyles from "./NewRun.module.css"
import { Demo } from "./RunForm"
export function NewRun(){

    const [opened, setOpened] = useState(false);


    return (<>
    <Demo />
  {/*  <div className={runStyles.runcontainer}>
    
    

        <Button style={{marginTop: '50px'}}variant="filled" onClick={() => setOpened(true)} className={runStyles.awd}>New Run</Button>


        <Transition

        mounted={opened}
        transition="fade"
        duration={400}
        timingFunction="ease"
        >
        {(styles) => <div style={styles}><Demo /></div>}
        </Transition>

    

    
    </div>*/}
  
    </>
)
    
}