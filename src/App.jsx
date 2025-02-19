import { useState } from 'react';
import bgTop from './assets/images/bg-top.svg';
import bgBottom from './assets/images/bg-bottom.svg';

function App() {
  const [annually, setAnnually] = useState(true);
  return (
    <>
      <div className='absolute top-0 right-0'>
        <img src={bgTop} alt="" className='max-w-full w-full' />
      </div>
      <section className="p-5 flex flex-col items-center relative">

        <h1 className="text-center text-slate-700 text-3xl">Our Pricing</h1>
        <div className="toggle-container">
          <span> Annually</span>
          <input type="checkbox" name="toggle" id="toggle"
            // when the checkbox is checked, 'annually' is true
            checked={annually}
            onChange={() => setAnnually(!annually)} />
          <label htmlFor="toggle">
            <div className="ball"></div>
          </label>
          <span> Monthly</span>
        </div>
        <div className="flex flex-col gap-8 justify-center text-center sm:w-full sm:mx-auto md:flex-row max-w-5xl mx-auto md:gap-0">
          {/* first-card */}
          <div className="bg-white shadow text-slate-600 rounded p-8 flex flex-col items-center gap-2 w-80">
            <h4>Basic</h4>
            {annually && (<p className="flex items-center text-5xl text-gray-600">
              <span className="text-3xl me-2"> $</span>
              19.99
            </p>)}
            {!annually && (<p className="flex items-center text-5xl text-gray-600">
              <span className="text-3xl me-2"> $ </span>
              199.9
            </p>)}

            <ul className="w-full text-slate-500">
              <li className="border-t border-slate-300 py-3">500 GB Storage</li>
              <li className="border-t border-slate-300 py-3">
                2 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3">
                Send up to 3 GB
              </li>
            </ul>
            <button className="linear-gradient text-white w-full py-3 uppercase cursor-pointer hover:bg-transparent hover:text-gray-500 hover:border-2 hover:border-slate-500 transition-all duration-200 btn">
              Learn More
            </button>
          </div>
          {/* second-card */}
          <div className="linear-gradient text-white rounded p-8 flex flex-col items-center gap-2 w-80 lg:scale-110">
            <h4>Professional</h4>
            {annually && (<p className="flex items-center text-5xl text-white">
              <span className="text-3xl text-white me-2"> $</span>
              24.99
            </p>)}
            {!annually && (<p className="flex items-center text-5xl text-white">
              <span className="text-3xl text-white me-2"> $ </span>
              249.99
            </p>)}

            <ul className="w-full">
              <li className="border-t border-slate-300 py-3">1 TB Storage</li>
              <li className="border-t border-slate-300 py-3">
                5 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3">
                Send up to 10 GB
              </li>
            </ul>
            <button className="bg-white text-slate-500 w-full py-3 uppercase cursor-pointer hover:bg-transparent  hover:border-2 hover:border-slate-500 transition-all duration-200 btn">
              Learn More
            </button>
          </div>
          {/* third-card */}
          <div className="bg-white shadow text-gray-600 rounded p-8 flex flex-col items-center gap-2 w-80">
            <h4>Master</h4>
            {annually && (<p className="flex items-center text-5xl text-gray-600">
              <span className="text-3xl me-2"> $</span>
              39.99
            </p>)}
            {!annually && (<p className="flex items-center text-5xl text-gray-600">
              <span className="text-3xl me-2"> $ </span>
              399.99
            </p>)}

            <ul className="w-full text-slate-500">
              <li className="border-t border-slate-300 py-3">2TB Storage</li>
              <li className="border-t border-slate-300 py-3">
                10 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3">
                Send up to 20 GB
              </li>
            </ul>
            <button className="linear-gradient py-3 w-full text-white uppercase cursor-pointer  hover:bg-transparent hover:text-gray-5 hover:border-2 hover:border-slate-500 hover:text-slate-500 transition-all duration-200 btn">
              Learn More
            </button>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 -z-10'>
          <img src={bgBottom} alt="" className='w-full max-w-full' />
        </div>
      </section>

      {/* footer-note */}
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Uzma Khan</a>.
      </div>

    </>
  );
}

export default App;
