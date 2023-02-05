import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [theme,setTheme]=useState(false);

    const toggle=()=>{
        if(theme==false){
            setTheme('Dark');
        }else{
            setTheme('Light')
        }
    }

    useEffect(()=>{
        const ourTheme=localStorage.getItem('Theme');
        if(ourTheme){
            setTheme(ourTheme)
        }
    },[])
    return [
        theme,
       toggle
    ]
};

export default useDarkMode;
