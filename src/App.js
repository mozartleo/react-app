import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    handleButtonClick(event) {
        fetch('http://ceevee.mozartleo.local:8081/api/tasks', {mode: "no-cors"})
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <pre>likes: {this.props.likes}</pre>
                    <pre>dislikes: {this.props.dislikes}</pre>
                </div>
                <div>
                    <button onClick={this.props.like}>Like</button>
                    <button onClick={this.props.dislike}>Dislike</button>
                    <button onClick={this.handleButtonClick}>Try click</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    likes: state.likes,
    dislikes: state.dislikes
});
const mapDispatchToProps = dispatch => ({
    like: () => dispatch({type: 'ADD_LIKE'}),
    dislike: () => dispatch({type: 'ADD_DISLIKE'})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
