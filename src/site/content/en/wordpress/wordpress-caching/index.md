---
layout: post
title: Caching in WordPress
authors:
  - albertomedina
hero: hero.jpg
subhead: |
  Caching is a de-facto common denominator in high performance systems.
date: 2020-03-24
tags:
  - post
  - cms
  - performance
---

In computer systems, a [cache](https://en.wikipedia.org/wiki/Cache_(computing)) is a hardware or software component that stores data with the purpose of speeding up repeated access requests. When requests for data or objects can be satisfied from the cache (i.e. cache hit), they can be served faster and the overall performance of the system will be improved.

## Types of Caching

There are different kinds of caching, with different purposes and impact, depending on the parts of the computer system where they are applied.  Some common caching mechanisms are:

<div class="w-table-wrapper">
  <table>
    <tbody>
      <tr>
        <th>Type</th>
        <th>Role</th>        
      </tr>
      <tr>
        <td><b>Page Caching</b></td>
        <td>Caching mechanism for storing the content of pages, so that they do not have to be fully generated on every request</td>
      </tr>
      <tr>
        <td><b>Object Caching</b></td>
        <td>Caching mechanism for storing the result of queries to a site’s database, improving on repeated queries to given DB objects.
</td>
      </tr>
      <tr>
        <td><b>CDN Caching</b></td>
        <td>[Wikipedia] A content delivery/distribution network (CDN), is a geographically distributed network of proxy servers and their data centers, providing a varierty of services, including content access acceleration, and transparent caching, among others</td>
      </tr>
      <tr>
        <td><b>Browser Caching</b></td>
        <td>MDN] A browser cache holds all documents downloaded via HTTP by the user, and makes visited documents available for back/forward navigation, saving, viewing-as-source, without requiring an additional trip to the server.</td>
      </tr>  
    </tbody>
  </table>
</div>

WordPress site owners can leverage caching mechanisms either via plugins installed on their sites, or by using mechanisms available from their hosting provider. There are many options on both sides. Below are pointers to some of the most salient hosting provider options available, and some of the main caching plugins available in the ecosystem.

## Relevant Information Sources

* Caching article in WordPress.org ([link](https://wordpress.org/support/article/optimization-caching/))


[collection]: /wordpress
