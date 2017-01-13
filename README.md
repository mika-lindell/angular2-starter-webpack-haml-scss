# Angular 2 starter with webpack, haml & scss

Requires NodeJS & npm.

The dev environment works but building the app doesn't (only if using html&css) — I'm thinking it might be because of the angular 2 loader, which gets assets from components.

To install:
```
– npm install
```

Run with:
```
– npm start
```

Build with:
```
– npm run build
```
*config/webpack.prod.js:*
When building remember to set *publicPath* (cdn) as the path or url containing your assets e.g scripts, images & css.

Test with:
```
– npm test
```