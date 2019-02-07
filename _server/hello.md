---
layout:            post
title:             "YAML Custom Features"
menutitle:         "YAML Features"
date:              2016-04-06 00:40:00 +0300
tags:              Jekyll YAML Features Explained
category:          Features
author:            jwillmer
cover:             /assets/mountain-alternative-cover.jpg
published:         true
redirect_from:     "/YAML-Features-Redirect/"
cover:             /assets/mountain-alternative-cover.jpg
language:          EN
comments:          true
math:			   false
---

In this short post I changed the title that is displayed on the front page from `YAML Custom Features` to `YAML Features`.


```bash
---
title:             "YAML Custom Features"
menutitle:         "YAML Features"
---
```

I also added a redirect to this post. If you browse to [YAML-Feature-Redirect]({{ "/" | absolute_url}}YAML-Features-Redirect) you should be redirected to this page. This only works if you have not removed the plugins.

```bash
---
redirect_from:     "/YAML-Features-Redirect"
---
```

If you like to redirect from multible sources you can specify it as an array.

```bash
---
redirect_from:  
  - "/YAML-Features-Redirect/"
  - "/blog/old-category/YAML-Features/"
---
``````

I also changed the cover image for this block via YAML.

```bash
---
cover:         /assets/mountain-alternative-cover.jpg
---
``````

To generate keywords for the search engines I use the tags that you specify in the post. If you are writing a page you need to specify keywords instead of tags.

```bash
---        
tags:          Jekyll YAML Features Explained  #Only used in posts!
keywords:      Jekyll YAML Features Explained  #Only used in pages!
---
```

Post will be sorted by category on the front page. This is how you define the category in YAML.

```bash
---        
category:     Readme
---
```

On a page I have additional options. For instance I can hide the page from the menu by setting the `visible` tag to `false`.

```bash
---        
visible:       false     
---
```

If I like to have the page in the menu I can add `weight` to the page in order to specify a position in the menu.

```bash
---        
weight:       5  
---
```

The default language of your blog is defined in the `_config.yml` file but if you like to write a post/page in another language you can use the `language` attribute. This will specify that you are using another language on this page for search engines. Please use on of the [language codes](http://www.w3schools.com/tags/ref_language_codes.asp) as value.

```bash
---        
language:       en  
---
```

You can enable [disqus](https://disqus.com/) comments in posts by adding `comments` to the page. To configure the disqus forum you need to modify the `disqus_shortname` in the `_config.yml` file.

```bash
---        
comments:       true  
---
```

If you like to write some formula you can enable [MathJax](https://www.mathjax.org/). Go to the [theme feature post]({{ "/" | absolute_url}}blog/features/Features) to see it in action. You can find the [preprocessing options](http://docs.mathjax.org/en/latest/options/tex2jax.html#configure-tex2jax) in `_includes/mathjax_support.html`.

```bash
---        
math:           true 
---
```


If you are writing a scholar article and like to add [bibliographic metadata](https://scholar.google.com/intl/en/scholar/inclusion.html#indexing) you can use the following YAML. This makes your article searchable at [Google Scholar](https://scholar.google.com/).

```bash
---        
citation:
  author: 
    - "Doe, John"
    - "Roe, Jane"
  publication_date:    "1996/05/17"
  online_date:         "1996/06/22"
  title:               "title"
  conference_title:    "conference_title"
  journal_title:       "journal_title"
  volume:              "271"
  issue:               "20"
  firstpage:           "11761"
  lastpage:            "11766"
  pdf_url:             "/media/scholar_article.pdf"
  pdf_url_dynamic:     true                            #true: http://your-domain.com/[pdf_url]
  issn:                "1234-5678"
  isbn:                "0-2345-6634-6"
  institution:         "institution"
  report_institution:  "report_institution"
  report_number:       "12345678"
---
```

Additional features, that can be specified, can be found in the [YAML Front Matter documentation](https://jekyllrb.com/docs/frontmatter/).
