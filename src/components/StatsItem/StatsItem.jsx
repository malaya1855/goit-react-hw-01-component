import PropTypes from "prop-types";


export const StatsItem = ({label, percentage}) => { 
    return <li class="item">
    <span class="label">{label}</span>
    <span class="percentage">{percentage}</span>
  </li>
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}