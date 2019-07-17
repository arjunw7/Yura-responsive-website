import React from 'react';
import {Link } from "react-router-dom";
import Text from '../Text';
import Image from '../Image';
class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return(
            <div className="section footer">
                <div className="row">
                    <div className="col-md-3 col-6">
                    <Image file="yura-mobile-375-logo-white.svg" className="footerLogo"/>
                    </div>
                    <div className="col-md-3 col-6 footerTextWrap">
                    <Text body="Yura Agency" className="footerText"/>
                    <a href="tel:+31 20 244 0000" target="blank"><Text body="+31 20 244 0000" className="footerText"/></a>
                    </div>
                    <div className="col-md-3 col-6 smallMargin footerLinks">
                    <Link to="home"><Text body="Home" className="footerText"/></Link>
                    <Link to="team"><Text body="About" className="footerText"/></Link>
                    <Link to="cases"><Text body="Cases" className="footerText"/></Link>
                    <a href="//www.linkedin.com/company/28986347/" target="_blank"><Text body="Roles" className="footerText"/></a>
                    <a href="//www.linkedin.com/company/28986347/" target="_blank"><Text body="News" className="footerText"/></a>
                    <Link to="services&Methods"><Text body="Services" className="footerText"/></Link>
                    <Link to="services&Methods"><Text body="Methods" className="footerText"/></Link>
                    <Link to="contact"><Text body="Contact" className="footerText"/></Link>
                    </div>
                    <div className="col-md-3 col-6 smallMargin footerLinks">
                    <a href="//twitter.com/agencyyura" target="_blank"><Text body="Twitter" className="footerText"/></a>
                    <a href="//www.linkedin.com/company/28986347/" target="_blank"><Text body="Linkedin" className="footerText"/></a>
                    <a href="//medium.com/@droelofsen" target="_blank"><Text body="Medium" className="footerText"/></a>
                    </div>
                </div>
                <div className="footerCopyrightText">
                    <Text body="Copyright © Yura Agency 2019. All rights reserved." className="copyrightText"/>
                </div>
            </div>
        )
    }
}

export default Footer;