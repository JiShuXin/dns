# modern-npm-package

An npm package for demonstration purposes using TypeScript to build for both the ECMAScript Module format (i.e. ESM or ES Module) and CommonJS Module format (CJS). It can be used in Node.js and browser applications.

## Get Started

1. Run `npm install` in your terminal
2. Then run `npm run build`
3. Update the `package.json` file "name" field with your own package name. Example `@username/package-name`
4. Create an account with [npm](https://www.npmjs.com/signup) if you don't have one already. Also be sure to enable [two-factor authentication](https://docs.npmjs.com/configuring-two-factor-authentication)
5. Sign in to your npm account in your terminal with `npm login`
6. Run `npm publish --access=public` to publish your package

### Testing

1. Install developer dependencies using the following command in your terminal `npm i -D mocha @type/mocha chai @types/chai ts-node`
2. Create a new file `.mocharc.json` in the root directory with the following contents:
   ```json
   {
     "extension": ["ts"],
     "spec": "./**/*.spec.ts",
     "require": "ts-node/register"
   }
   ```
3. Create a `tests` folder
4. Create an `index.spec.ts` file in the `tests` folder
5. Write unit tests in the `index.spec.ts` file to test the code in `index.ts`
6. Add a `"test"` property in the `package.json` file and give it a value of `"mocha"`
7. Run `npm test` in your terminal from the root folder of the project
