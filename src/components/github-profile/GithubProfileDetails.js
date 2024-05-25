import React from "react";

class GithubProfileDetails extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
        
    }

    render() {
      return (
        <React.Fragment>
          <div className="card">
            <div className="card-header">
              <span className="badge badge-success mx-1">Followers : {this.props.profile?.followers}</span>
              <span className="badge badge-primary mx-1">Repos : {this.props.profile?.public_repos}</span>
              <span className="badge badge-warning mx-1">Gists : {this.props.profile?.public_gists}</span>
              <span className="badge badge-danger mx-1">Following : {this.props.profile?.following}</span>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  Name : {this.props.profile?.name}
                </li>
                <li className="list-group-item">
                    Location : {this.props.profile?.location}
                </li>
                <li className="list-group-item">
                  Email : {this.props.profile?.email}
                </li>
                <li className="list-group-item">
                  Company : <a href={this.props.profile?.company} target="_blank">{this.props.profile?.company}</a>
                </li>
                <li className="list-group-item">
                  Blog : <a href={this.props.profile?.blog} target="_blank">{this.props.profile?.blog}</a>
                </li>
                <li className="list-group-item">
                    Member Since : {this.props.profile?.created_at}
                </li>
                <li className="list-group-item">
                    Profile URL : <a href={this.props.profile?.html_url} target="_blank">{this.props.profile?.html_url}</a>
                </li>
                
              </ul>
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default GithubProfileDetails;