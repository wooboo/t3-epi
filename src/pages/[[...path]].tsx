import type { NextPage } from "next";
import Head from "next/head";
import { fetchChildren, fetchContent } from "../utils/api";
import styles from "./index.module.css";
import { Page } from "../baseTypes";
import { SiteLogotypeBlock, StartPage } from "../contentTypes";
import Image from "next/image";

const Home: NextPage<Page> = (props) => {

  switch (props.contentType[1]) {
    case "StartPage":
      return <StartPageTemplate {...props as StartPage} />
    default:
      return <>Dupa</>
  }

};

const StartPageTemplate: NextPage<StartPage> = (props) => {
  const logotype =(props.siteLogotype as unknown as SiteLogotypeBlock);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>
        {logotype.url.value && <Image src={logotype.url.value} width="200" height="200" alt={logotype.title.value} />}
      </div>
    </>
  )
}

export default Home;

export async function getStaticProps(ctx: { params: { path?: string[] } }) {
  const content = await fetchContent<Page>(ctx.params.path ?? [])
  return {
    props: {
      ...content
    },
  }
}

export async function getStaticPaths() {
  const paths = await fetchChildren();
  return {
    paths: [{ params: { path: [] } }, ...paths.map(o => ({ params: { path: o.split('/').filter(Boolean) } }))],
    fallback: false,
  }
}