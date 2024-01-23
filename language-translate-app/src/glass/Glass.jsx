import React from "react";

const Glass = () => {
  return (
    <div className="p-44 my-4 bg-no-repeat bg-current  bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jx2MpVAVAfCskbukUXYLrFsgImHFaQyYeA&usqp=CAU')]">
      <h2 className="">Glass-morphism</h2>

      {/* <img className="absolute " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jx2MpVAVAfCskbukUXYLrFsgImHFaQyYeA&usqp=CAU" alt="" /> */}
      <div>
        <div className="p-1 my-2 h-full w-full bg-blue-0 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100">
          <h1 className="text-5xl font-bold text-white  opacity-10 p-2">
            YAGYA ADH
          </h1>{" "}
          <p>hello, I am Frontend Developer</p>
        </div>
      </div>

      <div className="p-2 my-2 h-full w-full bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100">
        <h1 className="text-4xl font-mono text-blue-200 opacity-10 group group-hover:text-gray-400 transition-all  ease-in-out  delay-75 hove:opacity-10 hover:opacity-30 hover:translate-x-2 ">
          YAGYA{" "}
        </h1>
       <p className="text-center text-5xl relative">
         <b>{"10:17 AM" }</b>
        </p>
      </div>
    </div>
  );
};

export default Glass;
