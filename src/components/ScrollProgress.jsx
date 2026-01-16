import { useEffect, useState } from "react";

export default function ScrollProgress(){
 const [p,setP]=useState(0);
 useEffect(()=>{
  const s=()=>{
   const h=document.documentElement;
   setP(h.scrollTop/(h.scrollHeight-h.clientHeight)*100);
  };
  window.addEventListener("scroll",s);
  return()=>window.removeEventListener("scroll",s);
 },[]);
 return(
  <div className="fixed top-0 left-0 h-[3px] bg-gold z-[9999]" style={{width:`${p}%`}}/>
 );
}
