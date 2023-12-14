import Sticker from "./Sticker";

export default function StickersList({stickers, onGetLabel}){
    return(
        <ul>
            {stickers && stickers.map((sticker, i) => (
                <li key={i}>
                    <Sticker onGetLabel={onGetLabel} sticker={sticker} />
                </li>
            ))}
        </ul>
    )
}