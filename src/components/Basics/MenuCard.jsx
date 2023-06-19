import React from "react";

let MenuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((curElement) => {
                    const {id, name, category, description} = curElement
                    return (
                        <>

                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{name}</span>
                                        <h2 className="card-title">{category}</h2>
                                        <span className="card-description subtle">
                                            {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mtNnxgRNUqWuts2j9OMpVsgYihGDEJSfGQ&usqp=CAU" alt="images" className="card-media"/>
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>

                        </>
                    )
                })
                }
            </section>
        </>
    )
}

export default MenuCard