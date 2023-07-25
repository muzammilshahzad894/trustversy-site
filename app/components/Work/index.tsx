import Image from 'next/image';
import IconOne from "../../../public/images/Work/icon-1.png"
import IconTwo from "../../../public/images/Work/icon-2.png"
import IconThree from "../../../public/images/Work/icon-3.png"

const Work = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
        <div className="radial-bgone hidden lg:block"></div>
        <div className='text-center mb-14'>
          <h3 className='text-offwhite text-3xl md:text-4xl font-bold mb-3'>Trustversy Innovative Services</h3>
          <p className='text-bluish md:text-md font-normal leading-8'>Discover the Power of Trustversy Innovative Services Solutions, designed to revolutionize your business <br /> with cutting-edge strategies and unparalleled expertise. Partner with us today and unlock the true <br /> potential of trust in your organization, paving the way for lasting success and growth</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

          <div className='card-div1 card-b p-8' style={{ height: '400px' }}>
            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
              <Image src={IconOne} alt='icon' style={{ width: '40px' }} />
            </div>
            <div>
              <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
            </div>
            <h3 className='text-2xl text-offwhite font-semibold text-center mt-4'>Virtual stores</h3>
            <p className='text-base font-normal text-bluish text-center mt-2'>Virtual stores are online marketplaces revolutionizing shopping with convenience and global accessibility. Offering diverse products, personalized features, and secure payments, they redefine the retail experience. Leveraging digital technology, these platforms empower businesses to thrive in the digital age dynamic landscape.
</p>
          </div>

          <div className='card-div2 card-b p-8' style={{ height: '400px' }}>
            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
              <Image src={IconTwo} alt='icon' style={{ width: '40px' }} />
            </div>
            <div>
              <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
            </div>
            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>3D Web</h3>
            <p className='text-base font-normal text-bluish text-center mt-2'>3D Web integrates three-dimensional elements using technologies like WebGL and 3D modeling, creating immersive web experiences. It enhances user engagement through captivating visualizations, interactive product showcases, and virtual reality encounters. This innovative approach transforms web browsing, offering a dynamic and engaging digital journey.</p>
          </div>

          <div className='card-div3 card-b p-8' style={{ height: '400px' }}>
            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
              <Image src={IconThree} alt='icon' style={{ width: '40px' }} />
            </div>
            <div>
              <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
            </div>
            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>3D Render</h3>
            <p className='text-base font-normal text-bluish text-center mt-2'>3D render creates lifelike images using 3D computer models, applied in architecture, gaming, film, and product design for effective visualization. This technique breathes life into virtual objects, offering realistic representations across creative fields. With precision in intricate details, 3D rendering is indispensable for professionals in diverse industries.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Work;
