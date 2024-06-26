import './post.css'

import {MoreVert} from '@mui/icons-material'

import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({post}) {

  const [like, setLike ] = useState(post.like);
  const [isliked, setIsLiked ] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1)
    setIsLiked(!isliked)
  }

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={PF + Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
            <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF+post.photo} alt="" className="postImg" />
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
