import notFound from "../../public/notFound.png";

const NotFound = () => {
  return (
    <section>
      <div className="h-screen text-white">
        <div className="m-auto text-center flex justify-center items-center flex-col max-w-screen-sm	">
          <p className="text-4xl  text-sky-300 p-2 mb-4">
            The information you were looking for {"doesn't"} exist
          </p>
          <img src={notFound} alt="404" width={500} />
          <a
            href="/"
            className="bg-transparent hover:bg-sky-600 text-sky-300 font-bold mt-4 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-sky-300 hover:border-transparent"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
