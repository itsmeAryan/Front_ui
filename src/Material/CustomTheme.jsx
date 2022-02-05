import { createTheme } from "@material-ui/core";

export const Theme=createTheme({
    palette:{
        primary:{
            // use rgba rgb hsl
            main:"red",light:"green",
            dark:"black",contrastText:"transparent"
        }
    }
})