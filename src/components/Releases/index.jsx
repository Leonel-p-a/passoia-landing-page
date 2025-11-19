import { useState, useEffect } from 'react';
import './releases.scss';
import {
    blue,
    base,
    brown,
    red,
    blueCircle,
    baseCircle,
    brownCircle,
    redCircle,
    stars,
    lipstickOne,
    lipstickTwo,
    lipstickThree
} from '../../assets/images'

function Releases() {
    const [color, setColor] = useState(blue);
    const [isMobile, setIsMobile] = useState(true);

    const checkIsMobile = () => {
        const mobileBreakpoint = 768;
        setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <section className='container releases-section p-4'>
            <h2>APROVEITE OS LANÇAMENTOS</h2>

            <div className="content">
                {!isMobile && (
                    <div className='lipsticks-container'>
                        <img src={lipstickOne} alt="Imagem de batons" />
                        <img src={lipstickTwo} alt="Imagem de batons" />
                        <img src={lipstickThree} alt="Imagem de batons" />
                    </div>
                )}
                <img className='woman' src={color} alt="Mulher com batom" />
                <div className='details'>
                    <img className='stars-image' src={stars} alt="Estrelinhas" />
                    <h3>Matte Premium</h3>
                    <span>Cores disponíveis</span>
                    <div className="colors">
                        <img src={blueCircle} onMouseOver={() => setColor(blue)} alt="Batom azul" />
                        <img src={redCircle} onMouseOver={() => setColor(red)} alt="Batom vermelho" />
                        <img src={brownCircle} onMouseOver={() => setColor(brown)} alt="Batom marrom" />
                        <img src={baseCircle} onMouseOver={() => setColor(base)} alt="Batom base" />
                    </div>
                    <h4>Descrição</h4>
                    <p>
                        O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Releases;