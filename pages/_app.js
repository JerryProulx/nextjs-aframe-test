import React, { Fragment } from 'react';
import Head from 'next/head';
import App from 'next/app';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { PageTransition } from 'next-page-transitions';

import { Canvas } from 'react-three-fiber';
// import Three from '../components/three';
import VRScene from '../components/aframe';

import NoSSR from 'react-no-ssr';
import { useRouter } from 'next/router';
import "../styles/styles.scss"

const site = require('../data/site.json');
const initState = require('../data/state.json');

export default class MyApp extends App {
  constructor(props){
    super(props);
  }

  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return { pageProps }
  // }

  state = initState;

  componentDidMount(){

  }

  onExit(){
    console.log('enter')
  }

  render () {
    const { Component, pageProps, router } = this.props

    return (
      <Fragment>
        <Head>
          <title>{site.title}</title>
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
          <script src="https://aframe.io/releases/1.0.3/aframe.min.js"></script>
        </Head>
        <Navbar/>

        <NoSSR>
          <VRScene />
        </NoSSR>

        <PageTransition timeout={500} classNames="page-transition">
          <Component {...pageProps} {...this.state} key={router.route}/>
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
        <Footer/>
      </Fragment>
    )
  }
}
