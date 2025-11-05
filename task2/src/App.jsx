import { useState } from "react";
import "./index.css";
import { ChevronRight } from "lucide-react";
import validatePesel from "./helpers/validatePESEL";
function App() {
  const [pesel, setPesel] = useState("");
  const [hovered, setHovered] = useState(false);

  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (validatePesel(pesel)) {
      setResult("valid");
    } else {
      setResult("invalid");
    }
    setPesel("");
    return;
  }

  return (
    <div className="w-full h-screen grid place-content-center gap-[32px] bg-[#212121]">
      <form onSubmit={handleSubmit}>
        <label htmlFor="peselInput" className="text-white flex flex-col gap-2">
          <p className="text-[24px]">Pesel:</p>
          <div className="flex gap-2">
            <input
              type="text"
              id="peselInput"
              maxLength={11}
              className="bg-[#363636] p-2 rounded-lg focus:outline-[#363636]"
              value={pesel}
              onChange={(e) => {
                setPesel(e.target.value);
              }}
            />
            <button
              type="submit"
              onMouseEnter={() => {
                setHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(false);
              }}
              className="p-2 bg-white rounded-lg w-[50px] relative overflow-hidden cursor-pointer"
            >
              <ChevronRight
                color="black"
                size={"20px"}
                className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[200px] transition-transform duration-300 pointer-events-none ${
                  hovered ? "-translate-x-1/2!" : ""
                }`}
              />
              <ChevronRight
                color="black"
                size={"20px"}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 pointer-events-none ${
                  hovered ? "translate-x-[200px]" : ""
                }`}
              />
            </button>
          </div>
          {result === "invalid" ? (
            <p className="text-[#F93827]">Numer pesel jest niepoprawny</p>
          ) : null}
          {result === "valid" ? (
            <p className="text-[#5CB338]"> Numer pesel jest poprawny</p>
          ) : null}
        </label>
      </form>
    </div>
  );
}

export default App;
