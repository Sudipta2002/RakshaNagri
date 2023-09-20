import React from "react";
class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "",
                location: "",
                avatar_url:""
            }
        };
    }
// In react Class constructor is called then render is called
    async componentDidMount(){
        // api call
        const data = await fetch("https://api.github.com/users/Sudipta2002");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
        // console.log("Component did mount this will be called after we render")
    }
    render(){
        return(
            <div>
                <img className="rounded-full" src={this.state.userInfo?.avatar_url}/>
                <h2 className="text-4xl">Name: {this.state.userInfo?.name}</h2>
                <h3 className="text-4xl">Area: {this.state.userInfo?.location}</h3>
            </div>
        );
    }
}

export default ProfileClass; 