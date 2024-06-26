# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

CREDITS
money Sound Effect by u_byub5wd934 from Pixabay
Sound Effect Start from Pixabay
soft Sound Effect by floraphonic Pixabay

NEXT FEATURES:
-register/login
-manage games in django (only the admin can create new games)
-join games in front-end
-AI driven players

FOR BETTER SECURITY (from descope)
Secure the secret key: Make sure that you keep the secret key used to sign the JWT confidential to prevent unauthorized access. For added security, it’s best to use a key management system or store the key in a secure environment variable.

Use HTTPS: To protect JWTs from being intercepted during transmission, always use HTTPS for communication between the client and server.

Use appropriate algorithms: To protect your web application, make sure that you choose a suitable signing algorithm for your JWTs. Asymmetric algorithms (like RSA or ECDSA) are generally considered the best, as they use a public/private key pair, making it difficult for an attacker to forge tokens.

Handle token revocation: You should always assign a short expiration time for JWTs to minimize the risk of token theft or misuse. Many libraries will implement a mechanism for token revocation to address situations where a user's access must be immediately revoked, such as account deletion or security breaches.
