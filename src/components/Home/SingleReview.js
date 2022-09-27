import React from 'react';

const SingleReview = (props) => {
    const { _id, id, name, location, img, rating, title, text } = props.review;

    const restRate = 5 - parseInt(rating);

    return (
        <div className='p-md-5 mx-5'>
            <div className="hy-100 rounded-20 p-3 py-4 p-lg-5 bg-light shadow d-flex flex-column justify-content-between">
                <h5 className='fw-bolder'>{title}</h5>
                <p className="">"{text}"</p>
                <div className="row mt-4">
                    <div className="mx-auto col-lg-3 col-md-4">
                        <img className="w-100 rounded-circle" src={img} alt="r img" />
                    </div>
                    <div className='col-md-8 d-flex flex-column justify-content-center'>
                        <small className='fw-bolder fs-6'>{name}</small>
                        <div className="pb-2">
                            {
                                [...Array(rating)].map((e, i) => <i key={i} className="text-ss text-warning fas fa-star pe-2"></i>)
                            }
                            {
                                [...Array(restRate)].map((e, i) => <i key={i} className="text-ss text-warning far fa-star pe-2"></i>)
                            }
                        </div>
                        <small>{location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;