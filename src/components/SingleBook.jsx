import { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Card, Badge } from 'react-bootstrap';

class SingleBook extends Component {
    state = {
        selected: false
    };

    render() {
        return (
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={this.props.book.img}
                        onClick={() => {this.setState({selected: !this.state.selected})}}
                        style={{border: this.state.selected ? '3px solid green' : 'unset'}} />
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Badge pill bg="dark">{this.props.book.price}</Badge>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleBook;