import React from 'react';
import Image from 'next/image';
import Contact from "../../../public/images/Contact/contact-pic.png";

const index = () => {
  return (
    <>
      <div>
        <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
          <div className="radial-bgone hidden lg:block"></div>
          <div className='text-center mb-14'>
            <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Contact US</h3>
            <p className='text-bluish md:text-lg font-normal leading-8'>Empower Your Dreams: Connect Today! Our team is here to support, answer questions, and explore exciting opportunities. Lets turn your ideas into success together!</p>
          </div>
        </div>

        <section id="contact">
          <div className="contact-box">
            <Image src={Contact} alt='contact' width={550} />
            <div className="contact-form-wrapper">
              <div className="contact_main md:flex md:flex-col col-lg-6 col-md-6 col-sm-12 mx-auto">
                <div className="wpo-contact-form-area">
                  <form
                    method="post"
                    className="contact-validation-active"
                    id="contact-form"
                  >
                    <div className="input-div grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Contact Number"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-span-2">
                        <textarea
                          className="form-control"
                          name="note"
                          id="note"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <button className="contact_form_button inline-block text-white w-100 px-4 mt-8 py-2 leading-none rounded">
                      Contact Us
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default index;
