import draw from "./assets/images/draw.svg";
import typeIcon from "./assets/images/type.svg";
import CanvasSignature from "./components/CanvasSignature";
function App() {
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-4xl text-center">Online Signature Generator</h1>
      <p className="text-center text-xl text-gray-500">
        Create and download your free e-signature
      </p>

      <section className="mt-10 flex gap-10 px-60">
        <div className="w-1/2 bg-blue-500 p-10 text-center rounded-lg">
          <img src={draw} alt="DRAW" className="inline-block mb-5" />
          <h2 className="text-2xl font-bold text-white mb-5">
            Draw your signature
          </h2>
          <p className="text-xl text-gray-200">
            Go artistic. Use your mouse or trackpad to make a statement.
          </p>
          <button className="mt-5 bg-white hover:bg-blue-500 text-blue-500 py-4 px-10 rounded-full border border-white hover:text-white font-medium text-lg">
            Draw your signature
          </button>
        </div>
        <div className="w-1/2 bg-blue-500 p-10 text-center rounded-lg">
          <img src={typeIcon} alt="sign" className="inline-block mb-5" />
          <h2 className="text-2xl font-bold text-white mb-5">
            Type your signature
          </h2>
          <p className="text-xl text-gray-200">
            So many choices. Type your name and choose the font that best
            matches your personality.
          </p>
          <button className="mt-5 bg-white hover:bg-blue-500 text-blue-500 py-4 px-10 rounded-full border border-white hover:text-white font-medium text-lg">
            Type your signature
          </button>
        </div>
      </section>
      <CanvasSignature />
    </div>
  );
}

export default App;
