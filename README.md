# What is this?
A sample website to showcase some basic web development knowledge.

# Sample
![RippeyEats Sample](https://user-images.githubusercontent.com/430608/91997404-4a8c3000-ecf7-11ea-8068-d63ab8f34a84.gif)



# Tech Stack
- React
- TypeScript
- TailwindCSS
- Parcel Bundler

# Development

- **Setup:** Checkout, run `npm install`
- **Development**: Run `npm run dev`
- **Deploy** Run `npm run build`, commit the `docs` folder.  Once merged to `master`, it will be available at https://scottrippey.github.io/sample-RippeyEats



# Some reflection about this project

## Thoughts on "The Stack"
I loved this stack!

**React**, as expected, is awesome ... the code quality is great, I feel like components are easy to reason about, and the code I wrote is modular and could be reused or refactored easily.

**TypeScript** didn't get in my way, but I really didn't use it much in my UI code.  Since there wasn't a lot of non-UI in this project, TS played a small role.

**Parcel** was awesome to work with -- it seriously just worked!  Having come from a long WebPack background, it was refreshing that _almost everything_ **worked out of the box**! I added a few plugins _by simply installing them_!  Literally no Parcel configuration needed.  And it was fast, and automatically refreshed the page.  Wonderful!

**TailwindCSS** was probably the **most interesting** part of this project, and was the only thing that had some cons.  I'll talk more about that next:


## TailwindCSS
Having recently worked with TailwindCSS in other projects, I'm glad to have used it on this fresh project!  
Overall, I loved it, and would probably choose it again.  But it has certain flaws, which I'd like to discuss here too.  

#### Just Utilities, not a framework
- ✅ Tailwind has no preconfigured styles.  It's "vanilla" CSS.  I added my own `theme` configuration, chose the fonts, colors, and units of measurement.  This is perfect for "pixel perfect" development.  
  Tailwind does have some optional "framework" plugins, which would be great for rapid prototyping or custom projects, but since I'm usually going for "pixel perfect" designs, Tailwind was perfect.  It gave me total control.  
- ⚠️ Tailwind has a LOT of configuration options, which is good, but I did find myself struggling with the defaults.  All sizing is done, by default, in `rem` units; I was hoping to easily switch to `px` instead, but it took a lot of config to get to that point.
  I ended up "generating" my own config values, like this:
  ```javascript
  // tailwind.config.js
  module.exports = {
    // Use px instead of rem:
    fontSize: generateSizes(range(10, 40, 2), 'px'),
    lineHeight: generateSizes(range(2, 60, 2), 'px'),
    spacing: generateSizes(range(-10, 100, 5), 'px'),
  }
  function generateSizes(values, unit) {...}
  function range(start, end, skip) {...}
  ```
  This handles things like `padding` and `line-height`, and I ended up using inline styles for `height` and `width`.
  Generating all those classes (for the dev build) initially takes pretty long (like 8s), but Parcel does an excellent job caching, so all other changes, including CSS, are near-instant. 


#### CSS-in-JS

- ✅ I **love** having my CSS right there with my HTML.  They go together!  CSS-in-JS was a great part of the development process; fast, efficient, same file, closely coupled (a good thing!).  
- ✅ The thing I really loved about Tailwind, over something like `styled-components` or `css-modules`, is the fact that CSS can be expressed so tersely.  **Basically, it's just a super-abbreviated CSS syntax**.  For example, here's an HTML element AND all the CSS defined in just 1 line of code:
    ```html
    <nav className="bg-blue-light px-20 lg:px-40 justify-between leading-52 flex items-center"> ... </nav>
    ```  
  The CSS is "collapsed" into this one little line, so it doesn't really break the flow of the document. 
- ⚠️ However, that's probably the **biggest problem** too.  
  **Reading** those classes, you can probably guess what they do, and it makes sense.  
  But **writing** those classes -- it was hard!  I often knew the CSS I wanted to write, but had to use the docs to look up each class pattern.  Even with an IDE plugin installed, it was really hard to get the class names right.  And the worst part, if they're wrong, or misspelled, or a value that's out-of-range, it silently fails.  
- ⚠️ The Tailwind docs are very good, but the docs are so COMPLETE that it takes a while to find the right page.  I wish they had an official 1-page cheat-sheet, so I could just search for the CSS I needed, and find the class pattern.

#### Pseudo classes, responsive classes
- ✅ Pseudo selectors, like `:hover` or `:first-child`, can't be implemented by inline styles.  So that's a huge advantage of Tailwind; the `hover:bg-blue` class can be added inline!
- ✅ Responsive design was REALLY easy, with classes like `lg:hidden`!  Tailwind, by default, uses `min-width` breakpoints, which encourages "mobile-first" design.

#### Tiny size
- ✅ Tailwind CSS is designed to be compiled, and makes it SUPER easy to add PurgeCSS to the build.  So this means, with very little effort, my ENTIRE CSS bundle is tiny at 20kb (15kb of `normalize.css`).
  I even added a huge selection of size configurations, which bloated the dev bundle size, but was purged from the final build!

#### Semantics
- ⚠️ The second biggest problem I had with TailwindCSS: some of my code suffered from poor semantics.  
  For example, several elements required padding of 20px, and sometimes they'd have a negative margin of equal value.  
  Normally, I'd love to define a variable like `@pad-x: 20px`, and then use the variable to write understandable semantic code:
  ```less
  @space-between-elements: 20px;
  div {
      padding: 0 @{space-between-elements};
      margin: 0 -@{space-between-elements * 2};
      height: 20px; /* (value is unrelated to @space-between-elements) */ 
  }
  ```   
  However, with Tailwind, I ended up with just "magic numbers" in my classes, like:
  ```jsx
  <div classNames="px-20 -mx-40 h-20"> ... </div>
  ```
  This is shorter, obviously, but if I want to change the space between elements, I have to do a lot of work to figure out where and how it was being used.  I might accidentally change `h-20`, or I might forget to change `-mx-40`.  
  I considered a JavaScript variable for these values, but that breaks the PurgeCSS requirement of no class interpolation, so I went with the magic-numbers approach. 
  I'm bummed, though, because CSS is hard enough, and I really love using variables to improve the semantics.  This might even be a deal-breaker for me in the future, when working on much-more-complex UIs.

## Conclusion
Like I said earlier, I'd be happy to use TailwindCSS on another project!  But considering the few problems, I'd be eager to try `styled-components` or `css-modules` next, so I could compare the differences.  
