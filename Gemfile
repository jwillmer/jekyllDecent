source 'http://rubygems.org'

gem "jekyll"
gem "kramdown-parser-gfm"
gem 'wdm', '>= 0.1.1' if Gem.win_platform?

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

group :jekyll_plugins do
    gem 'jekyll-mentions'
    gem 'jekyll-feed'
    gem 'jekyll-sitemap'
    gem 'jekyll-redirect-from'
    gem 'hawkins'                    # jekyll liveserve
end