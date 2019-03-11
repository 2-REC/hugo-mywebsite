---
title: "Railway Plans Signals Extractor - Proof-Of-Concept"
subtitle: "Proof-Of-Concept Prototype Tool to extract 2D symbols from PSS Railway Plans"
categories: [ "Railway", "R&D", "Image analysis", "Project management", "Team management" ]
tags: [ "Java", "Swing", "OpenCV", "Eclipse", "CVS" ]
images:
- src: "1-detector.jpg"
  title: "Detector UI"
- src: "2-algo.png"
  title: "Signal detection block algorithm"
- src: "3-signals.png"
  title: "Signal selection"
- src: "4-iss-plan.png"
  title: "ISS Plan"
  copyright: "INFRABEL"
resources:
- src: "logos/infrabel.png"
  title: "INFRABEL"
- src: "logos/sncb.png"
  title: "SNCB"
- src: "logos/tucrail.jpg"
  title: "TUC-RAIL"
---

<b>CLIENT:</b> INFRABEL, as AKKA Consultant<br>

<b>DESCRIPTION</b><br>
The AKKA team working at INFRABEL has developed process automation tools (PA Tools) to be used for the European Train Control System (ETCS) transceivers validation, by modelling the railway infrastructure and simulating these transceivers under various scenarios generating data that can then be compared with the real transceivers data.<br>
To model the railway infrastructure, railway maps are provided: PSS maps (“Plan Schématique de Signalisation”), containing information about the different signals present along the tracks.<br>
However, most of these maps don’t have their digital original version available anymore, thus the process of encoding their information into the system has to be done manually by an operator. This is of course a fastidious work, time consuming and error prone.<br>
To address this problem, AKKA has thought about a system that would automatically extract the information from the PSS maps and inject it into the existing tools.<br>
The developed tool was a proof of concept of the imagined system, automatically detecting 2D symbols in the maps by image analysis, and highlighting them to the user.<br>
Following its development, we were selected to join the AKKA team in place at INFRABEL, to work on the bigger project [IFAST](/pro/infrabel/ifast).<br>

<b>ROLE</b><br>
As Project Leader, I was responsible for the development of the prototype as well as coaching a junior Java developer. I had to make the technical choices on implementation, determining and implementing the image analysis processes to use.<br>
Managed the successful realisation and demonstration of the prototype enabling the development team to be chosen for a larger scale project at INFRABEL (IFAST).<br>
