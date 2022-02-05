import React from 'react';
import { Sidebar as SideBars } from "../../Material/Style"
import { Icons } from "../../Material/Icons"
import { Cor } from "../../Material/MaterialCor"

function Sidebar() {
    const Classes = SideBars();

    const list=[{label:"Home",icon:<Icons.Home  className={Classes.Icon}/>},
    {label:"Friends",icon:<Icons.Friends  className={Classes.Icon}/>},
    {label:"Lists",icon:<Icons.Lists  className={Classes.Icon}/>},
    {label:"Camera",icon:<Icons.Camera  className={Classes.Icon}/>},
    {label:"Videos",icon:<Icons.Video  className={Classes.Icon}/>},
    {label:"Apps",icon:<Icons.Apps  className={Classes.Icon}/>},
    {label:"Collections",icon:<Icons.Collection  className={Classes.Icon}/>},
    {label:"Market Place",icon:<Icons.Market  className={Classes.Icon}/>},
    {label:"Setting",icon:<Icons.Settings  className={Classes.Icon}/>},
    {label:"Logout",icon:<Icons.Logout  className={Classes.Icon}/>},]
    return <Cor.Container position="sticky" className={Classes.SideContainer}>
        {list.map((x,i)=>(
            <div key={i} className={Classes.Item}>
                {x.icon}
            <Cor.Heading className={Classes.Text}>
                {x.label}
            </Cor.Heading>
        </div>
        ))}
        
    </Cor.Container>;
}

export default Sidebar;