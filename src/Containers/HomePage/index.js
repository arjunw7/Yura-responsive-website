import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import {Link } from "react-router-dom";
import WOW from "wowjs";

class Home extends React.Component {

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
            <div>
                <Text body="Yura is a creative digital agency dedicated to building brands in innovation and technology. We are here for the innovators, the technologists and the game changers." className="homeText"/>
                <Text body="- Hi there" className="homeSubtext"/>
                <div className="section mainSections">
                    <Image file="yura---casedetail-1920-y-gradient.png" className="gardientLogo"/>
                    <div className="row mainSectionsInner">
                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12  wow fadeInUp homePageSection">
                                <Link to="">
                                    <Text body="About Yura" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-working.png" className="sectionImage"/>
                                </Link>
                                </div>
                                <div className="col-md-6 col-12 wow fadeInUp homePageSection">
                                <Link to="services&Methods">
                                    <Text body="Services" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-unknown.png" className="sectionImage"/>
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
                                <Link to="">
                                    <Text body="News" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-news.png" className="sectionImage"/>
                                </Link>
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
                <div className="section girlSection">
                    <div className="row">
                        <div className="col-md-6">
                        <Image file="yura---desktop-1920px-media-girl-01.png" className="girlSectionImage"/>
                        </div>
                        <div className="col-md-6">
                        <Text body="Driving business results through the combination of creativity, strategy and technology. Because every brand is a digital brand." className="girlText"/>
                        <Text body="- May we help you accelerate growth." className="girlSubtext"/>
                        </div>
                    </div>
                    <Image file="yura-mobile-375-path.png" className="girlGraphic"/>
                </div>
                <div className="section learnMoreBackground">
                    <Image file="yura---casedetail-1920-y-gradient.png" className="gardientLogoLearnMore"/>
                    <Text body="Our driving principles are: We underpromise and overdeliver. We are equal partners with all our clients and we work in sprints: hyoerfocusses and fast." className="learnMoreText"/>
                    <Button link="" text="Learn how" className="learnMoreButton"/>
                </div>
                <div className="section techSection">
                    <div className="techContent">
                            <Text body="MyBit" className="techTitle"/>
                            <Text body="Innovation technology lorem ipsum dolor" className="techMain"/>
                            <Text body="Lorem ipsum dolor sit amet, consecturer apidiscing elit donec tincidunt lacinialeo a dabipus" className="techText"/>
                        <img src="https://png.pngtree.com/svg/20170822/ios_arrow_round_back_1238310.png" className="techArrow" alt=""/>
                    </div>    
                    <Image file="yura---desktop-1920px-gettyimages-554391989.png" className="techImage"/>
                    <div style={{"textAlign":"center"}}>
                    <Button link="" text="More Cases" className="moreCasesButton"/>
                    </div>
                </div>
                <div className="section whatWeDoSection">
                    <Image file="yura-mobile-375-y-white.png" className="whatWeDoGraphic"/>
                    <div className="row whatWeDoMain">
                        <div className="col-md-6 col-10">
                        <Text body="What we do" className="whatWeDoTitle"/>
                        </div>
                        <div className="col-md-6 col-11">
                            <div className="row">
                                <div className="col-md-4 col-4">
                                <Text body="Branding" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-8">
                                    <ul>
                                        <li><Text body="Lorem ipsum dolor sit amet" className="whatWeDoText"/></li>
                                        <li><Text body="Consectetur apidiscing elit" className="whatWeDoText"/></li>
                                        <li><Text body="Dolor sit amet lorem ipsum" className="whatWeDoText"/></li>
                                        <li><Text body="Donec tincident lacina" className="whatWeDoText"/></li>
                                        <li><Text body="Leo a dapibus" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-4">
                                <Text body="Strategy" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-8">
                                    <ul>
                                        <li><Text body="Lorem ipsum dolor sit amet" className="whatWeDoText"/></li>
                                        <li><Text body="Consectetur apidiscing elit" className="whatWeDoText"/></li>
                                        <li><Text body="Dolor sit amet lorem ipsum" className="whatWeDoText"/></li>
                                        <li><Text body="Donec tincident lacina" className="whatWeDoText"/></li>
                                        <li><Text body="Leo a dapibus" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-4">
                                <Text body="Design" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-8">
                                    <ul>
                                        <li><Text body="Lorem ipsum dolor sit amet" className="whatWeDoText"/></li>
                                        <li><Text body="Consectetur apidiscing elit" className="whatWeDoText"/></li>
                                        <li><Text body="Dolor sit amet lorem ipsum" className="whatWeDoText"/></li>
                                        <li><Text body="Donec tincident lacina" className="whatWeDoText"/></li>
                                        <li><Text body="Leo a dapibus" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-4">
                                <Text body="Development" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-8">
                                    <ul>
                                        <li><Text body="Lorem ipsum dolor sit amet" className="whatWeDoText"/></li>
                                        <li><Text body="Consectetur apidiscing elit" className="whatWeDoText"/></li>
                                        <li><Text body="Dolor sit amet lorem ipsum" className="whatWeDoText"/></li>
                                        <li><Text body="Donec tincident lacina" className="whatWeDoText"/></li>
                                        <li><Text body="Leo a dapibus" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section clientsSection">
                    <Text body="We works with startups, STO's and ICO's," className="clientsHead"/>
                    <Text body="blockchain and tech driven companies:" className="clientsHead"/>
                    <div className="row logos">
                        <div className="col-md-2 col-4 col-sm-4">
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div className="col-md-2 col-4 col-sm-4">
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div className="col-md-2 col-4 col-sm-4">
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div className="col-md-2 col-4 col-sm-4">
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div className="col-md-2 col-4 col-sm-4">
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div className="col-md-2 col-4 col-sm-4">
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="row">
                        <div className="col-md-6" style={{"padding-right": 0}}>
                            <div className="testimonialContentLeft wow fadeInLeft">
                                <Text body="Testimonial" className="testimonialTitle"/>
                                <Text body='"What convinced us to work with Yura was their ability to understand our purpose and subsequent brand we wanted to achieve. Yura has realised our brand vision and excelled beyond expectations. Id highly recommend their services."' className="testimonialText"/>
                                <div className="row authorDetails">
                                    <div className="col-md-2 col-4">
                                        <Image file="yura---desktop-1920px-oval@2x.png" className="authorImage"/>
                                    </div>
                                    <div className="col-md-10 col-8">
                                        <Text body="Luca Loscalzo" className="authorName"/>
                                        <Text body="Co-Founder | Block3" className="authorDesignation"/>
                                    </div>
                                </div>
                                <img src="https://png.pngtree.com/svg/20170822/ios_arrow_round_back_1238310.png" className="testimonialArrow" alt=""/>
                            </div>
                            <Image file="yura---desktop-1920px-gettyimages-554391989-1.png" className="testimonialImageLeft wow fadeInLeft"/>
                            <Image file="yura---desktop-1920px-path-6@2x.png" className="testimonialArrowLeft"/>
                        </div>
                        <div className="col-md-6">
                            <Image file="yura---desktop-1920px-gettyimages-554391989-1.png" className="testimonialImageRight wow fadeInRight"/>
                            <Image file="yura---desktop-1920px-path-7@2x.png" className="testimonialArrowRight"/>
                            <div className="testimonialContentRight wow fadeInRight" data-wow-offset="0">
                            <Text body="Testimonial" className="testimonialTitle"/>
                                <Text body='"What convinced us to work with Yura was their ability to understand our purpose and subsequent brand we wanted to achieve. Yura has realised our brand vision and excelled beyond expectations. Id highly recommend their services."' className="testimonialText"/>
                                <div className="row authorDetails">
                                    <div className="col-md-2 col-4">
                                    <Image file="yura---desktop-1920px-oval@2x.png" className="authorImage"/>
                                    </div>
                                    <div className="col-md-10 col-8">
                                    <Text body="Luca Loscalzo" className="authorName"/>
                                    <Text body="Co-Founder | Block3" className="authorDesignation"/>
                                    </div>
                                </div>  
                                <img src="https://png.pngtree.com/svg/20170822/ios_arrow_round_back_1238310.png" className="testimonialArrow" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section chatSection">
                    <div className="row">
                        <div className="col-md-6">
                            <Text body="Ready to go and build long lasting impact?" className="chatSectionText"/>
                            <Text body="Put our team of strategists, creatives and developers to work for you?" className="chatSectionSubtext"/>
                            <Button link="" text="Chat with us" className="chatSectionButton"/>
                        </div>
                        <div className="col-md-6">
                            <Image file="yura---desktop-1920px-3dblocks@2x.png" className="girlImage wow slideInLeft" />
                        </div>
                        {/* <div className="col-md-6">
                            {/* <div className="chatSectionImage">
                                <Image file="top.svg" className="chatSectionTopImage wow slideInDown" />
                                <Image file="left.svg" className="chatSectionLeftImage wow slideInLeft" />
                                <Image file="right.svg" className="chatSectionRightImage wow slideInRight" />
                                <Image file="media-girl-01.png" className="chatSectionGirlImage"/>
                            </div>
                        </div> */}
                    </div>
                </div>
                
                <Footer/>
                
            </div>
        )
    }
}

export default Home;