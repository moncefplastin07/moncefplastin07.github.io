import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="Moncef Gaha - About">
    <div className="px-5">
      <p className='leading-loose text-justify py-7'>
        I am Moncef Gaha,{" "}
        {((Date.now() - new Date("2000-12-07").getTime()) / 1000 / 60 / 60 /
          24 / 30 / 12).toFixed(0)}{" "}
        year from Algeria, Web backend developer i started self-learning since 2015, I interested in open source software, I have the skills <a href='#My-skills' className='dark:text-green-400 font-bold'>below</a>
      </p>
      <p>
        <strong className='text-lg' id='My-skills'>My skills:</strong>
      </p >
      <ul className="pl-10 list-disc text-justify leading-loose">
        <li>🌐 Web Back-end developper</li>
        <li>👨‍💻 I Code with JS/TS and PHP</li>
        <li>🦕 Deno/Node JS developer</li>
      </ul>
      <p>
        <strong className='text-lg'>What I do:</strong>
      </p>
      <ul className="pl-10 list-disc text-justify leading-loose">
        <li>📰 Self-learning to develop my programming skills
        </li>
        <li>
          ⚡ I like to constantly read technical articles, especially programming
          issues, to find out what&#39;s good
        </li>
        <li>
        💻 Tech content creator for social media platforms (sometimes comic)</li>
      </ul>
      <p className="pt-5">
        <Link href="/">
          <a className='font-bold'>
            <span className="text-lg pr-1">&#8249;</span>Go to home
          </a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;
