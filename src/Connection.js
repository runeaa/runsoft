import React from "react";
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faStrava
} from "@fortawesome/free-brands-svg-icons/index";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function DefaultConnection() {
    return (
        <table cellPadding={"10"}>
            <tbody>
            <tr>
                <td>
                    <a href={"https://www.strava.com/athletes/744232"}>
                        <FontAwesomeIcon icon={faStrava}/>
                    </a>
                </td>
                <td>
                    <a href={"https://www.linkedin.com/in/rune-aasvestad-353146a1/"}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </td>
                <td>
                    <a href={"https://github.com/runeaa"}>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </td>
                <td>
                    <a href={"https://www.instagram.com/run3n/"}>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </td>
                <td>
                    <a href={"mailto:run1@outlook.com"}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default DefaultConnection;
