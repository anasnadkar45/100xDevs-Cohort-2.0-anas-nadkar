import React from "react";

function CardComponent() {
  return (
    <div className="w-[400px] h-fit relative border ">
      <div className="h-[200px] bg-blue-500"></div>
      <img src={"https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1705412017~exp=1705415617~hmac=ac9bab41df40583008b175153e9f62e326e291669e76cf8b651cd4bdbe068cb0&w=740"} 
      alt="" className="h-[130px] absolute left-[50%] top-[26%]
      transform translate-x-[-50%] rounded-full " />
      <div className="bg-gray-800 pb-4">
        <div className="flex justify-center items-center space-x-2 pt-16">
          <h1 className="text-3xl font-bold">Rita Correia</h1>
          <p className="text-2xl">32</p>
        </div>
        <p>London</p>
        <div className="h-1 bg-white w-full mt-2 mb-2"></div>
        <div className="flex justify-center space-x-6">
          <div>
            <h1 className="text-3xl">80K</h1>
            <p>Followers</p>
          </div>
          <div>
            <h1 className="text-3xl">803K</h1>
            <p>Likes</p>
          </div>
          <div>
            <h1 className="text-3xl">1.4K</h1>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
