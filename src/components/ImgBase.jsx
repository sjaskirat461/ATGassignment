import BackgroundPhoto from '../assests/images/Rectangle 2.png';

export default function ImgBase() {
  return (
    <div
      className="bg-cover w-full h-full relative bg-gradient-to-b from-transparent to-black via-gray-600 pb-16"
      style={{
        backgroundImage: `url(${BackgroundPhoto})`,
      }}
    >
      <p className="text-4xl  text-white font-bold mb-2">
        Computer Enginnering
      </p>
      <p className=" text-white font-bold ">
        142,765 Computer Engineers follow this
      </p>
    </div>
  );
}
