import dynamic from "next/dynamic";
import Container from "./components/container";
import Footer from "./components/footer";
import { HeroPost } from "./components/home/hero-post";
import { Intro } from "./components/home/intro";

export default function Page() {
  // const Scene = dynamic(() => import('@/app/components/Scene'), {
  // })
  return <main>
    <Container>
      <Intro />
      <HeroPost
        title={'teste'}
        coverImage={'https://placehold.co/400x200'}
      />
 
      <Footer/>
    </Container>
  </main>
}

