import { useState } from "react";
import { Upload } from "lucide-react";

export default function FileInput({ setText }) {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setText(reader.result);
      };

      reader.onerror = () => {
        window.alert(reader.error);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="relative cursor-pointer">
        <input
          type="file"
          accept=".txt"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-none"
          onChange={handleFileChange}
        />
        <div
          onMouseEnter={() => console.log("yo")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md transition-colors pointer-events-none"
        >
          <Upload className="w-5 h-5" />
          <span>Choose a file</span>
        </div>
      </label>
      <span className="text-sm text-gray-600">
        {fileName ? fileName : "No file chosen"}
      </span>
    </div>
  );
}
