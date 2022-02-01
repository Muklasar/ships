import React from "react";

const Ships = ({ ships }) => {
    console.log('ships', ships)
    const shipContainer = ships && ships.map(ship => {
        return (
            <div className="ship" key={ship.id}>
                <img src={ship.image} className="ship__image" />
                <div className="footer">
                    <div className="ship__name">{ ship.name }</div>
                    <div className="ship__description">
                        <div>Port : <a className="description_font">{ ship.home_port }</a></div>
                        <div>Roles : <a className="description_font">{ ship.roles[0] }</a></div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="ship__container">
            {ships.length>0 ? shipContainer : <h1>No Match Ships found</h1>}
        </div>
    )
}

export default Ships