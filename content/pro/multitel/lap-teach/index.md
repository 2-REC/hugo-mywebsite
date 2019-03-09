---
title: "LapTeach"
subtitle: "<CATCH_PHRASE>"
#image: "<IMAGE_FILE>"
#small_image: "<IMAGE_FILE>"
#small_url: "<URL>"
categories: [ "Medical", "Video" ]
tags: [ "C++", "Java", "Gimp", "OpenGL", "ffmpeg", "Visual Studio", "Eclipse" ]
resources:
#logos:
- src: "logos/medsys.png"
  title: "..."
#images:
- src: "images/lapman.png"
  title: "LapMan"
  params:
    copyright: "MEDSYS"
- src: "images/splashscreen.png"
  title: "LapTeach splash screen"
  params:
    copyright: "MEDSYS"
- src: "images/ui.png"
  title: "LapTeach"
  params:
    copyright: "MEDSYS"
---

<b>CLIENT:</b> Medsys, as a Multitel Research Engineer<br>

<b>DESCRIPTION</b><br>
The LapTeach application was requested by Medsys as part of their training solutions.<br>
It is a module developed for the LapMan to enable Tele-Scope-Mentoring (TSM).<br>
It allows the mentor to visualise the images from the operation room in real-time, and to remotely take control of the LapMan to share expertise with the surgeon at work. It also allows users to draw simple 2D shapes in real-time overlayed to the video in order to provide directions to other users.<br>

<b>ROLE</b><br>
As a Software Developer, I was mostly responsible for the server side of the application. Its role was to receive the video streams, encode them and transfer them to the connected clients.<br>
Additionally to the video, data streams were handled, containing 2D geometric data created by users (to be added as overlay on the video in real-time on the client-side).<br>
I also did some work on the client side, related to the user interface and visual overlays.<br>
The server side part of the application was developed in C++ (using the ffmpeg library for encoding/decoding), the client side was developed in Java (using Java OpenGL binding API).<br>
