 import React from "react";
 import GithubSearch from "./GithubSearch";
 import axios from "axios";
import { clientID, clientSecret } from "./githubCredentials";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";

class GithubSearchApp extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            profile : {},
            repos : [],
            errorMessage : '',
        } 
        
    }

    pullUserName = (username) => {
        this.setState({
            username : username
        })
        this.searchUserProfile();
        this.searchUserRepos(); 
    }

    searchUserProfile = () => {
        let dataURL = `https://api.github.com/users/${this.state.username}?client=${clientID}&clientSecret=${clientSecret}`;
        axios.get(dataURL).then((response)=>{
            this.setState({
                profile : response.data
            })
        }).catch((err)=>{
            this.setState({
                errorMessage : err
            })
        })
    }

    searchUserRepos=()=>{

    }


    render() {
      return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(this.state.profile)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col">
                       <GithubSearch pushUserName={this.pullUserName}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(this.state.profile).length !== 0 ? 
                            <React.Fragment>
                        <GithubProfile profile={this.state.profile} />
                            </React.Fragment> : null
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            this.state.repos.length > 0 ?
                            <React.Fragment>
                                <GithubRepos repos={this.state.repos}/>
                            </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
    }
}

export default GithubSearchApp;