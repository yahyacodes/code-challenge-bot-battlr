import React, { useState, useEffect } from "react";

const BotData = () => {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleDuplicate = (data) => {
    if (!cards.includes(data)) {
      setCards([...cards, data]);
    }
  };

  return (
    <div>
      <div className="bg-green-100 rounded-lg shadow p-4 min-h-[30em] mt-2">
        <div className="grid grid-cols-4 gap-4 mt-2">
          {cards.map((robot) => (
            <div
              key={robot.id}
              className="bg-gray-100 rounded-lg shadow p-4 max-w-sm cursor-pointer"
            >
              <img className="w-60" src={robot.avatar_url} alt="" />
              <h2 className="text-gray-900 text-xl font-bold">{robot.name}</h2>
              <p className="text-gray-500 line-clamp-3">{robot.catchphrase}</p>
              <div className="grid grid-cols-3">
                <p className="text-gray-500">{robot.health}</p>
                <p className="text-gray-500">{robot.damage}</p>
                <p className="text-gray-500">{robot.armor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-2">
        {data.map((robot) => (
          <div
            key={robot.id}
            className="bg-gray-100 rounded-lg shadow p-4 max-w-sm cursor-pointer"
            onClick={() => handleDuplicate(robot)}
          >
            <img className="w-60" src={robot.avatar_url} alt="" />
            <h2 className="text-gray-900 text-xl font-bold">{robot.name}</h2>
            <p className="text-gray-500 line-clamp-3">{robot.catchphrase}</p>
            <div className="grid grid-cols-3">
              <p className="text-gray-500">{robot.health}</p>
              <p className="text-gray-500">{robot.damage}</p>
              <p className="text-gray-500">{robot.armor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotData;
