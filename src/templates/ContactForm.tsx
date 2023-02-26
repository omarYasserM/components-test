const ContactForm = () => {

  return (
    <section className=" py-20 px-2 sm:px-4 md:px-8 lg:px-12 lg:py-[120px] overflow-hidden relative z-10 ">
   <div className="container mx-auto">
      <div className="flex flex-wrap flex-col items-center lg:flex-row lg:justify-between -mx-4">
         <div className="w-full lg:w-1/2 xl:w-6/12 px-4 flex justify-center">
            <div className="max-w-[570px] mb-12 lg:mb-0 text-center">
               <span className="block mb-4 text-base text-gray-900 font-semibold">
               Contact Us
               </span>
               <h2
                  className="
                  text-gray-900
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                  >
                  GET IN TOUCH WITH US
               </h2>
               <p className="text-base text-body-color leading-relaxed mb-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  adiqua minim veniam quis nostrud exercitation ullamco
               </p>

            </div>
         </div>
         <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div className="bg-gray-200 border border-gray-300 relative rounded-lg p-8 sm:p-12 shadow-lg">
               <form>
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Name"
                        className="
                        
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[#f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-gray-900
                        
                        "
                        />
                  </div>
                  <div className="mb-6">
                     <input
                        type="email"
                        placeholder="Your Email"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[#f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-gray-900
                        "
                        />
                  </div>
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Phone"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[#f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-gray-900
                        "
                        />
                  </div>
                  <div className="mb-6">
                     <textarea
                        rows={6}
                        placeholder="Your Message"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[#f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-gray-900
                        "
                        ></textarea>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="
                        w-full
                        text-white bg-primary-500
                        rounded
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                        >
                     Send Message
                     </button>
                  </div>
               </form>
               <div>
                  
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default ContactForm