import { Link } from "react-router-dom";
function TextSection() {
  return (
    <div className="basis-1/2 bg-slate-100 transition duration-150 p-8">
      <div className="text-3xl font-bold pt-5 ">TITLE</div>
      <div className="text-xl font-medium">SUBTITLE</div>
      <p className="text-justify w-10/12 pt-5 text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nam
        incidunt tempora blanditiis aliquid, iusto excepturi quas laboriosam
        aperiam illo est eaque placeat eos atque, deserunt culpa nisi unde
        dolorem! <br></br>
        <button className="bg-orange-500 text-lg font-medium border-orange-500 mt-5 py-2 px-4 hover:bg-white border-2 hover:border-black transition duration-200">
        <Link to="/detail">Show more..</Link>
        </button>
      </p>
    </div>
  );
}

export default TextSection;
