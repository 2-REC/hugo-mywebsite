---
title: "FP6 - WCAM"
subtitle: "Wireless Cameras and Audio-visual Seamless Networking"
#image: "<IMAGE_FILE>"
small_image: "wcam.png"
#small_url: "<URL>"
categories: [ "Data Exchange", "Embedded", "Image Analysis", "Network", "R&D", "Security", "Video" ]
tags: [ "C", "Scripting", "FFmpeg", "Codecs", "Network Protocols" ]
images_copyright: "MULTITEL"
images:
- src: "beta1.jpg"
  title: "BetaPLayer Interface - Video PLayer"
- src: "beta2.jpg"
  title: "BetaPLayer Interface - Alarm Manager"
- src: "luggage.jpg"
  title: "Abandonned luggage detection"
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
  title: "Thales"
- src: "logos/5-bristol.png"
  title: "University of Bristol"
- src: "logos/6-fpms.jpg"
  title: "Faculte Polytechnique de Mons"
- src: "logos/7-eona.jpg"
  title: "EONA"
- src: "logos/8-multitel.jpg"
  title: "Multitel"
---

<b>CLIENT:</b> European Commission, as a Multitel Research Engineer<br>
<br>

<h3>DESCRIPTION</h3>
Project initiated in the context of the European FP6 Program.<br>

<i>
"The WCAM project will study, develop and validate a wireless (WLAN) seamless and secured end-to- end networked audio-visual system focused on the technology convergence between video surveillance and multimedia distribution over the Internet. It will take into account real time aspects as well as security and scalability. The project will improve state of the art technologies in each of the technological components involved in the system and combine them. The WCAM system will be installed and tested with users of both multimedia distribution and video surveillance communities. Recent progresses in flexible bit streams representation of video including Region-of-lnterest (ROI) have led to new standardisation efforts in the frame of JPEG-2000.<br>
<br>
WCAM will pursue and enforce these works, integrating concerns like wireless, security, and annotations obtained by high-level analysis. WCAM delivery scenario includes both JPEG-2000 and MPEG-4 AVC platforms, which requires also addressing the efficient and seamless transcoding between these two recent standards.<br>
<br>
The WCAM platform will include the following key modules:<br>
<ul>
<li>Camera video encoding incorporating scene analysis, object tracking and adaptive and efficient video coding</li>
<li>Automatic detection of events through scene analysis</li>
<li>Scalable access to video content through transcoding and Scalable Video Coding of MPEG</li>
<li>Multimedia storage and distribution</li>
<li>Wireless networking for local connectivity (WLAN)</li>
<li>Security, both at the network and content levels</li>
<li>Metadata driven access to content"</li>
</ul>
</i>
<a href="https://cordis.europa.eu/project/rcn/71248_en.html" target="_blank">Link to project</a><br>
<br>

<h3>ROLE</h3>
As a Research Engineer, I was responsible for the development, enhancement, and integration of video streaming and visualization tools within an embedded environment on PDAs running Windows CE.<br>
My role involved researching and comparing existing systems and applications to determine the one most suitable for adaptation to meet the project’s requirements.<br>
The selected application was BetaPlayer (now known as <a href="https://en.wikipedia.org/wiki/The_Core_Pocket_Media_Player" target="_blank">TCPMP</a>), which leveraged the FFmpeg library, including its libavformat and libavcodec components.<br>
<br>
The main components to be integrated were:<br>
<ul>
<li>A H264 video decoder developed by the <a href="http://www.bristol.ac.uk" target="_blank">University of Britsol</a></li>
<li>A Motion JPEG 2000 (MJP2K) container and decoder developed by Multitel and the <a href="https://web.umons.ac.be/fpms" target="_blank">UMONS Faculty of Engineering (FPMS)</a></li>
<li>An alarm management system (CAP) developed by Multitel, as part of their MultiVision tools suite</li>
</ul>
<br>
In addition to these tasks, I was responsible for developing several new components:<br>
<ul>
<li>An MPEG Transport Stream (MP2TS) transcoding module to process streams provided by EONA</li>
<li>New communication protocol support (UDP and RTP) to handle various video streams, alongside the existing HTTP protocol.</li>
<li>A UI module integrated into the application to display alarm messages and provide an interface for managing them.</li>
</ul>
<br>
Additionally to the development, our team was also tasked with creating a <a href="pro/multitel/wcam-demo">demonstration video</a> to showcase the complete workflow of the developed solution.<br>
