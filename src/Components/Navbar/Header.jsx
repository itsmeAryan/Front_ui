import React,{useState} from 'react';
import { StyleCss } from "../../Material/Style"
import { Icons } from "../../Material/Icons"
import { Cor } from "../../Material/MaterialCor"
import Avtar from "../../img/avtar.png"
function Header() {
    const [showSearch,setShowSearch]=useState(false);
    const showSearchBox=()=>{
        setShowSearch(!showSearch);
        console.log(showSearch);

    }
    const Style = StyleCss({showSearch});

    return <Cor.Navbar position='fixed'>
        <Cor.Tool className={Style.Toolbar}>
            <Cor.Heading variant='h5' color="inherit" className={Style.LogoLg}>
                MetaVerse
            </Cor.Heading>
            <Cor.Heading variant='h5' color="inherit" className={Style.LogoSm}>
                Meta
            </Cor.Heading>
            {/* search tool */}
            <Cor.Div className={Style.SearchBox}>
                
                <Icons.SearchIcon />
                <Cor.Input placeholder='Search' className={Style.inputSearch} />
                <Icons.Cancel className={Style.Cancel} onClick={showSearchBox}/>
            </Cor.Div>
            {/* icons */}
            <Cor.Div className={Style.MenuContainer}>
                <Icons.SearchIcon className={Style.HiddenSeacr} onClick={showSearchBox} />
                <Cor.Badge badgeContent={5} color="secondary" className={Style.badge}>
                    <Icons.Email />
                </Cor.Badge >
                <Cor.Badge badgeContent={5} color="secondary" className={Style.badge}>
                    <Icons.Notify />
                </Cor.Badge >
                <Cor.Img src={Avtar}></Cor.Img>
            </Cor.Div>
        </Cor.Tool>
    </Cor.Navbar>;
}

export default Header;