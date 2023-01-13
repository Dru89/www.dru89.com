module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // eslint rule must be disabled, so re-enable it for typescript-eslint
    // https://github.com/typescript-eslint/typescript-eslint/blob/1c1b572c3000d72cfe665b7afbada0ec415e7855/packages/eslint-plugin/docs/rules/no-use-before-define.md
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",

    // note you must disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/blob/a752638f975935882746ee5ef614ca02f120675d/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],

    // It's ok to use a promise in a void context.
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],

    // It's ok to use any if it's for a ...rest argument.
    "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],

    // The AirBNB rule is too restrictive and doesn't allow TSX.
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],

    // TypeScript keeps us from shooting ourselves in the foot here.
    "react/jsx-props-no-spreading": "off",

    // Not necessary in later versions of React.
    "react/react-in-jsx-scope": "off",

    // Maybe I'll fix this one later (but probably not).
    "react/require-default-props": "off",

    // Allow JS, TS, JSX, and TSX files without extensions.
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // I want a bit more separately in my imports
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          "parent",
          ["index", "sibling"],
          "object",
          "unknown",
        ],
        "newlines-between": "always-and-inside-groups",
        pathGroups: [
          {
            pattern: "$/**",
            group: "internal",
          },
        ],
      },
    ],

    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.stories.tsx"] },
    ],

    // TypeScript doesn't like floating promises.
    // This will let us do something like
    // void somePromise();
    "no-void": ["error", { allowAsStatement: true }],

    // I like ++ :\
    "no-plusplus": "off",

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    // adjusted from https://github.com/airbnb/javascript/blob/1eadb93e377da1e56c3f91f26610e5d0a00738a9/packages/eslint-config-airbnb-base/rules/style.js#L337-L357
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
  },
};
