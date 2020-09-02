# What is this?
A sample website to showcase some basic web development knowledge.

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

## Tailwind CSS
Having recently worked with TailwindCSS in other projects, I'm glad to have used it for a fresh project.  
In some aspects, I loved it.  But it has certain flaws, which I'd like to discuss here.  

### Pros:
- Inline styles, terse
- Pseudo classes
- Responsive classes
- Tiny size
- Easy to setup with Parcel, good docs

### Cons:
- Constant need for docs; needs a cheat sheet
- Semantics ... eg. reusing 40px in several places
- Incomplete; eg. height/width values; I could generate them all, but these values get large
- Configuration: I had to configure all sizings to `px` since the default is `rem`
