import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Moncef Gaha">
    <h1>About</h1>
    <p>commeing soon</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
