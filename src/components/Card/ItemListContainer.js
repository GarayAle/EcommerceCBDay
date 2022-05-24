import Card from './Card'
import './ItemListContainer.css';

const ItemListContainer = ({ tittle }) => {
    return (
        <>
            <h2>{tittle}</h2>
            <div className='list-item'>
                <Card titulo={'Aceite de CBD 10% / 10ml'} precio={3000} stock={5} initial={1}/>
                <Card titulo={'Aceite de CBD 10% / 30ml'} precio={4000} stock={10} initial={1}/>
                <Card titulo={'Aceite de CBD  5% / 10ml '} precio={2500} stock={7} initial={1}/>
            </div>
        </>
    )
}

export default ItemListContainer;