import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Moncef Gaha">
    <div className='p-5'>
      <h1>About</h1>
      <p>commeing soon</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  </Layout>
)

export default AboutPage
