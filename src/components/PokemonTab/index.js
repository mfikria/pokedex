import React from 'react';
import { Tab } from 'semantic-ui-react';

// Components
import PokemonTypeLabel from 'src/components/PokemonTypeLabel';
import InfoTabPane from 'src/components/PokemonTab/InfoTabPane';
import BreedingTabPane from 'src/components/PokemonTab/BreedingTabPane';
import TrainingTabPane from 'src/components/PokemonTab/TrainingTabPane';
import StatsTabPane from 'src/components/PokemonTab/StatsTabPane';

const PokemonTab = (props) => {
  const panes = [
    { menuItem: 'Info', render: () => (
      <Tab.Pane>
        <InfoTabPane
          national_id={props.pokemon.national_id}
          types={props.pokemon.types}
          species={props.pokemon.species}
          height={props.pokemon.height}
          weight={props.pokemon.weight}
          abilities={props.pokemon.abilities}
        />
      </Tab.Pane>
    )},
    { menuItem: 'Training', render: () => (
      <Tab.Pane>
        <TrainingTabPane
          ev_yield={props.pokemon.ev_yield}
          catch_rate={props.pokemon.catch_rate}
          happiness={props.pokemon.happiness}
          exp={props.pokemon.exp}
          growth_rate={props.pokemon.growth_rate}
        />
      </Tab.Pane>
    )},
    { menuItem: 'Breeding', render: () => (
      <Tab.Pane>
        <BreedingTabPane
          egg_groups={props.pokemon.egg_groups}
          egg_cycles={props.pokemon.egg_cycles}
          male_female_ratio={props.pokemon.male_female_ratio}
        />
      </Tab.Pane>
    )},
    { menuItem: 'Base Stats', render: () => (
      <Tab.Pane>
        <StatsTabPane
          hp={props.pokemon.hp}
          attack={props.pokemon.attack}
          defense={props.pokemon.defense}
          sp_atk={props.pokemon.sp_atk}
          sp_def={props.pokemon.sp_def}
          speed={props.pokemon.speed}
        />
      </Tab.Pane>
    )}
  ];

  return <Tab panes={panes} />;
};

export default PokemonTab;
