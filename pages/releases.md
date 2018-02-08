---
permalink: /releases/
redirect_from:
- /about-our-work/releases/
- /whats-new/releases/
layout: styleguide
title: Release notes
category: Release notes
subnav:
  data: releases
  href: ['#version-%', name]
  text: name
---

<p class="usa-font-lead">Here you’ll find our release notes — summaries of bug fixes, new features, and other updates introduced in each release.</p>

Have suggestions for a new feature or bug fix? [Open an issue](https://github.com/bruffridge/nasawds/issues/new) in our repo.

{% for release in site.data.releases %}

## Version {{ release.name }}

<p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>

{% assign id_replace = 'id="v%-' | replace: '%', release.name %}
{{ release.body | markdownify | replace: 'id="', id_replace | remove_relative_links }}

<hr />
{% endfor %}
