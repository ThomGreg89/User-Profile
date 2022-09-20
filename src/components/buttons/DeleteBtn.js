import React from 'react';

const DeleteBtn = props => {
    return (
        <button onClick={props.deletePostItem} style={styles.deleteBtn}>
            {props.btnText}
        </button>
    )
}

export default DeleteBtn; 

const styles = {
    deleteBtn: {
        backgroundColor: 'white',
        height: '30px',
        border: 'none'
    }
}