### To run the project

`npm run start`

`curl http://localhost:9151/random`

### Steps to set up Typescript:

`npm install --save-dev typescript`

New scripts:
`"build": "tsc",`
`"start": "node dist/index.js"`

now add tsconfig:
```
{
    "compilerOptions": {
      "target": "es2022",
      "module": "nodenext",
      "moduleResolution": "nodenext",
      "rootDir": "./src",
      "outDir": "./dist",
      "inlineSourceMap": true,
      "resolveJsonModule": true,
      "strict": true,
      "skipLibCheck": true,
      "allowJs": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```

### Convert to typescript
`type Pokemon = keyof typeof pokemon;`

as Pokemon[];
name: Pokemon

### Another method for node projects

Running typescript files directly with TS-Node.
Uses JIT compilation

`npm install --save-dev ts-node`

`"start": "node -r ts-node/register src/index.ts"`