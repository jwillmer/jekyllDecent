---
layout:            post
title:             "Theme Features"
date:              2016-06-07 13:10:00 +0300
tags:              Jekyll Theme GitHub Installation 
category:          Features
author:            jwillmer
---
The features described in this section are specific for this template. All other language features can be found in the [kramdown documentation](http://kramdown.gettalong.org/syntax.html). 

### Image Features


#### Parallax Effect

Keep in mind that paralax effect will not be captured if you like to print the page.

```html
<div class="bg-scroll" style="background-image: url('{{ site.github.url }}/media/img/mountain1.jpg')"></div>
```

<div class="bg-scroll" style="background-image: url('{{ site.github.url }}/media/img/mountain1.jpg')"></div>


#### Caption for Image

```html
<figure>
   <img src="{{ site.github.url }}/media/img/mountain2.jpg" />
   <figcaption>A nice mountain.</figcaption>
</figure>
```

<figure>
<img src="{{ site.github.url }}/media/img/mountain2.jpg" />
<figcaption>A nice mountain</figcaption>
</figure>

#### Image Allignment

```html
![]({{ site.github.url }}/media/img/mountain3.gif#right)
![]({{ site.github.url }}/media/img/mountain2.gif#left)
```

Allignment with caption

```html
<aside>
   <figure class="left">
      <img src="{{ site.github.url }}/media/img/mountain3.jpg#left" />
      <figcaption>What a view!</figcaption>
   </figure>
</aside>
```

![]({{ site.github.url }}/media/img/mountain2.jpg#right)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ante nulla, quis pulvinar nibh tempus sed. In congue congue odio, vel ornare mauris ultrices vel. Vestibulum tristique eros at enim vulputate fringilla. Nullam non augue sit amet elit interdum tempus non ut justo. 

<aside>
<figure class="left">
<img src="{{ site.github.url }}/media/img/mountain3.jpg" />
<figcaption>What a view!</figcaption>
</figure>
</aside>

Phasellus ut ipsum id leo sagittis pretium a quis neque. Maecenas rutrum lectus id magna malesuada, non dapibus neque tincidunt. Suspendisse ultrices accumsan eros, sit amet facilisis quam hendrerit a. Integer sed felis et diam efficitur accumsan. Suspendisse facilisis lectus non orci mattis vestibulum. Suspendisse molestie vulputate nunc non tincidunt. Maecenas vulputate, mauris ut rhoncus vulputate, tellus augue aliquet nibh, vel egestas nulla ipsum bibendum lorem. Pellentesque posuere laoreet lectus eget luctus. Vestibulum mattis ut ligula sed sodales. Vestibulum sit amet viverra arcu.


#### Fullscreen image

```html
<div class="large">
   ![]({{ site.github.url }}/media/img/mountain2.jpg)
</div>
```

With caption

```html
<figure class="large" markdown="1">   
   ![]({{ site.github.url }}/media/img/mountain2.jpg)
   <figcaption>On top of the mountain!</figcaption>
</figure>
```

<figure class="large" markdown="1">
   ![]({{ site.github.url }}/media/img/mountain2.jpg)
   <figcaption>On top of the mountain!</figcaption>
</figure>

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
   // ...
   <figure>
      <img src="{{ site.github.url }}/media/img/mountain2.jpg" />
      <figcaption>On top of the mountain!</figcaption>
   </figure>
   <figure>
      <img src="{{ site.github.url }}/media/img/mountain3.jpg" />
      <figcaption>What a view</figcaption>
   </figure>
</div>
```

<div class="album">
   <figure>
      <img src="{{ site.github.url }}/media/img/mountain1.jpg" />
      <figcaption>Mountain and lake</figcaption>
   </figure>   
   <figure>
      <img src="{{ site.github.url }}/media/img/mountain2.jpg" />
      <figcaption>On top of the mountain!</figcaption>
   </figure>   
   <figure>
      <img src="{{ site.github.url }}/media/img/mountain3.jpg" />
      <figcaption>What a view</figcaption>
   </figure>
</div>

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

> Our destiny offers not the cup of despair, but the chalice of opportunity. So let us seize it, not in fear, but in gladness.
> 
> <cite>——R.M. Nixon</cite>

### 404 Page

The 404 page has a fuzzy search implemented that lists urls that are similar to the entered url. Try it out: [Unknown URL]({{ site.github.url }}/features)

### JSON API

The theme offers a JSON API for the blog posts. You can query all blog posts via: [`/api/posts.json`]({{ site.github.url }}/api/posts.json)

### PDF and PowerPoint integration

```html
<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=http://img.labnol.org/di/PowerPoint.ppt' frameborder='0'></iframe>
```

<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=http://img.labnol.org/di/PowerPoint.ppt' frameborder='0'></iframe>

## More

More formating features can be found in the [Kramdown syntax](http://kramdown.gettalong.org/syntax.html).