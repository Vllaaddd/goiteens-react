import { useContext } from "react"
import { Color } from '../App'

export default function Button(){

    const color = useContext(Color)

    return(
        <>
            <button style={{backgroundColor: color}}>Button useContext</button>
        </>
    )
}