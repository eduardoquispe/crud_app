module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended', // Integra Prettier con ESLint
  ],
  plugins: ['react', 'prettier'], // Agrega Prettier como plugin
  rules: {
    'react/react-in-jsx-scope': 'off', // No requiere importar React en JSX
    'prettier/prettier': ['error'], // Reglas de Prettier se aplican como errores
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },
};
