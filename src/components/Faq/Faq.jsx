import React from 'react';

const Faq = () => {
    return (
        <div data-aos="zoom-in-up" className='w-full lg:p-20 py-12 lg:py-20 bg-zinc-800 '>
             <div className="text-center mb-12 lg:mb-20 w-5/6 mx-auto">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
                           Frequently Asked Questions
                        </h2>
                    </div>
       <div className='w-5/6 mx-auto space-y-2'>
       <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How can I track my order?
                </div>
                <div className="collapse-content">
                    <p>Tracking your order is easy! Once your order is shipped, you will receive a confirmation email with a tracking number. Simply click on the provided link or visit the carrier's website and enter your tracking number to stay updated on the status and location of your package.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
                </div>
                <div className="collapse-content">
                    <p>We accept a variety of payment methods to ensure a convenient shopping experience. You can securely pay for your purchases using major credit cards like Visa, Mastercard, and American Express. We also offer the option to pay via PayPal, providing an additional layer of security and flexibility.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Do you offer international shipping?
                </div>
                <div className="collapse-content">
                    <p>Yes, we offer international shipping to many countries worldwide. During the checkout process, you can select your country from the available options. Please note that international shipping rates and delivery times may vary depending on the destination.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is your return policy?
                </div>
                <div className="collapse-content">
                    <p>We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. You can return your unused and unopened items within 30 days of delivery for a refund or exchange. Please review our detailed return instructions on our website and contact our customer support team for further assistance.</p>
                </div>
            </div>
       </div>
        </div>
    );
};

export default Faq;