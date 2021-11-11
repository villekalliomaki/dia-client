# DIA client (work in progress)
A frontend client created for DIA backend. Svelte with TypeScript. Communication with backend by apollo client over websockets. GraphQL Code Generator generates typed grapgql queries, types and inputs.

### Usage
For local development
```
npm run dev
```
Building static release
```
npm run build
```
Run tests (eventually requires a fresh backend instance to run)
```
npm run test
```
Generate GraphQL types for the scheme and client side queries.
```
npm run gen
```
