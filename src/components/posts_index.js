import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// import { bindActionCreators } from 'redux';

class PostsIndex extends Component{

  componentWillMount(){
    console.log('componentWillMount.');
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>Lists of posts.</div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

// Same as mapDispatchToProps()
export default connect(null, { fetchPosts })(PostsIndex);
