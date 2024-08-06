# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  Originally it was called node package manager. It's a site with a registry of packages that are typically accessed via npm's CLI commands. These packages are open-source and shared from around the world and do pretty much anything.
- What is a package?
  A bit of code uploaded to npm.
- What are some other popular package managers?
  Yarn and PNPM
- How can you create a `package.json` with `npm`?
  npm init -y
- What is a dependency and how do you add one to a package?
  A dependency is a package required to operator a package. To add one, use the command npm install [package] --save-prod
- What happens when you add a dependency to a package with `npm`?
  You cannot run the code without also having access to the dependency
- What is a devDependency and how do you add one to a package?
  A package required for development. To add one, use the command npm install [package] --save-dev
- How do you define and run `npm` scripts? Why are these useful?
  To define a script in npm, create a "scripts" object with a key of the function's name and a value (a string) of the cli script you want to run. These are useful for "building, testing, and destroying" applications, and by putting them in your package.json file, other devs will know where to look for them.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
