---
layout:            post
title:             "Example Blog Page"
menutitle:         "The Example Blog Page"
date:              2016-05-23 00:40:31 +0200
tags:              jekyll update c# test
category:          Example
author:            jwillmer
cover:             /assets/mountain.jpg
published:         true
redirect_from:     "/foo"
---

- In this blog we changed the cover image to a custome one.
- Now we add a PowerPoint presentation:

<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=http://img.labnol.org/di/PowerPoint.ppt' frameborder='0'></iframe>

Now I like to quote Nixon:

> Our destiny offers not the cup of despair, but the chalice of opportunity. So let us seize it, not in fear, but in gladness.
> 
> <cite>——R.M. Nixon</cite>

Let me show you a mountain with some caption:

<figure markdown="1">
![Mountain View]({{ site.github.url }}/media/img/mountain1.jpg)
<figcaption>Phasellus ut molestie odio, vel elementum erat.</figcaption>
</figure>

And a little html script:

```html
<script>
    var decentThemeConfig = {
        ga: 'YOUR TRACK ID'
    };
</script>
```

Now I like to show you a picture in full screen:

<figure class="large" markdown="1">
<img src="{{ site.github.url }}/media/img/mountain2.jpg" />
<figcaption>wow so handsome</figcaption>
</figure>

Code with line numbers and line highligtning to explain you something important:

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

Like to see a cool image effect? How about this:

<div class="bg-scroll" style="background-image: url('{{ site.github.url }}/media/img/mountain1.jpg')"></div>

Now some more text to aling a picture with the text:

![]({{ site.github.url }}/media/img/grass.jpg#right){:hreflang="de"}{:.right}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ante nulla, quis pulvinar nibh tempus sed. In congue congue odio, vel ornare mauris ultrices vel. Vestibulum tristique eros at enim vulputate fringilla. Nullam non augue sit amet elit interdum tempus non ut justo. Phasellus ut ipsum id leo sagittis pretium a quis neque. Maecenas rutrum lectus id magna malesuada, non dapibus neque tincidunt. Suspendisse ultrices accumsan eros, sit amet facilisis quam hendrerit a. Integer sed felis et diam efficitur accumsan. Suspendisse facilisis lectus non orci mattis vestibulum. Suspendisse molestie vulputate nunc non tincidunt. Maecenas vulputate, mauris ut rhoncus vulputate, tellus augue aliquet nibh, vel egestas nulla ipsum bibendum lorem. Pellentesque posuere laoreet lectus eget luctus. Vestibulum mattis ut ligula sed sodales. Vestibulum sit amet viverra arcu.


This is text with a footnote [^1] and [this is a link][link]. [^2] [^3]

[^1]: Some footnote
[^2]: Another footnote
[^3]: Last footnote


[link]: http://google.com "title"


And a nice gallery with more pirctures:

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
