import {AiOutLineClose} from 'react-icons/ai'
import {CgNametag} from 'react-icons/cg'

export default function Navbar () {
  return (
    <div className="bg-indigo-500 flex items-center p-10 justify-between lg:flex-row">
      <div>
        <h1 className="text-3x1 font-serif"><CgNametag/>Eudis Alves</h1>
      </div>
      <div className="space-x-4">
        <div className="ssm:hidden lg:block space-x-2">
          <a href="" className="text-gray-100 hover:bg-slate-100">Meus projetos</a>
          <a href="" className="text-gray-100 hover:bg-slate-100">Linkedin</a>
          <a href="" className="text-gray-100 hover:bg-slate-100">Sobre</a>
        </div>
        <div>
          <AiOutLineClose/>
        </div>
      </div>
    </div>
  )
}