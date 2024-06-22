import Head from 'next/head';
import Home from 'components/Home';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import SpacialMenu from 'components/Menu';
import Introduction from 'components/Introduction';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';
import Contacts from 'components/Contact';

// Dummy data
const dummyData = {
  navigation: ["Home","Contact","About","Menu"],
  header: { /* dummy header data */ },
  about: { /* dummy about us data */ },
  drink: { /* dummy drink menu data */ },
  food: { /* dummy food menu data */ },
  history: { /* dummy history data */ },
  gallery: { /* dummy gallery data */ },
  video: "/video.mp4",
  contact: { /* dummy contact data */ },
};

function Template({ data }) {
  // Use dummy data directly
  const navigation = dummyData.navigation;
  const header = dummyData.header;
  const about = dummyData.about;
  const drink = dummyData.drink;
  const food = dummyData.food;
  const history = dummyData.history;
  const gallery = dummyData.gallery;
  const video = dummyData.video;
  const contact = dummyData.contact;

  return (
    <>
      <Head>
        <title>Next.js Restaurant CMS</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={navigation}>
        <Home info={header}/>
        <AboutUs info={about}/>
        <SpacialMenu info={[drink, food]}/>
        <Introduction info={history}/>
        <Gallery info={[gallery, food]}/>
      </Layout>
      <Footer>
        <VideoIntro url="video.mp4"/>
        <Contacts info={contact}/>
      </Footer>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const data =  [];
  return {
    props: { data },
  }
}

export default Template;
