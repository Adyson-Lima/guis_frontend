import {render,screen} from '@testing-library/react';
import Guis from '../pages/Guis';
import { BrowserRouter } from 'react-router-dom';

describe('Testes da tela Guis', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Guis/>
      </BrowserRouter>
    );    
  });

  it('Existe card em Guis?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe Link Novo em Guis?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Guis?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão Editar em Guis?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão Excluir em Guis?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});