import React from "react";
import faker from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const commentLoop = (num) => {
    let commentAr = [];
    for(let i = 0; i <= num; i++){
        commentAr.push(
            (
                <ApprovalCard key={i}>
                    <CommentDetail 
                        ranImage={faker.image.avatar()} 
                        name={faker.name.firstName()} 
                        ranTime={faker.time.recent("abbr")} 
                        ranSentence={faker.lorem.lines(2)}
                    />
                </ApprovalCard>
            )
        )
    }
    return commentAr
}


const FakeComment = ({numberOfComments})=> {

   
    return (
        <div>
            {commentLoop(numberOfComments)}
        </div>
    );
};

export default FakeComment;