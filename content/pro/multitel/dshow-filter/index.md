---
title: "MvPeopleCounting"
subtitle: "DirectShow Filter To Count People"
small_image: "logos/1-quadrox.png"
small_url: "https://quadrox.com/"
categories: [ "Embedded", "Image Analysis", "Security", "Video" ]
tags: [ "Assembly", "C", "C++", "Codecs", "DirectX", "FFmpeg", "Scripting" ]
images_copyright: "MULTITEL"
images:
- src: "config.png"
  title: "Filter Configuration Panel"
- src: "filter.jpg"
  title: "Video Stream"
- src: "graphedit.jpg"
  title: "Filter's GraphEdit View"
resources:
- src: "logos/1-quadrox.png"
  title: "Quadrox"
- src: "logos/2-multitel.jpg"
  title: "Multitel"
---

<b>CLIENT:</b> Quadrox, as a Multitel Research Engineer<br>
<br>

<h3>DESCRIPTION</h3>
Development of a DirectShow filter aimed at counting people crossing a defined area, using the in-house developed image analysis module MvPeopleCounting, part of the MultiVision framework.<br>
The filter analyses a video feed, and detects crossings along a direction (positive or negative depending on the facing direction).<br>
Processing parameters can be configured by the user through an administration interface, alowing to fine tune the detection accordingly to the situation.<br>
The filter is then to be integrated in a surveillance system manufactured by Quadrox.<br>
<br>

<h3>ROLE</h3>
As a Software Developer, responsible for the development and integration of the video surveillance DirectShow filter.<br>

The main steps of the project consisted in:<br>
<ul>
<li>Port the people counting module and part of the MultiVision framework from Linux to Windows</li>
<li>Develop a DirectShow filter around the module</li>
<li>Integrate the filter in the Quadrox infrastructure</li>
<li>Integrate a security module (authentication and encryption) to the system to ensure high security</li>
<li>Test and validate the system for production</li>
</ul>
