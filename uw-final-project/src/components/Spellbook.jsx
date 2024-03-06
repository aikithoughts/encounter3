import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const SpellBook = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [dmScreenData, setDmScreenData] = useOutletContext();
    const [spellNameInput, setSpellNameInput] = useState('');

    useEffect(() => {
        const fetchSpell = async () => {
            try {
                const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spellNameInput}`);
                if (response.ok) {
                    const spellData = await response.json();
                    setDmScreenData(prevData => ({
                        ...prevData,
                        spell: {
                            name: spellNameInput,
                            data: spellData
                        }
                    }));
                    setErrorMessage('');
                } else {
                    console.error('Error fetching spell: ', response.statusText);
                    setErrorMessage('Spell not found.');
                }
            } catch (error) {
                console.error('Error fetching spell: ', error);
                setErrorMessage('Spell not found.');
            }
        };

        if (spellNameInput) {
            fetchSpell();
        }
    }, [spellNameInput, setDmScreenData]);

    const handleInputChange = (e) => {
        setSpellNameInput(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // No need to fetch directly here; useEffect will handle it based on spellNameInput
    };

    return (
        <>
            <h2>Spell book</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder={dmScreenData.spell.name !== '' ? dmScreenData.spell.name : "Enter spell name..."}
                    name="spellName"
                    value={spellNameInput}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                dmScreenData.spell.data ? (
                    <div>
                        {/* Display the search result */}
                        {/* Example: */}
                        <pre>{JSON.stringify(dmScreenData.spell.data, null, 2)}</pre>
                    </div>
                ) : (
                    <div>Spell info goes here.</div>
                )
            )}
        </>
    )
}

export default SpellBook;
