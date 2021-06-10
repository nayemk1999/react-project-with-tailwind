import React from 'react';

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto xl:mx-auto xl:container px-2 sm:px-6 lg:px-20 mt-16">
            <div className="flex lg:flex-row items-center justify-center mt-3 md:flex-col sm: flex-col ">
                <div>
                    <img src="https://inovatik.com/kora/images/introduction.jpg" alt="" />
                </div>
                <div className=" sm: mb-2">
                    <h1 className="lg:text-4xl pl-11 pt-11 font-bold sm:text-sm">Kora is here to help you  <br /> grow your online shop</h1>
                    <p className="pl-11 mt-2">We believe in sustainable and trustful ecommerce which offers opportunities for both shop owners and customers. Our entire experience and passion can be found in Kora and you are invited to use it for your business</p>
                    <div className='mt-11 pl-11'>
                        <button className="p-4 bg-red-500 mr-2 text-2xl rounded-2xl text-white hover:bg-black" type="button">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;