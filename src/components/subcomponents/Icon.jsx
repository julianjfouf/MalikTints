import Image from 'next/image';
import React from 'react';

const Icon = ({ icon, link }) => {
    return (
        <a target="_blank" href={link} className='w-9 h-9 bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] rounded-full flex justify-center items-center'>
            <Image src={icon} className='w-6 h-6 object-contain aspect-auto' />
        </a>
    );
}

export default Icon;
