import React from "react";
import 'material-design-icons/iconfont/material-icons.css';
import './linkedin.css';


export const Linkdin = () => {
  return (
   <div className='container'>
      {/* <!-- Header Starts --> */}
        <div className="header">
          <div className="header__left">
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
            <div className="header__search">
              <i className="material-icons"> search </i>
              <input type="text" />
            </div>
          </div>

          <div className="header__right">
            <div className="headerOption">
              <i className="material-icons headerOption__icon"> home </i>
              <h3>Home</h3>
            </div>
            <div className="headerOption">
              <i className="material-icons headerOption__icon"> supervisor_account </i>
              <h3>My Network</h3>
            </div>
            <div className="headerOption">
              <i className="material-icons headerOption__icon"> business_center </i>
              <h3>Jobs</h3>
            </div>
            <div className="headerOption">
              <i className="material-icons headerOption__icon"> chat </i>
              <h3>Messaging</h3>
            </div>
            <div className="headerOption">
              <i className="material-icons headerOption__icon"> notifications </i>
              <h3>Notifications</h3>
            </div>
            <div className="headerOption">
              <i className="material-icons headerOption__icon"> account_circle </i>
              <h3>Me</h3>
            </div>
          </div>
        </div>
        {/* <!-- Header Ends --> */}

        {/* <!-- Main Body Starts --> */}
    <div className="body__main">
      {/* <!-- Sidebar Starts --> */}
      <div className="sidebar">
        <div className="sidebar__top">
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
          <i className="material-icons sidebar__topAvatar"> account_circle </i>
          <h2>Somanath Goudar</h2>
          <h4>somugowda8050@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who Viewed You</p>
            <p className="sidebar__statNumber">2,453</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,650</p>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>reactjs</p>
          </div>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>programming</p>
          </div>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>softwareengineering</p>
          </div>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>design</p>
          </div>
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>developer</p>
          </div>
        </div>
      </div>
      {/* <!-- Sidebar Ends --> */}

      {/* <!-- Feed Starts --> */}
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <i className="material-icons"> create </i>
            <form>
              <input type="text" />
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{color: '#70b5f9'}} className="material-icons"> insert_photo </i>
              <h4>Photo</h4>
            </div>
            <div className="inputOption">
              <i style={{color: '#e7a33e'}} className="material-icons"> subscriptions </i>
              <h4>Video</h4>
            </div>
            <div className="inputOption">
              <i style={{color: '#c0cbcd'}} className="material-icons"> event_note </i>
              <h4>Event</h4>
            </div>
            <div className="inputOption">
              <i style={{color: '#7fc15e'}} className="material-icons"> calendar_view_day </i>
              <h4>Write Article</h4>
            </div>
          </div>
        </div>

        {/* <!-- Post Starts --> */}
        <div className="post">
          <div className="post__header">
            <i className="material-icons sidebar__topAvatar"> account_circle </i>
            <div className="post__info">
              <h2>Somanath Goudar</h2>
              <p>Job Description</p>
            </div>
          </div>

          <div className="post__body">
            <p>Message here</p>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> thumb_up </i>
              <h4>Like</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> comment </i>
              <h4>Comment</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> share </i>
              <h4>Share</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> send </i>
              <h4>Send</h4>
            </div>
          </div>
        </div>
        {/* <!-- Post Ends --> */}

        {/* <!-- Post Starts --> */}
        <div className="post">
          <div className="post__header">
            <i className="material-icons sidebar__topAvatar"> account_circle </i>
            <div className="post__info">
              <h2>Somanath Goudar</h2>
              <p>Job Description</p>
            </div>
          </div>

          <div className="post__body">
            <p>Message here</p>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> thumb_up </i>
              <h4>Like</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> comment </i>
              <h4>Comment</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> share </i>
              <h4>Share</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> send </i>
              <h4>Send</h4>
            </div>
          </div>
        </div>
        {/* <!-- Post Ends --> */}

        {/* <!-- Post Starts --> */}
        <div className="post">
          <div className="post__header">
            <i className="material-icons sidebar__topAvatar"> account_circle </i>
            <div className="post__info">
              <h2>Somanath Goudar</h2>
              <p>Job Description</p>
            </div>
          </div>

          <div className="post__body">
            <p>Message here</p>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> thumb_up </i>
              <h4>Like</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> comment </i>
              <h4>Comment</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> share </i>
              <h4>Share</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> send </i>
              <h4>Send</h4>
            </div>
          </div>
        </div>
        {/* <!-- Post Ends --> */}

        {/* <!-- Post Starts --> */}
        <div className="post">
          <div className="post__header">
            <i className="material-icons sidebar__topAvatar"> account_circle </i>
            <div className="post__info">
              <h2>Somanath Goudar</h2>
              <p>Job Description</p>
            </div>
          </div>

          <div className="post__body">
            <p>Message here</p>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> thumb_up </i>
              <h4>Like</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> comment </i>
              <h4>Comment</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> share </i>
              <h4>Share</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}} className="material-icons"> send </i>
              <h4>Send</h4>
            </div>
          </div>
        </div>
        {/* <!-- Post Ends --> */}

        {/* <!-- Post Starts --> */}
        <div className="post">
          <div className="post__header">
            <i className="material-icons sidebar__topAvatar"> account_circle </i>
            <div className="post__info">
              <h2>Somanath Goudar</h2>
              <p>Job Description</p>
            </div>
          </div>

          <div className="post__body">
            <p>Message here</p>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> thumb_up </i>
              <h4>Like</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> comment </i>
              <h4>Comment</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> share </i>
              <h4>Share</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> send </i>
              <h4>Send</h4>
            </div>
          </div>
        </div>
        {/* <!-- Post Ends --> */}

        {/* <!-- Post Starts --> */}
        <div className="post">
          <div className="post__header">
            <i className="material-icons sidebar__topAvatar"> account_circle </i>
            <div className="post__info">
              <h2>Somanath Goudar</h2>
              <p>Job Description</p>
            </div>
          </div>

          <div className="post__body">
            <p>Message here</p>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> thumb_up </i>
              <h4>Like</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> comment </i>
              <h4>Comment</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> share </i>
              <h4>Share</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> send </i>
              <h4>Send</h4>
            </div>
          </div>
        </div>
        {/* <!-- Post Ends --> */}

        {/* <!-- Post Starts --> */}
        <div className="post">
          <div className="post__header">
            <i className="material-icons sidebar__topAvatar"> account_circle </i>
            <div className="post__info">
              <h2>Somanath Goudar</h2>
              <p>Job Description</p>
            </div>
          </div>

          <div className="post__body">
            <p>Message here</p>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> thumb_up </i>
              <h4>Like</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> comment </i>
              <h4>Comment</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> share </i>
              <h4>Share</h4>
            </div>
            <div className="inputOption">
              <i style={{color: 'gray'}}className="material-icons"> send </i>
              <h4>Send</h4>
            </div>
          </div>
        </div>
        {/* <!-- Post Ends --> */}
      </div>
      {/* <!-- Feed Ends --> */}

      {/* <!-- Widgets Starts --> */}
      <div className="widgets">
        <div className="widgets__header">
          <h2>LinkedIn Clone</h2>
          <i className="material-icons"> info </i>
        </div>
        <div className="widgets__article">
          <div className="widgets__articleLeft">
            <i className="material-icons"> fiber_manual_record </i>
          </div>
          <div className="widgets__articleRight">
            <h4>Coding LinkedIn Clone</h4>
            <p>Top news - 4500 readers</p>
          </div>
        </div>

        <div className="widgets__article">
          <div className="widgets__articleLeft">
            <i className="material-icons"> fiber_manual_record </i>
          </div>
          <div className="widgets__articleRight">
            <h4>Coding LinkedIn Clone</h4>
            <p>Top news - 4500 readers</p>
          </div>
        </div>

        <div className="widgets__article">
          <div className="widgets__articleLeft">
            <i className="material-icons"> fiber_manual_record </i>
          </div>
          <div className="widgets__articleRight">
            <h4>Coding LinkedIn Clone</h4>
            <p>Top news - 4500 readers</p>
          </div>
        </div>
      </div>

      {/* <!-- Widgets Ends --> */}
    </div>
    {/* <!-- Main Body Ends --> */}
   </div>
  )
}
