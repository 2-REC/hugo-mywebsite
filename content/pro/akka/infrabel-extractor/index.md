---
title: "Signal Extractor - Proof Of Concept"
subtitle: "Proof Of Concept Prototype Tool to extract 2D symbols from PSS Railway Plans"
small_image: "infrabel.png"
categories: [ "CAD", "Image Analysis", "Project Management", "R&D", "Railway", "Team Management" ]
tags: [ "Gimp", "Java", "OpenCV", "Swing" ]
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
- src: "logos/1-infrabel.png"
  title: "Infrabel"
- src: "logos/2-akka.jpg"
  title: "Akka"
---

<b>CLIENT:</b> INFRABEL<br>
<br>

<h3>DESCRIPTION</h3>
The AKKA team supporting INFRABEL developed the Process Automation Tools (PA Tools) for validating European Train Control System (ETCS) transceivers. These tools model railway infrastructure and simulate transceiver behavior across various scenarios, generating data for comparison with real-world transceiver outputs.<br>
Modeling the infrastructure relies on railway maps, specifically PSS maps ("Plan Schématique de Signalisation"), which detail signal locations along the tracks. However, the absence of digital versions for many of these maps meant that information had to be manually encoded, an effort-intensive and error-prone task.<br>
<br>
To address this, AKKA proposed a system to automate information extraction from PSS maps and integrate it into existing validation tools.<br>
A proof-of-concept was developed using image analysis to automatically detect 2D symbols in the scanned maps and highlight them for user review.<br>
<br>
Following the successful development and demonstration of this prototype, our team was selected to contribute to the larger scale <a href="pro/infrabel/ifast">IFAST project</a> at INFRABEL.<br>
<br>

<h3>ROLE</h3>
As Project Leader, I was responsible for overseeing the prototype's development, coaching a junior Java developer, and making key technical decisions.<br>
I designed and implemented the image analysis processes and led the successful delivery of the prototype, which directly contributed to our selection for the larger scale project at INFRABEL (IFAST).<br>
