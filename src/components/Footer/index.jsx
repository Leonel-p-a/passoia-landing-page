import './footer.scss';

import mastercard from '../../assets/images/mastercard.png';
import visa from '../../assets/images/visa.png';
import pix from '../../assets/images/pix.png';
import boleto from '../../assets/images/boleto.png';

import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import youtube from '../../assets/images/youtube.png';
import twitter from '../../assets/images/twitter.png';

export default function Footer() {
    return (
        <footer className="container footer-container mt-6">
            <div className="footer-content">

                <div className="footer-column">
                    <h4>ATENDIMENTO</h4>
                    <ul>
                        <li>Fale Conosco</li>
                        <li>Perguntas Frequentes</li>
                        <li>Meus Pedidos</li>
                        <li>Nossas Lojas</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>FORMAS DE PAGAMENTO</h4>
                    <div className="payments">
                        <img src={mastercard} alt="Mastercard" />
                        <img src={visa} alt="Visa" />
                        <img src={pix} alt="Pix" />
                        <img src={boleto} alt="Boleto" />
                    </div>
                </div>

                <div className="footer-column">
                    <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
                    <div className="social">
                        <img src={instagram} alt="Instagram" />
                        <img src={facebook} alt="Facebook" />
                        <img src={youtube} alt="YouTube" />
                        <img src={twitter} alt="Twitter" />
                    </div>
                </div>

            </div>
        </footer>
    );
}
