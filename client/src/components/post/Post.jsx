import './post.css'
import {MoreVert} from '@mui/icons-material'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {format} from 'timeago.js'

import {Link} from 'react-router-dom'

export default function Post({post}) {

  const [like, setLike ] = useState(post.likes.length);
  const [isliked, setIsLiked ] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1)
    setIsLiked(!isliked)
  }

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  },[post.userId]);

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img className='postProfileImg' src={user.profilePicture || PF + "person/no-avatar.png"} alt="" />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF+post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler} />
            <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
