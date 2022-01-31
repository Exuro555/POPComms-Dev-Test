import React from "react";


const UserPreview = ({ avatar , firstName , lastName , age , person, handleSelectingPerson }) => {
    return (
        <div onClick={() => {handleSelectingPerson(person)}} className="comment">
            <div className="avatar">
                <img alt="avatar" src={avatar} />
            </div>
            <div className="content">
                <div className="author">
                    {`${firstName} ${lastName}`}
                </div>
                <div className="metadata">
                    <span className="age">
                        {`Age: ${age}`}
                    </span>
                </div>
                
            </div>
        </div>
    );
};

export default UserPreview;