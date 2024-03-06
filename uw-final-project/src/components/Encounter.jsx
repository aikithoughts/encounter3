// import { useState } from 'react';
import Combatant from './Combatant';
import { useOutletContext } from 'react-router-dom';
// import CHIMERAS_BANE from '../data/chimeras-bane-players.json';

const Encounter = () => {

  const [dmScreenData, setDmScreenData] = useOutletContext();

  const combatants = dmScreenData.combatants;
  // console.log('dmScreenData', dmScreenData)
  // const [combatants, setCombatants] = useState(CHIMERAS_BANE);

  const sortedCombatants = combatants.slice().sort((a, b) => b.init - a.init);

  const handleEditCombatant = (editedCombatant) => {
    const updatedCombatants = combatants.map((combatant) =>
      combatant.id === editedCombatant.id ? { ...combatant, ...editedCombatant } : combatant
    );

    const sortedCombatants = updatedCombatants.slice().sort((a, b) => b.init - a.init);

    // setCombatants(sortedCombatants);
    setDmScreenData(dmScreenData => ({
      ...dmScreenData,
      combatants: sortedCombatants
    }));
  };

  const handleAddCombatant = (e) => {
    e.preventDefault();

    // Get the values from the input fields
    const updatedCombatants = dmScreenData.combatants;
    const newName = e.target.elements.characterName.value;
    const newInit = parseInt(e.target.elements.characterInit.value, 10);
    const newHp = parseInt(e.target.elements.characterHp.value, 10);

    // Create a new combatant object
    const newCombatant = {
      id: Date.now(), // Assign a unique id (use a better method in production)
      name: newName || '',
      init: newInit || 0,
      hitpoints: newHp || 0
    };

    // Add the new combatant to the array
    updatedCombatants.push(newCombatant);

    setDmScreenData(dmScreenData => ({
      ...dmScreenData,
      combatants: updatedCombatants
    }));

    // Clear the input fields
    e.target.elements.characterName.value = '';
    e.target.elements.characterInit.value = '';
    e.target.elements.characterHp.value = '';
  };

  const handleDeleteCombatant = (combatantId) => {
    // Remove the combatant with the specified id
    const updatedCombatants = combatants.filter((combatant) => combatant.id !== combatantId);

    setDmScreenData(dmScreenData => ({
      ...dmScreenData,
      combatants: updatedCombatants
    }))
  };

  return (
    <div className="encounter-container">
      <div className="combatant-container">
        {sortedCombatants.map((combatant) => (
          <Combatant key={combatant.id} combatant={combatant} handleEditCombatant={handleEditCombatant} handleDeleteCombatant={handleDeleteCombatant}/>
        ))}
      </div>
      <div className="add-combatant-container">
        <form onSubmit={handleAddCombatant}>
          <label id="character-name-label" htmlFor="character-name">
            Name
          </label>
          <input id="character-name" type="text" name="characterName" />
          <label id="character-init-label" htmlFor="character-init">
            Init
          </label>
          <input id="character-init" type="number" name="characterInit" />
          <label id="character-hp-label" htmlFor="character-hp">
            HP
          </label>
          <input id="character-hp" type="number" name="characterHp" />
          <button type="submit"><i className="fa-solid fa-plus"></i></button>
        </form>
      </div>
    </div>
  );
};

export default Encounter;
