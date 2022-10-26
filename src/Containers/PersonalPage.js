import styled from 'styled-components'
import PageHeader from '../Components/PageHeader';
import PersonalInfo from '../Components/PersonalInfo';
import PersonalBadgeCard from '../Components/PersonalBadgeCard';
import { getUserInfo } from '../axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PersonalBadgeCardList from '../Components/PersonalBadgeCardList';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Icon } from '@iconify/react';

const RoundButton = styled(Button)`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: fixed;
    z-index: 1000;
    background-color: white;
    left: 43px;
    bottom: 19px;
`;



const PersonalPage = () => {
    const [userData, setUserData] = useState({});
    const [badges, setBadges] = useState([]);
    const [services, setServices] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect( () => {
        async function getData() {
            const response = await getUserInfo({name: 'ronnywang'});
            setUserData(response.user);
            setBadges(response.badges);
            setServices(response.services);
            console.log(response)
        }
        getData();
    }, []);

    return(<>
        <PageHeader />
        <Container>
            <PersonalInfo userName={userData.name} userId={userData.id} userTag={userData.keyword} userPhoto={userData.avatar}/>
            {/* <Row> */}
                {/* <Col md={4}>
                <Navbar bg="light" variant="light" sticky="top">
                    <Container fluid>
                    <Nav className="flex-column">
                        {services.map(service => (
                        <Nav.Link href={'#'+service.serviceuser_id}>{service.service}</Nav.Link>
                        )
                        )}

                    </Nav>
                    </Container>
                </Navbar>
                </Col> */}
                <>
                <RoundButton variant="outline-secondary" onClick={handleShow}>
                    <Icon icon="bx:menu" />
                </RoundButton>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navbar >
                            <Container fluid>
                            <Nav className="flex-column">
                                {services.map(service => (
                                <Nav.Link href={'#'+service.serviceuser_id}>{service.service}</Nav.Link>
                                )
                                )}

                            </Nav>
                            </Container>
                        </Navbar>
                    </Offcanvas.Body>
                </Offcanvas>
                </>

                {/* <Col> */}
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                    {services.map(service => {
                        const filterArray = badges.filter(function (badge){
                            return badge.serviceuser_id === service.serviceuser_id
                        })
                        return(
                        <>
                            <h1 id={service.serviceuser_id}>{service.service}</h1>
                            <a href={service.link}>@{service.name}</a>
                            <PersonalBadgeCardList badgeList={filterArray} />
                            <hr></hr>
                        </>
                        )
                    }
                    )}
                    </div>
                {/* </Col> */}
            {/* </Row> */}
        </Container>
    </>)
};
export default PersonalPage;
