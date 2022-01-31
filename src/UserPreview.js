import React from "react";


const UserPreview = ({ avatar , firstName , lastName , age , person, location, handleSelectingPerson }) => {
    return (
        <div onClick={() => {handleSelectingPerson(person)}} className="comment">
            <div className="avatar" style={{}}>
                <img alt="avatar" src={avatar} />
            </div>
            <div className="content">
                <div className="author">
                    {`${firstName} ${lastName}`}
                </div>
                <div className="metadata">
                    <span className="location">
                        {`${location.city} | ${location.state}`}
                    </span>
                </div>
                
            </div>
        </div>
    );
};


export default UserPreview;