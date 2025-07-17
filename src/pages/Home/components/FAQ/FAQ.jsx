import { React, useState } from 'react'

import "./FAQ.css"

const FAQ = () => {


    const data = [
        {
            ques: "What payment methods do you accept?",
            ans: "We accept debit/credit cards, UPI, net banking, and COD (Cash on Delivery) for select locations."
        },
        {
            ques: "Can I modify or cancel my order after placing it?",
            ans: "Orders can only be modified or canceled within 30 minutes of placement. Please contact support immediately."
        },
        {
            ques: "What should I do if I receive a damaged or wrong product?",
            ans: "If the product is damaged or incorrect, please raise a return request within 3 days of delivery through your order page."
        },
        {
            ques: "What are the delivery charges?",
            ans: "Delivery is free for orders above ₹499. A nominal charge may apply for smaller orders."
        },
        {
            ques: "How long will it take to receive my order?",
            ans: "Orders are usually delivered within 3–7 business days depending on your location."
        },
        {
            ques: "How will I receive my refund?",
            ans: "Refunds are processed back to your original payment method within 5–7 business days after approval."
        },
        {
            ques: "Do you offer bulk purchasing or B2B sales?",
            ans: "Yes, please contact our business team at +1 202-918-2132 for bulk inquiries."
        },
        {
            ques: "How can I contact customer support?",
            ans: "You can reach us via the chat option, email at support@example.com, or call our helpline between 9 AM – 7 PM."
        }
    ]


    const [selected, setSelected] = useState(null);

    const handleselect = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };


    return (
        <div className='faq'>
            <div className='faq-head'>
                <div className='head'>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div>
                    <div className='underline' id='faqu'></div>
                    <div className='divider'></div>
                </div>
            </div>
            <div className='faq-cards'>
                {data.map((item, i) => {
                    return (
                        <div className='qacard' key={i} onClick={() => { handleselect(i) }}>
                            <div className='ques'>
                                <p >{item.ques}</p>
                                <div className={selected === i ? "reverse" : ""}>
                                    <p id="plus">+</p>
                                </div>
                            </div>
                            <div id='line'></div>
                            <div className={selected === i ? "answers show" : "answers"}>
                                <p>{item.ans}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FAQ
