import { useEffect, useState } from 'react';

const SpellBook = () => {
    const [spellName, setSpellName] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = (e) => {
        setSpellName(e.target.value);
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
                    }
                }
            } catch (error) {
                console.error('Error fetching spell: ', error);
            }
        }


        fetchSpell();

        return () => {
            // Anything to clean up?
        };
    }, [spellName]);

    return (
        <>
            <h2>Spell book</h2>
            <input
                type="text"
                onChange={handleSearch}
                placeholder="Enter spell name..."
            />
            {/* <button onClick={fetchSpell}>Search</button> */}
            {searchResult && (
                <div>
                    {/* Display the search result */}
                    {/* Example: */}
                    <pre>{JSON.stringify(searchResult, null, 2)}</pre>
                </div>
            )}
        </>
    )
}

export default SpellBook;