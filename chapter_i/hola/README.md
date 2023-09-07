# First steps with TypeScript

## Install TypeScript

```
npm install -g typescript
```

## Create project

```
mkdir hola
cd hola
```

## Initialize project

```
tsc --init
```

## About tsconfig.json

- Target of version of JavaScript that the project of TypeScript is transpiled.

```
"target": "es2021"
```

- Specify the root folder within your source files.

```
"rootDir": "./src"
```

- Specify an output folder for all emitted files.

```
"outDir": "./dist"
```

- Disable emitting comments.

```
"removeComments": true
```

- Disable emitting files if any type checking errors are reported.

```
"noEmitOnError": false
```

- Create source map files for emitted JavaScript files for debug for example in Visual Studio Code.

```
"sourceMap": true
```

- Enable error reporting for expressions and declarations with an implied 'any' type.

```
"noImplicitAny": true
```

## Create src folder and index.ts

```
mkdir src
touch src/index.ts
```

## Fastify

```
pnpm add fastify
pnpm add -D typescript @types/node ts-node
```

### Add following code to your index.ts file

```
import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
```

## nodemon

```
pnpm add -D nodemon
```

- Add in package.json

```
"scripts": {
		"dev": "nodemon src/index.ts",
    "build": "tsc --build",
    "clean": "tsc --build --clean",
	  },
```

## Visual Studio Code

In Run and Debug icon create launch.json and add after of "program" option for debug

```
"program": "${workspaceFolder}/src/index.ts",
"preLaunchTask": "tsc: build - tsconfig.json",
"outFiles": ["${workspaceFolder}/**/*.js"]
```

## Formater

Prettier

```
pnpm add --save-dev --save-exact prettier
```

- Format

```
pnpm exec prettier . --write
```

- Create configuration file

```
echo {}> .prettierrc.json
```

- Add configuration

```
{
    "singleQuote": true,
    "trailingComma": "none",
    "semi": false
}
```
- Add in package.json
```
"scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc --build",
    "clean": "tsc --build --clean",
    "format": "prettier --write \"src/**/*.ts\""
  },
```
- Install Prettier extension to Visual Studio Code

## Linter
ESLint
```
pnpm add --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```
- Create configuration file
```
touch .eslintrc.cjs
```
- Add configuration
```
module.exports = {
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },    
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
  };
```
- Add in package.json
```
"scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc --build",
    "clean": "tsc --build --clean",
    "format": "prettier --write \"src/**/*.ts\"",
    "lint": "eslint \"src/**/*.ts\" --fix"
  },
```
- Install ESLint extension to Visual Studio Code

