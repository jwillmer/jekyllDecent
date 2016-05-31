# jekyllDecent
[![Build Status](https://travis-ci.org/jwillmer/jekyllDecent.svg?branch=gh-pages)](https://travis-ci.org/jwillmer/jekyllDecent)

This is a blog template for a static site generator named [Jekyll](https://jekyllrb.com/docs/home/) based on a [Ghost](https://ghost.org) template named [Decent](https://github.com/serenader2014/decent). 

**Demo**: [GitHub generated site](http://jwillmer.github.io/jekyllDecent)


## Content

- [Screenshots](#screenshots)
    - [Home page](#home)
    - [Post page](#post)
- [Installation](#installation)
    - [Windows specific](#windows-specific)
    - [Build](#build)
- [User Content](#user-content)
- [Features](#features)
    - [Image Features](#image-features)
        - [Parallax Effect](#parallax-effect)
        - [Caption for Image](#caption-for-image)
        - [Image Allignment](#image-allignment)
        - [Fullscreen image](#fullscreen-image)
        - [Image Gallery](#image-gallery)
    - [Sourcecode Features](#sourcecode-features)
    - [Author in quote](#author-in-quote)
    - [PDF and PowerPoint integration](#pdf-and-powerpoint-integration)
- [License](#license)

## Screenshots

### Home
![](./assets/preview/win10_ie_11.0_home.jpg)

### Post
![](./assets/preview/win10_ie_11.0_page.jpg)

## Installation

- To generate/host the blog you need to [install Jekyll](https://jekyllrb.com/docs/installation/). A detailed installation guide can also be found on the Jekyll site. 

### Windows specific

  - Install [chocolatey](https://chocolatey.org/) a package manager 
  - Use the command promt to install ruby: `choco install ruby -y` 
  - Use the command prompt to install jekyll: `gem install jekyll`
  - If you have exceptions while starting the blog with `jekyll serve` try to remove `Gemfile` and remove all `gems:` from the `_config.yml` 
    - A post how to install github pages-gem is following!
  
### Build

- To build the static site you can use the generated site folder that Jekyll creates when you use `jekyll serve` or you can build it explicitly with `jekyll build`.
- If you like to use GitHub to host your blog you can fork this project and publish the code to `gh-pages`. GitHub has jekyll included and will generate the site for you.


## User Content

Blogposts can be written in [Markdown](https://de.wikipedia.org/wiki/Markdown). 

- The folder for blog content is `_posts`
- For author details you need to modify ´_data/authors.yml`
- For site properties (like the name) you need to modify `_config.yml`
- For the about page you need to modify the `about.md` in `_pages`

After modifying `*.yml` files you need to restart jekyll to take effect.


## Features

The features described in this section are specific for this template. All other language features can be found in the [kramdown documentation](http://kramdown.gettalong.org/syntax.html). 

### Image Features


#### Parallax Effect

Keep in mind that paralax effect will not be captured if you like to print the page.

```html
<div class="bg-scroll" style="background-image: url('{{ site.github.url }}/media/img/mountain1.jpg')"></div>
```

#### Caption for Image

```html
<figure>
![]({{ site.github.url }}/media/img/chen.jpg)
<figcaption>This is figcaption. A beautiful picture.</figcaption>
</figure>
```

#### Image Allignment

```
![]({{ site.github.url }}/media/img/untitled-9.gif#right)
![]({{ site.github.url }}/media/img/untitled-9.gif#left)
```

Allignment with caption

```html
<figure class="left">
![]({{ site.github.url }}/media/img/chen.jpg)
<figcaption>hello world!</figcaption>
</figure>
```

#### Fullscreen image

```html
<div class="large">
![]({{ site.github.url }}/media/img/DSC01093.JPG)
</div>
```

With caption

```html
<figure class="large">
![]({{ site.github.url }}/media/img/DSC01135-1.jpg)
<figcaption>wow so handsome</figcaption>
</figure>
```

#### Image Gallery

```html
<div class="album">
![]({{ site.github.url }}/media/img/Screenshot_2016-04-09-19-16-28.png)
![]({{ site.github.url }}/media/img/Screenshot_2016-04-02-00-48-25.png)
![]({{ site.github.url }}/media/img/Screenshot_2016-04-01-12-03-36.png)
![]({{ site.github.url }}/media/img/Screenshot_2016-04-01-12-01-33.png)
![]({{ site.github.url }}/media/img/Screenshot_2016-03-24-12-13-58.png)
![]({{ site.github.url }}/media/img/Screenshot_2016-03-17-22-50-05.png)
</div>
```

With caption

```html
<div class="album">
<figure>
![]({{ site.github.url }}/media/img/wiebe.jpg)
<figcaption>wow so handsome</figcaption>
</figure>

<figure>
![]({{ site.github.url }}/media/img/day.jpg)
<figcaption>wow so handsome</figcaption>
</figure>

</div>
```

### Sourcecode Features

With language highlighting

```html
    ```html
    <script>
        var decentThemeConfig = {
            ga: 'YOUR TRACK ID'
        };
    </script>
    ```
```

With language highlighting, line numbers and line highlighting

```javascript
<pre data-line="5" class="line-numbers language-javascript"><code>
Array.prototype.uniq = function () {
    var map = {};
    return this.filter(function (item) {
        if (map[item]) {
            return false;
        } else {
            map[item] = true;
            return true;
        }
    });
};
</code></pre>
```

### Author in quote

```
> Our destiny offers not the cup of despair, but the chalice of opportunity. So let us seize it, not in fear, but in gladness.
> 
> <cite>——R.M. Nixon</cite>
```

### PDF and PowerPoint integration

```html
<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=http://img.labnol.org/di/PowerPoint.ppt' frameborder='0'></iframe>
```

## License

MIT
