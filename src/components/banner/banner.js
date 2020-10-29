import React from "react"
import "./banner.scss"

export default function Banner() {
    return (
        <div className="banner">
            <div className="logo">
                <img src={require("../img/logo.png")} alt="Minnetonka Auto Service Logo" />
            </div>

            <div></div>
        </div>
    )
}
