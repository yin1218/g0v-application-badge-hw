import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';

const MoifiedCard = styled(Card)`
    margin: 1%;
    border: 1px solid #E1E1E1;

`
const MoifiedBadge = styled(Badge)`
    margin-bottom: 2%;
`

const PersonalBadgeCard = ({brief, time, title, url, rank, total}) => {
    return(
        <>
            <MoifiedCard style={{ width: '20rem' }}>
            <Card.Body>
                <MoifiedBadge bg="secondary">
                    <Icon icon="bxs:medal" color="orange" />
                    {' '} {rank} / {total}
                </MoifiedBadge>
                <br/>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{time}</Card.Subtitle>
                <Card.Text>
                    {brief}
                </Card.Text>
                <Card.Link href={url}>See more</Card.Link>
            </Card.Body>
            </MoifiedCard>
        </>
    )
}

export default PersonalBadgeCard
