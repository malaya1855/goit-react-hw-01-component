import styled from '@emotion/styled'

export const Card = styled.div`
width: 400px;
    background-color: #FFF;
    margin-right: auto;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 0px 0px 4px 4px;`

export const InfoStyle = styled.div`
text-align: center;
padding-top: 16px;`

    export const Avatar = styled.img`
display: block;
width: 100px;
height: auto;
    margin-left: auto;
  margin-right: auto;
    border-radius: 50%;
    `

    export const Title = styled.p`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.02em;
    `
    export const Info = styled.p`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;`

    export const Stats = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
    text-align: center;
    padding: 0px;
    justify-content: space-evenly;
    `
    export const StatsListItem = styled.li`
       margin-bottom: 16px
    `
    export const Label = styled.span`
    display: block;
    font-weight: bold;`

    export const Quantity = styled.span`
    display: block;
 `