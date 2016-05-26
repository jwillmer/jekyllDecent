# jekyllDecent
Blog template for [Jekyll](https://jekyllrb.com/docs/home/) based on a [Ghost](https://ghost.org) template named [Decent](https://github.com/serenader2014/decent).

Demo can be visit at [gh-pages](http://jwillmer.github.io/jekyllDecent).

## Example Previews

### Home
![](./assets/preview/win10_ie_11.0_home.jpg)

### Post
![](./assets/preview/win10_ie_11.0_page.jpg)

## Additional Features

The `{{ site.github.url }}` is only needed if you like to host the blog on GitHub. 

### Images Features


#### Parallax Effect

```
<div class="bg-scroll" style="background-image: url('{{ site.github.url }}/media/img/mountain1.jpg')"></div>
```

#### Caption for Image

```
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

```
<figure class="left">
![]({{ site.github.url }}/media/img/chen.jpg)
<figcaption>hello world!</figcaption>
</figure>
```

#### Fullscreen image

```
<div class="large">
![]({{ site.github.url }}/media/img/DSC01093.JPG)
</div>
```

With caption

```
<figure class="large">
![]({{ site.github.url }}/media/img/DSC01135-1.jpg)
<figcaption>wow so handsome</figcaption>
</figure>
```

#### Image Gallery

```
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

```
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

```
    ```html
    <script>
        var decentThemeConfig = {
            ga: 'YOUR TRACK ID'
        };
    </script>
    ```
```

With language highlighting, line numbers and line highlighting

```
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