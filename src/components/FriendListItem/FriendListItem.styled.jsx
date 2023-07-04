import styled from '@emotion/styled'
import {OnlineColor} from 'components/utilities/OnlineColor'

export const FriendCard = styled.li`
display: flex;
gap:20px;
justify-content: space-evenly;
align-items: center;
margin-bottom: 16px;
padding: 12px 15px;
 width: 200px;
     background-color: #FFF;
     margin-right: auto;
     box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
     border-radius: 0px 0px 4px 4px;`

     export const Status = styled.span`
     height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
background-color: ${OnlineColor};
     `
export const FriendName = styled.p`
font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.02em;`