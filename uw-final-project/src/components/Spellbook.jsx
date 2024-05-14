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
                    setErrorMessage('Spell not found.');
                }
            } catch (error) {
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

    return (
        <div className="spellbook-container">
            <h2>Spell book</h2>
            <input
                type="text"
                placeholder={dmScreenData.spell.name !== '' ? dmScreenData.spell.name : "Enter spell name..."}
                name="spellName"
                value={spellNameInput}
                onChange={handleInputChange}
            />
            {errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                dmScreenData.spell.data ? (
                    <div>
                        {/* Display the search result */}
                        {/* Example: */}
                        <h2>{dmScreenData.spell.data.name}</h2>
                        <p>{dmScreenData.spell.data.desc}</p>
                        <p>
                            <b>Casting time:</b> {dmScreenData.spell.data.casting_time}{" "}
                            <b>Duration:</b> {dmScreenData.spell.data.duration}{" "}
                            <b>Range:</b> {dmScreenData.spell.data.range}
                        </p>
                    </div>
                ) : (
                    <div>Spell info goes here.</div>
                )
            )}
        </div>
    )
}

export default SpellBook;
