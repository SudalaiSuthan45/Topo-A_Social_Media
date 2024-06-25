import './Sidebar.css'
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarListItemText">BookMarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr' />

        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">John</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/3.jpeg" alt="" />
            <span className="sidebarFriendName">Armad</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt="" />
            <span className="sidebarFriendName">Wang</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/5.jpeg" alt="" />
            <span className="sidebarFriendName">Tu-kei</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
            <span className="sidebarFriendName">Ban</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
