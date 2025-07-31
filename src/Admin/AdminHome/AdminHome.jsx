import image from "../../assets/QuizHome.jpg";
export default function AdminHome() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-[100%] h-screen bg-cover bg-center bg-no-repeat"
      />
      <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-gray-800">
        <div className="font-PlaywriteITModerna text-7xl font-semibold flex flex-col">
          <span>GREETINGS</span>
          <span className="pl-[4rem]">ADMIN</span>
        </div>
      </div>
    </>
  );
}
