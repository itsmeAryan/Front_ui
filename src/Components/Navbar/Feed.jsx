import React from 'react';
import {Feedcon} from "../../Material/Style"
import {Icons} from "../../Material/Icons"
import {Cor} from "../../Material/MaterialCor"
import Posts from './Posts';
import Card from "../../img/p.jpg"

function Feed() {
    const Classes=Feedcon()
    return <Cor.Container className={Classes.SideContainer}>
    <Posts src={Card}/>
    {/* <Posts src={''}/>
    <Posts src={''}/>
    <Posts src={''}/> */}

    </Cor.Container>;
}

export default Feed;