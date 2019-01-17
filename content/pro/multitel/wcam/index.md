---
title: "FP6 - WCAM"
subtitle: "Wireless Cameras and Audio-visual Seamless Networking"
#image: "<IMAGE_FILE>"
#small_image: "<IMAGE_FILE>"
#small_url: "<URL>"
categories: [ "Video", "Streaming", "Security", "Image Analysis", "Codec", "Embedded", "..." ]
tags: [ "C", "ffmpeg", "VLC", "H264", "MJPEG2000", "MP2TS", "HTTP", "UDP", "RTP", "Visual Studio", "Linux", "Windows CE", "PDA" ]
resources:
# add logos for: WCAM, THALES ...
- src: "logos/fp6.png"
  title: "6th Framework Program"
- src: "logos/eu.png"
  title: "European Union"
- src: "logos/ist.png"
  title: "Information Society Technologies"
##For each "image" image file:
#- src: "images/<IMAGE_FILE>"
#  title: "<TOOLTIP>"
#  params:
#    copyright: "<TEXT>"
---

<b>CLIENT:</b> European Commission, as a Multitel Research Engineer<br>

<b>DESCRIPTION:</b><br>
Project initiated in the context of the European FP6 Program.<br>
From the official description:<br>
"The WCAM project will study, develop and validate a wireless (WLAN) seamless and secured end-to- end networked audio-visual system focused on the technology convergence between video surveillance and multimedia distribution over the Internet. It will take into account real time aspects as well as security and scalability. The project will improve state of the art technologies in each of the technological components involved in the system and combine them. The WCAM system will be installed and tested with users of both multimedia distribution and video surveillance communities. Recent progresses in flexible bit streams representation of video including Region-of-lnterest (ROI) have led to new standardisation efforts in the frame of JPEG-2000.

WCAM will pursue and enforce these works, integrating concerns like wireless, security, and annotations obtained by high-level analysis. WCAM delivery scenario includes both JPEG-2000 and MPEG-4 AVC platforms, which requires also addressing the efficient and seamless transcoding between these two recent standards.

The WCAM platform will include the following key modules:
- Camera video encoding incorporating scene analysis, object tracking and adaptive and efficient video coding
- Automatic detection of events through scene analysis
- Scalable access to video content through transcoding and Scalable Video Coding of MPEG
- Multimedia storage and distribution
- Wireless networking for local connectivity (WLAN)
- Security, both at the network and content levels
- Metadata driven access to content"

<a href="https://cordis.europa.eu/project/rcn/71248_en.html" target="_blank">Link to project</a>

<b>ROLE:</b><br>
As a Research Engineer, I was responsible for the development, enhancement and integration of video streaming and visualisation tools in an embedded environment on PDA.
I had to research and compare the existing systems and applications, and determine which one could easily be enhanced and modified to satisfy the project's requirements.
The main components to be integrated in the selected application (BetaPlayer) were video codecs and formats (H264 and MJPEG2000), a transcoding module (MP2TS), an alarm management system (CAP) and new communication protocols (UDP and RTP). The UI of the application also had to be modified in order to display the alarm messages and their management interface.
Additionally to the development, I was responsible for creating a demonstration video explaining the entire workflow of the developed solution, using 3D animations combined with real world video footage.

????<br>
add:<br>
- Intégration d’un nouveau format de fichier :
  - Ajout d’un format dans libavformat :
  - Ajout d’un codec dans libavcodec :
- Intégration MJ2 :
  - Ajout du format dans libavformat :
  - Ajout du codec dans libavcodec :
- Intégration H264 en sortie :
  - Ajout du format H264 en sortie (qui n’est que défini en entrée), ainsi que les fonctions de gestion de ce format (création et écriture d’un fichier H264)
- Ffserver stream copy
  - Ajout du format « copy », afin de permettre la transmission de sequences sans la réencoder.
????

IMAGES: diagrams, screenshots betaplayer and demo video
