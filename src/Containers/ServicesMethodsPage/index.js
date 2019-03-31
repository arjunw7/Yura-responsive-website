import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import WOW from "wowjs";
class ServicesMethods extends React.Component {

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
                <div className="row teamMain">
                    <div className="col-md-4">
                    <Text body="Methods & Services" className="servicesHead"/>
                    </div>
                    <div className="col-md-8">
                    <Text body=" Yura is a creative studio that transforms big ideas into great products and ventures. We help cruiseships (companies) move like speedboats (startups), and provide the expertise startups need to launch and scale their business." className="servicesText"/>
                    <Button link="contact" text="Want to join our team?" className="teamMainButton"/>
                    </div>
                </div>

                <Image file="yura---sm-1920px-gettyimages-554391989-copy.png" className="servicesMethodsMainImage"/>
                <div className="services">
                    <div className="row">
                        <div className="col-md-4">
                            <Text body="01" className="serviceHeadNumber"/>
                            <Text body="Clarity" className="serviceHeadText"/>
                            <Text body="Strategy = Clarity. At the end of the day this is what we sell: clarity. You want to filter out all the non-essentials and bring out the message, the purpose and the end result. Whatever the medium or the tool: Clarity, clarity and clarity." className="serviceDescription"/>
                        </div>
                        <div className="col-md-4">
                            <Text body="02" className="serviceHeadNumber"/>
                            <Text body="Speed" className="serviceHeadText"/>
                            <Text body="In a world that is rapidly changing, it makes no sense to wait for the perfect conditions. There is no such thing. Therefore we work with iterations of a product. We work in short design sprints to deliver those iterations. We work fast." className="serviceDescription"/>
                        </div>
                        <div className="col-md-4">
                            <Text body="03" className="serviceHeadNumber"/>
                            <Text body="Creativity" className="serviceHeadText"/>
                            <Text body="Underneath all of our work lies a genuine desire to create. We use our creativity and intelligence to solve the unique problems our partners and clients present to us. There is nothing more rewarding than to watch a working solution." className="serviceDescription"/>
                        </div>
                    </div>
                </div>

                <div className="processMain">
                    <Image file="yura-mobile-375-path.png" className="processGraphic"/>
                    <div className="processContent">
                        <Text body="Why we do it" className="processMainHead"/>
                        <Text body="We solve branded challenges in co-creation with our clients as good and fast as possible." className="processMainText"/>
                    </div>
                    <Image file="servicesImage.png" className="processMainImage"/>
                </div>

                <div className="processDetails">
                    <div className="row">
                        <div className="col-md-4">
                            <Text body="Our Process" className="processDetailsHead"/>
                        </div>
                        <div className="col-md-8">
                            <Text body="We have a clear process: in 5 distinct phases we’re taking your product from beginning to end. Combining strategic and technical experience with a fierce focus on design, we are capable to bring any idea to life." className="processDetailsText"/>
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-7">
                            <div className="processItem">
                                <Image file="yura---sm-1920px-investigate.svg" className="processItemIcon"/>
                                <div className="processData">
                                    <Text body="Phase 0" className="processPhase"/>
                                    <Text body="Investigate & Understand" className="processTitle"/>
                                    <Text body="Creating the baselines and points of departure. Knowing everything about your business, the challenge and opportunities." className="processDescription"/>
                                </div>
                            </div>
                           <div className="processItem">
                                <Image file="yura---sm-1920px-ideate.svg" className="processItemIcon"/>
                                <div className="processData">
                                    <Text body="Phase 1" className="processPhase"/>
                                    <Text body="Strategize & Ideate" className="processTitle"/>
                                    <Text body="Prototyping potential solutions. Crafting for clarity. Planning towards winning the battles you are so ambitious to win." className="processDescription"/>
                                </div>
                           </div>
                           <div className="processItem">
                            <Image file="yura---sm-1920px-design.svg" className="processItemIcon"/>
                                <div className="processData">
                                    <Text body="Phase 2" className="processPhase"/>
                                    <Text body="Design & Write" className="processTitle"/>
                                    <Text body="Creating the frameworks, the milestones and materials for you to say: “Yes, full speed ahead!” You now see what we’re seeing." className="processDescription"/>
                                </div>
                           </div>
                            <div className="processItem">
                                <Image file="yura---sm-1920px-execute.svg" className="processItemIcon"/>
                                <div className="processData">
                                    <Text body="Phase 3" className="processPhase"/>
                                    <Text body="Execute & Implement" className="processTitle"/>
                                    <Text body="In this stage we operate like a bunch of geeks in the attic. Executing the warplan. Making the result already tangible." className="processDescription"/>
                                </div>
                            </div>
                            <div className="processItem">
                                    <Image file="yura---sm-1920px-improve.svg" className="processItemIcon"/>
                                    <div className="processData">
                                        <Text body="Phase 4" className="processPhase"/>
                                        <Text body="Track & Improve" className="processTitle"/>
                                        <Text body="Off course we get feedback along the way. Let’s test and optimize things: whether it’s from client review or changing factors." className="processDescription"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Image file="yura---sm-1920px-gettyimages-554391989-copy-2.png" className="notesImage"/>

                <div className="ambition">
                    <div className="row">
                        <div className="col-md-4">
                        <Text body="What is your ambition?" className="ambitionTitle"/>
                        </div>
                        <div className="col-md-8">
                        <Text body="We create new products and services from the ground up, or improve existing products." className="ambitionHead"/>
                        <Text body="As a team we contribute with everything from concept work, product design, prototyping and branding to all types of development." className="ambitionText"/>
                        <Text body="How great would it be if we could get your project flying? Soon!" className="ambitionText"/><Button link="contact" text="Contact us now" className="ambitionButton"/>
                        </div>
                    </div>
                </div>

                <Footer/>
                
            </div>
        )
    }
}

export default ServicesMethods;