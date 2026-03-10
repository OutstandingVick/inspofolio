import React from 'react';

const App = () => {
  return (
    <div className='bg-portfolio-main text-portfolio-bg font-sans selection:bg-portfolio-accent'>
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

      {/* --- FEATURED WORK (The Coffee Image) --- */}
      <section className='relative w-full h-[600px] overflow-hidden'>
        <img
          src={`${process.env.PUBLIC_URL}/img/finna.jpg`}
          alt='Featured Project'
          className='w-full h-full object-cover grayscale-[50%]'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center gap-10'>
          <h2 className='text-5xl text-blue-500 md:text-8xl font-black text-center uppercase tracking-tighter'>
            A FINNA <br /> REALITY WITH <br />
            <span className='text-violet-400'>STABLECOINS</span>
          </h2>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/finna2.jpg`}
              alt='Featured Project'
              className='w-60 h-96 object-cover rounded-md'
            />
          </div>
        </div>
      </section>

      {/* --- CASE STUDY: CEBU PACIFIC --- */}
      <section className='py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
        <div>
          <span className='text-xs uppercase tracking-widest text-gray-500'>
            Curated Work
          </span>
          <h2 className='text-6xl font-serif mt-4 mb-6'>Cebu Pacific</h2>
          <p className='text-gray-400 mb-8 leading-relaxed'>
            Bringing an aging Airline Company's website to the 21st century.
            Creating a profound rethinking of flight booking, and design.
          </p>
          <div className='text-sm border-l border-white/20 pl-4 space-y-2'>
            <p>User Interface Design</p>
            <p>High Fidelity Designs</p>
          </div>
          <button className='mt-8 text-xs font-bold border-b border-portfolio-accent pb-1 uppercase tracking-widest'>
            View Case Study
          </button>
        </div>
        <div className='relative'>
          <img
            src='/cebu-ui-1.jpg'
            alt='UI Desktop'
            className='rounded shadow-2xl'
          />
          <img
            src='/cebu-ui-2.jpg'
            alt='UI Mobile'
            className='absolute -bottom-10 -left-10 w-2/3 border-8 border-portfolio-bg rounded shadow-2xl'
          />
        </div>
      </section>

      {/* --- BLOG SECTION --- */}
      <section className='py-20 px-8 max-w-6xl mx-auto'>
        <h2 className='text-4xl font-serif mb-12'>Articles & Blog</h2>
        <div className='grid md:grid-cols-4 gap-4'>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className='group cursor-pointer'>
              <div className='aspect-[3/4] bg-zinc-900 mb-4 overflow-hidden rounded'>
                <div className='w-full h-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 group-hover:scale-105 transition-transform duration-500' />
              </div>
              <h4 className='font-bold text-sm'>Post Title {i}</h4>
            </div>
          ))}
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
