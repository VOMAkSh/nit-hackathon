import React, { Component } from 'react'
import TeacherDashboardContentArea from '../teacherDashboardContentArea/TeacherDashboardContentArea';

const iconStyle = {
  marginRight: "10px"
}

export default class TeacherDashboardHeader extends Component {
  componentDidMount(){
    window.M.AutoInit();
  }
  render() {
    return (
      <div>
        <nav class="black nav-extended">
          <div class="center-align container nav-wrapper">
            <a href="#" class="brand-logo">VOMAkSh</a>
          </div>
          <div class="container nav-content">
            <ul class="tabs tabs-transparent tabs-fixed-width">
              <li class="tab">
                <a href="#send">
                  <i class="fas fa-share-square" style={iconStyle}></i>
                  <span className="hide-on-med-and-down">Send</span>
                </a>
              </li>
              <li class="tab">
                <a href="#announcements">
                  <i class="fas fa-bullhorn" style={iconStyle}></i>
                  <span className="hide-on-med-and-down">Announcements</span>
                </a>
              </li>
              <li class="tab">
                <a href="#library">
                  <i class="fas fa-book-reader" style={iconStyle}></i>
                  <span className="hide-on-med-and-down">Library</span>
                </a>
              </li>
              <li class="tab">
                <a href="#marketplace">
                  <i class="fas fa-store" style={iconStyle}></i>
                  <span className="hide-on-med-and-down">MarketPlace</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
