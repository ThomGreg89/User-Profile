import React, { Component } from "react";

import MyHeader from "../src/components/MyHeader";
import MyForm from "../src/components/MyForm";
import Post from "../src/components/Post";
import Nav from "../src/components/Nav";
import MyAds from "../src/components/MyAds";
// import Ads from "../src/components/Ads";
import Coke from '../images/coke.jpg';
import Subway from '../images/subway.jpg';
import Puppy from "./images/puppy.jpg";
import Girl from "./images/girl.png";
.
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.
  state = {
      posts: [
        {
          name: "Jessica",
          src: Puppy,
          iconImg: Girl,
          imageAlt: "girl avatar",
          description: "Here is my beautiful puppy",
          alt: "Puppy",
        },
      ],
    };

    // this.handleNewPost = this.handleNewPost.bind(this);
    // this.handleDeletePost = this.handleDeletePost.bind(this);
  // }

  handleNewPost = (newPost) => {
    const copyOfPosts = this.state.posts;
    this.setState({ posts: [...copyOfPosts, newPost] });
  }
  //This deletes the whole list
  handleDeletePost = (name, description) => {
    const filteredPosts = this.state.posts.filter(post => {
      if (post.name !== name && post.description !== description) {
        return true;
      }
    })
    this.setState({posts: filteredPosts})
  }
  
  render() {
    const postMarkup = this.state.posts.map((post) => (
      <Post onDelete={this.handleDeletePost} key={post.name} {...post} />
    ));

    return (
      <div>
        <MyHeader pgTitle="instaBook" placeholder="Search..." />
        {/* <div style={styles.container}>
          <div style={styles.nav}> */}
            <Nav />
          {/* </div> */}
          <main style={styles.main}>
            {/* <div> */}
              <MyForm onCreate={this.handleNewPost} />
            {/* </div> */}
            {/* <div> */}
              {/* {postMarkup} */}
              {/* </div> */}
            <aside style={styles.ads}>
              Advertisers
              <MyAds img={Coke} h1="Coca-Cola Advertisement" para="Whoever You Are, Whatever You Do, Wherever You May Be, When You Think of Refreshment Think of Ice Cold Coca-Cola" />
              <MyAds img={Subway} h1="Subway" para="If you are eating at Subway, then you are eating fresh." />
            </aside>
          </main>
      </div>
    );
  }
}
export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    background: "WhiteSmoke",
    height: "100vh",
  },
  "@media (min-width: 1024px)": {
    button: {
      fontSize: 16,
    },
  },
  nav: {
    display: "flex",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
    alignItems: "center",
  },
  ads: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    paddingLeft: 20,
    paddingRight: 20,
    color: "lightgray",
  },
};
