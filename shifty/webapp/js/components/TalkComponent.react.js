import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components

export default class TalkComponent extends Component {
  constructor(props) {
    super(props)
  }

  showComments() {
    console.log('show comments');
  }

  showQA() {
    console.log('show qa');
  }

  render() {
    const { dispatch, activeTabState } = this.props
    let activeTab = activeTabState || 'comments';

    return (
      <section className="talk-content">
        <div className="description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem est, efficitur sagittis ultricies nec, auctor id odio. Ut tristique eleifend erat, at cursus metus tristique vel. In hac habitasse platea dictumst. Aliquam venenatis consectetur erat. Aenean viverra erat ac quam consectetur dapibus.</p><br /><p> Fusce orci tellus, feugiat id arcu at, auctor feugiat ipsum. Pellentesque tempus enim eget tellus pretium, in faucibus magna maximus. In tristique, est vitae rhoncus rhoncus, urna odio cursus libero, vitae scelerisque orci felis non orci. Pellentesque vehicula, ex eget gravida sagittis, justo est tincidunt metus, et congue lorem lectus vel lorem. Aenean varius ultricies sem, sit amet egestas orci ornare et. Aliquam quis lacus vitae nunc feugiat rutrum. Nunc interdum mauris rhoncus, varius leo consequat, lobortis neque.</p>
        </div>
  <div className="comments-container">
    <header>
      <div className={`left ${activeTab === 'comments' ? 'active': ''}`} onClick={this.showComments}>
        Comments (53)
      </div>
      <div className={`left ${activeTab === 'qunda' ? 'active': ''}`} onClick={this.showQA}>
        Q &amp; A (17)
      </div>
      <div className="clear"></div>
    </header>
    <div className="post-comment">
        <textarea placeholder="Enter comment..."></textarea>
    </div>
    <div className="comments">
        <div className="comment">
          <div className="comment-meta">
            <div className="author-name">
              Mario Nikolaus
            </div>
            <div className="comment-time">
              5 seconds ago
            </div>
          </div>
          <div className="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem est, efficitur sagittis ultricies nec, auctor id odio. Ut tristique eleifend erat, at cursus metus tristique vel. In hac habitasse platea dictumst. Aliquam venenatis consectetur erat. Aenean viverra erat ac quam consectetur dapibus.
          </div>
        </div>
        <div className="comment">
          <div className="comment-meta">
            <div className="author-image">
              
            </div>
            <div className="author-name">
              Mario Nikolaus
            </div>
            <div className="comment-time">
              5 seconds ago
            </div>
          </div>
          <div className="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem est, efficitur sagittis ultricies nec, auctor id odio. Ut tristique eleifend erat, at cursus metus tristique vel. In hac habitasse platea dictumst. Aliquam venenatis consectetur erat. Aenean viverra erat ac quam consectetur dapibus.
          </div>
        </div>
        <div className="comment">
          <div className="comment-meta">
            <div className="author-image">
              
            </div>
            <div className="author-name">
              Mario Nikolaus
            </div>
            <div className="comment-time">
              5 seconds ago
            </div>
          </div>
          <div className="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem est, efficitur sagittis ultricies nec, auctor id odio. Ut tristique eleifend erat, at cursus metus tristique vel. In hac habitasse platea dictumst. Aliquam venenatis consectetur erat. Aenean viverra erat ac quam consectetur dapibus.
          </div>
        </div>
        <div className="comment">
          <div className="comment-meta">
            <div className="author-image">
              
            </div>
            <div className="author-name">
              Mario Nikolaus
            </div>
            <div className="comment-time">
              5 seconds ago
            </div>
          </div>
          <div className="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem est, efficitur sagittis ultricies nec, auctor id odio. Ut tristique eleifend erat, at cursus metus tristique vel. In hac habitasse platea dictumst. Aliquam venenatis consectetur erat. Aenean viverra erat ac quam consectetur dapibus.
          </div>
        </div>
        <div className="comment">
          <div className="comment-meta">
            <div className="author-image">
              
            </div>
            <div className="author-name">
              Mario Nikolaus
            </div>
            <div className="comment-time">
              5 seconds ago
            </div>
          </div>
          <div className="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem est, efficitur sagittis ultricies nec, auctor id odio. Ut tristique eleifend erat, at cursus metus tristique vel. In hac habitasse platea dictumst. Aliquam venenatis consectetur erat. Aenean viverra erat ac quam consectetur dapibus.
          </div>  
        </div>
    </div>
  </div>
        <div className="clear"></div>
      </section>
    )
  }
}

TalkComponent.propTypes = {
  children: PropTypes.element,
}

TalkComponent.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default TalkComponent;

