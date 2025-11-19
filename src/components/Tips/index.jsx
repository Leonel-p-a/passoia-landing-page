import './tips.scss';
import { lips, eyes, face, tendency } from '../../assets/images';

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