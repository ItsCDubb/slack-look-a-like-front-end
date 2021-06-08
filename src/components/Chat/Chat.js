import React, { useEffect, useRef } from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { selectChannelID } from "../../features/appSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ChatInput from "../../components/ChatInput/ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Message from "../../components/Message/Message";
import { db } from "../../firebase";

function Chat() {
  const chatRef = useRef(null);
  const channelId = useSelector(selectChannelID);
  const [channelDetails] = useDocument(
    channelId && db.collection("channels").doc(channelId)
  );

  const [channelMessages, loading] = useCollection(
    channelId &&
      db
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [channelId, loading]);

  return (
    <ChatContainer>
      {channelDetails && channelMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{channelDetails?.data().name}</strong>
              </h4>
              <StarBorderIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {channelMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelName={channelDetails?.data().name}
            channelId={channelId}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid lightgrey;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    margin-right: 10px;
    text-transform: lowercase;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    font-size: 14px;
    align-items: center;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
