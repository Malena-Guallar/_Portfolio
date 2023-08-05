import { React, useRef, useEffect } from "react";
import { Home } from "../Home/index";
import { About } from "../About/index.jsx";
import { Browser_extension } from "../Browser_extension/index.jsx";
import { Social_network } from "../Social_network/index.jsx";
import { E_commerce } from "../E_commerce/index.jsx";
import { Dataviz } from "../Dataviz/index.jsx";
import { motion, useAnimation } from "framer-motion";
import { Footer } from "../Footer";

const pages = [Home, About, E_commerce, Social_network, Browser_extension, Dataviz, Footer];

export const Global = () => {
    

return (
     <div>
        {pages.map((Page, index) => (
        <div key={index} style={{minHeight: "100%"}}>
            <Page />
        </div>
        ))}
    </div>
)
};