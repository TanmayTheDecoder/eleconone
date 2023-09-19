import React from 'react'
import Hero from '../components/hero'
import Article from '../components/article'
import Work from '../components/work'
import Techs from '../components/techs'
import Praise from '../components/praise'
import CustomerReviews from '../components/customer-review'
import ProjectInfo from '../components/project-info'
import Benefits from '../components/benefits'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <Article />
        <Work />
        <Techs />
        <Praise />
        <CustomerReviews />
        <ProjectInfo />
        <Benefits />
        <Footer />  
    </div>
  )
}

export default Home