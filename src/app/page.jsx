import React from "react";



const hash = "9d5ed76618bc44ca47afcaa486d7f6d7";
const apikey = "b12c040d3bb7bb6598e726ba3f339d8c";
const ts = "1";


const LOADERPAGE = async () => {
  const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&hash=${hash}&ts=${ts}`;
  const info = await fetch(url);
  const data = await info.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.data.results;
};

const Home = async () => {
  const data = await LOADERPAGE();

  return (
    <div className=" grid grid-cols-6 gap-7">
      {data.map((item) => (
        <div key={item.id} className="h-1/2  rounded-xl">
          <div className="flex justify-center">
            <img
              className="h-52 object-cover rounded-xl"
              src={item.thumbnail.path + "." + item.thumbnail.extension}
            />
          </div>


          <div className="border border-white bg-white rounded-lg">
            <div className="flex">
              <h1 className="font-bold">Id:</h1>
              {item.id}
            </div>
            <div className="flex">
              <h1 className="font-bold">Name:</h1>
              {item.name}
            </div>
            <div className="">
              <h1 className="text-black">Description:{item.description}</h1>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
};

export default Home;
