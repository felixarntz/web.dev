---
layout: post
title: Performance and Usability in Context
hero: hero.jpg
authors:
  - albertomedina
subhead: |
  Users want good UX, and that means consistently good performance.
date: 2020-03-24
tags:
  - post
  - cms
---
Nikalus Wirth wrote a paper back in 1995 issuing a [Plea for Lean Software](https://dl.acm.org/doi/10.1109/2.348001). He starts by stating a fact that has remained true in the desktop world since then: Memory requirements of workstations typically jump substantially whenever there is a new software release. When demand surpasses capacity, it is time to buy add-on memory; when the system has no more extensibility it is time to buy a new, more powerful workstation.  And then he poses the question: Do increased performance and functionality keep pace with the increased demand for resources? Mostly the answer is no. Today, 25 years later, we have a seemingly completely different reality, but we still can observe a similar reality: attaining consistently high performance in the mobile web is challenging.

{% Aside %}
Attaining consistently high performance in the mobile web is very challenging.
{% endAside %}

In essence, solving the performance problem can be seen as solving an optimization problem with three main dimensions:

<div class="w-table-wrapper">
  <table>
    <tbody>
      <tr>
        <td><bold>User Experience (UX)<bold></td>
        <td>Engagement and delight using apps</td>
      </tr>
      <tr>
        <td>Developer Experience (DX)</td>
        <td>Minimize friction and difficulty for developing on the web</td>
      </tr>
      <tr>
        <td>Monetization Experience (UX)</td>
        <td>Maximizing revenue</td>
      </tr>
    </tbody>
  </table>
</div>

If we solve only for UX, then developers may have to work at the lowest levels of abstractions to achieve the highest speeds, and publishers may have to drop monetization approaches that appear profitable (e.g. interstitials). If we care only about DX, then users will likely  experience slowness from bloated/inefficient websites, and publishers will make less money due to decreased levels of user engagement. If we care only about MX, then developers will be forced to implement aggressive monetization and users will get annoyed with intrusive ads.

The common factor across these three dimensions is performance. Users want fast websites (UX), which leads to higher engagement and higher ROI (MX), and developers of sites, extensions, and frameworks want to design and develop fast products effectively (DX).

Therefore, we need to approximate an optimal solution to this 3D optimization problem, striking the proper balance between UX, DX, and MX.

{% Aside  'objective' %}
High-performance in the web requires a proper balance between UX, DX, and MX.
{% endAside %}

Understanding the essence of what performance on the web is all about is key for us to make sound technical and business decisions at all levels that lead to success in a cost-effective way. Specifically, we want to understand:

## Elements of Performance

<div class="w-table-wrapper">
  <table>
    <tbody>
      <tr>
        <td><bold>Loading performance<bold></td>
        <td>Do not keep users waiting.</td>
      </tr>
      <tr>
        <td>Runtime performance</td>
        <td>E.g. no blocked access once user is engaged with our site</td>
      </tr>
      <tr>
        <td>Usability</td>
        <td>E.g. no content shifting</td>
      </tr>
    </tbody>
  </table>
</div>

{% Aside  'caution' %}
Users hate bad performance. A [recent survey](https://www.thinkwithgoogle.com/intl/en-gb/advertising-channels/mobile/need-speed-evaluating-perception-and-reality-speed-mobile-web/) showed that 75% of users see performance as the aspect of websites most important to them.
{% endAside %}

## Measuring performance

<div class="w-table-wrapper">
  <table>
    <tbody>
      <tr>
        <td><bold>Lab vs. Real-user measurements<bold></td>
        <td>When we develop for the web, we are targetting sa global audience</td>
      </tr>
      <tr>
        <td>User-first performance metrics</td>
        <td>Track performance metrics directly related to UX and satisfaction.</td>
      </tr>
      <tr>
        <td>Performance testing environment</td>
        <td>E.g. no blocked access once user is engaged with our site</td>
      </tr>
    </tbody>
  </table>
</div>

[collection]: /wordpress
