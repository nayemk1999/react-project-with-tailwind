import React from 'react';

const HeaderMain = () => {
    return (
        <div className="2xl:container 2xl:mx-auto xl:mx-auto xl:container px-2 sm:px-6 lg:px-20">
            <div className="flex lg:flex-row items-center justify-center mt-3 md:flex-col sm: flex-col ">
                <div className=" sm: mb-2">
                    <h1 className="lg:text-4xl pl-11 pt-11 font-bold sm:text-sm">Now is the time <br/> to start selling <br/>things online</h1>
                    <p className="pl-11 mt-2">Kora is a leading online shop creation platform which offers amazing features for ecommerce</p>
                    <div className='mt-11 pl-11'>
                        <button className="p-4 bg-red-500 mr-2 text-2xl rounded-2xl text-white hover:bg-black" type="button">Sign up</button>
                        <button className="p-4 bg-red-500 mr-2 text-2xl rounded-2xl text-white hover:bg-black" type="button">Discover</button>
                    </div>
                </div>
                <div>
                    <img src="https://inovatik.com/kora/images/header.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;