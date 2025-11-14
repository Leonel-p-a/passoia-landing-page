import { useState } from 'react';

import azul from '../../assets/images/azul.png'
import base from '../../assets/images/base.png'
import marrom from '../../assets/images/marrom.png'
import vermelho from '../../assets/images/vermelho.png'

function Releases() {
    const [color, setColor] = useState(azul);

    // const changeColor = () => {
    //     setColor((prevColor) => {
    //         if (prevColor === azul) setColor(azul);
    //         if (prevColor === vermelho) setColor(vermelho)
    //         if (prevColor === marrom) setColor(marrom)
    //         if (prevColor === base) setColor(base)
    //     })
    // }

    return (
        <section>
            <h2>APROVEITE OS LANÇAMENTOS</h2>
            <img src={color} alt="" />

            <button onMouseOver={()=>setColor(azul)}>Azul</button>
            <button onMouseOver={()=>setColor(vermelho)}>Vermelho</button>
            <button onMouseOver={()=>setColor(marrom)}>Marrom</button>
            <button onMouseOver={()=>setColor(base)}>Base</button>
        </section>
    )
}

export default Releases;