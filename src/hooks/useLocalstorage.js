import { useState } from "react"

const useLocalstorage = (defaultValue, key) => {
    const [state, setState] = useState(JSON.parse(window.localStorage.getItem(key)) ?? '');
}