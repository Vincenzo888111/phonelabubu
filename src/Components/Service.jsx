import { useEffect, useState } from "react";

export default function PhoneShopServices() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl ">
              Our Phone Shop Services
            </h2>
            <p className="mx-auto text-xl text-gray-600 max-w-3xl">
              We provide complete mobile phone solutions — from expert repairs
              and phone sales to accessories, unlocking, and data recovery.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Service
            delay="delay-100"
            inView={inView}
            icon="fa-screwdriver-wrench"
            color="blue"
            title="Phone Repair"
            description="Fast, affordable, and professional smartphone repair services."
            items={[
              "Screen & Glass Replacement",
              "Battery Replacement",
              "Charging Port & Speaker Repair",
              "Water Damage Repair",
            ]}
          />

          <Service
            delay="delay-200"
            inView={inView}
            icon="fa-mobile-screen-button"
            color="green"
            title="Phone Sales"
            description="New and certified refurbished smartphones from top brands."
            items={[
              "iPhone & Android Devices",
              "Unlocked Phones",
              "Warranty Available",
              "Trade-in Options",
            ]}
          />

          <Service
            delay="delay-300"
            inView={inView}
            icon="fa-headphones-simple"
            color="purple"
            title="Phone Accessories"
            description="Premium accessories to protect and enhance your device."
            items={[
              "Cases & Covers",
              "Chargers & Fast Cables",
              "Screen Protectors",
              "Power Banks & Earphones",
            ]}
          />

          <Service
            delay="delay-400"
            inView={inView}
            icon="fa-unlock-keyhole"
            color="orange"
            title="Phone Unlocking"
            description="Safe and legal phone unlocking services for all networks."
            items={[
              "Carrier Unlock",
              "Network Unlock",
              "Factory Unlock",
              "IMEI Services",
            ]}
          />

          <Service
            delay="delay-500"
            inView={inView}
            icon="fa-cloud-arrow-down"
            color="teal"
            title="Data Recovery"
            description="Recover important data from damaged or broken phones."
            items={[
              "Photos & Videos Recovery",
              "Contacts & Messages",
              "Internal Storage Recovery",
              "Broken Phone Data Transfer",
            ]}
          />

          <Service
            delay="delay-600"
            inView={inView}
            icon="fa-shield-halved"
            color="red"
            title="Phone Protection"
            description="Keep your phone safe and secure with our protection services."
            items={[
              "Screen Protection Installation",
              "Device Cleaning",
              "Virus & Malware Removal",
              "Phone Health Check",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Service({ icon, title, description, items, color, delay, inView }) {
  return (
    <div
      className={`group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ease-out ${delay} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Icon color={color}>
        <i className={`fa-solid ${icon} text-2xl`}></i>
      </Icon>

      <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mb-5 text-gray-600 dark:text-gray-300">
        {description}
      </p>

      <ul className="space-y-2 text-sm">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            <i className={`fa-solid fa-check mr-2 text-${color}-600`}></i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Icon({ children, color }) {
  const map = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 group-hover:bg-blue-600",
    green: "bg-green-100 dark:bg-green-900 text-green-600 group-hover:bg-green-600",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 group-hover:bg-purple-600",
    orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 group-hover:bg-orange-600",
    teal: "bg-teal-100 dark:bg-teal-900 text-teal-600 group-hover:bg-teal-600",
    red: "bg-red-100 dark:bg-red-900 text-red-600 group-hover:bg-red-600",
  };

  return (
    <div
      className={`flex w-16 h-16 mb-6 items-center justify-center rounded-full transition-colors duration-300 ${map[color]} group-hover:text-white`}
    >
      {children}
    </div>
  );
}
