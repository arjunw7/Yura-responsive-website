import React from 'react';
import Text from '../../Components/Text';
import Footer from '../../Components/Footer';
import WOW from "wowjs";
import axios from 'axios';

class Blockchain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName:"",
            email:"",
            phone:"",
            location:""
        }
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0,0);
    }
    
    submit(){
        var body = {
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location
        }
        console.log(body)
        if(!body.fullName || !body.email || !body.phone || !body.location){
            alert("Please enter all the fields.")
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email)){
            if((body.phone.match(/^\d{10}$/))){
                axios.post("https://yura-mail-service.herokuapp.com/blockchainQuery",body).then(res => {
                    if(res.status==200){
                        alert("Your message has been sent to Dennis!")
                        this.setState({
                            fullName:"",
                            email:"",
                            phone:"",
                            location:""
                        })
                    }
                })
                .catch(err =>{
                    alert(err)
                }) 
            }
            else{
                alert("Please enter a valid contact number.")
            }
        }
        else{
             alert("Please enter a valid email address.")
        }
        
    }

    render() { 
        return(
            <div>
                {/* <div className="backImage">
                    <img src="../img/blockchain/blockchain_back.png" alt=""/> 
                </div> */}
                <div className="blockchainHead">
                    <img src="../img/blockchain/Top.png" className="blockchainTopImage" ref=""/>
                    <div className="blockchainHeadBox">
                        <Text body="DO THE YURA TOKENCHECK" className="blockchainBoxTitle"/>
                        <Text body="The workshop is designed for people who are actively considering to apply blockchain technology to improve their business. Industry experts will share the pitfalls and opportunities, in order for you to make quick and educated decisions." className="blockchainBoxText"/>
                        <div className="blockchainBoxList">
                            <Text body=">> Quickscan & pressure cooker style" className="blockchainBoxText"/>
                            <Text body=">> Fast answers to burning questions" className="blockchainBoxText"/>
                            <Text body=">> Alligned legal frameworks & tokenomics" className="blockchainBoxText"/>
                            <Text body=">> Direct access to our blockchain specialists" className="blockchainBoxText"/>      
                        </div>

                        <div className="blockchainBoxForm" id="top">
                        <input type="text" placeholder="Full name" value={this.state.fullName} onChange={(val) => this.setState({fullName: val.target.value})}/>
                        <input type="text" placeholder="Email" value={this.state.email} onChange={(val) => this.setState({email: val.target.value})}/>
                        <input type="text" placeholder="Phone number" value={this.state.phone} onChange={(val) => this.setState({phone: val.target.value})}/>
                        <select value={this.state.location}  onChange={(val) => this.setState({location: val.target.value})}>
                            <option value="">Location</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Canggu">Canggu/Bali</option>
                        </select>
                        <button onClick={()=>this.submit()}> More info please! </button>
                        </div>
                    </div>
                </div>
                <div className="blockChainInfo">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <Text body="Blockchain technology can be applied in many different industries and business domains. From tokenizing assets to the creation of a new digital economy. This is exactly one of the major challenges for many companies; where to start? Our battle tested team delivers expertise to help you accelerate. They rapidly facilitate you ways to bring your ideas to life." className="blockChainInfoText"/>
                        </div>
                    </div>
                </div>

                <div className="blockchainMembers">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="blockchainMemberImage">
                                <img src="../img/blockchain/Jockem.png" alt=""/>
                            </div>
                            <Text body="Jochem Verheul" className="blockchainMemberName"/>
                            <Text body="Jochem has been a technology entrepreneur for the past 16 years. In 2009 he founded Itsavirus, a software and interaction design company with clients like Heineken and Shell. Jochem created multiple successful ventures in the field of blockchain, AI and digital marketplace. Jochem is an entrepreneur with a heart made of tech." className="blockchainMemberIntro"/>
                        </div>
                        <div className="col-md-6">
                            <div className="blockchainMemberImage">
                                <img src="../img/blockchain/Dennis.png" alt=""/>
                            </div>
                            <Text body="Dennis Roelofsen" className="blockchainMemberName"/>
                            <Text body="Dennis co-founded his first digital agency Momkai in 2002 and moved on to solve strategy and design challenges for companies in Europe and China. Later he founded Yura Agency with a sole focus on helping technologies companies to thrive and reach clarity. Dennis fulfills the role of strategist and moderator during workshops." className="blockchainMemberIntro"/>
                        </div>
                    </div>
                </div>

                <div className="workshopTopics">
                    <img src='../img/blockchain/y-gradient.svg' className="workshopYuraRight"/>
                    <Text body="Workshop topics" className="workshopTopicsHead"/>
                    <Text body="Some of the questions people have asked in previous sessions:" className="workshopTopicsSubHead"/>
                    <div className="row">
                        <div className="col-md-4">
                            <Text body="What kind of tokenomics would fit my situation?" className="workshopTopicsQuestion"/>
                            <Text body="How do I choose a strategic market position using good tokenomics and legal structures?" className="workshopTopicsQuestion"/>
                            <Text body="Are blockchain and tokenization of (part of) my business good solutions to explore?" className="workshopTopicsQuestion"/>  
                            <Text body="How would my business model change?" className="workshopTopicsQuestion"/>                      
                        </div>
                        <div className="col-md-4">
                            <Text body="How might we navigate through different consensus algorithms and governance models?" className="workshopTopicsQuestion"/>
                            <Text body="How might we build a specialized team towards achieving our goals?" className="workshopTopicsQuestion"/>
                            <Text body="Which blockchain fits my purpose best and why?" className="workshopTopicsQuestion"/>  
                            <Text body="How do we build a community for our use case?" className="workshopTopicsQuestion"/>                      
                        </div>
                        <div className="col-md-4">
                            <Text body="How might we structure our tokensale?" className="workshopTopicsQuestion"/>
                            <Text body="What is the best strategy to have a successful private sale and how do we handle investor relations in the blockchain space?" className="workshopTopicsQuestion"/>
                            <Text body="How do we choose our soft and hard cap?" className="workshopTopicsQuestion"/>  
                            <Text body="What documents do I need to start tokensale?" className="workshopTopicsQuestion"/>                    
                        </div>
                    </div>
                </div>
                <div className="requestPriceButton">
                    <a href="#top">
                        <button className="contactButton">Request Price&nbsp;<i className="fa fa-angle-right" aria-hidden="true" ></i></button>
                    </a>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Blockchain;