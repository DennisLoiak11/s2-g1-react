import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import books from '../data/fantasy.json'

const BookList = () => (
    <>
    <Container>
        <Row className='g-4'>
            {books.map((elemento, index) => (
                <Col sm={3} key={`elemento-${index}`}>
                    <SingleBook book={elemento}/>
                </Col>
            ))}
        </Row>
    </Container>
    </>
);

export default BookList;