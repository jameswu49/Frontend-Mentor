import React from 'react';

export default function App() {
  return (
    <>
      <div className="outer-container">
        <div className="row mx-5">
          <div className="container">
            <div className="img-row">
              <div className="col-12 d-flex justify-content-center">
                <img className='mx-1' src="../images/image-qr-code.png" alt="" />
              </div>
              <div className="row">
                <div className="col-12">
                  <h1 className='mt-4 mx-2'>Improve your front-end skills by building projects</h1>
                  <p className='mx-4'>Scan the QR code to visit Frontend Mentor and take your coding
                    skills to the next level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
