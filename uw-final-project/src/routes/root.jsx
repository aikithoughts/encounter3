import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
const Root = () => {
    const [spellData, setSpellData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/encountertracker`}>Encounter tracker</Link>
                        </li>
                        <li>
                            <Link to={`/spellbook`}>Spell book</Link>
                        </li>
                        <li>
                            <Link to={`/monstermanual`}>Monster manual</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )

}

export default Root;