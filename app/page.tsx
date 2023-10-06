'use client';
import Cell from './components/cell';
import styles from './page.module.css'
import Link from 'next/link'
import {useState,useEffect} from "react";
import './about/page' //routing
// import { useEffect, useRef, useState } from 'react';

const win =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
function Home() {
  const [cells,setCells] = useState(["","","","","","","","",""]);
  const [go,setGo] = useState("circle")
  const [winingMessage,setletWiningMessage]=useState("") ; 
  useEffect(() => {
    win.forEach((element) => {
      const circelWins = element.every((el)=>{
        return cells[el]==="circle";
      })
      const crossWins= element.every((el)=>{
        return cells[el]==="cross";
      })
      if(circelWins){
        setletWiningMessage("Circel is Win🤩🎈")
      }else if(crossWins){
        setletWiningMessage("Cross is Win🤩🎈")
      }
    });
  }, [cells])

  useEffect(()=>{
    if(cells.every((el)=> el !=="")&& winingMessage===""){
      setletWiningMessage("no Winner😥")
    }
  },[cells,winingMessage])
  
  return (
    <main style={{color:"red"}} className={styles.main}>
        <div className={styles.gameboard}>
            {cells.map((el,index) => (
              <Cell winingMessage={winingMessage} id={index} cell={el} cells={cells} setCells = {setCells} go={go} setGo={setGo} key={index}/>
            ))}
        </div>
        <div className={styles.turn}>{`it's ${go} turn`}</div>
        <div className={styles.turn}>{winingMessage==="no Winner😥"?<a href="/">TryAgain {winingMessage}</a> :<a href="/">{winingMessage}</a>}</div>
    </main>
  )
}
export default Home;