import React from "react";
import Header from '../header/Header';

export default function Navbar(props) {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => setScroll(document.documentElement.scrollTop);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const className = scroll > 80 ? "fixed-navbar active z-100" : "fixed-navbar z-90";

    return (
        <div className={className}>
            <Header hclass={props.hclass} Logo={props.Logo} topbarClass={props.topbarClass} />
        </div>
    );
}