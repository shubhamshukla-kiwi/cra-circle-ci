import React, { Component } from "react"
import Hero from "../../components/hero/hero";
import Layout from "../../components/layout/layout";
import HomepageHeader from "../../components/homepage-header/homepage-header";
import SeekerLove from "../../components/seeker-love/seeker-love";
import BrandLogo from "../../components/brand-logos/brand";
import Review from "../../components/review/review";
import SeekerWork from "../../components/seeker-work/seeker-work";
import Footer from "../../components/footer/footer";
import Seek from "../../components/seek/seek";


export class HomePage extends Component {
  render() {
    const bgColor: string = '#f1f1f1';

    return (
      <Layout visibleFooter={false} title='Home' bgColor={bgColor}>
        <HomepageHeader />
        <Hero fetchZip={()=> {}}/>
        <SeekerLove />
        <Seek />
        <BrandLogo />
        <Review />
        <SeekerWork />
        <Footer visibleFooter={false} fetchZip={()=> {}} />
      </Layout>
    )
  }
}

export default HomePage;
