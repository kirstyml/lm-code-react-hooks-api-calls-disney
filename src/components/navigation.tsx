interface NavigationProps {
    currentPage: number,
    setCurrentPage: (page: number) => void,
    favouritesView: boolean,
    setFavouritesView: (view: boolean) => void
}

const Navigation : React.FC<NavigationProps> 
	= ({ currentPage, setCurrentPage, favouritesView, setFavouritesView }) => 
	{

    const nextPage = () => {
        const newPageNumber = currentPage + 1;
        setCurrentPage(newPageNumber);
    }

    const prevPage = () => {
        if (currentPage > 1) {
            const newPageNumber = currentPage - 1;
            setCurrentPage(newPageNumber);
        }
    }

    const showFavourites = () => {
        const newFavouritesView = !favouritesView;
        if(!newFavouritesView) {
            setCurrentPage(1);
        }
        setFavouritesView(newFavouritesView);
    }

    return (
        <div className="navigation">
            <div className="navigation__item">
                <button className="navigation__button" onClick={prevPage}>Prev Page</button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={showFavourites}>{favouritesView ? "Show All": "Show Favourites"}</button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={nextPage}>Next Page</button>
            </div>
        </div>

    )
}

export default Navigation;