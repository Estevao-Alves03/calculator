import React, { useState } from 'react'
import styles from './Calculator.module.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'

export default function Calculator() {

    const [number, setNumber] = useState(0)
    const [oldNumber, setOldNumber] = useState(0)
    const [operator, setOperator] = useState()

    function inputNumber(e) {
        const input = e.target.value
        if(number === 0){
            setNumber(input)
        }else{
            setNumber(number + input)
        }
    }

    function clear() {
        setNumber(0)
    }

    function porcentage(){
        setNumber(number / 100)
    }

    function changeSing(){
        if(number > 0){
            setNumber(-number)
        }else{
            setNumber(Math.abs(number))
        }
    }

    function calculate(){
        if(operator === "/"){
            setNumber(parseFloat(oldNumber) / parseFloat(number))
        }
        if(operator === "x"){
            setNumber(parseFloat(oldNumber) * parseFloat(number))
        }
        if(operator === "-"){
            setNumber(parseFloat(oldNumber) - parseFloat(number))
        }
        if(operator === "+"){
            setNumber(parseFloat(oldNumber) + parseFloat(number))
        }
    }

    function operatorHandler(e){
        const operatorInput = e.target.value
        setOperator(operatorInput)
        setOldNumber(number)
        setNumber(0)
    }


  return (
<div>
    <Box m={5}/>
    <Container maxWidth='xs'>
    <div className={styles.wrapper}>
        <Box m={12} />
        <h1 className={styles.result}>{number}</h1>
      <button onClick={clear}>AC</button>
      <button onClick={changeSing}>+/-</button>
      <button onClick={porcentage}>%</button>
      <button className={styles.orange} onClick={operatorHandler} value="/" >/</button>
      <button className={styles.gray} onClick={inputNumber} value={7}>7</button>
      <button className={styles.gray} onClick={inputNumber} value={8}>8</button>
      <button className={styles.gray} onClick={inputNumber} value={9}>9</button>
      <button className={styles.orange} onClick={operatorHandler} value="x">x</button>
      <button className={styles.gray} onClick={inputNumber} value={4}>4</button>
      <button className={styles.gray} onClick={inputNumber} value={5}>5</button>
      <button className={styles.gray} onClick={inputNumber} value={6}>6</button>
      <button className={styles.orange} onClick={operatorHandler} value="-">-</button>
      <button className={styles.gray} onClick={inputNumber} value={1}>1</button>
      <button className={styles.gray} onClick={inputNumber} value={2}>2</button>
      <button className={styles.gray} onClick={inputNumber} value={3}>3</button>
      <button className={styles.orange} onClick={operatorHandler} value="+">+</button>
      <button className={styles.gray} onClick={inputNumber} value={0}>0</button>
      <button className={styles.gray} onClick={inputNumber} value={"."}>.</button>
      <button className={styles.orange} onClick={calculate}>=</button>
    </div>
    </Container>
    </div>
  )
}
