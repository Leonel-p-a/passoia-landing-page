import { useState } from 'react';

import blue from '../../assets/images/azul.png'
import base from '../../assets/images/base.png'
import brown from '../../assets/images/marrom.png'
import red from '../../assets/images/vermelho.png'
import blueCircle from '../../assets/images/Ellipse azul.png';
import baseCircle from '../../assets/images/Ellipse base.png';
import brownCircle from '../../assets/images/Ellipse marrom.png';
import redCircle from '../../assets/images/Ellipse vermelho.png';
import stars from '../../assets/images/five-stars-rating-icon-png 2.png'
import lipstickOne from '../../assets/images/image-5f98509bd4794faf9bb619ce30ac88f7 1.png';
import lipstickTwo from '../../assets/images/kit_batom_liquido_vermelho_batom_liquido_nude_batom_liquido_rosa_oceane_edition_1 1.png';
import lipstickThree from '../../assets/images/kit_3_batom_em_bala_oceane_edition_1 1.png';

function Releases() {
    const [color, setColor] = useState(blue);

    // const changeColor = () => {
    //     setColor((prevColor) => {
    //         if (prevColor === azul) setColor(azul);
    //         if (prevColor === vermelho) setColor(vermelho)
    //         if (prevColor === marrom) setColor(marrom)
    //         if (prevColor === base) setColor(base)
    //     })
    // }

    return (
        <section className='releases-section'>
            <h2>APROVEITE OS LANÇAMENTOS</h2>

            <div className='lipsticks-container'>
                <img src={lipstickOne} alt="Imagem de batons" />
                <img src={lipstickTwo} alt="Imagem de batons" />
                <img src={lipstickThree} alt="Imagem de batons" />
            </div>

            <img src={color} alt="Mulher com batom" />

            <div className='details'>
                <img src={stars} alt="Estrelinhas" />
                <h3>Matte Premium</h3>
                <span>Cores disponíveis</span>
                <img src={blueCircle} onMouseOver={() => setColor(blue)} alt="Batom azul" />
                <img src={redCircle} onMouseOver={() => setColor(red)} alt="Batom vermelho" />
                <img src={brownCircle} onMouseOver={() => setColor(brown)} alt="Batom marrom" />
                <img src={baseCircle} onMouseOver={() => setColor(base)} alt="Batom base" />
                <h4>Descrição</h4>
                <p>
                    O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
                </p>
            </div>
        </section>
    )
}

export default Releases;