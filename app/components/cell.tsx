import styles from '../page.module.css'
import {Dispatch,SetStateAction} from "react";
type Cellprops = {
    go :string,
    setGo: Dispatch<SetStateAction<string>>,
    id:number,
    cells:string[],
    setCells:Dispatch<SetStateAction<string[]>>,
    cell:string,
    winingMessage:string
}

export default  function Cell({go ,setGo , id,cells,setCells , cell, winingMessage} : Cellprops){
    const handleClick = ()=>{
        //if there are winning message exit of game
        if(winingMessage===""){
            
        }else{
            return;
        }
        // console.log(id);
        if(cells[id]===""){
            if(go === "circle"){
                handleCellChange("circle")
                setGo("cross")
            }else if (go === "cross"){
                handleCellChange("cross")
                setGo("circle")
            }
        }
    }
    const handleCellChange=(cell:string)=>{
        let copyCells = [...cells];
        copyCells[id] = cell;
        setCells(copyCells);
    }
    return(
        <div className={styles.el} onClick={handleClick}>
            <div className={cell}>{cell ? (cell==="circle" ?"O":"X"):""}</div>
        </div>
    )
}