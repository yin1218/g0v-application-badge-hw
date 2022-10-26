
import PersonalBadgeCard from "./PersonalBadgeCard"
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";

const ListLayout = styled.div`
    margin-top: 2%;
    display: inline-flex;
    flex-wrap: wrap;
`


const PersonalBadgeCardList = ({badgeList}) => {
    return(
        <ListLayout >
            {badgeList.map(badge => <PersonalBadgeCard brief={badge.brief} time={badge.time} title={badge.title} url={badge.url} rank={badge.rank} total={badge.total}/>)}
        </ListLayout>
    )
}

export default PersonalBadgeCardList
