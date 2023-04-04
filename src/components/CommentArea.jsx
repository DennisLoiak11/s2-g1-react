import { Component } from "react";
import { Card, ListGroup, Spinner, Button } from 'react-bootstrap';

class CommentArea extends Component {
    state = {
        comments: [],
    };

    componentDidMount = () => {
        console.log("didMount()");
        this.fetchComments();
    };

    fetchComments = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTFiMmM1NmIzNjAwMTMzZmU1NjIiLCJpYXQiOjE2ODA1Mjg3MzcsImV4cCI6MTY4MTczODMzN30.  sHHlixTcdHIl7BrNiR9t_ezPjUp-OvEl85QevDIqLW4",
                    },
                });
            if (response.ok) {
                let posts = await response.json();
                this.setState({ comments: posts });
                console.log("setState() avvenuto");
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <>
                {this.state.comments ? (
                    <Card>
                        <Card.Body>
                            <Card.Title>{this.state.comments.elementId}</Card.Title>
                            <Card.Text>{this.state.comments.comment}</Card.Text>
                            <Button variant="primary">{this.state.comments.rate}</Button>
                        </Card.Body>
                    </Card>
                ) : (
                    <Spinner variant="success" animation="grow" />
                )}
            </>
        );
    }
}

export default CommentArea;