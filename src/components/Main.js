import styled from 'styled-components';
import React from 'react'

const Main = () => {
    return (
        <Container>
            <ShareBox>
                Share
            
                <div>
                    <img src='../../images/user.svg' alt=''  />
                    <button> Start a post </button>
                </div>

                <div>
                    <button>
                        <img src='../../images/photo-icon.jpg' alt=''  /> 
                        <span> Photo </span>
                    </button>

                    <button>
                        <img src='../../images/video-icon.jpg' alt=''  /> 
                        <span> Video </span>
                    </button>

                    <button>
                        <img src='../../images/event-icon.png' alt=''  /> 
                        <span> Events </span>
                    </button>

                    <button>
                        <img src='../../images/article-icon.png' alt=''  /> 
                        <span> Write article </span>
                    </button>
                </div>
            </ShareBox>
        </Container>
    )
};

const Container = styled.div`
    grid-area: main;
`;

const CommonCart = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCart)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    background: white;
    & :nth-child(1) {
        display: flex;
        flex-direction: column;
        button {
            display: flex;
            flex-direction: column;
            outline: none;
            color: rgba(0,0,0,0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            

            img {
            height: 25px;
            width: 25px;
            }
        }
    }
`;

// const SmallIcons = styled.div`
//     display: flex;
//     /* justify-content: space-between; */
//     button > img {
//         height: 25px;
//         width: 25px;
//     }
// `;



export default Main
