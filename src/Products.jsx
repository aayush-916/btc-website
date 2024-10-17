import React, {useState} from 'react'
import "./App.css"

function Products() {
  const [name , setname] = useState('');
  const [number , setnumber] = useState('');
  const [address , setaddress] = useState('');
  const [loading , setloading] = useState(false);

  const submit = async (e) => {
    setloading(true);
    e.preventDefault();
    
    try {
      const response = await fetch('https://btcbackend-lvxj.onrender.com/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, number , address }),
      });

      const data = await response.json();
      setloading(false);
      alert(data.message);
      
    } catch (error) {
      console.error('Error registering user:', error);
      setloading(false);
    }
  };

  return (
    <>
        
      <div className="tw-bg-[#353535] tw-py-10">
        <h3 id="product" className="tw-text-center tw-text-3xl tw-font-bold tw-mb-6 tw-text-white">
          <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-purple-400 tw-to-pink-600">
            Our
          </span>{" "}
          Products
        </h3>
        <p className="tw-text-center tw-text-lg tw-text-gray-300 tw-mb-10">
          Premium-Quality Full HD 1080p CCTV Security Cameras Video Surveillance
          System with Night Vision At Affordable Price
        </p>

        <div className="container text-center mt-4">
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/Day-night.jpg"
                  className="card-img-top size"
                  alt="Day/Night CCTV Camera"
                />
                <div className="card-body">
                  <p className="card-text">Day/Night CCTV Camera</p>
                </div>
                <a className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book now</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/zoom-camera.jpg"
                  className="card-img-top size"
                  alt="Extra Zoom Camera"
                />
                <div className="card-body">
                  <p className="card-text">Extra Zoom Camera</p>
                </div>
                <a className='btn btn-danger ' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book now</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/wireless.webp"
                  className="card-img-top size"
                  alt="Wireless CCTV Cameras"
                />
                <div className="card-body">
                  <p className="card-text">Wireless CCTV Cameras</p>
                </div>
                <a className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book now</a>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row">
            {/* Card 4 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/IPCamera.jpg"
                  className="card-img-top size"
                  alt="Network/IP CCTV Cameras"
                />
                <div className="card-body">
                  <p className="card-text">Network/IP CCTV Cameras</p>
                </div>
                <a className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book now</a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/night-vision.jpg"
                  className="card-img-top size"
                  alt="Night Vision CCTV Camera"
                />
                <div className="card-body">
                  <p className="card-text">Night Vision CCTV Camera</p>
                </div>
                <a className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book now</a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/full-hd.webp"
                  className="card-img-top size"
                  alt="High Definition (HD) CCTV Camera"
                />
                <div className="card-body">
                  <p className="card-text">High Definition (HD) CCTV Camera</p>
                </div >
                <a className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book now</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Book now</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          {/* <!-- ......FORM....... --> */}
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" >Name</label>
              <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e)=> setname(e.target.value)} />
              </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label" >Mobile Number</label>
              <input type="number" className="form-control" id="mobile" name="mobile" value={number} onChange={(e) => setnumber(e.target.value)} required />
              </div>
            <div className="mb-3">
              <label htmlFor="text" className="form-label" >Address</label>
              <input type="text" className="form-control" id="address" name="address" value={address} onChange={(e) => setaddress(e.target.value)} />
              </div>
            
            
              {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button type="submit" className="btn btn-primary">Submit</button>
                )}
          </form>

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
      </div>
    </div>
  </div>


    </>
  )
}

export default Products