import Image from 'next/image';
import Container from '../Container';

const AboutSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className=" flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 space-y-6 text-black">
            <h2 className="text-2xl md:text-3xl font-semibold">
              RoyalVAP - A EVENT MANAGEMENT COMPANY IN CHHATTISGARH
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione fuga dolor nam eius
              unde nemo! Esse deserunt minima harum voluptate culpa! Libero perspiciatis ut cum? Est
              earum maiores autem eius!
            </p>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae amet vitae suscipit
              culpa tempore velit fugit eligendi iste voluptatem magnam veritatis nam maxime
              asperiores ipsa quidem perspiciatis ea, eaque minus deserunt. Animi asperiores,
              repellat perferendis quos quibusdam harum. Pariatur, voluptate!
            </p>
          </div>

          {/* Right Side - Video Thumbnail */}
          <div className="lg:w-1/2 relative">
            <Image
              src="/images/visiting-card.png"
              alt="Event Video"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
