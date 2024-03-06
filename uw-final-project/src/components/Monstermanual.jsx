import { useEffect, useState } from 'react';

const MonsterManual = () => {
    const [monster, setMonster] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setMonster(e.target.elements.monsterName.value);
    };

    useEffect(() => {
        const fetchMonster = async () => {
            try {
                if (monster) {
                    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`);
                    if (response.ok) {
                        const data = await response.json();
                        setSearchResult(data);
                    } else {
                        console.error('Error fetching monster: ', response.statusText);
                        setErrorMessage('Monster not found.');
                    }
                }
            } catch (error) {
                console.error('Error fetching monster: ', error);
                setErrorMessage('Monster not found.');
            }
        };

        fetchMonster();

        return () => {
            // Cleanup if necessary
        };
    }, [monster]);

    return (
        <>
            <h2>Monster manual</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter monster name..."
                    name="monsterName"
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

export default MonsterManual;
