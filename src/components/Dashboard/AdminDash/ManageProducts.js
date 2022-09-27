import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import useProducts from '../../../hooks/useProducts';
import DashNav from '../DashNav';

const ManageProducts = () => {

    const [products, setProducts] = useProducts();

    let confirmation = false;
    let deleteId = "";

    const handleConfirmation = (id) => {
        deleteId = id;
        confirmation = true;
        //console.log(confirmation);
    }

    const deleteProduct = () => {
        //console.log(deleteId);
        if (confirmation) {
            axiosPrivate.delete(`https://wood-peckers.herokuapp.com/products/${deleteId}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        toast.warn("Product is deleted.");
                        const remainingProducts = products.filter(product => product._id !== deleteId);
                        setProducts(remainingProducts);
                    }
                })
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="my-3 py-2 bg-dark-pro rounded-10 text-white">
                        <h3 className='text-center text-main mt-4'>Product Inventory</h3>
                        <div className="p-2 table-responsive">
                            {
                                products.length === 0 ?
                                    (
                                        <button className="btn fs-5 text-white pb-2" type="button">
                                            <span className="me-4 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </button>
                                    )
                                    :
                                    (
                                        <table className="table text-light">
                                            <thead className="text-main">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products.map((product) => (
                                                        <tr key={product._id}>
                                                            <td>{product.name}</td>
                                                            <td>{product.stock}</td>
                                                            <td onClick={() => handleConfirmation(product._id)}>
                                                                <button className="btn text-danger p-0" data-bs-toggle="modal" data-bs-target="#confirmationModal">Delete</button>

                                                            </td>

                                                        </tr>

                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    )
                            }
                            <div className="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                                <div className="modal-dialog text-dark">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title fw-bolder text-main" id="confirmationModalLabel">Please Confirm</h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <h5>Are you sure, you want to delete this product?</h5>
                                        </div>
                                        <div className="modal-footer">
                                            <button onClick={() => deleteProduct()} type="button" className="btn btn-main" data-bs-dismiss="modal">Delete Product</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;