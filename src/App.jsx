import React from 'react';
import { Cor } from "./Material/MaterialCor"
// import {Icons} from "./Material/Icons"
import { Apps} from "./Material/Style"
import Header from './Components/Navbar/Header';
import Sidebar from './Components/Navbar/Sidebar';
import { Icon } from '@material-ui/core';
import Feed from "./Components/Navbar/Feed"
import RightBar from "./Components/Navbar/RightBar"
import Add from './Components/Navbar/Add';

function App() {
    const Classes=Apps();
    return <div>
        <Header />
        <Cor.Grid container direction='row'  justifyContent='space-between' className={Classes.Home}>
            <Cor.Grid item xs={2} sm={2}> 
                   <Sidebar />
            </Cor.Grid>
            <Cor.Grid item xs={10} sm={7}>
                <Feed />
            </Cor.Grid>
            <Cor.Grid item className={Classes.Right} sm={3}>
                <RightBar />
            </Cor.Grid>

        </Cor.Grid>
        <Add/>
    </div>
        ;
}

export default App;