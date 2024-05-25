import React from "react";

class GithubSearch extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

          username : ''

        }
        
    }

    updateInput = (event) =>{
      this.setState({
        username : event.target.value
      })
    }


    submitSearch = (event) => {
      event.preventDefault();
      this.props.pushUserName(this.state.username)
    }

    render() {
      return (
        <React.Fragment>
          {/* <pre>{JSON.stringify(this.state)}</pre> */}
          <div className="card mt-5">
            <div className="card-header bg-secondary text-white">
              <p className="h4">Github Profile Search</p>
            </div>
            <div className="card-body">
              <form className="form-inline" onSubmit={this.submitSearch}>
                <div className="form-group">
                  <input
                  value={this.state.username}
                  onChange={this.updateInput}                  
                  type="search" size="40" className="form-control" placeholder="Github User" />
                </div>
                <div>
                  <input type="submit" value="search" className="btn btn-secondary btn-sm " />
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default GithubSearch;