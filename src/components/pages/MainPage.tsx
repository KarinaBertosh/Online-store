import React from "react";
import Field from "../Field/Field";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const MainPage = (props): JSX.Element => {

    return (
        <div className="main-page">
            <Header/>
            <Field/>
            <Footer/>
        </div>
    )
}

export default MainPage;