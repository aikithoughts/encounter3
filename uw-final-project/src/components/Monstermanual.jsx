import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const MonsterManual = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [dmScreenData, setDmScreenData] = useOutletContext();
    const [monsterNameInput, setMonsterNameInput] = useState('');

    useEffect(() => {
        const fetchMonster = async () => {
            try {
                const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${monsterNameInput}`);
                if (response.ok) {
                    const monsterData = await response.json();
                    setDmScreenData(prevData => ({
                        ...prevData,
                        monster: {
                            name: monsterNameInput,
                            data: monsterData
                        }
                    }));
                    setErrorMessage('');
                } else {
                    console.error('Error fetching monster: ', response.statusText);
                    setErrorMessage('Monster not found.');
                }
            } catch (error) {
                console.error('Error fetching monster: ', error);
                setErrorMessage('Monster not found.');
            }
        };

        if (monsterNameInput) {
            fetchMonster();
        }
    }, [monsterNameInput, setDmScreenData]);

    const handleInputChange = (e) => {
        setMonsterNameInput(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // No need to fetch directly here; useEffect will handle it based on spellNameInput
    };

    const getSpecialAbilities = (specialAbilities) => {
        return (
            <ul>
                {specialAbilities.map((ability, index) => (
                    <li key={index}>{ability.name}: {ability.desc}</li>
                ))}
            </ul>
        );
    };

    const getActions = (actions) => {
        return (
            <ul>
                {actions.map((action, index) => (
                    <li key={index}>{action.name}: {action.desc}</li>
                ))}
            </ul>
        );
    };

    return (
        <div className="monster-container">
            <h2>Monster manual</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder={dmScreenData.monster.name !== '' ? dmScreenData.monster.name : "Enter monster name..."}
                    name="monsterName"
                    value={monsterNameInput}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                dmScreenData.monster.data ? (
                    <div>
                        <h2>{dmScreenData.monster.data.name}</h2>
                        <p>
                          <b>Armor class: </b>{dmScreenData.monster.data.armor_class[0].value}{" "}
                          <b>Hit points: </b>{dmScreenData.monster.data.hit_points}
                        </p>
                        <h3>Special abilities</h3>
                        {getSpecialAbilities(dmScreenData.monster.data.special_abilities)}
                        <h3>Actions</h3>
                        {getActions(dmScreenData.monster.data.actions)}
                        {/* <pre>{JSON.stringify(dmScreenData.monster.data, null, 2)}</pre> */}
                    </div>
                ) : (
                    <div>Monster info goes here.</div>
                )
            )}
        </div>
    );
};

export default MonsterManual;
