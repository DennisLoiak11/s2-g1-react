class CommentArea extends Component {
    state = {
        comments: null,
        rate: "string",
        elementId: "string",
    };

    componentDidMount = () => {
        console.log("didMount()");
        this.fetchComments();
    };

    fetchComments = async () => {
        try {
            let r = await fetch(
                fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTFiMmM1NmIzNjAwMTMzZmU1NjIiLCJpYXQiOjE2ODA1Mjg3MzcsImV4cCI6MTY4MTczODMzN30.sHHlixTcdHIl7BrNiR9t_ezPjUp-OvEl85QevDIqLW4",
                    },
                })
            );
            if (r.ok) {
                let posts = await r.json();
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