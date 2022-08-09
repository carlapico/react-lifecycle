import "./beercard.css"

function BeerCard ({ beer }) {
    return (
        <li>
            {beer.name}
        </li>
    )
}


export default BeerCard;