export default function Sticker({sticker, onGetLabel}){
    return(
        <div onClick={() => onGetLabel(sticker.label)}>
            <img src={sticker.img}></img>
            <p>{sticker.label}</p>
        </div>
    )
}