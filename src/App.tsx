import { Link } from "react-router-dom";
import draw from "./assets/images/draw.svg";
import typeIcon from "./assets/images/type.svg";
function App() {
  return (
    <div className="container mx-auto my-10 px-2 lg:px-14">
      <h1 className="text-4xl text-center my-5">Online Signature Generator</h1>
      <p className="text-center text-xl text-gray-500">
        Create and download your free e-signature
      </p>

      <section className="mt-10 flex gap-10 flex-col md:flex-row px-2">
        <div className="w-full md:w-1/2 bg-blue-500 px-5 md:px-10 py-10 text-center rounded-lg">
          <img src={draw} alt="DRAW" className="inline-block mb-5" />
          <h2 className="text-2xl font-bold text-white mb-5">
            Draw your signature
          </h2>
          <p className="text-xl text-gray-200">
            Go artistic. Use your mouse or trackpad to make a statement.
          </p>
          <Link
            to="/draw"
            className="mt-5 bg-white hover:bg-blue-500 text-blue-500 py-4 px-4 md:px-10 rounded-full border border-white hover:text-white font-medium text-lg inline-block"
          >
            Draw your signature
          </Link>
        </div>
        <div className="w-full md:w-1/2 bg-blue-500 px-5 md:px-10 py-10 text-center rounded-lg">
          <img src={typeIcon} alt="sign" className="inline-block mb-5" />
          <h2 className="text-2xl font-bold text-white mb-5">
            Type your signature
          </h2>
          <p className="text-xl text-gray-200">
            So many choices. Type your name and choose the font that best
            matches your personality.
          </p>
          <Link
            to="/type"
            className="mt-5 bg-white hover:bg-blue-500 text-blue-500 py-4 px-4 md:px-10 rounded-full border border-white hover:text-white font-medium text-lg inline-block"
          >
            Type your signature
          </Link>
        </div>
      </section>
    </div>
  );
}

export default App;
