# Links

[Atelier OH](https://www.atelieroh.com/about/){:target="_blank"}


# Images
Easiest in root folder
![Picture of kamishibai bicycle in Antwerp railway station](/assets/images/pages/kamishibai/kamishibai-fiets-station.jpg)


# kramdown
Use markdown in between HTML:

```
<div class="pt-3" markdown="1">
    __bold__
</div>
```

# calendar
https://open-web-calendar.hosted.quelltext.eu/

{
  "url": "https://calendar.google.com/calendar/ical/a7d9cf123c7b5a4cc54808754d4466ea7c594304f9fa4dc8019e1336d63cae0d%40group.calendar.google.com/public/basic.ics",
  "title": "Mokuhanga Magic Agenda",
  "language": "nl",
  "skin": "dhtmlxscheduler_flat.css",
  "css": ".dhx_cal_navline, .dhx_scale_bar, .dhx_cal_container, .dhx_cal_header, .dhx_cal_scale_placeholder, .dhx_scale_holder, .dhx_scale_hour {background-color: #e1f0e3;}\n.event, .dhx_cal_tab.active, .dhx_cal_tab.active:hover {background-color: #ec7182;} .dhx_month_head, .dhx_cal_tab, .dhx_cal_today_button {color: #ec7182;} .dhx_cal_tab, .dhx_cal_tab.active {border-color: #ec7182;}\n.dhx_month_body, .dhx_month_head, .dhx_cal_container { background-color: #e1f0e3; }\n.dhx_after .dhx_month_body, .dhx_before .dhx_month_body, .dhx_after .dhx_month_head, .dhx_before .dhx_month_head { background-color: #feffff; }\n",
  "tabs": [
    "month",
    "week"
  ]
}

# Jekyll Picture Tag gem
https://rbuchberger.github.io/jekyll_picture_tag/
!! github pages
https://gist.github.com/elstudio/38bacfe7aab63da082a418fd3a1ddb66


# github -> ftp
https://mikeconroy.com/2020/04/automating-jekyll-deployments-github-actions/
```
name: Build & Upload Site

on:
  push:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-ruby@v1
      with:
        ruby-version: '2.7'

    - name: Setup Environment.
      run: |
        gem install jekyll bundler
        bundle install
        sudo apt-get install -y ncftp
        
    - name: Build Site with Jekyll.
      run: JEKYLL_ENV=production bundle exec jekyll build
    
    - name: Upload site to FTP.
      env: 
        ftp_location: ${{ secrets.ftp_location }}
        ftp_username: ${{ secrets.ftp_username }}
        ftp_password: ${{ secrets.ftp_password }} 
      run: |
        ncftpput -R -v -u "$ftp_username" -p "$ftp_password" $ftp_location /mikeconroy.com _site/*
```


# map - leaflet
https://ttntm.me/blog/store-locator-leaflet-hugo/
tiles: https://leaflet-extras.github.io/leaflet-providers/preview/

# Calendar
https://github.com/FOSSRIT/fossrit.github.io/pull/85/commits