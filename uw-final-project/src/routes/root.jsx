import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CHIMERAS_BANE from '../data/chimeras-bane-players.json';

const Root = () => {
    const [dmScreenData, setDmScreenData] = useState({
        combatants: CHIMERAS_BANE,
        spell: {
            name: '',
            data: '',
        },
        monster: {
            name: '',
            data: '',
        }
    })

    // console.log("dmScreenData", dmScreenData)

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
                <Outlet context={[dmScreenData, setDmScreenData]} />
            </div>
        </>
    )

}

export default Root;