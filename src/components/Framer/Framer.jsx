import React from 'react'


import { motion } from 'framer-motion';

const Framer = ({ src, alt, direction = 'left', ...rest }) => {

    const xValue = direction === 'left' ? -100 : 100;
    return (
        <div>
            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0, x: xValue }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }} 
                {...rest}
                
            />


        </div>
    )
}

export default Framer
