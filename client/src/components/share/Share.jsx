import './Share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'

export default function Share() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src={`${PF}person/1.jpeg`} alt="" />
          <input placeholder="What's in ur mind" className="shareInput" />
        </div>
        <hr className='shareHr' />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor='red' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor='gold' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
