import React from 'react';
import {RightBars} from "../../Material/Style"
import {Icons} from "../../Material/Icons"
import {Cor} from "../../Material/MaterialCor"

function RightBar() {
    const Classes=RightBars()
    return <Cor.Container className={Classes.SideContainer}>
   <Cor.Heading className={Classes.title} gutterBottom>Online Friends</Cor.Heading>
   <Cor.AvtarGr gutterBottom style={{marginBottom:"20px"}} max={5}>
       <Cor.Img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"></Cor.Img>
       <Cor.Img src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"></Cor.Img>
       <Cor.Img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"></Cor.Img>
       <Cor.Img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"></Cor.Img>
       <Cor.Img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"></Cor.Img>
       <Cor.Img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"></Cor.Img>
       <Cor.Img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"></Cor.Img>
       <Cor.Img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"></Cor.Img>

   </Cor.AvtarGr>
   <Cor.Heading className={Classes.title} gutterBottom variant="h5">
       Gallery Photos
   </Cor.Heading>
   <Cor.ImageList style={{marginBottom:"20px"}} rowHeight={100} className={Classes.Imagelist} cols={2}>
<Cor.ImageItem>
    <img src={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"}/>
</Cor.ImageItem>
<Cor.ImageItem>
    <img src={"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"}/>
</Cor.ImageItem><Cor.ImageItem>
    <img src={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=formathttps://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=formathttps://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"}/>
</Cor.ImageItem><Cor.ImageItem>
    <img src={"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"}/>
</Cor.ImageItem><Cor.ImageItem>
    <img src={"https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"}/>
</Cor.ImageItem><Cor.ImageItem>
    <img src={"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"}/>
</Cor.ImageItem><Cor.ImageItem>
    <img src={"https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"}/>
</Cor.ImageItem><Cor.ImageItem>
    <img src={"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"}/>
</Cor.ImageItem>
   </Cor.ImageList>
   
    </Cor.Container>;
}

export default RightBar;