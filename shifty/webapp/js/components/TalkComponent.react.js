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
  handleEnter(e){
    if(e.charCode == 13) {
      $('.zeljko .comment-content').text(e.target.value);
      $('.zeljko').slideDown();
      $('textarea').val('');
      $('.total-comments').text('3');
    }
  }

  render() {
    const { dispatch, activeTabState, isLoaderVisible } = this.props
    let activeTab = activeTabState || 'comments';

    return (
      <section className="talk-content">
        <div className="description">
          <p>{this.props.description || 'No description defined...'}</p>
        </div>
        <div className="comments-container">
          <header>
            <div className={`left ${activeTab === 'comments' ? 'active': ''}`} onClick={this.showComments}>
              Comments (<span className="total-comments">2</span>)
            </div>
            <div className={`left ${activeTab === 'qunda' ? 'active': ''}`} onClick={this.showQA}>
              Q &amp; A (0)
            </div>
            <div className="clear"></div>
          </header>
          <div className="post-comment">
              <textarea placeholder="Enter comment..." onKeyPress={this.handleEnter} ></textarea>
          </div>
          {
          activeTab === 'comments' &&            
          <div className="comments">
              <div className="comment zeljko">
                <div className="comment-meta">
                  <div className="author-name">
                    Željko Tadić
                  </div>
                  <div className="comment-time">
                    0 seconds ago
                  </div>
                </div>
                <div className="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem est, efficitur sagittis ultricies nec, auctor id odio. Ut tristique eleifend erat, at cursus metus tristique vel. In hac habitasse platea dictumst. Aliquam venenatis consectetur erat. Aenean viverra erat ac quam consectetur dapibus.
                </div>
              </div>
              <div className="comment">
                <div className="comment-meta">
                  <div className="author-name">
                    Bill M. Gates
                  </div>
                  <div className="comment-time">
                    32 minutes ago
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
                    John Doe
                  </div>
                  <div className="comment-time">
                    5 hours ago
                  </div>
                </div>
                <div className="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem est, efficitur sagittis ultricies nec, auctor id odio. Ut tristique eleifend erat, at cursus metus tristique vel. In hac habitasse platea dictumst. Aliquam venenatis consectetur erat. Aenean viverra erat ac quam consectetur dapibus.
                </div>
              </div>
          </div>
          }
        </div>
        <div className="clear"></div>
        {
          isLoaderVisible &&
          <section class="loader">
            <div class="popup">
               <a href="#" class="close">×</a>
               <div class="inner">
                 <h4>Upload file</h4>
                 <input type="file" />    
               </div>
            </div>
          </section>
        }
      </section>
    )
  }
}

TalkComponent.propTypes = {
  children: PropTypes.element,
  description: PropTypes.string,
}

TalkComponent.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default TalkComponent;

