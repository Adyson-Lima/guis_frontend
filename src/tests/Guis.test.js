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

});