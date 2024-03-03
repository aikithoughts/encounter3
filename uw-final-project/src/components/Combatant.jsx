import { useState } from 'react';
import PropTypes from 'prop-types';

const Combatant = ({ combatant, handleEditCombatant, handleDeleteCombatant }) => {
  const [name, setName] = useState(combatant.name);
  const [init, setInit] = useState(combatant.init);
  const [hitPoints, setHitPoints] = useState(combatant.hitpoints);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleInitChange = (event) => {
    setInit(Number(event.target.value));
  };

  const handleHitPointsChange = (event) => {
    setHitPoints(Number(event.target.value));
  };

  const handleEditClick = () => {
    // Create an editedCombatant object with the updated values
    const editedCombatant = {
      ...combatant,
      name: name,
      init: init,
      hitpoints: hitPoints
    };

    // Call the parent component's edit function
    handleEditCombatant(editedCombatant);
  };

  const handleDeleteClick = () => {
    const id = combatant.id;
    // Invoke the parent component's delete function
    handleDeleteCombatant(id);
  };

  return (
    <form className="combatant-info">
      <label id="character-name-label" htmlFor="character-name">
        Name
      </label>
      <input
        id="character-name"
        type="text"
        className=""
        value={name}
        onChange={handleNameChange}
      />
      <label id="character-init-label" htmlFor="character-init">
        Init
      </label>
      <input
        id="character-init"
        type="number"
        value={init}
        onChange={handleInitChange}
      />
      <label id="character-hp-label" htmlFor="character-hp">
        HP
      </label>
      <input
        id="character-hp"
        type="number"
        value={hitPoints}
        onChange={handleHitPointsChange}
      />
      <button type="button" onClick={handleEditClick}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button type="button" onClick={handleDeleteClick}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </form>
  );
};

Combatant.propTypes = {
  combatant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    init: PropTypes.number.isRequired,
    hitpoints: PropTypes.number.isRequired
  }).isRequired,
  handleEditCombatant: PropTypes.func.isRequired,
  handleDeleteCombatant: PropTypes.func.isRequired
};

export default Combatant;
