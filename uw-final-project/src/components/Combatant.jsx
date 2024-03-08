import { useState } from 'react';
import PropTypes from 'prop-types';

const Combatant = ({ combatant, handleEditCombatant, handleDeleteCombatant }) => {
  const [name, setName] = useState(combatant.name);
  const [init, setInit] = useState(combatant.init);
  const [hitPoints, setHitPoints] = useState(combatant.hitpoints);
  // const [nameReadOnly, setNameReadOnly] = useState(true);
  // const [initReadOnly, setInitReadOnly] = useState(true);
  // const [hitPointsReadOnly, setHitPointsReadOnly] = useState(true);
  const [isReadOnly, setIsReadOnly] = useState(true);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleInitChange = (event) => {
    setInit(Number(event.target.value));
  };

  const handleHitPointsChange = (event) => {
    setHitPoints(Number(event.target.value));
  };

  const handleUpdateClick = () => {
    const editedCombatant = {
      ...combatant,
      name: name,
      init: init,
      hitpoints: hitPoints
    };

    handleEditCombatant(editedCombatant);
    setIsReadOnly(!isReadOnly);
  };

  const handleEditClick = () => {
    setIsReadOnly(!isReadOnly);
  };


  const handleDeleteClick = () => {
    const id = combatant.id;
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
        value={name}
        onChange={handleNameChange}
        readOnly={isReadOnly}
        className={isReadOnly ? "read-only" : "editable"}
      />
      <label id="character-init-label" htmlFor="character-init">
        Init
      </label>
      <input
        id="character-init"
        type="number"
        value={init === 0 ? '' : init}
        onChange={handleInitChange}
        readOnly={isReadOnly}
        className={isReadOnly ? "read-only" : "editable"}
      />
      <label id="character-hp-label" htmlFor="character-hp">
        HP
      </label>
      <input
        id="character-hp"
        type="text"
        value={hitPoints}
        onChange={handleHitPointsChange}
        readOnly={isReadOnly}
        className={isReadOnly ? "read-only" : "editable"}
      />
      {isReadOnly ? (
        <button type="button" onClick={handleEditClick}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      ) : (
        <button type="button" onClick={handleUpdateClick}>
          <i className="fa-solid fa-upload"></i>
        </button>
      )}
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
