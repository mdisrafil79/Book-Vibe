import Banner from '@/components/homepage/Banner';
import Books from '@/components/homepage/Books';
import React from 'react';

const page = () => {
  return (
    <section className='container mx-auto my-[70px]'>
      <Banner/>
      <Books/>
    </section>
  );
};

export default page;