import React from 'react';
import Banner from './Banner';
import BestSellers from './BestSellers';
import DownloadApp from './DownloadApp';
import Newsletter from './Newsletter';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <BestSellers></BestSellers>
            <DownloadApp></DownloadApp>
            <Summery></Summery>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;