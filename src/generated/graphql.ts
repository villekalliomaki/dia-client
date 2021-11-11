import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: any;
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  /** For general testing examples. */
  add: Scalars['Int'];
  /** Decode a signed JWT. Only if the token is usable and valid the claims are returned. */
  decodeJwt: JwtClaims;
  /**
   * Check if the server would accept the token.
   * Note that the token might expire right after validating it here.
   */
  isJwtValid: Scalars['Boolean'];
  /** The public key can be used to validate signed and issued JSON web tokens. */
  jwtPublicKey: Scalars['String'];
  /** Ping the GQL server. */
  ping: Scalars['String'];
  /** Get a single non expired refresh token from a string. */
  refreshTokenFromTokenString: RefreshToken;
  /** Get all user's refresh tokens. If valid is `true`, returns only usable tokens. */
  refreshTokens: Array<RefreshToken>;
  /** `true` if the creation of new users is enabled. */
  registerationsAllowed: Scalars['Boolean'];
  /** Get the user with the correct credentials. Rate limited to 10 tried per hour. */
  user: User;
};


export type QueryAddArgs = {
  a: Scalars['Int'];
  b: Scalars['Int'];
};


export type QueryDecodeJwtArgs = {
  jwt: Scalars['String'];
};


export type QueryIsJwtValidArgs = {
  token: Scalars['String'];
};


export type QueryRefreshTokenFromTokenStringArgs = {
  tokenString: Scalars['String'];
};


export type QueryRefreshTokensArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  valid?: Scalars['Boolean'];
};


export type QueryUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/**
 * JWT token claims that are encoded and decoded.
 * `User` could just be `Uuid`, if the other fields are not needed.
 */
export type JwtClaims = {
  __typename?: 'JwtClaims';
  /** The exporation time in seconds since the Epoch. */
  exp: Scalars['Int'];
  /** The time of issuing the token in seconds since the Epoch. */
  iat: Scalars['Int'];
  parentToken: Scalars['UUID'];
  user: User;
};

export type User = {
  __typename?: 'User';
  created: Scalars['DateTime'];
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  groups: Array<Scalars['String']>;
  id: Scalars['UUID'];
  modified: Scalars['DateTime'];
  username: Scalars['String'];
};

/** A refresh token is used to generate new JWTs. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  /** The client's address from headers or the socket. */
  clientAddress: Scalars['String'];
  created: Scalars['DateTime'];
  expires: Scalars['DateTime'];
  /** Identifier used to identify a refresh token without exposing the token string. */
  id: Scalars['UUID'];
  /** Maximum valid lifetime for signed JWTs. */
  maxJwtLifetime: Scalars['Int'];
  modified: Scalars['DateTime'];
  /**
   * Identifies the token when generating new JWTs.
   * Might be hidden in some queries.
   */
  tokenString: Scalars['String'];
  userId: Scalars['UUID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRefreshToken: RefreshToken;
  /** Create a new user if registerations are allowed. Rate limited to 5 tries per hour. */
  createUser: User;
  /**
   * Generate a new JWT from a token string.
   * Lifetime must be equal or lower as the tokens maximum JWT lifetime.
   */
  signJwt: Scalars['String'];
};


export type MutationCreateRefreshTokenArgs = {
  newToken: NewRefreshToken;
};


export type MutationCreateUserArgs = {
  newUser: NewUser;
};


export type MutationSignJwtArgs = {
  lifetime?: Scalars['Int'];
  refreshTokenString: Scalars['String'];
};

/** User credentials and lifetime for a new refresh token. */
export type NewRefreshToken = {
  /**
   * The timespan from now the token is valid for in seconds.
   * Defaults to 1 week.
   * Between a minute and a month.
   */
  expiresInSeconds?: Scalars['Int'];
  /**
   * The maximum allowed lifetime for JWTs generated with this token in seconds.
   * Between 10 seconds and an hour (3600 seconds).
   */
  maxJwtLifetime?: Scalars['Int'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** A new user with an optional email address. */
export type NewUser = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Test subscriptions. */
  countTo10: Scalars['Int'];
};

export type SimplePingQueryVariables = Exact<{ [key: string]: never; }>;


export type SimplePingQuery = { __typename?: 'Query', ping: string };


export const SimplePing = gql`
    query SimplePing {
  ping
}
    `;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    