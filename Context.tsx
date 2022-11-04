import React, { createContext, Dispatch, use, useState } from "react";

interface IAppContext {

    startPage: boolean
    gamePage: boolean
    winPage: boolean,

    amount: number
    newAmount: (num: number) => void
    values: number | string
    newValues: (val: number | string) => void
    sort: string
    newSort: (val: string) => void

    submit: () => void

    styleIncr: string
    styleDecr: string
    incr: () => void
    decr: () => void

    win: () => void

    again: () => void

}

export const AppContext = createContext<IAppContext>({

    startPage: true,
    gamePage: false,
    winPage: false,

    amount: 2,
    newAmount: (num: number) => {},
    values: 0,
    newValues: (val: number | string) => {},
    sort: ' ',
    newSort: (val: string) => {},

    submit: () => {},

    styleIncr: '#FFD748',
    styleDecr: 'rgba(255, 215, 72, 0.56)',
    incr: () => {},
    decr: () => {},

    win: () => {},

    again: () => {}


})

export const AppState = ({children}: {children: React.ReactNode}) => {

    const [startPage, setStartPage] = useState(true)
    const [gamePage, setGamePage] = useState(false)
    const [winPage, setWinPage] = useState(false)
    
    const [amount, setAmount] = useState<number>(2)
    const newAmount = (num: number) => setAmount(num)
    const [values, setValues] = useState<number | string>(1)
    const newValues = (val: number | string) => setValues(val)
    const [sort, setSort] = useState('Incr')
    const newSort = (val: string) => setSort(val)

    const [styleIncr, setStyleIncr] = useState('#FFD748')
    const [styleDecr, setStyleDecr] = useState('rgba(255, 215, 72, 0.56)')

    const incr = () => {

        setStyleIncr('#FFD748')
        setStyleDecr('rgba(255, 215, 72, 0.56)')

    }

    const decr = () => {

        setStyleIncr('rgba(255, 215, 72, 0.56)')
        setStyleDecr('#FFD748')

    }

    const submit = () => {

        setStartPage(false)
        setGamePage(true)

    }

    const win = () => {

        setWinPage(true)

    }

    const again = () => {

        setStartPage(true)
        setGamePage(false)
        setWinPage(false)
        setStyleDecr('rgba(255, 215, 72, 0.56)')
        setStyleIncr('#FFD748')
        setAmount(2)
        setValues(1)
        setSort('Incr')

    }

    return (

        <AppContext.Provider value={{
            startPage, gamePage, winPage,
            amount, newAmount, values, newValues, sort, newSort,
            submit, incr, decr, styleDecr, styleIncr, win, again
        }}>

            {children}

        </AppContext.Provider>

    )

}