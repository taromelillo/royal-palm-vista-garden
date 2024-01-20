export function Map() {
  return (
    <div className="overflow-hidden relative h-0 pb-[56.25%]">
      <iframe
        className="left-0 top-0 border-0 w-full h-full absolute"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.862522497709!2d121.45176946263308!3d17.413429933930274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f8535f1db1d29%3A0xaa7eeb7d0819c0dc!2sRoyal%20Palm%20Vista%20Garden!5e0!3m2!1sen!2sar!4v1705661860917!5m2!1sen!2sar"
        width="1200"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
