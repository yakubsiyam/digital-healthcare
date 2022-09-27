import React from 'react';

const Blogs = () => {
    return (
        <section className='container'>
            <div className="mx-auto px-3 pb-5 mx-3 my-5">
                <h1 className="my-4 p-3 text-center">Explore Our Recent Blogs</h1>
                <article className="p-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">How will you improve the performance of a React Application?</h3>
                    <ul>
                        <li>
                            <p>Using local storage where necessary.</p>
                        </li>
                        <li className='my-3'>
                            <p>Preventing unnecessary re - renders.</p>
                        </li>
                        <li className='my-3'>
                            <p>Using the useCallback hook.</p>
                        </li>
                        <li className='my-3'>
                            <p>Using the useMemo hook.</p>
                        </li>
                        <li >
                            <p>Using dynamic import().</p>
                        </li>
                        <li >
                            <p>Windowing or list virtualization.</p>
                        </li>
                        <li >
                            <p>By lazy loading images.</p>
                        </li>
                    </ul>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">What are the different ways to manage a state in a React application?</h3>
                    <div>
                        <p>There are four main types of state you need to properly manage in your React apps. They are - </p>
                        <ul>
                            <li>
                                <h5>Local state</h5>
                                <p>It manages data in a single component.</p>
                            </li>
                            <li className='my-3'>
                                <h5>Global state</h5>
                                <p>It manages data in multiple components.</p>
                            </li>
                            <li className='my-3'>
                                <h5>Server state</h5>
                                <p>By using SWR and React Query to manage server.</p>
                            </li>
                            <li >
                                <h5>URL state</h5>
                                <p>By fetching data based off of its url slug or id that is located in the URL.</p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">How does prototypical inheritance work?</h3>
                    <p>Every object contains prototype. By prototyping, javascript adds new methods and properties in an exisiting object. Prototipical inheritence is such a method by which a particular object can inherit the properties and methods of another object. It allows us to reuse the properties and methods of a reference pointer function. This method uses ".prototype" to access the methods and properties.</p>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">Why you do not set the state directly in React.For example, if you have const [products, setProducts] = useState([]). Why you do not set products=[...] instead, you use the setProducts?</h3>
                    <p>Because products=[...] may change or replace the updates you've made in that components. You can loose all your updated data. Upon calling, it only returns present value. Thus you can loose control of the state of all components. That's why we use setProducts with useState(), rather than products = [...]. Thus the data doesn't get changed directly even if chnage the state. It changes the data only when setProduct is called.</p>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">You have an array of products.Each product has a name, price, description, etc.How will you implement a search to find products by name?</h3>
                    <div>
                        <p>By using .find() we can search in the array.</p>
                        <p>For example,</p>
                        <p className='fw-bold'> const expectedProduct = arrayOfProducts.find((product) => product.name === "searchKeyword");</p>
                        <p><span className='fw-bolder'>expectedProduct</span> contains your desired object.</p>
                    </div>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">What is a unit test? Why should write unit tests?</h3>
                    <div>
                        <p>Unit testing is a type of software testing where individual units or software components are tested.Its purpose is to validate that each unit of code performs as expected.</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Blogs;