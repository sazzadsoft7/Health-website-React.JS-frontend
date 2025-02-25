import React from 'react';
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;