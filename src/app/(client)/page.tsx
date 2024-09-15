export default function Home() {
  return (
<div className="w-full min-h-screen">
<div className="w-full h-screen relative">
   <video className="w-full h-full object-cover" muted loop autoPlay src="https://res.cloudinary.com/dlt5cfo8m/video/upload/v1726345212/Fronpage-essentials-compressed_1080-x-1920_online-video-cutter.com.mp4" />
   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white tracking-tight">
        <p className="mb-[2vw] font-semibold text-[4vw]">Autumn Essentials</p>
        <p className="text-[2vw] md:text-lg font-base">Responsibly made to last - for everyday use</p>
      </div>
  </div>
</div>
  );
}
