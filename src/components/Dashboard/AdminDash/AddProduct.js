import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import DashNav from '../DashNav';

const AddProduct = () => {

    let navigate = useNavigate();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            name: e.target.name.value,
            text: e.target.text.value,
            img: e.target.img.value,
            stock: parseInt(e.target.stock.value),
            minOrder: parseInt(e.target.minOrder.value),
            price: parseFloat(e.target.price.value),
            rating: parseFloat(e.target.rating.value)
        };
        //console.log(newProduct);

        axiosPrivate.post("https://wood-peckers.herokuapp.com/products", newProduct)
            .then(res => {
                //console.log(res.data);
                if (res.data.acknowledged) {
                    toast.success("Product is added.");
                }
                navigate('/dashboard/manageproducts');
            });
    }

    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="my-3 py-2 bg-dark-pro container rounded-10 text-white">
                        <form onSubmit={handleAddProduct} className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg text-main">
                            <h3 className="mt-4 mb-0 text-main">Add A Product</h3>
                            <small className="mb-3 text-second d-block">Please fill up the form to add this product.</small>
                            <div className="my-4">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="text" className="form-label">Product Description</label>
                                <textarea type="text" rows="5" className="form-control" name="text" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="img" className="form-label">Product Img URL</label>
                                <input type="text" className="form-control" name="img" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="stock" className="form-label">Available Stock</label>
                                <input type="number" className="form-control" name="stock" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="minOrder" className="form-label">Minimum Order Quantity</label>
                                <input type="number" className="form-control" name="minOrder" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="text" className="form-control" name="price" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="rating" className="form-label">Rating <span className='text-ss text-white'>( Out of 5 )</span></label>
                                <input type="text" className="form-control" name="rating" required />
                            </div>
                            <button type="submit" className="mt-4 btn btn-main box">Add Prouct</button>
                        </form>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default AddProduct;