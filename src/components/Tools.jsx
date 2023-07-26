import React from 'react';

import '../css/tools.css'

export default function Tools() {

  return (
    <div className='container tools bg-light mt-5'>
      <div className='row mb-5'>
        <h3 className='text-center mt-5 col-12'>Tools We Use To Serve Your Business</h3>
        <h6 className='text-center col-12'>Our agents are well trained to use these tools efficiently</h6>
      </div>
      <div className="row mx-auto">
        <div className="col-3">
          <img src="https://assets.cdn.filesafe.space/Y3IWrP1rIPRq7bflj0BS/media/62ecd7686ea046a6f546ba1e.png" alt="" />
        </div>
        <div className="col-3">
          <img src="https://assets.cdn.filesafe.space/Y3IWrP1rIPRq7bflj0BS/media/62ecd7686ea0469a5646ba1f.png" alt="" />
        </div>
        <div className="col-3">
          <img src="https://assets.cdn.filesafe.space/Y3IWrP1rIPRq7bflj0BS/media/62ecd7686ea046744046ba1d.png" alt="" />
        </div>
        <div className="col-3">
          <img src="https://assets.cdn.filesafe.space/Y3IWrP1rIPRq7bflj0BS/media/62ecd7686ea046439246ba21.png" alt="tawk logo" />
        </div>
      </div>
    </div>
  );
}