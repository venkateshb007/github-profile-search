import React from "react";
import GithubProfileCard from "./github-profile/GithubProfileCard";
import GithubProfileDetails from "./github-profile/GithubProfileDetails";

class GithubProfile extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
        
    }

    render() {
      return (
        <React.Fragment>
          {/* <pre>{JSON.stringify(this.props.profile)}</pre> */}
          <div className="row mt-4">
            <div className="col-md-3">
              {
                Object.keys(this.props).length !== 0 ? 
                <React.Fragment>
                  <GithubProfileCard profile={this.props.profile}/>
                </React.Fragment> : null
              }
            </div>
            <div className="col-md-9">
            {
                Object.keys(this.props).length !== 0 ? 
                <React.Fragment>
                  <GithubProfileDetails profile={this.props.profile}/>
                </React.Fragment> : null
              }
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default GithubProfile;