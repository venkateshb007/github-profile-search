import React from "react";

class GithubProfileCard extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
        
    }

    render() {
      return (
        <React.Fragment>
          <div className="card">
            <img src={this.props.profile.avatar_url} alt="" className="img-fluid" />
            <div className="card-body">
              <p className="h5">{this.props.profile.name}</p>
              <p>{this.props.profile.bio}</p>
              <a href={this.props.profile.html_url} className="btn btn-success btn-sm" target="_blank">Profile</a>
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default GithubProfileCard; 