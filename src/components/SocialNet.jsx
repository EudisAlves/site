import { FaLinkedin, FaGithub } from 'react-icons/fa'
import '../styles/components/socialnet.sass'

const socialNet = [
    { name:"linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/eudis-alves-342744179" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/EudisAlves" },
];

export default function SocialNet() {
    return (
        <section id="social-net">
            {socialNet.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}