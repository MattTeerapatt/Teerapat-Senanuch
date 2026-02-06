import LineGradient from "./LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <>
      <section id="contact" className="contact py-48">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex justify-between w-full"
        >
          <div>
            <p className="font-playfair font-semibold text-4xl text-text-primary">
              CONTACT
            </p>

            <div className="flex md:justify-end my-5">
              <LineGradient width="w-full" />
            </div>
          </div>

          <div className="hidden md:block">
            <p className="font-playfair font-semibold text-4xl text-text-primary">
              GET STARTED{" "}
              <span className="py-1 text-accent-gold"> CHAT WITH ME </span>
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="w-full" />
            </div>
          </div>
        </motion.div>

        {/* FORM & IMAGE */}
        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/3 flex justify-center"
          >

<div className="text-left justify-start w-full">
  <h4 className="font-playfair text-text-primary mb-3 text-2xl underline underline-offset-4">
    Contact me
  </h4>
  <ul className="list-none ml-0 md:ml-0 text-xl text-text-secondary">
    <li className="mb-2 font-playfair">
      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
      mmatt.trp@gmail.com
    </li>
    <li className="mb-2 font-playfair">
      <FontAwesomeIcon icon={faPhone} className="mr-2" />
      +66 64 595 2491
    </li>
  </ul>
</div>






            {/* <img
              src="/src/assets/icons/contact-us.png"
              alt="contact"
              className="w-full"
            /> */}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-2/3 mt-10 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/mmatt.trp@gmail.com"
              method="POST"
            >
              <p className="font-playfair text-xl font-bold text-text-primary">What's your email? *</p>
              <input
                className="w-full bg-cream-base/60 backdrop-blur-sm text-text-primary rounded-md font-semibold placeholder-text-light p-3 mt-2 border-2 border-beige-soft focus:outline-none focus:border-accent-gold transition duration-300 hover:border-accent-gold shadow-elegant"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.company && (
                <p className="text-red-500 mt-1">
                  {errors.company.type === "required" &&
                    "This field is required."}
                  {errors.company.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              {/* company */}
              <p className="font-playfair text-xl pt-4 mb-0 pb-0 font-bold text-text-primary">What's your company? *</p>

              <input
                className="w-full bg-cream-base/60 backdrop-blur-sm text-text-primary rounded-md font-semibold placeholder-text-light p-3 mt-2 border-2 border-beige-soft focus:outline-none focus:border-accent-gold transition duration-300 hover:border-accent-gold shadow-elegant"
                type="text"
                placeholder="COMPANY"
                {...register("company", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.company && (
                <p className="text-red-500 mt-1">
                  {errors.company.type === "required" &&
                    "This field is required."}
                  {errors.company.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              {/* name */}
              <p className="font-playfair text-xl pt-4 mb-0 pb-0 font-bold text-text-primary">What's your name? *</p>


              <input
                className="w-full bg-cream-base/60 backdrop-blur-sm text-text-primary rounded-md font-semibold placeholder-text-light p-3 mt-2 border-2 border-beige-soft focus:outline-none focus:border-accent-gold transition duration-300 hover:border-accent-gold shadow-elegant"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red-500 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              {/* mail */}

              {/* detail */}
              <p className="font-playfair text-xl pt-4 mb-0 pb-0 font-bold text-text-primary">Your message *</p>


              <textarea
                className="w-full bg-cream-base/60 backdrop-blur-sm text-text-primary rounded-md font-semibold placeholder-text-light p-3 mt-2 border-2 border-beige-soft focus:outline-none focus:border-accent-gold transition duration-300 hover:border-accent-gold shadow-elegant"
                name="message"
                placeholder="DETAILS"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red-500 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="p-5 bg-accent-gold font-semibold text-white 
                mt-5 rounded-md hover:bg-gold-accent transition duration-500 ml-auto
                flex shadow-elegant
                "
                type="submit"
              >
                SEND ME A MESSAGE
              </button>


            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
