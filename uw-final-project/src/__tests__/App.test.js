import { updateCombatant } from '../components/Combatant';

test('updateCombatant updates the combatant correctly', () => {
  const originalCombatant = {
    id: 1,
    name: 'Goblin',
    init: 10,
    hitpoints: 5
  };
  const newName = 'Orc';
  const newInit = 15;
  const newHitPoints = 10;

  const updatedCombatant = updateCombatant(originalCombatant, newName, newInit, newHitPoints);

  // Check if the updated combatant has the correct values
  expect(updatedCombatant).toEqual({
    id: 1,
    name: 'Orc',
    init: 15,
    hitpoints: 10
  });
});
