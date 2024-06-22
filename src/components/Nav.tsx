import { Button, Flex, Grid, NavLink } from '@mantine/core';
import styles from './Nav.module.css'

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
    return ( 
      <div  className={styles.navcontainer}>
        {links.map((link: Link) => (
            <NavLink href={link.href} label={link.label} className={styles.navthing}/>      
        ))}
      </div>
    )
  }

export function Navbar(){

    return (
        

        <Links links={links} />
   

    )


}

