module.exports = {
  // "root": true,
  // env: {
  //   browser: true,
  //   es2021: true,
  // },
  // extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  // overrides: [
  //   {
  //     files: ["*.ts"],
  //     extends: [
  //       'plugin:prettier/recommended'
  //     ],
  //   },
  //   // NOTE: WE ARE NOT APPLYING PRETTIER IN THIS OVERRIDE, ONLY @ANGULAR-ESLINT/TEMPLATE
  //   {
  //     "files": ["*.html"],
  //     "extends": ["plugin:@angular-eslint/template/recommended"],
  //     "rules": {}
  //   },
  //   // NOTE: WE ARE NOT APPLYING @ANGULAR-ESLINT/TEMPLATE IN THIS OVERRIDE, ONLY PRETTIER
  //   {
  //     "files": ["*.html"],
  //     "excludedFiles": ["*inline-template-*.component.html"],
  //     "extends": ["plugin:prettier/recommended"],
  //     "rules": {
  //       // NOTE: WE ARE OVERRIDING THE DEFAULT CONFIG TO ALWAYS SET THE PARSER TO ANGULAR (SEE BELOW)
  //       "prettier/prettier": ["error", { "parser": "angular" }]
  //     }
  //   }
  // ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ['prettier','html'],
  rules: {
    'prettier/prettier': 'error',
  },
};