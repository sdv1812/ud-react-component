import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalBox from './ApprovalBox';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalBox>
                <CommentDetails
                    avatar={faker.image.avatar()}
                    author="Sanskar"
                    timeAgo="Today at 12:00 PM"
                    commentText="Bahute badhiya blog likhe ho"
                />
            </ApprovalBox>
            <ApprovalBox>
                <CommentDetails
                    avatar={faker.image.avatar()}
                    author="Srishtu"
                    timeAgo="Today at 03:00 AM"
                    commentText="Mujhe neend aa gayi finally"
                />
            </ApprovalBox>
            <ApprovalBox>
                <CommentDetails
                    avatar={faker.image.avatar()}
                    author="Lallu"
                    timeAgo="Today at 01:00 PM"
                    commentText="Fish bahut achi bani hai"
                />
            </ApprovalBox>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)