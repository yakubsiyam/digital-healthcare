import { faArrowRight, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import propic from '../../media/me.jpg';
import hashtag from '../../media/hashtagss.JPG';
import wood from '../../media/wood.JPG';
import cinefest from '../../media/cines-festss.JPG';

const Portfolio = () => {
    return (
        <main className='container'>
            <section className="row pt-4 justify-content-evenly align-items-center">
                <div className="col-lg-4 col-md-7 col-9 m-5 px-5">
                    <img className='w-100 rounded-circle shadow-lg' src={propic} />
                </div>
                <div className="col-lg-6 my-5 px-5">
                    <h3>Hi there!</h3>
                    <h1>I'm <span>Tanmay Kumar</span></h1>
                    <small className='d-block mb-4'>
                        A full stack web developer based in Dhaka, Bangladesh. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Shortly after graduating from National University of Bangaldesh with a BSc. in Computer Science & Engineering, I started freelancing where I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </small>
                    <a className='btn btn-outline-dark shadow' href='https://drive.google.com/file/d/1ooOsCEIZD8JJOvnQ4MsFoWNQO2tmusdX/view?usp=sharing' target="_blank">Download Resume <FontAwesomeIcon className='ps-2' icon={faFileDownload} /></a>
                </div>
            </section>
            <section className="container px-5 pt-3 mb-5">
                <h2 className='mt-5 mb-4 text-center'>Technologies & Skills</h2>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>CSS</p>
                    <p>85%</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>Javascript</p>
                    <p>75%</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>Bootstrap</p>
                    <p>95%</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>React</p>
                    <p>75%</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>React Router</p>
                    <p>85%</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>Express</p>
                    <p>85%</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>MongoDB</p>
                    <p>95%</p>
                </div>
            </section>
            <section className='py-3 mb-5'>
                <h2 className='my-4 text-center'>My Recent Projects</h2>
                <div className="col-lg-10 row mx-auto d-flex justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-9 px-4 py-lg-4 my-4 mx-auto">
                        <a href="https://hashtag-school.web.app/" target="_blank">
                            <img className='w-100 rounded-10 shadow-lg' src={hashtag} alt="hashtag live" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-9 pb-4 px-4 py-lg-4 my-4 mx-auto">
                        <p className='mb-lg-5'>
                            <span className='fw-bold'>Hashtag</span> is a for-profit massive open online course provider aimed at professional adults and students. Her, students take courses primarily to improve job-related skills.
                        </p>
                        <a className='btn btn-outline-dark shadow px-4 fw-bold' href="https://hashtag-school.web.app/" target="_blank">Live Site <FontAwesomeIcon className='ps-2' icon={faArrowRight} /></a>
                    </div>
                </div>
                <div className="col-lg-10 row mx-auto d-flex justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-9 px-4 py-lg-4 my-4 mx-auto order-lg-1">
                        <a href="https://wood-peckers.web.app/" target="_blank">
                            <img className='w-100 rounded-10 shadow-lg' src={wood} alt="wood peckers live" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-9 pb-4 px-4 py-lg-4 my-4 mx-auto order-lg-0">
                        <p className='mb-lg-4'>
                            <span className='fw-bold'>Woodpeckers, Inc.</span> provides great deals on our huge collection of The Finest Sationary Products of Your Office Or Eductaional Institutions, with fast shipping, free returns, and in a budget friendly wholesell price.!
                        </p>
                        <a className='btn btn-outline-dark shadow px-4 fw-bold' href="https://wood-peckers.web.app/" target="_blank">Live Site <FontAwesomeIcon className='ps-2' icon={faArrowRight} /></a>
                    </div>
                </div>
                <div className="col-lg-10 row mx-auto d-flex justify-content-around align-items-center">
                    <div className="col-lg-6 col-md-9 px-4 py-lg-4 my-4 mx-auto">
                        <a href="https://cinefest.netlify.app/" target="_blank">
                            <img className='w-100 rounded-10 shadow-lg' src={cinefest} alt="cinefest live" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-9 pb-4 px-4 py-lg-4 my-4 mx-auto">
                        <p className='mb-lg-4'>
                            <span className='fw-bolder'>Cinefest</span> is an online database of information related to films, television series – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews.
                        </p>
                        <a className='btn btn-outline-dark shadow px-4 fw-bold' href="https://cinefest.netlify.app/" target="_blank">Live Site <FontAwesomeIcon className='ps-2' icon={faArrowRight} /></a>
                    </div>
                </div>
            </section>
            <section className="container px-5 pt-3 mb-5">
                <h2 className='mt-5 mb-4 text-center'>Languange Profeciency</h2>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>Bengali</p>
                    <p>Native</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>English</p>
                    <p>Fluent</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>Hindi</p>
                    <p>Conversational</p>
                </div>
            </section>
            <section className='py-3 mb-5'>
                <h2 className='mt-5 mb-4 text-center'>Educational Qualifications</h2>
                <div className="col-lg-7 mx-auto d-flex justify-content-between">
                    <div className="col-md-2">
                        <p className="fs-5">2023</p>
                    </div>
                    <div className="col-md-8">
                        <small className='fs-6 text-end d-block'>BSc. in Computer Scince & Engineering</small>
                        <small className='text-end d-block text-secondary fw-bolder'>Tejgaon College, National University, Bangladesh</small>
                    </div>
                </div>
                <div className="my-4 col-lg-7 mx-auto d-flex justify-content-between">
                    <div className="col-md-2">
                        <p className="fs-5">2022</p>
                    </div>
                    <div className="col-md-8">
                        <small className='fs-6 text-end d-block'>Full Stack Web Development</small>
                        <small className='text-end d-block text-secondary fw-bolder'>Programming Hero, Bangladesh</small>
                    </div>
                </div>
            </section>
            <section>
                <h4 className='my-4 text-center fw-bolder'>Knock Me For A Project</h4>
                <div className='mx-auto text-center'>
                    <p><span className='fw-bolder'>Email: </span>itstanmaykumar@gmail.com</p>
                    <p className='pt-4 fw-bold'>Follow Me on Social Medias</p>
                    <p>
                        <a className='mx-3 text-dark pointer'><i className="fab fa-facebook-f"></i></a>
                        <a className='mx-3 text-dark pointer'><i className="fab fa-twitter"></i></a>
                        <a className='mx-3 text-dark pointer'><i className="fab fa-google-plus-g"></i></a>
                        <a className='mx-3 text-dark pointer'><i className="fab fa-linkedin-in"></i></a>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Portfolio;