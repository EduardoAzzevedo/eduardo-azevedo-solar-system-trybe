import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
// https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/7ec6a909-3e9e-45d8-82a3-bce51cff846d/lista-de-componentes-e-chaves/978711ee-3d6e-45b8-9f46-c4918b8bea0f?use_case=side_bar
class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map((planet, index) => (<PlanetCard // map pra gerar uma lista com planet e o index renderizando
          planetName={ planet.name }// atribui ao planetName o 'NAME' do objeto planets
          key={ index }// uso do key como nome do planeta para que cada item seja renderizado
          planetImage={ planet.image }// atribui ao planetImage a 'IMAGE' do objeto planets
        />)) }
      </div>
    );
  }
}

export default SolarSystem;
