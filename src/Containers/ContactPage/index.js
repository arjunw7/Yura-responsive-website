import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Footer from '../../Components/Footer';
import WOW from "wowjs";

import axios from 'axios';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            phone:"",
            company:"",
            message:""
        }
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0,0);
    }

    sendMail(){
        console.log(this.refs.name)
        var body = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            company: this.state.company,
            message: this.state.message
        }
        if(!body.name || !body.email || !body.phone || !body.company || !body.message){
            alert("Please enter all the fields.")
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email)){
            if((body.phone.match(/^\d{10}$/))){
                axios.post("https://yura-mail-service.herokuapp.com/mail",body).then(res => {
                    if(res.status==200){
                        alert("your message has been delivered to Dennis!")
                        this.setState({
                            name:"",
                            email:"",
                            phone:"",
                            company:"",
                            message:""
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
                <div className="contactMain">
                    <div className="row">
                        <div className="col-md-4">
                            <Text body="let's chat" className="contactHead"/>
                            <Text body="with Dennis" className="contactHead"/>
                            <Image file="yura---contact-1920-team.png" className="dennisPhoto"/>
                            <Text body="Dennis Roelefson" className="dennisName"/>
                            <Text body="Co-founder & Strategy Director" className="dennisProfile"/>
                            <a href="//www.linkedin.com/company/28986347/" target="blank"><Text body="Linkedin" className="dennisSocial"/></a>
                        </div>
                        <div className="col-md-8">
                            <Text body="Fill this out so Dennis can learn about you and your needs." className="contactHeadRight"/>
                            <div className="form">
                                <Text body="Hi, my name is &nbsp;" className="formText inline"/>
                                <input type="text" placeholder="Full name" className="formInput inline" value={this.state.name} onChange={(name)=> this.setState({name: name.target.value})}/>
                                <Text body="&nbsp;." className="formText inline"/>
                                <Text body="I work for&nbsp;" className="formText inline"/><br/>
                                <input type="text" placeholder="Company name" className="formInput inline"  value={this.state.company} onChange={(company)=> this.setState({company: company.target.value})}/>
                                <Text body="&nbsp;and I am in need of a partner" className="formText inline"/><br/>
                                <Text body="to assist me with&nbsp;" className="formText inline"/>
                                <input type="text" placeholder="in a nutshell" className="formInput inline"  value={this.state.message} onChange={(message)=> this.setState({message: message.target.value})}/><br/>
                                <Text body="You can reach me at&nbsp;" className="formText inline"/>
                                <input type="text" placeholder="email address" className="formInput" value={this.state.email} onChange={(email)=> this.setState({email: email.target.value})}/><br/>
                                <Text body="or&nbsp;" className="formText inline"/>
                                <input type="text" placeholder="telephone number" className="formInput" value={this.state.phone} onChange={(phone)=> this.setState({phone: phone.target.value})}/>
                                <Text body="to get the conversation started. Thanks!" className="formText"/>
                                <button className="contactButton"  onClick={()=>this.sendMail()}>Send Dennis a message &nbsp;<i className="fa fa-angle-right" aria-hidden="true" ></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contactAddress">
                    <div className="address">
                        <Text body="visit us" className="visitUsText"/><br/>
                        <Text body="Wibautstraat 131D 1091 GL Amsterdam" className="addressText"/><br/>
                        <Text body="+31 20 244 0000" className="addressText"/>
                        <Text body="info@yura.agency" className="addressText"/>
                    </div>
                    <Image file="yura---contact-1920-gettyimages-554391989.png" className="addressImage"/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact;