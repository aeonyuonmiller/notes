import './Map.css';
import React, { useContext, useEffect, useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { getFirestore, collection, getDocs, doc, onSnapshot, where, query } from "firebase/firestore";
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { AuthContext } from '../../context/authContext';
import 'mapbox-gl/dist/mapbox-gl.css';

import Avatar from '../../components/Avatar/Avatar';
import Drop from '../../components/Drop/Drop';
import Menu from '../../components/Menu/Menu';
import Message from '../../components/Message/Message';
import Loading from '../Loading/Loading';

const Karte = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWVvbnl1b25taWxsZXIiLCJhIjoiY2phMTIybmNsMjFjeTMzbGdpcGdiM3J6ayJ9.FmtdgLWmMf4vgsagMsk-JQ',
    interactive: false,
    attributionControl: false,
    logoPosition: 'bottom-left',
});

const Map = () => {
    const {user, handleLogout} = useContext(AuthContext);

    const db = getFirestore();

    // state for dropping a note
    const [drop, setDrop] = useState(false);
    const toggleDrop = () => { setDrop(!drop) };

    // state for menu
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {setMenu(!menu)};

    // storing frontend info
    const [messages, setMessages] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSend = () => { console.log(user) };

    const getTextMessages = async () => {
        const q = query(collection(db, "messages"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push(doc.data());
        });
        setMessages(messages);
        });
    }

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setCurrentPosition({ longitude: position.coords.longitude, latitude: position.coords.latitude })
        });
        setLoading(false);
    } 

    // get messages & position of device
    useEffect(() => {
        getTextMessages();

        if ("geolocation" in navigator) {
            getCurrentPosition();
        } else {
            console.log("Not Available");
        }
    }, []);

    return (
        <>
            <motion.div className="topnav" initial={{opacity:0, y:-10}} animate={{opacity: 1, y:0, transition:{type: "tween", delay: 0.2}}}>
                <Drop onClick={toggleDrop} />
                {drop
                    ? <AnimatePresence exitBeforeEnter><Message close={toggleDrop} drop={handleSend} longitude={currentPosition.longitude} latitude={currentPosition.latitude}/></AnimatePresence>
                    : null }
                <h3>Explore</h3>
                <Avatar onClick={handleMenu} />
                <AnimatePresence exitBeforeEnter>{menu && (<Menu closeModal={handleMenu} logoutBtn={handleLogout} />)}</AnimatePresence>
            </motion.div>
            <AnimateSharedLayout>
                <div className={`map ${drop ? "moveUp" : ""}`}>
                {currentPosition && !loading ? <Karte style="mapbox://styles/mapbox/streets-v9" center={[currentPosition.longitude, currentPosition.latitude]} zoom={[19]}
                    containerStyle={{ height: '100%', width: '100%', borderRadius: '20px', zIndex: 2 }}>
                    {messages.length !== 0 && messages.map((message, index) =>
                        <Marker key={index} coordinates={message.geoInfo} anchor="bottom">
                            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="notes">{message.textMessage}</motion.div>
                        </Marker>
                    )}
                </Karte> : <Loading />}
            </div>
            </AnimateSharedLayout>
        </>
    )
}

export default Map