import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="Moncef Gaha">
    <div className="p-5">
      <p>
        I am Moncef Gaha,{" "}
        {((Date.now() - new Date("2000-12-07").getTime()) / 1000 / 60 / 60 /
          24 / 30 / 12).toFixed(0)}{" "}
        year from Algeria, Web backend devloper i started self-learning since 2015, I interested in open source software, I have the skills below
      </p>
      <p>
        <strong>My skills:</strong>
      </p>
      <ul className="pl-10 list-disc text-justify">
        <li className="py-1">🌐 Web Back-end developper</li>
        <li className="py-1">👨‍💻 I Code with JS/TS and PHP</li>
        <li className="py-1">🦕 Deno/Node JS developer</li>
      </ul>
      <p>
        <strong>What I do:</strong>
      </p>
      <ul className="pl-10 list-disc text-justify">
        <li className="py-1">📰 Self-learning to develop my programming skills
        </li>
        <li className="py-1">
          ⚡ I like to constantly read technical articles, especially programming
          issues, to find out what&#39;s good
        </li>
        <li className="py-1">
        💻 Tech content creator for social media platforms (sometimes comic)</li>
      </ul>
      <p className="pt-5">
        <Link href="/">
          <a>
            <span className="text-lg pr-1">&#8249;</span>Go to home
          </a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;
