# Shader-workshop

## Resources (in Norwegian)

Exercises: https://nilsr.substack.com/p/shaderprogrammering-oppgaver
Cheat sheet and resources: https://nilsr.substack.com/p/shaderprogrammering

## Running the examples

Navigate to the "src" directory and run:

```
npx browser-sync start --server --files "*.html, *.js, *.css, *.frag"
```

Edit the value for `data-fragment-url` in "index.html" to change which fragment shader is loaded.
