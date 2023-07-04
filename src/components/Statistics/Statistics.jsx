import PropTypes from "prop-types";
import { StatsItem } from "components/StatsItem/StatsItem"
import {StatsTitle, StatsSection, StatsList} from 'components'

export const Statictics = ({stats, title}) =>{ 
    return <StatsSection>
{title && <StatsTitle>{title}</StatsTitle>}
<StatsList>
{stats.map((item) => <StatsItem 
key={item.id} 
label={item.label} 
percentage={item.percentage}
/>)}  
</StatsList>
</StatsSection>}

Statictics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
    title: PropTypes.string,
}