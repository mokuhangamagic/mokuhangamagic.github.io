# frozen_string_literal: true

source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#

# If you have any plugins, put them here!
gem "wdm", ">= 0.1.0" if Gem.win_platform?
group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
  gem "jekyll-archives"
  gem "tzinfo-data"
  gem "tzinfo"
  gem "kramdown-parser-gfm"
  # image optimalisation
  # jekyll_picture_tag needs https://www.libvips.org/install.html - brew install vips
  gem "jekyll_picture_tag", "~> 2.0"
end

# gem "github-pages", "~> 231", group: :jekyll_plugins
gem "webrick", "~> 1.8"
gem "jemoji"
