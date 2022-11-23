import React from 'react'
import './css/card.css'

const Card = () => {
    const data = [
        {
            heading: "Plato",
            para: "Only the dead have seen the end of war"
        },
        {
            heading: "Socrates",
            para: "Wonder is the beginning of wisdom"
        },
        {
            heading: "Aristotle",
            para: "Hope is a waking dream wisdom Is Really"
        },

    ]
    return (

        <>
            <div className="container">

                {
                    data.map((val) => {
                        return (
                            <>
                                <div className="cardbody">

                                    <div className="logo">
                                        <img src={'./Apple.ico'} alt="" />

                                    </div>

                                    <div className="cardtext">
                                        <h1> {val.heading} </h1>
                                        <p>
                                         {val.para}
                                        </p>
                                    </div>

                                    <div className="btn">
                                        <button> Read More </button>
                                    </div>
                                </div>
                            </>
                        )

                    })

                }

            </div>
        </>
    )
}

export default Card