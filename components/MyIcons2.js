import React from 'react';

//Dummy Component
const MyIcons2 = props => {
    return (
        <img src={props.IconImg} alt={props.ImageAlt} style={styles.myIcons} />
    )
}

export default MyIcons2

const styles= {
    myIcons: {
        height: '50px',
        cursor: 'pointer',
        borderRadius: '50%'
    }
}