

export default function Navbar () {
  return (
    <div className="bg-indigo-500 flex items-center p-10 justify-between lg:flex-row">
      <div>
        <h1 className="text-3x1 font-serif">Eudis Alves</h1>
      </div>
      <div className="space-x-4">
        <a href="" className="text-gray-100 hover:bg-slate-100">Meus projetos</a>
        <a href="" className="text-gray-100 hover:bg-slate-100">Linkedin</a>
        <a href="" className="text-gray-100 hover:bg-slate-100">Sobre</a>
      </div>
    </div>
  )
}