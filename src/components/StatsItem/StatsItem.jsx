import PropTypes from "prop-types";
import {StatsListField, LabelName, Percentage} from 'components'


export const StatsItem = ({label, percentage}) => { 
    return <StatsListField>
    <LabelName>{label}</LabelName>
    <Percentage>{percentage}</Percentage>
  </StatsListField>
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}