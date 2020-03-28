---
layout: post
title: Feature Richness and Integration, in context
authors:
  - albertomedina
subhead: |
  Building feature-rich and integrated apps at global scale.
date: 2020-03-24
tags:
  - post
  - cms
---

In our previous [post](http://web.dev/success-on-the-web-in-context/) we discussed the correlation between building user-first sites, and our ability to attain sustainable success as content creators and publishers. User-first sites are sites that have the following qualities:

<div class="w-table-wrapper">
  <table>
    <tbody>
      <tr>
        <td><b>Performance and Reliability</b></td>
        <td>Sites that load quickly consistently and offer good runtime performance</td>
      </tr>
      <tr>
        <td><b>Security</b></td>
        <td>Sites where they feel safe sharing their data and doing transactions on them</td>
      </tr>
      <tr>
        <td><b>Feature Richness and Integration</b></td>
        <td>Sites that are accessible, enagaging, and take advantage of the full capabilities of user devices</td>
      </tr>
      <tr>
        <td><b>High-quality content</b></td>
        <td>Sites that offer content witha good value proposition to users</td>
      </tr>
    </tbody>
  </table>
</div>

A key aspect of such user-first sites is the role of feature-rich and engaging experiences in enhancing our conversion funnels. In this post we discuss briefly how to approach the development of feature-rich and integrated websites and web applications.

## Global Audience

The Open Web is the only platform that offers universal reach, as it is accessible on virtually any device our users may have. Over half of the world is now online. This means that: (1) the web gives us access to the largest possible market, and (2) there is great room for growth, as still about half the population yet to get online.

{% Aside %}
Web Superpower: low-friction access to the largest possible market.
{% endAside %}

As the saying goes: with great power comes great responsibility. How can we develop feature-rich and integrated web applications targeting such a large audience? Let's see.

## The Capable Web

The good news, is that the web platform has been evolving steadily and rapidly, thanks to the efforts of many people and organizations in the open web ecosystem. To get a sense of the amazing progress in the evolution of the web, we can mention four ongoing workstreams:

<div class="w-table-wrapper">
  <table>
    <tbody>
      <tr>
        <td><b>Web assembly</b></td>
        <td>
          A binary instruction format which provides a way to run code written in multiple languages on the web at near native speed
          (<a href="https://developer.mozilla.org/en-US/docs/WebAssembly">Learn more</a>).
        </td>
      </tr>
      <tr>
        <td><b>Web GPU</b></td>
        <td>the The W3C “GPU for the Web” Community Group is designing an API to expose the modern GPU APIs that are available on most current devices. This API is called <a href="https://gpuweb.github.io/gpuweb/">WebGPU</a></td>
      </tr>
      <tr>
        <td><b>Fugu</b></td>
        <td>Fugu is a cross-org program with the goal of reducing the app-web capabilities gap by streamlining web access to powerful, cross-platform, standardized capabilities on both mobile and desktop. <a href="https://web.dev/fugu-status/">Learn more</a>.</td>
      </tr>
      <tr>
        <td><b>PWA</b></td>
        <td>Umbrealla term capturing workstreams aimed at enabling the development of web apps that have an 'Appy' feeling; that is, web apps, that are fast and reliable, fully integrated with user devices, and engaging. <a href="https://developers.google.com/web/progressive-web-apps">Learn more</a>.</td>
      </tr>
    </tbody>
  </table>
</div>

{% Aside %}
Please follow the links above to learn more about each of the workstreams and how together they describe the reality of the web just being another platform on which we can successfully develop and deploy our online business presence.
{% endAside %}

Two of these work areas are of interest when we seek to answer the question: how do we develop web sites that are feature rich and integrated when out target audience has global reach?: Fugu and PWA.

## Fugu and WordPress

* Lazy loading


## PWA and WordPress
The second part of our approach to bringing Progressive Web Development into WordPress consists of integrating modern web APIs and capabilities into the WordPress core platform. We want the WordPress platform to support natively things such as: Service Workers, Offline access, Streaming, background sync, etc. The goal of such integration is to provide a consistent and unified approach for WordPress developers to easily access these APIs and capabilities as they develop core functionality, as well as themes or plugins.

{% Aside  %}
Today, the web platform supports (pretty much) everything provided by native app platforms, while maintaining its core tenets of openness, security, privacy, trust, and universal reach.
{% endAside %}


[collection]: /wordpress
