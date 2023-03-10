import Information from './Information';
import Avatar from '../img/Eudis.jpg';
import SocialNet from './SocialNet';

import '../styles/components/sidebar.sass';



export default function Sidebar() {
    return <aside id="sidebar">
        <img src={Avatar} alt="Eudis Alves"/>
        <p className="title">Desenvolvedor</p>

        <SocialNet />
        <Information />

        <a href="#" className="btn">
            Download Currículo
        </a>
    </aside>
}