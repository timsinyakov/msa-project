import { Button, Flex, Grid, NavLink } from '@mantine/core';
import styles from './Nav.module.css'
import { useState } from 'react';

type Link = {
    label: string;
    href: string;
  }
  
  const links = [
    {
      "label": "journal",
      "href": "/journal"
    },
    {
      "label": "stats",
      "href": "/stats"
    },
    {
      "label": "run!",
      "href": "/run"
    },
    {
      "label": "goal",
      "href": "/goal"
    },
    {
      "label": "about",
      "href": "/about"
    },
  
  ]

const Links: React.FC<{links: Link[]}> = ({links}) => {
  
  const [active, setActive] = useState(0);

    return ( 
      <div  className={styles.navcontainer}>
        {links.map((link, index) => (
            <NavLink active={index === active}       onClick={() => setActive(index)}
            styles={{label: {padding: '50px'}}} key={link.label} href={link.href} label={link.label}/>      
        ))}
      </div>
    )
  }

export function Navbar(){

    return (
        

        <Links links={links} />
   

    )


}

