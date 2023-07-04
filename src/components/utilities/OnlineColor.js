 export const OnlineColor = props => {
    switch (props.status){
        case true: return 'green';
        case false: return 'red';
        default: return "#bbb"
    }
}