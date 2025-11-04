import "./index.css";
import { useState } from "react";
import FileInput from "./components/FileInput";
import TextDisplay from "./components/TextDisplay";
function App() {
  const [text, setText] = useState("");

  return (
    <div className="w-full h-screen grid place-content-center gap-[32px] bg-[#212121]">
      <FileInput setText={setText} />
      {text ? <TextDisplay text={text} /> : null}
    </div>
  );
}

export default App;
