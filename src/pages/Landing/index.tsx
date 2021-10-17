import React from 'react'

const Navbar: React.FC = () => {
  const navs: string[] = ['FAQ', 'Developers']
  return (
    <div className={'navbar mb-2 bg-neutral text-neutral-content'}>
      <div className={'flex-1 px-2 mx-2'}>
        <span className={'text-lg font-bold'}>
          ZIL-Lending
        </span>
      </div>
      <div className={'flex-none hidden px-2 mx-2 lg:flex'}>
        <div className={'flex items-stretch'}>
          {navs.map((x, i) => <a className="btn btn-ghost btn-sm rounded-none" key={i}>{x}</a>)}
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost rounded-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

const Landing: React.FC = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <div className='container mx-auto'>
        <section className='py-32 flex flex-col items-center'>
          <h1 className='text-5xl font-bold'>ZIL Lending</h1>
          <h2 className='text-8xl font-black py-6'>$ 123,456,789</h2>
          <p className='py-4'>Quis, duis. Lobortis. Parturient habitant dignissim curae; nulla ipsum, leo urna
            facilisis. Integer
            fusce est ridiculus dignissim tristique, fames montes litora volutpat phasellus sit ullamcorper et
            cubilia, egestas eleifend netus.</p>
          <button className='btn rounded-none'>Enter</button>
        </section>
        <section className='my-4'>
          <div className="shadow bg-white px-4 py-4">
            <h2 className=''>Market size</h2>
            <p className='text-xl font-bold'>$ 123456789</p>
          </div>
        </section>
        <section className='my-4'>
          <div className="text-center">
            <div className='grid grid-cols-10 gap-4 text-xs items-end'>
              <div className='col-span-3'><span>Assets</span></div>
              <div><span>Market size</span></div>
              <div><span>Total borrowed</span></div>
              <div><span>Deposit APY</span></div>
              <div className='flex flex-col'><span>Variable</span><span>borrowed APR</span></div>
              <div className='flex flex-col'><span>Stable</span><span>borrowed APR</span></div>
              <div className='col-span-2'></div>
            </div>
            <div>
              <div className='grid grid-cols-10 bg-white shadow py-4 my-2 font-bold items-center'>
                <div className='col-span-3'><span>ZIL</span></div>
                <div><span>$ 123.5K</span></div>
                <div><span>$ 123.5K</span></div>
                <div><span>40%</span></div>
                <div><span>40%</span></div>
                <div className=''><span>-</span></div>
                <div className='col-span-2 flex flex-row gap-2 justify-center'>
                  <button className='btn btn-outline btn-sm rounded-none'>Deposit</button>
                  <button className='btn btn-outline btn-sm rounded-none'>Borrow</button>
                </div>
              </div>
              <div className='grid grid-cols-10 bg-white shadow py-4 my-2 font-bold items-center'>
                <div className='col-span-3'><span>ZIL</span></div>
                <div><span>$ 123.5K</span></div>
                <div><span>$ 123.5K</span></div>
                <div><span>40%</span></div>
                <div><span>40%</span></div>
                <div className=''><span>-</span></div>
                <div className='col-span-2 flex flex-row gap-2 justify-center'>
                  <button className='btn btn-outline btn-sm rounded-none'>Deposit</button>
                  <button className='btn btn-outline btn-sm rounded-none'>Borrow</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className='flex flex-col items-center bg-gray-700 text-white'>
        <div className='container py-12 grid grid-cols-4 gap-4 justify-items-center'>
          <a>Twitter</a>
          <a>Twitter</a>
          <a>Twitter</a>
          <a>Twitter</a>
          <a>Twitter</a>
          <a>Twitter</a>
          <a>Twitter</a>
          <a>Twitter</a>
        </div>
        <div className='pt-16 flex flex-col items-center '>
          <p>hey</p>
          <p>Copyright © 2021 xsmartdao</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
