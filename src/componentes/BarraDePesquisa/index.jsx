import { useState } from 'react'
import './style.css'

export default function BarraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    return (
        <input 
        type="search" 
        placeholder="Digite o que você procura" 
        className='barra-pesquisa'
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}
         />
    )
}