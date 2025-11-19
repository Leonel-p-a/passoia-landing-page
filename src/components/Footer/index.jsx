import './footer.scss';
import {
    mastercard,
    visa,
    pix,
    boleto,
    instagram,
    facebook,
    youtube,
    twitter
} from '../../assets/images';

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
