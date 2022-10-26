import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Box = styled.div`
    box-sizing: border-box;
    border: 1px solid #E1E1E1;
    box-shadow: 8px 5px 5px rgba(0, 0, 0, 0.1);
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 2%;
    padding: 1%;
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 100%;
    @media screen and (max-width:768px) {
        width: 40%;
    }

`


const PersonalInfo = ({userName, userId, userTag, userPhoto}) => {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        if(userTag){
            setTags(userTag.trim().split(/\s+/));
        }
    }, [])




    return(
        <Box>
            <Row className="justify-content-center">
                <Col md={2} className="justify-content-center"><Avatar src={userPhoto}></Avatar></Col>
                <Col md={10} className="justify-content-center">
                <h1> {userName} </h1>
                <h5>@{userId}</h5>
                {
                    tags.map(tag => (
                        <>
                            <Badge bg="primary">{tag}</Badge>
                            {' '}
                        </>

                    ))
                }
                </Col>
            </Row>
        </Box>
    )

}

export default PersonalInfo
