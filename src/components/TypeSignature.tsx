import React, { useCallback, useState } from "react";
import "../assets/signature.css";
import { toPng } from "html-to-image";

type Font = {
  id: number;
  fontName: string;
};

export default function TypeSignature() {
  const [signature, setSignature] = useState("Signature");
  const [selectedFont, setSelectedFont] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSignature(e.target.value);
  };

  const onButtonClick = useCallback((class_name: string) => {
    setSelectedFont(class_name);

    const element = document.getElementsByClassName(
      class_name
    )[0] as HTMLElement;

    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        console.log(dataUrl);
        const link = document.createElement("a");

        link.download = "signature.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = [
    // {
    //   id: 1,
    //   fontName: "adoretta",
    // },
    {
      id: 2,
      fontName: "adusian_signature",
    },
    {
      id: 3,
      fontName: "alista_blair",
    },
    {
      id: 4,
      fontName: "american_signature",
    },
    {
      id: 5,
      fontName: "amigos",
    },
    {
      id: 6,
      fontName: "ampunsuhu",
    },
    {
      id: 7,
      fontName: "arington",
    },
    {
      id: 8,
      fontName: "ballonest",
    },
    {
      id: 9,
      fontName: "banteng_story",
    },
    {
      id: 10,
      fontName: "bastliga",
    },
    {
      id: 11,
      fontName: "bhasline",
    },
    // {
    //   id: 12,
    //   fontName: "billie_signature",
    // },
    {
      id: 13,
      fontName: "bilya_signature",
    },
    {
      id: 14,
      fontName: "bisqootte",
    },
    // {
    //   id: 15,
    //   fontName: "bitter_signature",
    // },
    {
      id: 16,
      fontName: "bottuckey",
    },
    {
      id: 17,
      fontName: "brastagi",
    },
    {
      id: 18,
      fontName: "brittney_signature",
    },
    {
      id: 19,
      fontName: "brook_holmes",
    },
    {
      id: 20,
      fontName: "browellay_synthya",
    },
    // {
    //   id: 21,
    //   fontName: "cafe_de_paris-sans",
    // },
    {
      id: 22,
      fontName: "cafe_de_paris-script",
    },
    // {
    //   id: 23,
    //   fontName: "camellia_signature",
    // },
    {
      id: 24,
      fontName: "carolina",
    },
    {
      id: 25,
      fontName: "cristy",
    },
    {
      id: 26,
      fontName: "getting_everything",
    },
  ];

  return (
    <>
      <textarea
        value={signature}
        rows={1}
        onChange={(e) => handleChange(e)}
        className="w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />

      {signature && (
        <div className="mt-5 h-96)overflow-y-scroll">
          {data?.map((item: Font) => (
            <div
              className={`border border-gray-300 my-5 p-5 rounded-md flex justify-between items-center group ${
                selectedFont === item.fontName ? "border border-blue-500" : ""
              }`}
              key={item.id}
            >
              <h1
                className={`text-6xl inline-block ${item.fontName}`}
              >
                {signature}
              </h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white rounded-full inline-block opacity-0 group-hover:opacity-100"
                onClick={() => onButtonClick(item.fontName)}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
