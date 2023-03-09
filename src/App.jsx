import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";


export default function App() {

  return (
    <div id="portifolio">
      <h1>Eudis Alves</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}


