import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Global Care</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing exceptional healthcare services with compassion and dedication since 2023.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver accessible, high-quality healthcare solutions that empower communities
              and improve lives through innovative medical services and compassionate care.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the leading healthcare provider, recognized globally for excellence
              in patient care, medical innovation, and community wellness.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering the highest standard of care in everything we do.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Compassion</h3>
              <p className="text-gray-600">
                Treating every patient with empathy, dignity, and respect.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and methods to improve healthcare delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Our dedicated team of healthcare professionals brings together decades of experience
            and expertise to provide the best possible care for our patients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/images/about-d1.jpg" alt="Team Member 1" width={300} height={300} className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Dr. John Doe</h3>
              <p className="text-gray-600">Chief Medical Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/images/about-d.jpeg" alt="Team Member 2" width={300} height={300} className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Dr. Jane Smith</h3>
              <p className="text-gray-600">Head of Nursing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/images/about-d2.png" alt="Team Member 3" width={300} height={300} className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Dr. Emily Johnson</h3>
              <p className="text-gray-600">Director of Operations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-gray-600">
          &copy; 2023 Global Care. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default About;