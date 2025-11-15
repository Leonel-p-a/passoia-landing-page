import './newsForYou.scss';

import newsBanner from '../../assets/images/makeBanner-DybWCcfF.png'

function NewsForYou() {
    return (
        <section className='container news-container'>
            <h2>NOVIDADADES PARA VOCÊ</h2>
            <img src={newsBanner} alt="" />
        </section>
    )
}

export default NewsForYou;