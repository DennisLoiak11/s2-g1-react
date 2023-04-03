import books from '../data/fantasy.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AllTheBooks() {
    return (
        <Container>
            <Row md={4}>
                {books.map((book, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Title>{book.title}</Card.Title>
                                <Badge pill bg="dark">{book.price}</Badge>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllTheBooks;