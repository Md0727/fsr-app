import React from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from '../../../src/assets/images/logo/logo.png';

const HomeScreenContent = () => {
    return (
        <div className="wrapper-main" style={HomeScreenStyleSheet.wrapper}>
            <div className="container" style={HomeScreenStyleSheet.container}>
                <div className='perents-application-class' style={HomeScreenStyleSheet.InnerBox}>
                    <Link to={'/welcome-screen'}>
                        <img src={SiteLogo} alt={`Site Logo `} style={HomeScreenStyleSheet.ImageTag} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeScreenContent;


const HomeScreenStyleSheet = {
    wrapper: {
        padding: 0,
        marign: 0,
        width: 100 + 'vw',
        height: 100 + 'vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#000" 
    },
    container: {
        width: "100%",
        height: "95%",
        backgroundColor: "#fff",
        borderRadius: "30px",
        maxWidth: "350px",
        marign: "auto",
        padding: 30,
        overflow: "hidden",
        position: "relative"
    },
    InnerBox: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ImageTag: {
        width: "100%",
        height: 'auto',
        maxWidth: 110,
        objectFit: 'cover'
    }
}