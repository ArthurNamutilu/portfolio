const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/lbjnzwvb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-600 text-gray-300">
            Contact
          </p>
        </div>
        <p className="text-gray-300 py-4">
          {/* href="mailto:arthurggnamutilu@gmail.com" */}
          Submit the form below or send me an email:{" "}
          <a
            className="flex justify-between items-center w-full text-blue-300 "
            href="mailto:arthurggnamutilu@gmail.com"
          >
            arthurggnamutilu@gmail.com
          </a>
        </p>
        {/* bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' */}
        <input
          className=" p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
