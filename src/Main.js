import React from 'react'
import Header from './components/header/Header'
import Welcome from './blocks/welcome/Welcome'
import About from './blocks/about/About'
import Skills from './blocks/skill/Skill'
import Project from './blocks/project/Project'
import Review from './blocks/review/Review'
import Contact from './blocks/contact/Contact'
import Footer from './components/footer/Footer'

export default function Main() {
    return (
        <div>
            <Header />
            <Welcome />
            <About />
            <Skills />
            <Project />
            <Review />
            <Contact />
            <Footer />
        </div>
    )
}