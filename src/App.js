import React from 'react';

const App = () => {
  return (
    <div className='bg-portfolio-bg text-portfolio-main font-sans selection:bg-portfolio-accent'>
      {/* --- HERO SECTION --- */}
      <header className='px-8 pt-20 pb-10 max-w-6xl mx-auto'>
        <p className='text-gray-400 text-sm mb-4'>
          Web Architecture thru data.
        </p>
        <h1 className='text-5xl md:text-7xl font-serif mb-6 leading-tight'>
          User Experience Designer <br /> & Developer
        </h1>
        <p className='text-gray-400 max-w-md leading-relaxed'>
          Specializing in SaaS applications, e-commerce, mobile and boutique
          designs.
        </p>
      </header>

      <br />
      <br />
      <br />

      {/* --- BLOG SECTION --- */}
      <section className='py-20 px-8 max-w-6xl mx-auto'>
        <h2 className='text-4xl font-serif mb-12'>Articles & Blog</h2>
        <div className='grid md:grid-cols-4 gap-4'>
          <img
            src={`${process.env.PUBLIC_URL}/img/finna2.jpg`}
            alt='Blog Post 1'
            className='opacity-30 border border-portfolio-main border-spacing-6'
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/finna2.jpg`}
            alt='Blog Post 1'
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/finna2.jpg`}
            alt='Blog Post 1'
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/finna2.jpg`}
            alt='Blog Post 1'
          />
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className='py-20 px-8 max-w-4xl mx-auto text-center'>
        <p className='text-xs uppercase text-gray-500 mb-8'>What clients say</p>
        <h2 className='text-4xl font-serif mb-12'>Client Testimonials</h2>
        <div className='space-y-0 text-left border-t border-white/10'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4'
            >
              <p className='text-gray-300 italic mb-4'>
                "Exceptional work. Professional and fast."
              </p>
              <p className='text-xs font-bold uppercase tracking-widest'>
                Client Name — Position
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className='py-20 px-8'>
        <div className='bg-portfolio-accent h-[400px] flex flex-col items-center justify-center text-center'>
          <h2 className='text-5xl font-serif mb-8'>Have a project in mind?</h2>
          <button className='border-b-2 border-white pb-2 text-sm uppercase font-bold tracking-[0.2em]'>
            Bring it on
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className='p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end'>
        <div>
          <p className='text-sm font-bold'>bricksandcanvas@gmail.com</p>
          <p className='text-xs text-gray-500 mt-2'>© BricksAndCanvas 2021</p>
        </div>
        <div className='flex gap-6 text-xs uppercase tracking-widest text-gray-400 mt-8 md:mt-0'>
          <a href='/' className='hover:text-white'>
            Behance
          </a>
          <a href='/' className='hover:text-white'>
            Dribbble
          </a>
          <a href='/' className='hover:text-white'>
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
