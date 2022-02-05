import {alpha, makeStyles} from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
export const StyleCss=makeStyles((theme)=>({
 Box:{
     padding:"3px",
     color:grey["500"],
     fontWeight:"600",
    
 },
//  Header
  Toolbar:{
     display:"flex",justifyContent:"space-between",
     alignItems:"center",
     backgroundColor:blue["A200"]
 },
//  for our logo
 LogoLg:{
    [theme.breakpoints.down("xs")]:{
        display:"none"
    }
 },
 LogoSm:{
     display:"none",
     [theme.breakpoints.down("xs")]:{
         display:"flex"
     }
 }
 ,
//  search box
 SearchBox:{
     display:"flex",alignItems:"center",
     color:"white",
     backgroundColor:alpha(theme.palette.common.white,0.15),
     "&:hover":{
         backgroundColor:alpha(theme.palette.common.white,0.25)
     },
     borderRadius:theme.shape.borderRadius,
     width:"45%",
     [theme.breakpoints.down("xs")]:{
        display:(props)=>props.showSearch?"flex":"none",
        width:"60%"
    }
 },
 inputSearch:{
     color:"white",
     width:"100%",
    //  1 ===8px
     marginLeft:theme.spacing(2),
 }
,
// cancel button 
Cancel:{
    display:"none",
    [theme.breakpoints.down("xs")]:{
        display:"flex"
    },
},
//  menu icons
MenuContainer:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    display:(props)=>props.showSearch?"none":"flex",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }

},

badge:{
    marginRight:theme.spacing(2)
},
// hidden search bar
HiddenSeacr:{
    display:"none",
    [theme.breakpoints.down("xs")]:{
        display:"flex"
    },
    marginRight:theme.spacing(2)

}

}));
export const Sidebar=makeStyles((theme)=>({
    SideContainer:{
        backgroundColor:theme.palette.primary.main,
        paddingTop:theme.spacing(10),
        position:"sticky",
        top:0,
        color:"white",
        [theme.breakpoints.up("sm")]:{
            backgroundColor:"white",
            color:"#555",
            border:"1px solid #999"
         }
    },
    Item:{
        display:"flex",
        alignItems:"center",
        marginBottom:theme.spacing(4),
        [theme.breakpoints.down("sm")]:{
            marginBottom:theme.spacing(3)
        }
        ,
        cursor:"pointer"
        
    },
    Text:{
        fontWeight:"500",
        [theme.breakpoints.down("xs")]:{
           display:"none"
        }
    },
    Icon:{
        marginRight:theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            fontSize:"18px"
        }
    }
}));
export const Apps=makeStyles((theme)=>({
    Home:{
        width:"100%",
        marginLeft:"0",
        marginRight:"0",
        paddingLeft:"0",
        paddingRight:"0",
        display:"flex",
        position:"sticky",
        top:0,
// border:"2px solid orange"
      
    }
    ,
    Right:{
        [theme.breakpoints.down("xs")]:{
            display:"none"
         }
    }
}));
export const Feedcon=makeStyles((theme)=>({
    SideContainer:{
        paddingTop:theme.spacing(8.5),
        marginBottom:theme.spacing(3),
        // border:"2px solid orange"
    },
}));
export const RightBars=makeStyles((theme)=>({
    SideContainer:{
        paddingTop:theme.spacing(8.5),
        
    },
    title:{
        fontSize:"16px",
        fontWeight:500
    },
}));
export const Post=makeStyles(theme=>({
    Card:{marginBottom:theme.spacing(5)},
    CardImg:{
        height:"250px",
        [theme.breakpoints.down("sm")]:{
            height:"150"
        }

    },

}));
export const AddPost=makeStyles((theme)=>({
    fab:{
        position:"fixed",
        bottom:10,
        right:25,
    },
    style : {
       width:500,
       height:550,
       backgroundColor:"white",
       position:"absolute",
       top:0,
       left:0,
       right:0,
       bottom:0,margin:"auto",
       [theme.breakpoints.down("sm")]:{
        height:"100vh",
        width:"100vw",
    },
    display:"flex"
      },
      Form:{
          padding:theme.spacing(2),
          width:500,
          display:"flex"
      }
      ,
      Item:{
          marginBottom:theme.spacing(3),
         
      }
}))