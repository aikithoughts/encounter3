import { useEffect, useState } from 'react';

const SpellBook = () => {
    const [spellName, setSpellName] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSpellName(e.target.elements.spellName.value);
    };

    useEffect(() => {
        const fetchSpell = async () => {
            try {
                if (spellName) {
                    const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spellName}`);
                    if (response.ok) {
                        const data = await response.json();
                        setSearchResult(data);
                    } else {
                        console.error('Error fetching spell: ', response.statusText);
                        setErrorMessage('Spell not found.');
                    }
                }
            } catch (error) {
                console.error('Error fetching spell: ', error);
                setErrorMessage('Spell not found.');
            }
        };

        fetchSpell();

        return () => {
            // Cleanup if necessary
        };
    }, [spellName]);

    return (
        <>
            <h2>Spell book</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter spell name..."
                    name="spellName"
                />
                <button type="submit">Search</button>
            </form>
            {errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                searchResult && (
                    <div>
                        {/* Display the search result */}
                        {/* Example: */}
                        <pre>{JSON.stringify(searchResult, null, 2)}</pre>
                    </div>
                )
            )}
        </>
    )
}

export default SpellBook;
