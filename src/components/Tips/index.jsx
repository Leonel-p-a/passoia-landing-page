import './tips.scss';
import lips from '../../assets/images/Card labios.png';
import eyes from '../../assets/images/Card olhos.png';
import face from '../../assets/images/Card rosto.png';
import tendency from '../../assets/images/Card tendencia.png';

function Tips() {
    return (
        <section className='container tips-section'>
            <h2>LOOKS E DICAS DE MAQUIAGEM</h2>

           <div className='cards'>
               <div className='cards__top'>
                   <img src={lips} alt="" />
                   <img src={eyes} alt="" />
               </div>
               <div className='cards__bottom'>
                   <img src={face} alt="" />
                   <img src={tendency} alt="" />
               </div>
           </div>
        </section>
    )
}

export default Tips;