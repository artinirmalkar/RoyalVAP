'use client';


const LocationSection = () => {
  return (
    <section>
      {/* Google Map Embed */}
      <div className="w-full  rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-64 md:h-96 border-0 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.667991642844!2d82.14265738001657!3d22.100492927825698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b09aa1dedc3%3A0x35b60601d697f25e!2sCentral%20Library!5e0!3m2!1sen!2sin!4v1743617920192!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
