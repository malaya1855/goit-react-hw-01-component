import PropTypes from "prop-types";
import { StatsItem } from "components/StatsItem/StatsItem"

export const Statictics = ({stats, title}) =>{ 
    return <section class="statistics">
{title && <h2>{title}</h2>}
<ul class="stat-list">
{stats.map((item) => <StatsItem 
key={item.id} 
label={item.label} 
percentage={item.percentage}/>)}  
</ul>
</section>}

Statictics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
    title: PropTypes.string.isRequired,
}