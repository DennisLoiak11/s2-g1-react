import { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Card, Badge } from 'react-bootstrap';
import CommentArea from './CommentArea';

class SingleBook extends Component {
    state = {
        selected: false
    };

    render() {
        return (
            <Col>
                <Card style={{border: this.state.selected ? '3px solid green' : 'unset'}}>
                    <Card.Body>
                        <Card.Img variant="top" src={this.props.book.img}
                        onClick={() => {this.setState({selected: !this.state.selected})}}/>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Badge pill bg="dark">{this.props.book.price}</Badge>
                    </Card.Body>
                    {this.state.selected && <CommentArea bookId={book.asin}/>}
                </Card>
            </Col>
        )
    }
}

export default SingleBook;