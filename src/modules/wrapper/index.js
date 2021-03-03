import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Header from './components/Header';
import styles from './index.module.scss';

// const corsOptions = {
//     origin: "http://localhost:1729",
//     credentials: true
// };

const httpLink = new HttpLink({
    uri: 'https://eoroe-staging.hasura.app/v1/graphql'
});

const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    // const token = localStorage.getItem('auth_token');

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            // authorization: token ? `Bearer ${token}` : ''
            authorization: 'iron man',
            'X-Hasura-Admin-Secret': 'messi'
        }
    });

    // Call the next link in the middleware chain.
    return forward(operation);
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink), // Chain it with the HttpLink
    cache: new InMemoryCache()
});

// const client = new ApolloClient({
//     uri: 'https://eoroe-staging.hasura.app/v1/graphql',
//     // X-Hasura-Admin-Secret : messi
//     // uri: "http://localhost:4000/graphql",
//     // uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql',
//     // cors: corsOptions,
// });

function Wrapper({ children, isMobile, block, scrollRef, dispatch }) {
    return (
        <ApolloProvider client={client}>
            <div className={cx(styles.wrapper, { [styles.mobile]: isMobile })}>
                <Header
                    isMobile={isMobile}
                    block={block}
                    scrollRef={scrollRef}
                    dispatch={dispatch}
                />
                <div className={styles.content}>{children}</div>
            </div>
        </ApolloProvider>
    )
}

const mapStateToProps = ({
    home: {
        block,
        scrollRef,
        isMobile,
    },
}) => {
    return {
        block,
        scrollRef,
        isMobile,
    };
}

export default connect(mapStateToProps, undefined)(Wrapper);