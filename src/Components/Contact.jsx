import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactDetails = [
    {
      icon: "fa-envelope",
      title: "Email",
      text: "kornvathanak@gmail.com",
    },
    {
      icon: "fa-phone",
      title: "Phone",
      text: "087 77 49 11",
    },
    {
      icon: "fa-location-dot",
      title: "Location",
      text: "Phnom Penh, Cambodia",
    },
    {
      icon: "fa-clock",
      title: "Hours",
      text: "Mon - Sat, 9:00 AM - 5:00 PM",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.message) {
      alert("Please fill in name, email, and message.");
      return;
    }

    alert("Thank you. Your message has been submitted.");
    setForm({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="pt-20 bg-gray-50">
      <iframe
        title="SmartTech Store location"
        className="w-full h-[320px] border-0"
        loading="lazy"
        src="https://www.google.com/maps?q=11.5564,104.9282&z=14&output=embed"
      ></iframe>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <p className="text-blue-600 font-semibold">Contact</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Send us a message
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select subject</option>
                <option value="product">Product question</option>
                <option value="order">Order support</option>
                <option value="repair">Repair service</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <p className="text-blue-600 font-semibold">Information</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Contact Details
            </h2>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>

                  <h3 className="mt-4 font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;