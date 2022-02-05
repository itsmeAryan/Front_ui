import React, { useState } from 'react';
import { AddPost } from "../../Material/Style"
import { Icons } from "../../Material/Icons"
import { Cor } from "../../Material/MaterialCor"

function Add() {
    const Classes = AddPost();
    const [OpenAler,setAlert]=useState(false);
    const alertModal=(event,reason)=>{
        setModal(!OpenModal);

       if(reason==='clickaway'){return;}
         setAlert(!OpenAler);
        // setModal(!OpenModal);

    };

    const [OpenModal, setModal] = useState(false);
    const ClickToOpen = () => {
        setModal(!OpenModal);
        console.log(OpenModal)
    }
    return <>
        <Cor.Tip title="Add" aria-label="Add" onClick={ClickToOpen} >
            <Cor.Fab color="primary" className={Classes.fab}>
                <Icons.Plus />
            </Cor.Fab>
        </Cor.Tip>
        <Cor.Modal
            open={OpenModal}
            onClose={ClickToOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Cor.Container className={Classes.style}>
                <div className={Classes.Form} style={{  display: "flex", flexDirection: "column" }}>
                    <div className={Classes.Item}>
                        <Cor.Textinput variant="outlined"  style={{width:"100%"}}  label="Enter Name" id="fullWidth" />

                    </div>
                    <div className={Classes.Item}> <Cor.Textinput variant="outlined" style={{width:"100%"}} label="Enter Email" id="fullWidth" /></div>
                    <div className={Classes.Item}> <Cor.Textinput variant="outlined" style={{width:"100%"}} label="Enter Password" id="fullWidth" /></div>
                    <div className={Classes.Item}> <Cor.Textinput variant="outlined" style={{width:"100%"}} label="Confirm Password" id="fullWidth" /></div>
                    <div className={Classes.Item}> <Cor.Textinput variant="outlined" style={{width:"100%"}} select label="Select" id="fullWidth" >
                        <Cor.MenuItem value="Web Developer">

                            Web Developer
                        </Cor.MenuItem>
                        <Cor.MenuItem value="SoftWare Developer">

                            SoftWare Developer
                        </Cor.MenuItem>
                        <Cor.MenuItem value="Android Developer">
                            Android Developer

                        </Cor.MenuItem>
                    </Cor.Textinput>
                    </div>
                    <div  className={Classes.Item}>
                        <Cor.Btn variant="outlined" color="primary" style={{marginRight:"20px"}} onClick={alertModal}>Create</Cor.Btn>
                        <Cor.Btn variant="outlined" color="secondary" onClick={ClickToOpen}>Cancel</Cor.Btn>

                    </div>

                </div>

            </Cor.Container>

        </Cor.Modal>
        <Cor.Snack  open={OpenAler} autoHideDuration={5000} onClose={alertModal}>
<Cor.MuiAlert onClose={alertModal} severity='success'>
    this is a success message
</Cor.MuiAlert>
        </Cor.Snack>


    </>
}

export default Add;