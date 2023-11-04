import { useEffect, useState } from "react";
import BotData from "./Components/BotData";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.map((robot) => (
        <BotData
          key={robot.id}
          botName={robot.name}
          botHealth={robot.health}
          botDamage={robot.damage}
          botArmor={robot.armor}
          botCatchPhrase={robot.catchphrase}
          botAvatar={robot.avatar_url}
        />
      ))}
    </>
  );
}

export default App;
