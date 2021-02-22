import gql from 'graphql-tag';

import { client } from 'modules/wrapper'
import postActions from 'redux/actions/posts';

const {
    getPosts,
    getPostsSuccess
} = postActions;

export const GET_POSTS = gql`
  query GetPosts {
    Post {
      id
    }
  }
`;

export const getPostsApi = async ({ dispatch }) => {
    dispatch(getPosts());
    const data = await client.query({ query: GET_POSTS });
    dispatch(getPostsSuccess(data));
}