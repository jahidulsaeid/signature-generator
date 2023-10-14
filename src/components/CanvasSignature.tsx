import SignatureCanvas from "react-signature-canvas";

export default function CanvasSignature() {
  let sigPad = null as SignatureCanvas | null;

  return (
    <>
      <SignatureCanvas
        ref={(ref) => {
          sigPad = ref;
        }}
        canvasProps={{ width: 800, height: 200, className: "signature_pad" }}
      />

      <div className="canvas-button flex gap-5 items-center justify-center my-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white rounded-full inline-block"
          onClick={() => sigPad?.clear()}
        >
          Clear and Draw Again
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white rounded-full inline-block"
          onClick={() => {
            if (sigPad) {
              const data = sigPad.toDataURL();

              const link = document.createElement("a");
              link.download = "signature.png";
              link.href = data;
              link.click();
            }
          }}
        >
          Download with Background
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white rounded-full inline-block"
          onClick={() => {
            if (sigPad) {
              const data = sigPad.getTrimmedCanvas().toDataURL("image/png");

              const link = document.createElement("a");
              link.download = "signature.png";
              link.href = data;
              link.click();
            }
          }}
        >
          Download without Background
        </button>
      </div>
    </>
  );
}
