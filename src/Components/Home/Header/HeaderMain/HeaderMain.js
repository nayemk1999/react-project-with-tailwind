import React from 'react';

const HeaderMain = () => {
    return (
        <div className="2xl:container 2xl:mx-auto xl:mx-auto xl:container px-2 sm:px-6 lg:px-20">
            <div className="flex items-center justify-center ">
                <div>
                    <h1>Now is the time to start selling things online</h1>
                    <p>Kora is a leading online shop creation platform which offers amazing features for ecommerce</p>
                    <div>
                        <button type="button">Sign up</button>
                        <button type="button">Discover</button>
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