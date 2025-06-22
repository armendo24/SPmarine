const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
	root: true,
	extends: [
		require.resolve("@vercel/style-guide/eslint/node"),
		require.resolve("@vercel/style-guide/eslint/typescript"),
		require.resolve("@vercel/style-guide/eslint/browser"),
		require.resolve("@vercel/style-guide/eslint/react"),
		require.resolve("@vercel/style-guide/eslint/next"),
	],
	parserOptions: {
		project,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/no-empty-interface": [
			"warn",
			{
				allowSingleExtends: true,
			},
		],
		"@typescript-eslint/no-shadow": [
			"warn",
			{
				ignoreOnInitialization: true,
			},
		],
		"import/newline-after-import": "warn",
		"react/jsx-uses-react": "off", // Next.js 13+ automatically imports React
		"react/react-in-jsx-scope": "off", // Next.js 13+ automatically imports React
		"unicorn/filename-case": [
			"warn",
			{
				cases: {
					kebabCase: true, // personal style
					pascalCase: true,
				},
			},
		],

		// Deactivated or downgraded for build compatibility
		"@typescript-eslint/dot-notation": "off", // paths are used with a dot notation
		"@typescript-eslint/no-misused-promises": "off", // onClick with async fails
		"@typescript-eslint/no-non-null-assertion": "off", // sometimes compiler is unable to detect
		"@typescript-eslint/no-unnecessary-condition": "off", // remove when no static data is used
		"@typescript-eslint/require-await": "off", // Server Actions require async flag always
		"@typescript-eslint/prefer-nullish-coalescing": "off", // personal style
		"@typescript-eslint/restrict-template-expressions": [
			"warn",
			{
				allowNumber: true,
			},
		],
		"@typescript-eslint/explicit-function-return-type": "off", // Too strict for build
		"@typescript-eslint/consistent-type-imports": "off", // Can be fixed later
		"@typescript-eslint/no-explicit-any": "warn", // Downgrade from error
		"@typescript-eslint/no-unsafe-assignment": "warn", // Downgrade from error
		"@typescript-eslint/no-unsafe-member-access": "warn", // Downgrade from error
		"@typescript-eslint/no-unsafe-return": "warn", // Downgrade from error
		"@typescript-eslint/no-floating-promises": "warn", // Downgrade from error
		"@typescript-eslint/naming-convention": "warn", // Downgrade from error
		"@typescript-eslint/no-confusing-void-expression": "warn", // Downgrade from error
		"@typescript-eslint/no-inferrable-types": "warn", // Downgrade from error
		"@typescript-eslint/no-empty-function": "warn", // Downgrade from error
		"import/no-default-export": "off", // Next.js components must be exported as default
		"import/no-extraneous-dependencies": "off", // conflict with sort-imports plugin
		"import/order": "off", // using custom sort plugin
		"import/no-duplicates": "warn", // Downgrade from error
		"no-nested-ternary": "off", // personal style
		"no-redeclare": "off", // conflict with TypeScript function overloads
		"no-console": "warn", // Allow console for development
		"no-alert": "warn", // Allow alerts for development
		"no-unused-vars": "warn", // Downgrade from error
		"no-undef": "warn", // Downgrade from error
		"eqeqeq": "warn", // Downgrade from error
		"prefer-const": "warn", // Downgrade from error
		"object-shorthand": "warn", // Downgrade from error
		"react/jsx-fragments": "off", // personal style
		"react/prop-types": "off", // TypeScript is used for type checking
		"react/jsx-no-useless-fragment": "warn", // Downgrade from error
		"react/jsx-no-leaked-render": "warn", // Downgrade from error
		"react/no-children-prop": "warn", // Downgrade from error
		"react/jsx-curly-brace-presence": "warn", // Downgrade from error
		"react/jsx-key": "warn", // Downgrade from error
		"react/function-component-definition": "off", // Too strict
		"react/hook-use-state": "warn", // Downgrade from error
		"react-hooks/exhaustive-deps": "warn", // Downgrade from error

		"@next/next/no-img-element": "off", // Temporary disabled
	},
};
