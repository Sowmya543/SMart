import React, { useState, useContext } from 'react';
import { CartContext } from '../../../../contextAPI/CartContext';
import './CartForm.css';
import img1 from "../../../../assets/cartform.png"

const CartForm = () => {
    const { addToCart } = useContext(CartContext);

    const [form, setForm] = useState({
        imageURL: '',
        itemName: '',
        price: '',
        details: ''
    });



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addToCart(form);
        setForm({ imageURL: '', itemName: '', price: '', details: '' });
    };

    return (
        <div className='cartbox'>
            <h1>Add To Cart</h1>
            <img src={img1} alt="" />
            <form className="cart-form" onSubmit={handleSubmit}>
                <input type="text" name="imageURL" placeholder="Image URL" value={form.imageURL} onChange={handleChange} required />
                <input type="text" name="itemName" placeholder="Item Name" value={form.itemName} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
                <textarea name="details" placeholder="Details" value={form.details} onChange={handleChange} required />
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
};

export default CartForm;
