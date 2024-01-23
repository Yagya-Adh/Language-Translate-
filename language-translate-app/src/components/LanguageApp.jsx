import React, { useEffect, useState } from "react";
import axios from "axios";

const LanguageApp = () => {
  const [options, setOption] = useState([]);
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  /* translate */
  const translate = () => {
    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

    axios
      .post("https://libretranslate.de/translate", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.translatedText);
      });
  };

  /* read */
  useEffect(() => {
    axios
      .get("https://libretranslate.de/languages", {
        headers: { accept: "application/json" },
      })
      .then((res) => {
        setOption(res.data);
      });
  }, []);

  return (
    <div className="text-center">
      <div className=" bg-white">
        From ({from}) :
        <select onChange={(e) => setFrom(e.target.value)} className="p-2 m-1">
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        To ({to}):
        <select onChange={(e) => setTo(e.target.value)} className="p-2 m-1">
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>

      <div className="border">
        <textarea
          cols="50"
          rows="8"
          onInput={(e) => setInput(e.target.value)}
        ></textarea>
      </div>

      <div className="border">
        <textarea cols="50" rows="8" value={output}></textarea>
      </div>

      <div className="border">
        <button onClick={(e) => translate()}>Translate</button>
      </div>
    </div>
  );
};

export default LanguageApp;
