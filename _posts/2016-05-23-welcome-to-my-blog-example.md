---
layout: post
title:  "Example Blog Page"
date:   2016-05-23 00:40:31 +0200
tags: jekyll update
category: Example
author: jwillmer
cover: /assets/mountain.jpg
published: true
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.


> Our destiny offers not the cup of despair, but the chalice of opportunity. So let us seize it, not in fear, but in gladness.
> 
> <cite>——R.M. Nixon</cite>

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

<figure markdown="1">
![Mountain View]({{ site.github.url }}/media/img/mountain1.jpg)
<figcaption>Phasellus ut molestie odio, vel elementum erat.</figcaption>
</figure>

Jekyll also offers powerful support for code snippets:

```html
<script>
    var decentThemeConfig = {
        ga: 'YOUR TRACK ID'
    };
</script>
```

<figure class="large" markdown="1">
<img src="{{ site.github.url }}/media/img/mountain2.jpg" />
<figcaption>wow so handsome</figcaption>
</figure>

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


Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

<div class="album">
<figure>
<img src="{{ site.github.url }}/media/img/mountain1.jpg" />
<figcaption>wow so handsome 1</figcaption>
</figure>

<figure>
<img src="{{ site.github.url }}/media/img/mountain2.jpg" />
<figcaption>wow so handsome 2</figcaption>
</figure>

<figure>
<img src="{{ site.github.url }}/media/img/mountain3.jpg" />
<figcaption>wow so handsome 3</figcaption>
</figure>

</div>


[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
