import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            { posts.map((post_item) => {
                const { id, data } = post_item
                return <Post
                    key={id}
                    profilePic={data.profilePic}
                    message={data.message}
                    timestamp={data.timestamp}
                    username={data.username}
                    image={data.image} />
            }
            )}
        </div>
    )
}

export default Feed;
