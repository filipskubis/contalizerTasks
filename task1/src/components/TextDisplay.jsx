/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import shuffle from "../helpers/shuffle";
export default function TextDisplay({ text }) {
  const [transformedText, setTransformedText] = useState("");
  useEffect(() => {
    if (text) {
      const textRowsArray = text.split("\n");

      const formattedTextRowsArray = textRowsArray.map((row) => {
        const tokens =
          row
            .replace(/\r/g, "")
            .match(
              /[A-Za-zÀ-ÖØ-öø-ÿĄĆĘŁŃÓŚŹŻąćęłńóśźż]+|[^A-Za-zÀ-ÖØ-öø-ÿĄĆĘŁŃÓŚŹŻąćęłńóśźż]+/g
            ) || [];

        const transformedTokens = tokens.map((token) => {
          if (
            /^[A-Za-zÀ-ÖØ-öø-ÿĄĆĘŁŃÓŚŹŻąćęłńóśźż]+$/.test(token) &&
            token.length > 3
          ) {
            const first = token[0];
            const last = token[token.length - 1];
            const middle = token.slice(1, -1).split("");
            const shuffled = shuffle(middle);
            return first + shuffled.join("") + last;
          }
          return token;
        });

        return transformedTokens.join("");
      });

      const formattedText = formattedTextRowsArray.join("\n");
      setTransformedText(formattedText);
    }
  }, [text]);

  if (transformedText) {
    return (
      <div className="w-[400px] max-h-[70vh] h-fit bg-white rounded-xl overflow-auto p-[8px] noScrollbar">
        <pre className="whitespace-pre-wrap font-sans">{transformedText}</pre>
      </div>
    );
  }

  return "Loading...";
}
