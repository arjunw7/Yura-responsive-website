import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import WOW from "wowjs";
import {Link } from "react-router-dom";

class HomeMainSections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0,0);
    }

    render() { 

        return(
            <div className="section mainSections">
                    <Image file="yura---casedetail-1920-y-gradient.png" className="gardientLogo"/>
                    <div className="row mainSectionsInner">
                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12  wow fadeInUp homePageSection">
                                <Link to="team">
                                    <Text body="About Yura" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-working.png" className="sectionImage"/>
                                </Link>
                                </div>
                                <div className="col-md-6 col-12 wow fadeInUp homePageSection">
                                <Link to="services&Methods">
                                    <Text body="Services" className="sectionTitleText"/>
                                    <Image file="services.png" className="sectionImage"/>
                                </Link>
                                </div>
                                <div className="col-md-6 col-12 wow fadeInUp homePageSection">
                                <Link to="services&Methods">
                                    <Text body="Methods" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-photo-1497348231296-713b847f4ca4.png" className="sectionImage"/>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12 wow fadeInUp homePageSection">
                                <Link to="cases">
                                    <Text body="Cases" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-cases.png" className="sectionImage"/>
                                </Link>
                                </div>
                            </div>  
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="row">
                            
                                <div className="col-md-12 col-12 wow fadeInUp homePageSection">
                                <a href="https://www.linkedin.com/company/28986347/" target="_blank">
                                    <Text body="News" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-news.png" className="sectionImage"/>
                                </a>
                                </div>
                                <div className="col-md-12 col-12 wow fadeInUp homePageSection">
                                <Link to="team">
                                    <Text body="Team" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-yura-team-partly.png" className="sectionImage"/>
                                </Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
        )
    }
}

export default HomeMainSections;