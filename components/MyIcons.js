import React from 'react';

//Dummy Component
const MyIcons = props => {
    return (
        <img src={props.IconImg} alt={props.ImageAlt} style={styles.myIcons} />
    )
}

export default MyIcons

const styles= {
    myIcons: {
        height: '50px',
        cursor: 'pointer',
        borderRadius: '50%'
    }
}