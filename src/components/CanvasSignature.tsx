// import SignaturePad from "react-signature-canvas";
import ReactSignatureCanvas from "react-signature-canvas";
import SignatureCanvas from "react-signature-canvas";

export default function CanvasSignature() {
  let sigPad = null as ReactSignatureCanvas | null;

  return (
    <>
      <SignatureCanvas
        ref={(ref) => {
          sigPad = ref;
        }}
        canvasProps={{ className: "signature_pad" }}
      />

      <button onClick={() => sigPad?.clear()}>Clear</button>
      <button
        onClick={() => {
          if (sigPad) {
            const data = sigPad.toDataURL();
            console.log(data);
          }
        }}
      >
        Save
      </button>

      <button
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
        Download
      </button>
      <button
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
        Trim and Download
      </button>
    </>
  );
}
