
import PropTypes from "prop-types";

import {Card, Avatar, Title, Info, InfoStyle, Stats, Label, Quantity, StatsListItem} from 'components'

export const Profile = ({ username, tag, location, avatar, stats}) => { return <Card>
<InfoStyle>
  <Avatar
    src={avatar}
    alt="User avatar"
  />
  <Title>{username}</Title>
  <Info>{tag}</Info>
  <Info>{location}</Info>
</InfoStyle>

<Stats>
  <StatsListItem>
    <Label>Followers</Label>
    <Quantity>{stats.followers}</Quantity>
  </StatsListItem>
  <StatsListItem>
    <Label>Views</Label>
    <Quantity>{stats.views}</Quantity>
  </StatsListItem>
  <StatsListItem>
    <Label>Likes</Label>
    <Quantity>{stats.likes}</Quantity>
  </StatsListItem>
</Stats>
</Card>}

Profile.propTypes={
  username:PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  
}