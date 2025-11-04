import { useEffect } from "react";
import "./index.css";
import Tile from "./components/Tile";
import { useState } from "react";
function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://gorest.co.in/public/v2/users");
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((entry) => {
        return Object.keys(entry).some((key) => {
          const value = String(entry[key]);
          console.log(value);
          return value.includes(search);
        });
      });
      setFilteredData(filteredData);
    }
  }, [data, search]);

  if (!data) {
    return <p>Loading...</p>;
  }
  if (filteredData) {
    return (
      <div className="text-bold text-[36px] bg-[#212121] w-screen h-screen p-[16px] flex flex-col">
        <input
          className="bg-white rounded-lg self-center p-2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 p-4">
          {filteredData.map((user) => {
            return <Tile user={user} setData={setData} key={user.id} />;
          })}
        </div>{" "}
      </div>
    );
  }
}

export default App;
