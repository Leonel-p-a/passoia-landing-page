import './tips.scss';
import lips from '../../assets/images/Card labios.png';
import eyes from '../../assets/images/Card olhos.png';
import face from '../../assets/images/Card rosto.png';
import tendency from '../../assets/images/Card tendencia.png';

function Tips() {
    return (
        <div className='container card-images'>
           <img src={lips} alt="" />

           <img src={eyes} alt="" />

           <img src={face} alt="" />

           <img src={tendency} alt="" />
        </div>
    )
}

export default Tips;