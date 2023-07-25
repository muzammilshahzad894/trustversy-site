"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What is 3D Render?",
        subheading: 'A 3D render is a highly realistic and visually captivating representation of a digital model or design. By utilizing advanced computer software and rendering techniques, it brings virtual objects to life with stunning detail, depth, and accuracy. 3D renders play a pivotal role in enhancing presentations, marketing materials, and architectural visualizations, leaving a lasting impact on clients and stakeholders.'
    },
    {
        heading: "2. How Virtual stores can help you out in business and shopping?",
        subheading: 'Virtual stores offer numerous advantages for businesses and shoppers alike. For businesses, they provide a cost-effective way to reach a broader audience globally, reducing the need for physical retail spaces and associated expenses. For shoppers, virtual stores offer unparalleled convenience, enabling them to browse and purchase products from the comfort of their homes, while also providing immersive and interactive shopping experiences that enhance decision-making and satisfaction. Embracing virtual stores can be a strategic move to boost business growth and elevate the shopping journey for customers.'
    },
    {
        heading: "3. How Virtual stores can help you out in business and shopping?",
        subheading: '3D web is crucial as it revolutionizes online experiences by adding depth and interactivity. It enables businesses to showcase products and services in a more engaging and visually appealing manner, capturing the attention of users and increasing their time spent on websites. This immersive approach fosters better user engagement, leading to enhanced brand perception, higher conversions, and a competitive edge in the digital landscape.'
    },
]

const Faq = () => {
    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-4xl font-bold text-offwhite mb-3">Frequently Asked Questions</h3>
            <p className="text-center lg:text-sm font-normal text-bluish">At Trustversy, we strive to provide you with transparent and insightful responses, ensuring complete clarity and confidence in our services.</p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
