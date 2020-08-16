import React from 'react';

const CommentDetails = (props) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img src={props.avatar} />
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">
                    {props.commentText}
                </div>
            </div>
        </div>
    );
};

export default CommentDetails;