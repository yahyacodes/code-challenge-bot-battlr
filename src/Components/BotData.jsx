import React, { useState, useEffect } from "react";

const BotData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {data.map((robot) => (
          <div
            key={robot.id}
            className="bg-gray-100 rounded-lg shadow p-4 max-w-sm cursor-pointer"
          >
            <img className="w-60" src={robot.avatar_url} alt="" />
            <h2 className="text-gray-900 text-xl font-bold">{robot.name}</h2>
            <p className="text-gray-500">{robot.catchphrase}</p>
            <div className="grid grid-cols-3">
              <p className="text-gray-500">{robot.health}</p>
              <p className="text-gray-500">{robot.damage}</p>
              <p className="text-gray-500">{robot.armor}</p>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default BotData;
