Typescript Basics

This is a simple introduction to TypeScript. It is not meant to be a complete reference, but rather a quick introduction to the language.

## Installation

To install TypeScript, you need to install Node.js. Once you have Node.js installed, you can install TypeScript using npm:

```bash
npm install -g typescript
```

## Compiling TypeScript

To compile a TypeScript file, you need to run the `tsc` command. The `tsc` command takes the name of the TypeScript file as an argument, and outputs a JavaScript file with the same name in the same directory.

```bash
tsc hello.ts
```

## Running TypeScript

To run a TypeScript file, you need to run the `node` command, passing the name of the JavaScript file as an argument.

```bash
node hello.js
```

## TypeScript Playground

You can also use the [TypeScript Playground](https://www.typescriptlang.org/play/) to try out TypeScript without installing anything.

## TypeScript Basics

### Types

TypeScript is a typed language. This means that every variable has a type, and you can only assign values of that type to the variable. For example, the following code will not compile:

```typescript
let message = "hello world";
message = 1234;
```

The compiler will give you an error:

```bash
error TS2322: Type '1234' is not assignable to type 'string'.
```

TypeScript has two types of types: primitive types and object types.

#### Primitive Types

Primitive types are the basic types in TypeScript. There are six primitive types in TypeScript:

- `number` - for both integers and floating point numbers
- 