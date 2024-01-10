import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from '../../services/api';

export default function Guis(){

  const[my_guis, setGuis] = useState([]);
  const navigate = useNavigate();

  // Read, lista todos os registros da api
  useEffect(() => {
    api.get('api/v1/guis',{})
    .then(response => {setGuis(response.data)})
  }, []);

  // Update, navega para tela de atualização
  async function updateGui(id){
    try {
      navigate(`api/v1/guis/${id}`);      
    } catch (error) {
      alert("Erro ao navegar para Update")      
    }
  }

  // Delete, exclui um registro na api
  async function deleteGui(id){
    try {
      await api.delete(`api/v1/guis/${id}`,{});
      setGuis(my_guis.filter(gui => gui.id !== id));      
    } catch (error) {
      alert("Erro ao excluir registro!");      
    }
  }

  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Guis Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Projeto</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_guis.map(gui => (
              <tr key={gui.id}>
                <th scope="row">{gui.id}</th>
                  <td>{gui.project}</td>
                  <td>{gui.description}</td>
                  <td>

                    <button data-testid="mybtn1" type="button"
                    className="btn btn-outline-info" style={{margin: '2px'}}
                    onClick={() => updateGui(gui.id)}>Editar</button>

                    <button data-testid="mybtn2" type="button"
                    className="btn btn-outline-danger" style={{margin: '2px'}}
                    onClick={() => deleteGui(gui.id)}>Excluir</button>

                  </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>
  );

}