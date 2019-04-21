---
title: "FP6 - WCAM"
subtitle: "Wireless Cameras and Audio-visual Seamless Networking"
#image: "<IMAGE_FILE>"
small_image: "wcam.png"
#small_url: "<URL>"
categories: [ "R&D", "Video", "Image Analysis", "Security", "Embedded", "Data Exchange", "Network" ]
tags: [ "C", "ffmpeg", "VLC", "H264", "MJPEG2000", "MP2TS", "HTTP", "UDP", "RTP", "Visual Studio", "Linux", "Windows CE", "PDA" ]
images_copyright: "MULTITEL"
images:
- src: "beta1.jpg"
  title: "BetaPLayer Interface - Video PLayer"
- src: "beta2.jpg"
  title: "BetaPLayer Interface - Alarm Manager"
- src: "luggage.jpg"
  title: "Detected Abandonned Luggage"
- src: "secu.jpg"
  title: "Car Park Surveillance"
- src: "wcam_diag.jpg"
  title: "Data Flow Diagram"
- src: "wcam_poster.png"
  title: "WCAM Poster"
resources:
- src: "logos/1-eu.jpg"
  title: "European Union"
- src: "logos/2-fp6.png"
  title: "6th Framework Program"
- src: "logos/3-ist.png"
  title: "Information Society Technologies"
- src: "logos/4-thales.png"
  title: "THALES"
- src: "logos/5-bristol.png"
  title: "University of Bristol"
- src: "logos/6-fpms.jpg"
  title: "Faculte Polytechnique de Mons"
- src: "logos/7-eona.jpg"
  title: "EONA"
- src: "logos/8-multitel.jpg"
  title: "MULTITEL"
---

<b>CLIENT:</b> European Commission, as a Multitel Research Engineer<br>

<b>DESCRIPTION</b><br>
Project initiated in the context of the European FP6 Program.<br>
From the official description:<br>
"The WCAM project will study, develop and validate a wireless (WLAN) seamless and secured end-to- end networked audio-visual system focused on the technology convergence between video surveillance and multimedia distribution over the Internet. It will take into account real time aspects as well as security and scalability. The project will improve state of the art technologies in each of the technological components involved in the system and combine them. The WCAM system will be installed and tested with users of both multimedia distribution and video surveillance communities. Recent progresses in flexible bit streams representation of video including Region-of-lnterest (ROI) have led to new standardisation efforts in the frame of JPEG-2000.<br>
<br>
WCAM will pursue and enforce these works, integrating concerns like wireless, security, and annotations obtained by high-level analysis. WCAM delivery scenario includes both JPEG-2000 and MPEG-4 AVC platforms, which requires also addressing the efficient and seamless transcoding between these two recent standards.<br>
<br>
The WCAM platform will include the following key modules:<br>
- Camera video encoding incorporating scene analysis, object tracking and adaptive and efficient video coding<br>
- Automatic detection of events through scene analysis<br>
- Scalable access to video content through transcoding and Scalable Video Coding of MPEG<br>
- Multimedia storage and distribution<br>
- Wireless networking for local connectivity (WLAN)<br>
- Security, both at the network and content levels<br>
- Metadata driven access to content"<br>
<br>
<a href="https://cordis.europa.eu/project/rcn/71248_en.html" target="_blank">Link to project</a><br>
<br>
<b>ROLE</b><br>
As a Research Engineer, I was responsible for the development, enhancement and integration of video streaming and visualisation tools in an embedded environment on PDA.<br>
I had to research and compare the existing systems and applications, and determine which one could easily be enhanced and modified to satisfy the project's requirements.<br>
The selected application was BetaPlayer (now known as [TCPMP](https://en.wikipedia.org/wiki/The_Core_Pocket_Media_Player)), using the [ffmpeg](https://www.ffmpeg.org) library (composed of libavformat and libavcodec).<br>
The main components to be integrated were:<br>
- A H264 video decoder developed by the [University of Britsol](http://www.bristol.ac.uk)<br>
- A Motion JPEG 2000 (MJP2K) container and decoder developed by Multitel and the [FPMS](https://web.umons.ac.be/fpms)<br>
- An alarm management system (CAP) developed by Multitel, as part of their MultiVision tools suite<br>
Additionnally to these elements, I had to develop new components:<br>
- An MPEG Transport Stream (MP2TS) transcoding module to handle streams provided by [EONA](https://www.eona.com)<br>
- New communication protocols (UDP and RTP) to handle the different video streams (additionnally to the basic HTTP)
- A UI module added to the application interface in order to display the alarm messages and their management interface.<br>
Additionally to the development, we were responsible for creating a [demonstration video](/pro/multitel/wcam-demo) explaining the entire workflow of the developed solution.<br>
