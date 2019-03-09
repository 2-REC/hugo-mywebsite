---
title: "MvPeopleCounting"
subtitle: "DirectShow Filter To Count People"
#image: "<IMAGE_FILE>"
#small_image: "<IMAGE_FILE>"
#small_url: "<URL>"
categories: [ "Security", "Integration", "Video" ]
tags: [ "C", "C++", "DirectShow", "Visual Studio" ]
#resources:
##For each "logo" image file:
# (logos = [ "QUADROX, MULTITEL, ACIC" ])
#- src: "logos/<IMAGE_FILE>"
#  title: "<TOOLTIP>"
##For each "image" image file:
#- src: "images/<IMAGE_FILE>"
#  title: "<TOOLTIP>"
#  params:
#    copyright: "<TEXT>"
---

<b>CLIENT:</b> Quadrox, as a Multitel Research Engineer<br>

<b>DESCRIPTION</b><br>
Development of a DirectShow filter aimed at counting people crossing a defined area, using the in-house developed image analysis module MvPeopleCounting, part of the MultiVision framework.<br>
The filter analyses a video feed, and detects crossings along a direction (positive or negative depending on the facing direction).<br>
Processing parameters can be configured by the user through an administration interface, alowing to fine tune the detection accordingly to the situation.<br>
The filter is then to be integrated in a surveillance system manufactured by Quadrox.<br>

<b>ROLE</b><br>
As a Software Developer, I was responsible for the development and integration of the video surveillance DirectShow filter.<br>
The people counting module, and part of the MultiVision framework had first to be ported from Linux to Windows.<br>
The filter then had to be developed, and integrated in the Quadrox infrastructure.<br>
A security module (authentication and encription) also had to be integrated to the system to ensure high security.<br>
Tests had to be done to validate the system for production.<br>
