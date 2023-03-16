import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

const Rodape = () => {
  const participantes: string[] = useListaDeParticipantes();
  const navegarPara = useNavigate();
  const iniciar = () => {
    {
      navegarPara("./sorteio");
    }
  };

  console.log(participantes);
  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Rodape;
