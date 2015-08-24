# js-svg-fallback

This is a small js libray to fix the svg-display in MS Internet Explorer.

## Installation

### Via Gihub-CDN: 

Simply add the JS-File to your Page (the CSS-File is added by default)

```html
<script type="text/javascript" src="https://lduer.github.io/js-svg-fallback/src/svg-fallback.js" id="js-fallback-script"></script>
```

or from RawGit:

```html
<script type="text/javascript" src="https://cdn.rawgit.com/lduer/js-svg-fallback/master/src/svg-fallback.js" id="js-fallback-script"></script>
```

> **Note**: If you don't have jQuery enabled, the Script must be added just before the ``</body>``-Tag to work.

You may have noticed the ``id``-attribute: If you don't want to configure the functions inside the ``#js-fallback-script`` is used to identify the JS source-file and load the CSS file with the additions.

### Bower-installation

Add the following lines to your bower-configuration ``bower.json`

```
{
    ...
    "dependencies": {
        ...
        "js-svg-fallback": "https://github.com/lduer/js-svg-fallback.git"
        ...
}


```

### manual Download

Download the whole Repository from [GitHub](https://github.com/lduer/js-svg-fallback/archive/master.zip)


## Configuration

TODO!!