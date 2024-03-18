import daveBook from '../assets/dave-book.jpeg'
const Home = () => {
    return (
        <>
            <div className="image-container">
                <h2>Dave's DM Screen</h2>
                <img src={daveBook} alt='dave as a floating dm' />
                <div className="fading-border"></div>
            </div>

        </>
    )
}

export default Home;