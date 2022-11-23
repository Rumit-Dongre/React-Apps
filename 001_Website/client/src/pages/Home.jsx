import React from 'react'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import './css/home.css'

const Home = () => {
    return (
        <>
            <div className="main">

                <h1> Create the future  
                     <div>
                     of your industry
                     </div>
                     
                    </h1>

                <h4>
                    For Over decade Poetic has created technology 
                    that move businesses years ahead of their competitors
                </h4>
            </div>


            <div className="card">
                <Card/>
            </div>

            <div className="footer">
                <Footer/>
            </div>

        </>
    )
}

export default Home