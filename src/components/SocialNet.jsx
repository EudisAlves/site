import { FaLinkedinIN, FaGithub } from 'react-icons/fa'
import "../styles/components/socialnet.sass"

const socialNet = [
    { name:"linkedin", icon: <FaLinkedinIN /> },
    { name: "github", icon: <FaGithub /> },
];

const SocialNet = () => {
    return (
        <section id="social-net">
            {socialNet.map((network) => (
                <a href="#" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNet;