import Layout from "../components/Layout";
const IndexPage = () => (
  <Layout title="Moncef Gaha">
    <div className="w-80 m-auto rounded-full mb-10 border-gray-300 relative">
      <img
        src="https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?s=512"
        className="w-80 m-auto rounded-full"
        alt="Moncef Gaha Gravatar"
      >
      </img>
      <p
        className="absolute -right-24 -bottom-10 xs:right-0 xs:-bottom-5 transform -rotate-12 rounded-md	bg-opacity-20 bg-red-200 border border-red-300 py-1 px-2 inline-flex"
      >
        <span className="relative text-sm p-1 font-bold">Hi there</span>
        <p className="delay-75	ease-in-out animate-roll">👋</p>
      </p>
    </div>
    <div className="text-center">
      <h1 className="text-5xl font-bold">Moncef Gaha</h1>
      <p className="text-gray-800 p-5">
        <span>
          <a
            href="https://github.com/moncefplastin07"
            className="hover:text-gray-600"
          >
            Github
          </a>
        </span>
        <span>{" "}.{" "}</span>
        <span>
          <a
            href="https://twitter.com/moncefplastin07/"
            className="hover:text-gray-600"
          >
            Twitter
          </a>
        </span>
        <span>{" "}.{" "}</span>
        <span>
          <a
            href="https://facebook.com/moncefplastin07/"
            className="hover:text-gray-600"
          >
            Facebook
          </a>
        </span>
        <span>{" "}.{" "}</span>
        <span>
          <a
            href="https://instagram.com/moncefplastin07/"
            className="hover:text-gray-600"
          >
            Instagram
          </a>
        </span>
      </p>

      <p className="text-xl p-4">Web backend Developer from Biskra/Algeria</p>
      <p className="text-md p-5">
        Email:{" "}
        <a
          href="mailto:x@moncefgaha.me"
          className="font-bold p-2 rounded-md border border-green-300 bg-green-300 bg-opacity-20"
        >
          x@moncefgaha.me
        </a>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
