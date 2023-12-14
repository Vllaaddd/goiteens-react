export default function Buttons({onIncrement, onDecrement}){
    return(
        <>
            <button onClick={onIncrement}>Збільшити на 1</button>
            <button onClick={onDecrement}>Зменшити на 1</button>
        </>
        
    )
}