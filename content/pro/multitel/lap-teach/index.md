---
title: "LapTeach"
subtitle: "Tele-Scope-Mentoring for LapMan"
categories: [ "Medical", "Video" ]
tags: [ "C++", "Java", "Gimp", "OpenGL", "ffmpeg", "Visual Studio", "Eclipse" ]
images_copyright: "MEDSYS"
images:
- src: "backgroundAlpha.jpg"
  title: "Lap Remote"
- src: "lapman.jpg"
  title: "LapMan"
- src: "lapman_plans.jpg"
  title: "LapMan Plans"
- src: "lapteach.jpg"
  title: "LapTeach Device"
- src: "lapteach_setup.png"
  title: "Setup Screen"
- src: "SplashScreen.png"
  title: "Splash Screen"
- src: "ui.jpg"
  title: "LapTeach UI"
resources:
- src: "logos/1-medsys.jpg"
  title: "MEDSYS"
- src: "logos/2-multitel.jpg"
  title: "MULTITEL"
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
