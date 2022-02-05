import React from 'react';
import {Post} from "../../Material/Style"
import {Icons} from "../../Material/Icons"
import {Cor} from "../../Material/MaterialCor"
import Card from "../../img/card.jpg"

function Posts({src}) {
    const Classes=Post()
    return <Cor.Card className={Classes.Card}>
      <Cor.CardActionArea>
          <Cor.CardImg className={Classes.CardImg}
          component="img"
          image={src===''?Card:src}
          alt="green iguana" />
        <Cor.CardContent>
            <Cor.Heading gutterBottom variant="h5">
                My Firs Post Ever
            </Cor.Heading>
            <Cor.Heading variant="body1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur deleniti odit tempore vero enim maiores natus ipsam voluptatum doloremque molestias accusamus aut quas sequi ratione esse delectus nemo, dolorum illum necessitatibus, vitae, magnam possimus.
            </Cor.Heading>
        </Cor.CardContent>
        <Cor.CardActions>
            <Cor.Btn color="primary" size="small">Share</Cor.Btn>
            <Cor.Btn color="primary" size="small">Learn More</Cor.Btn>

        </Cor.CardActions>
      </Cor.CardActionArea>
    </Cor.Card>;
}

export default Posts;