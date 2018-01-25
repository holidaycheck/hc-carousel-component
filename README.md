# About

The simplest use case, a carousel for images.
```
<hc-carousel>
  <img src=1.jpg>
  <img src=2.jpg>
</hc-carousel>
```

The items inside might not just be images, but any arbitrary HTML node.
We try to just play nice, and adhere to the [gold standard].

```
<hc-carousel>
  <div>
    <h2>My images</h2>
    <img src=1.jpg>
  </div>
  <div>
    <h2>My text</h2>
    <p>lots of it here .....</p>
  </div>
  <div>
    <h2>My form, maybe???</h2>
    <form>you get the idea :)</form>
  </div>
</hc-carousel>
```

# Install/setup, via nix

The site can be built and run locally using nix.
1) Make sure to have nix installed (see [nixos.org/nix][nix]) and then 
2) run `nix-shell shell.nix` (or simply `nix-shell`) and you should have the blog 

[nix]: http://nixos.org/nix/
[gold standard]: https://github.com/webcomponents/gold-standard/wiki