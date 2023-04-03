import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import books from '../data/fantasy.json'

console.log(books);
const BookList = () => (
    <>
    <Container>
        <Row className='g-4'>
            {books.map((elemento, index) => (
                <Col key={`elemento-${index}`}>
                    <SingleBook book={elemento}/>
                </Col>
            ))}
        </Row>
    </Container>
    </>
);

export default BookList;