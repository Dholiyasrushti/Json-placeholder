import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Container ,Row,Col,Card} from 'react-bootstrap';
import Home from "./Home";

function Photos(){
    let [addpost,setpost]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
            // handle success
            console.log(response.data);
            // for(i=0;i<=500)
            setpost(response.data);
            // setloanding(false);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },[])
    return(
        <>
                <Home></Home>

            <Container>
                <Row>
                    {addpost.map((ele,ind)=>{
                       return (
                        <Col>
                        <Card style={{ width: '18rem' }} className='my-5'>
                            <Card.Img variant="top" src={ele.url} />
                            <Card.Body>
                                <Card.Title>AblamsId : {ele.albumId}<span className='px-5'>Id : {ele.id}</span></Card.Title>
                                <Card.Text>
                                    {ele.title}
                                </Card.Text>
                                <p>{ele.thumbnailUrl}</p>
                                </Card.Body>
                                </Card>
                        </Col>
                       )
                    })}
                </Row>
            </Container>
        </>
    )
}
export default Photos;