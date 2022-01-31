import React from "react";


const CommentDetail = ({ ranImage, name , ranTime, ranSentence}) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={ranImage} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {name}
                </a>
                <div className="metadata">
                    <span className="date">
                        {ranTime}
                    </span>
                </div>
                <div className="text">
                    {ranSentence}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;