import React from "react";

const BotData = ({
  botName,
  botHealth,
  botDamage,
  botArmor,
  botCatchPhrase,
  botAvatar,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="max-w-md mb-3 p-2 bg-white border border-gray-200 rounded-lg shadow">
        <img src={botAvatar} alt="" />
        <div className="p-5">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {botName}
          </h2>
          <p className="mb-3 text-gray-700 text-sm">{botCatchPhrase}</p>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
            <div>
              <p>{botHealth}</p>
            </div>
            <div>
              <p>{botDamage}</p>
            </div>
            <div>
              <p>{botArmor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotData;
