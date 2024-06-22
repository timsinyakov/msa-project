import { Button, Center, useComputedColorScheme, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import styles from './Header.module.css'
import { FaSun, FaMoon } from "react-icons/fa";


export function Header(){
    const { setColorScheme } = useMantineColorScheme();


    const theme = useComputedColorScheme('light');
    
    const toggleColorScheme = () => {
        setColorScheme(theme === 'dark' ? 'light' : 'dark');
        
      };

 


    return (
        <>
            <div className={styles.header_container}>
                
                <h1>RUN JOURNEY</h1>
                

                <Button variant="outline" color={theme === 'dark' ? 'white' : 'black'} onClick={toggleColorScheme} style={{ color: theme === 'dark' ? 'white' : 'black'}}>
                    {theme === "dark"? <><FaSun style={{marginRight: '10px'}} /> Light Mode</>: <><FaMoon style={{marginRight: '10px'}}/> Dark Mode</>}
                </Button>
                
            </div>
        <hr />
        </>

    );
}