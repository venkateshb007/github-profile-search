import React from "react";

class GithubRepos extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
        
    }

    render() {
      return (
        <React.Fragment>
          <div className="card mt-5">
            <div className="card-header bg-light text-white">
              <p className="h4">Repositories</p>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {
                  this.props.repos.map((repo)=>{
                    return(
                      <li className="list-group-item">
                        <p className="h5 ">
                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                        </p>
                        <span className="badge badge-success" style={{ marginRight: '10px' }}>{repo.stargazers_count} Stars</span>
                        <span className="badge badge-secondary">{repo.watchers_count} Watchers</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default GithubRepos;