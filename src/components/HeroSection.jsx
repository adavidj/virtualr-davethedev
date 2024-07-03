import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" data-aos='fade-down' data-aos-delay='500'>
            VirtualR build tools            
            <span className="bg-gradient-to-r from-orange-400 to-red-700 text-transparent bg-clip-text">{" "}
            for 
            developers</span>
        </h1>

        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl" data-aos='fade-down' data-aos-delay='500'>
            Empower your creativity and bring your VR app ideas to life with our intuitive development tools. 
            Get started today and turn your imagination into immersive  reality !
        </p>

        <div className="flex justify-center my-10" data-aos='fade-up' data-aos-delay='500'>
            <a href="#" className="bg-gradient-to-r from-orange-400 to-orange-700 py-3 px-4 mx-3 rounded-md">
                Start for free
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border"> Documentation</a>
        </div>

        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-black mx-2 my-4" data-aos='fade-right' data-aos-delay='800' >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag
            </video>

            <video autoPlay loop muted className="rounded-md w-1/2 border border-black mx-2 my-4"data-aos='fade-left' data-aos-delay='800' >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag
            </video>
        </div>
    </div>
  )
}

export default HeroSection