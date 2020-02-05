import React, { Component } from 'react'; 
import './Comment.css'
class Comment extends Component {
    state = {  }
    render() { 
        const whiteCount = 10
        const goldCount = 4
        const comments = [
            'Salman: There was a guy who needed help here ',
            'Sami: I saw a guy who is sick and could use some help ',
            'Ahmed: If you are near this guy please help him ',
            'Maha: A guy was here 5 min ago he was sad please help him if you can ',]
        return ( 
            <div className="cmnts-container" >
                <div className="count-div"> 
                {/* onScroll={} */}
                    <h4 className="wcount">White: {whiteCount}</h4>
                    <h4 className="gcount">Gold: {goldCount}</h4>
                </div>
                <div className="comnts" >
                    {comments.map(comment=>(<div className="coments-component">{comment}<hr/></div>))}
                </div>
            </div>
         );
    }
}
 
export default Comment;