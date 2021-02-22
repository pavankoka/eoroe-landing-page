import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { getPostsApi } from 'apis';

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

function test(data) {
    console.log(data);
}

function Index({ dispatch, posts }) {

    useEffect(() => {
        getPostsApi({ dispatch });
    }, [])
    return null
    // return <GetPostsApi dispatch={dispatch} />
    // return (
    //     <Query query={GET_POSTS}>
    //         {
    //             ({ loading, error, data }) => {
    //                 if (loading) {
    //                     dispatch(getPosts());
    //                     return <p>loading ...</p>
    //                 }

    //                 if (error) {
    //                     debugger
    //                     return <p>error</p>
    //                 }
    //                 dispatch(getPostsSuccess(data));
    //                 test(data)
    //                 return null

    //                 return (
    //                     data.posts.map(post => (
    //                         <div key={post.id}>
    //                             <p>{post.author}</p>
    //                             <p>{post.body}</p>
    //                         </div>
    //                     ))
    //                 )
    //             }
    //         }
    //     </Query>
    // )
}

const mapStateToProps = ({
    posts
}) => {
    return {
        ...posts
    };
}

export default connect(mapStateToProps, undefined)(Index);