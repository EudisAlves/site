
import '../styles/components/information.sass'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

export default function Information() {
    return <section id="infor">
        <div className='info-card'>
            <AiFillPhone id='phone' />
            <div>
                <h3>Telefone</h3>
                <p>(21) 97457-3303</p>
            </div>
        </div>

        <div className='info-card'>
            <AiOutlineMail id='email' />
            <div>
                <h3>E-mail</h3>
                <p>eudisalves.dev@gmail.com</p>
            </div>
        </div>

        <div className='info-card'>
            <AiFillEnvironment id='pin' />
            <div>
                <h3>Localização</h3>
                <p>São Gonçalo / RJ</p>
            </div>
        </div>

    </section>
}