import { View, Text } from "react-native";
import React from "react";
import PostHeader from "../Post/PostHeader";
import PostMiddle from "../Post/PostMiddle";
import CommentFotter from "../Post/CommentFotter";
import Comments from "../Post/Comments";
const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <PostHeader post={post} />
      <PostMiddle post={post} />
      <CommentFotter post={post} />
      <Comments post={post} />
    </View>
  );
};

export default Post;
