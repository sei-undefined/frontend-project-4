import React, { Component } from 'react'; 
import './Comment.css'
class Comment extends Component {
    state = {  }
    render() { 
        const whiteCount = 10
        const goldCount = 4
        const comments = [
            'user1:comment1 ',
            'user2:comment2 ',
            'user3:comment3 ',
            'user4:comment4 ',]
        return ( 
            <div className="cmnts-container" >
                <div className="count-div"> 
                {/* onScroll={} */}
                    <h4 className="count">White: {whiteCount}</h4>
                    <h4 className="count">Gold : {goldCount}</h4>
                </div>
                <div className="comnts" >
                    {comments.map(comment=>(<div className="coments-component">{comment}<hr/></div>))}
                </div>
            </div>
         );
    }
}
 
export default Comment;