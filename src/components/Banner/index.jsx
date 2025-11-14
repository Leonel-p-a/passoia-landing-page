import './banner.scss';
import banner from '../../assets/images/Banner.png';

function Banner() {
    return (
        <div className='container'>
           <img className='banner' src={banner} alt="" />
        </div>
    )
}

export default Banner;