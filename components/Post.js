import React from 'react';
import DeleteBtn from '../components/buttons/DeleteBtn';
import MyIcons2 from "../components/MyIcons2";

const Post = props => {
    const {name, src, iconImg, imageAlt, description, alt, onDelete } = props;
    const deletePost = () => {
        onDelete(name, description);
    }

    return(
        <article style={styles.myArticle}>
            <div style={styles.container}>
                <div>
                    <MyIcons2 IconImg={iconImg} ImageAlt={imageAlt} />
                    <p>{name}</p>
                </div>
                <DeleteBtn btnText="X" deletePostItem={deletePost} />
            </div>
            <p>{description}</p>
            <img src={src} alt={alt} />
        </article>
    )
}

export default Post;

const styles = {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '72%',
        padding: '1%',
        backgroundColor: 'white',
        color: 'rgb(163, 173, 194)',
        justifyContent: 'space-around',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgb(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center',
        margin: '5%'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}