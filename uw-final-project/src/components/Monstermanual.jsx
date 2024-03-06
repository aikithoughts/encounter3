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

    return (
        <>
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
                        {/* Display the search result */}
                        {/* Example: */}
                        <pre>{JSON.stringify(dmScreenData.monster.data, null, 2)}</pre>
                    </div>
                ) : (
                    <div>Spell info goes here.</div>
                )
            )}
        </>
    )
}

export default MonsterManual;
