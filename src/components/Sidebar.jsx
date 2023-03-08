import Avatar from '../img/Eudis.jpg'
import '../styles/components/sidebar.sass'




export default function Sidebar() {
    return <aside id="sidebar">
        <img src={Avatar} alt="Eudis Alves"/>
        <p className="title">Desenvolvedor</p>
        <p>rede social</p>
        <p>Informações de contatos</p>
        <a href="" className="btn">Download Currículo</a>
    </aside>
}