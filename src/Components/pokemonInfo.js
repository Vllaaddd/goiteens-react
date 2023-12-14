import { Dna } from "react-loader-spinner";
import { useEffect, useState } from "react";

export default function PokemonInfo({name}){

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if(!name){
            return
        }
        setStatus('pending')
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response=>{
                if(response.ok === true){
                    return response.json()
                }
                return new Promise.reject(new Error(`Покемона ${name} не знайдено`))
            })
            .then(pokemon => {
                setPokemon(pokemon)
                setStatus('resolved')
            })
            .catch(error => {
                setError(error)
                setStatus('rejected')
            })
    }, [name])

    switch(status){
        case 'idle':
            return <p>Введіть ім'я покемона</p>

        case 'pending':
            return <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />

        case 'resolved':
            return <div>
            <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                width="240"
                height="100"
                alt={pokemon.name}
            />
            <h2>{pokemon.name}</h2>
            <ul>
                {pokemon.stats.map(entry => (
                <li key={entry.stat.name}>
                    {entry.stat.name}: {entry.base_stat}
                </li>
                ))}
            </ul>
        </div>
    
        case 'rejected':
            return <p>Покемона {name} не знайдено</p>

        default:
            return;
    }
}