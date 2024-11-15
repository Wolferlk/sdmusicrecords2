import React from 'react';
import Contact from '../components/Contact';

const AboutUs = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            SD Music Records is a leading record label committed to discovering talent, producing hits, and creating unforgettable moments in music. With a passion for creativity and a dedication to excellence, we've been shaping the music industry one track at a time.
          </p>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8">Our History</h2>
            <p className="text-lg leading-relaxed">
              Established in 2020, SD Music Records began as a humble studio with a vision to bring fresh, innovative sounds to the forefront of the music industry. Over the years, we’ve grown into a powerhouse, producing chart-topping hits and nurturing some of the finest talent in the industry. From our early days of experimenting with underground sounds to becoming a household name, our journey has been a testament to our love for music and commitment to artistic growth.
            </p>
          </div>
        </section>

        {/* Past Artists Section */}
        <section className="py-16 bg-black/80">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8">Past Artists</h2>
            <p className="text-lg leading-relaxed">
              SD Music Records has been the launchpad for numerous successful artists. Over the years, we’ve worked with extraordinary talents like [Artist Name 1], [Artist Name 2], and [Artist Name 3], who have gone on to achieve global fame. Our commitment to artist development has always been at the core of our mission, ensuring each artist finds their unique voice in the industry.
            </p>
          </div>
        </section>

        {/* Our Hits Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8">Our Hits</h2>
            <p className="text-lg leading-relaxed">
              Over the years, we’ve produced iconic tracks that have become anthems for generations. Hits like *[Hit Name 1]*, *[Hit Name 2]*, and *[Hit Name 3]* have topped charts and captured hearts worldwide. With every release, we strive to push creative boundaries and deliver music that resonates deeply with our audience.
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 bg-black/80">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8">Events</h2>
            <p className="text-lg leading-relaxed">
              SD Music Records is known for hosting unforgettable events that bring music to life. From exclusive album launches to grand music festivals, our events are crafted to create magical moments for fans and artists alike. Some of our standout events include [Event Name 1], [Event Name 2], and [Event Name 3], each celebrated for their unique vibe and electrifying performances.
            </p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8">Achievements</h2>
            <p className="text-lg leading-relaxed">
              Our journey has been marked by numerous milestones and accolades. SD Music Records has won prestigious awards like [Award Name 1], [Award Name 2], and [Award Name 3]. These honors reflect our relentless dedication to excellence and our ability to innovate within the music industry. Our proudest achievement, however, remains the countless lives we’ve touched through the power of music.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Interested in collaborating or learning more about us? Reach out to SD Music Records, where music meets passion.
            </p>
          </div>
        </section>
      </div>

      {/* Contact Component */}
      <Contact />
    </>
  );
};

export default AboutUs;
