import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axiosPrivate from '../../../api/axiosPrivate';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({ order }) => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    const { _id, total, name, email } = order;
    const price = parseInt(total);

    useEffect(() => {
        axios.post('https://wood-peckers.herokuapp.com/create-payment-intent', { price })
            .then(res => {
                //console.log(res.data);
                if (res.data?.clientSecret) {
                    setClientSecret(res.data.clientSecret);
                }
            });
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            //console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')

            //store payment on database
            const payment = {
                id: _id,
                txtid: paymentIntent.id,
                pstatus: "Paid"
            }
            axiosPrivate.put("https://wood-peckers.herokuapp.com/orders", payment)
                .then(res => {
                    setProcessing(false);
                    toast.success("Payment Sucessful.");
                    navigate('/dashboard/myorders');
                });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mt-5' type="submit" disabled={!stripe || !clientSecret || success}>
                    Complete Payment
                </button>
            </form>
            {
                cardError && <p className=''>{cardError}</p>
            }
            {
                processing && <div className='text-warning d-flex my-5'>
                    <span className="me-3 spinner-border d-block align-items-center" role="status">
                        <span className="visually-hidden"> Loading...</span>
                    </span>
                    <span className='fs-3 fw-bolder'>Processing....</span>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;