import React, { Component } from "react";
import ImageUrl from "../images/man.png";
import MyIcons from "./MyIcons";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "" };

    this.submitPost = this.submitPost.bind(this);
  }

  submitPost(e) {
    e.preventDefault();
    this.props.onCreate({name: "Greg", iconImg: ImageUrl, description: this.state.description});
    this.setState({description: ''})
  }

  render() {
    return (
      <form style={styles.myForm} onSubmit={this.submitPost}>
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            placeholder="Create Post"
            value={this.state.description}
            onChange={(e) => {
              this.setState({ description: e.target.value });
            }}
          />
        </div>
        <div style={styles.post}>
          <MyIcons IconImg={ImageUrl} ImageAlt="Alt Tag" />
          <div>
            <p>What's on your mind?</p>
            <input style={styles.myBtn} type="submit" value="Submit" />
          </div>
        </div>
      </form>
    );
  }
}

export default MyForm;

const styles = {
  myForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
    margin: "1%",
    padding: "2%",
    backgroundColor: "white",
    color: "rgba(163, 173, 194)",
    borderRadius: "2%",
  },
  input: {
    padding: "2%",
    margin: "1%",
    backgroundColor: "rgba(163, 173, 194, 0.5)",
  },
  post: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  myBtn: {
    backgroundColor: 'white',
    height: '20px',
    width: '80px'
}
};
