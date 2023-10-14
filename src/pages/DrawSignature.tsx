import { Link } from "react-router-dom";
import CanvasSignature from "../components/CanvasSignature";

export default function DrawSignature() {
  return (
    <>
      <div className="container mx-auto my-10">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 py-1 px-3 text-white rounded-full inline-block">
          Back to home
        </Link>
        <section className="my-5">
          <CanvasSignature />
        </section>
      </div>
    </>
  );
}
