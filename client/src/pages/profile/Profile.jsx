import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className='profileCoverImg'/>
                    <img src="assets/person/7.jpeg" alt="" className='profileUserImg'/>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Safak</h4>
                    <span className="profileInfoDesc">Helooo</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
