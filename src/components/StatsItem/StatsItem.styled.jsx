import {getRandomHexColor} from "components/utilities/RandomColor"
import styled from '@emotion/styled'

export const StatsListField = styled.li`
display: block;
width: 80px;
background-color: ${getRandomHexColor};
padding-top: 10px;
padding-bottom: 10px;
`
export const LabelName = styled.span`
    display: block;
    font-weight: bold;`

    export const Percentage = styled.span`
    display: block;`
