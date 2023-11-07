import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: window.location.href.substring(windw.location.href.lastIndexOf("/"))});


    useEffect(() => {

        window.addEventListener('popstate', () => {

        });

        return () => {
            window.removeEventListener('popstate', )
        }
    }, []);

    const handleLinkClick = (e) => {
        e.preventDefault();

        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        window.history.pushState({page: url}, e.target.txt, url);
        setRoute({page: url});
    }


    const router = function () {
        let component = null;
        switch (route.page) {
            case '/':
                component = <Main/>;
                break;
            case '/gallery':
                component = <Gallery/>;
                break;
            case '/guestbook':
                component = <Guestbook/>;
                break;
        }

        return component;
    };

    return (
        <div>
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
            {
                (() => {
                    switch(route.page) {
                        case '/' :
                            return <Main />;
                        case '/guestbook' :
                            return <Guestbook />;
                        case '/gallery' :
                            return <Gallery />;
                        default :
                            return null;
                    }
                })
            }
        </div>
    )
}