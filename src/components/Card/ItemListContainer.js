import ItemList from './ItemList';
import './ItemListContainer.css';
import { useState, useEffect } from "react";

const ItemListContainer = ({ tittle }) => {
    const [products, setProducts] = useState([]);
    const productos = [
        {
            id: 1,
            initial: 1,
            titulo: 'Aceite de CBD 10% / 10ml',
            img: 'image.jpg',
            descripcion: ' ',
            precio: 3000,
            stock: 5
        },
        {
            id: 2,
            initial: 1,
            titulo: 'Aceite de CBD 10% / 30ml',
            img: 'image1.jpg',
            descripcion: ' ',
            precio: 4000,
            stock: 10,
        }, {
            id: 3,
            initial: 1,
            titulo: 'Aceite de CBD  5% / 10ml',
            img: 'image2.jpg',
            descripcion: ' ',
            precio: 2500,
            stock: 7
        }
    ]

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                console.log('Fallo la llamada', err);
            })
    }, [])

    return (
        <>
            <h2>{tittle}</h2>
            <div className='list-item'>
                <ItemList productos={products} />
            </div>
        </>
    )
}

export default ItemListContainer;
