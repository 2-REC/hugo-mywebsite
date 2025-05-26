---
title: "QC Tools"
subtitle: "VFX Assets Quality Control"
small_image: "square-check-solid.png"
categories: [ "VFX" ]
tags: [ "Maya", "Python", "Qt" ]
images_copyright: "Bad Clay Studio"
images:
- src: "1_qc_ui.png"
  title: "QC Tool"
- src: "2_qc_checks.png"
  title: "QC Tool - Checks"
- src: "3_qc_fix.png"
  title: "QC Tool - Fix"
- src: "4_qc_ignore.png"
  title: "QC Tool - Ignore elements"
- src: "5_qc_plugins.png"
  title: "QC Tool - Plugin files"
- src: "6_publish.png"
  title: "Publishing Tool"
- src: "7_pyblish.png"
  title: "Pyblish"
  copyright: "Mottosso"
resources:
- src: "logos/maya.png"
  title: "Maya"
- src: "logos/pyblish.png"
  title: "Pyblish"
weight: 0
---

<h3>DESCRIPTION</h3>
The process began with The Life of Our Lord* (TLOOL) project, where the studio was responsible for creating assets (models and look development) for Mofac Animation Studios.<br>
<br>
To ensure the assets met the client's expectations, we had to adhere to a strict set of rules.<br>
Even when assets are used internally, some rules must still be respected to make the assets usable across departments.<br>
In both cases, assets must comply with specific requirements and follow established guidelines.<br>
<br>
Typical quality control (QC) checks include:
<ul>
<li>Software and plugin versions</li>
<li>Geometry constraints</li>
<li>UVs and shaders</li>
<li>Naming conventions</li>
<li>etc.</li>
</ul>

Since each asset type may have different requirements depending on the project or client, the QC process needs to be flexible and adaptable to each case.<br>
To streamline this process and guarantee that only compliant assets are accepted, dedicated QC tools are required.<br>
<br>
Initially, internally developed tools were used, then replaced by open-source tools as the pipeline evolved in complexity.<br>
<br>
The different tools however work similarly and share a common set of features, including:
<ul>
<li>Plugin-based system
    <ul>
    <li>Each plugin is defined by a Python class derived from a shared base class</li>
    <li>A mandatory "check" method contains the validation logic</li>
    <li>An optional "fix" method can automatically correct issues</li>
    <li>Plugins are dynamically loaded from directories specified in the project settings</li>
    <li>Plugins can be global (scene or session-wide) or specific to individual elements (objects, models, components, etc.)</li>
    <li>Plugins are organized by category</li>
    </ul>
<li>Optional checks can be enabled or disabled as needed</li>
<li>Specific elements can be excluded from the QC process</li>
<li>Invalid elements can be highlighted or selected directly within the scene</li>
</ul>

This approach allows us to maintain high-quality standards across all assets while adapting quickly to varying project demands.<br>
<br>
* The TLOOL project would eventually become the feature-length film <a href="https://www.imdb.com/title/tt7967302" target="_blank">The King of Kings</a>.<br>
<br>

<h3>ROLE</h3>

<h4>Maya QC Tool</h4>
At the time, no pipeline tools were available at the studio.<br>
I was initially tasked with quickly developing a basic QC tool for Maya to validate assets for The Life of Our Lord (TLOOL) project.<br>
<br>
Built from scratch in Python, this was my first project in the VFX industry.<br>
Though simple, the tool enabled asset validation and served as a training opportunity for artists to start working with early pipeline tools.<br>
<br>

<h4>Maya Asset Publisher</h4>
To further streamline production, I developed an asset publishing tool for Maya.<br>
Its primary function was to save assets to the correct location on the server using standardized naming conventions, while also managing basic versioning.<br>
The tool could optionally trigger the QC process, and thanks to asset organization ensure that artists could easily locate validated data.<br>
<br>

<h4>Pyblish</h4>
As both the scope and complexity of requirements expanded, especially with the inclusion of other DCCs, a more flexible solution was needed.<br>
<br>
After researching alternatives, I discovered Pyblish, an open-source validation and publishing framework.<br>
Coincidentally, I had already developed a very similar (yet more simplistic) tool, which made the transition to Pyblish straightforward.<br>
I adapted and created custom plugins to align with our studio's internal guidelines.<br>
<br>
Additionally, I wrote deployment scripts to install Pyblish across all studio workstations, supporting both local and network-based usage.<br>
<br>
Thanks to Pyblish being part of the OpenPype framework, our plugins were easily reused once we transitioned to OpenPype.<br>
<br>

<h4>QuickQC</h4>
In collaboration with a junior developer, we created QuickQC, an extended version of Pyblish designed to be more modular and efficient.<br>
<br>
Key improvements included:
<ul>
<li>Granular plugin configuration: plugins could now be filtered by project, user role, category, etc.</li>
<li>Selective execution: users could run individual checks or groups of checks, speeding up the validation process and avoiding full runs when only specific validations were desired.</li>
</ul>

An companion tool, the QC Classifier, was also developed to manage plugin configurations.<br>
<br>
QuickQC was eventually integrated into our OpenPype environment, alongside the <a href="/pro/badclay/openpype/...TODO">DailyQC tool</a>.
<br>
