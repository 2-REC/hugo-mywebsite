---
title: "LapTeach"
subtitle: "Tele-Scope-Mentoring for LapMan"
small_image: "logos/1-medsys.png"
small_url: "https://www.medsys.be/"
categories: [ "Medical", "Network", "Video" ]
tags: [ "C", "C++", "Java", "OpenGL", "FFmpeg", "Gimp", "Codecs", "Network Protocols" ]
images_copyright: "MEDSYS"
images:
- src: "lapremote.jpg"
  title: "LapRemote prototype"
- src: "lapman.jpg"
  title: "LapMan"
- src: "lapteach.jpg"
  title: "LapTeach"
- src: "lapteach_movements.jpg"
  title: "LapTeach controls"
- src: "lapteach_setup.png"
  title: "LapTeach setup screen"
- src: "ui.jpg"
  title: "LapTeach UI"
resources:
- src: "logos/1-medsys.png"
  title: "Medsys"
- src: "logos/2-multitel.jpg"
  title: "Multitel"
---

<b>CLIENT:</b> Medsys, as a Multitel Research Engineer<br>
<br>

<h3>DESCRIPTION</h3>
The LapTeach application was developed at the request of Medsys as part of their training solutions.<br>
It is a module designed for the LapMan system to enable Tele-Scope-Mentoring (TSM).<br>
LapTeach allows mentors to view real-time images from the operating room and remotely take control of the LapMan, providing hands-on guidance to surgeons during procedures. It also lets users draw simple 2D shapes over the live video feed to give clear, real-time instructions.<br>
<br>

<h3>ROLE</h3>
As a Software Developer, I was primarily responsible for the server-side of the application.<br>
The server's role was to receive video streams, encode them, and transmit them to connected clients.<br>
In addition to video, it also handled data streams containing user-generated 2D geometric shapes, which were overlaid on the video in real-time on the client side.<br>
I also contributed to the client-side development, focusing on the user interface and visual overlays.<br>
<br>
The server-side was developed in C++ using the FFmpeg library for encoding and decoding, while the client-side was built in Java, using the Java OpenGL binding API for the 2D overlays.<br>
