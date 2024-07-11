'use client'
import React from 'react';
import Templates from '@/app/(data)/Templates';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TemplatesScreen = () => {
    return (
        <div className='flex bg-black justify-center h-screen items-center'>
            {Templates.map((item: any, index: number) => (
                <Link key={index} href={'/dashboard/content/'+item?.slug} passHref>
                    <div 
                        className='p-12 shadow-lg shadow-red-700 rounded-md border gap-3 hover:border-dashed hover:border-red-700 cursor-pointer bg-white flex flex-col' 
                        role="button" 
                        aria-label={`Template: ${item.name}`}
                    >
                        <h2 className='font-medium text-2xl text-black'>{item.name}</h2>
                        <p className='text-gray-500 line-clamp-3'>{item.dec}</p>
                        <Button className='hover:scale-110' >Click Here to generate</Button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TemplatesScreen;
