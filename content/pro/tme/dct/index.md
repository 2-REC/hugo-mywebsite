---
title: "Drawing Comparison Tool"
subtitle: "Drawing Revisions Automated Comparison Tool"
small_image: "toyota.png"
categories: [ "Automotive", "CAD", "Computer Vision", "GUI", "Image Processing", "Management", "Mentoring", "R&D", "Web" ]
tags: [ "CSS", "Flask", "HTML", "JavaScript", "OpenCV", "Python" ]
images_copyright: "TOYOTA MOTOR EUROPE"
resources:
- src: "logos/1-toyota.png"
  title: "Toyota"
- src: "logos/2-akka.jpg"
  title: "Akka"
---

<b>CLIENT:</b> TOYOTA MOTOR EUROPE<br>
<br>

<h3>DESCRIPTION</h3>
Triggered by a business need within Toyota R&D, engineers at Toyota Motor Europe (TME) or their suppliers create drawings, often based on revisions of existing designs. Before these drawings are officially released, they must undergo a thorough review, validation, and approval process involving the Toyota Engineer, Manager, Senior Manager, and General Manager.<br>
The review process ensures that all changes outlined in the Engineering Change Instructions (ECI) are correctly reflected in the drawing, and that no unintended modifications have been made.<br>
<br>
Engineers face several challenges due to the size of the drawings, with each instruction (line, shape, dimension, text) needing to be individually verified.<br>
<br>

This results in the following issues:<br>
<ul>
<li>Drawing reviews are time-consuming</li>
<li>Engineers can easily overlook changes during the comparison, increasing the risk of quality issues</li>
<li>Management cannot confirm the accuracy of the work without performing the review themselves</li>
<li>If a mistake is identified and the drawing is modified, the entire validation process must be restarted</li>
</ul>
<br>

The purpose of the drawing comparison system is to:<br>
<ul>
<li>Assist engineers in comparing two revisions of a drawing</li>
    <ul>
    <li>Automatically highlight differences between revisions</li>
    <li>Enable the engineer to assess these differences and validate the system’s assumptions</li>
    </ul>
<li>Allow the engineer to communicate the results of the comparison with management for approval</li>
<li>Enable the engineer to share the comparison results with suppliers for feedback in case of rejection</li>
</ul>
<br>

AKKA was selected to implement the full project based on the <a href="pro/akka/dct-feasibility">Feasibility Study</a> document and the <a href="pro/akka/dct-poc">proof-of-concept tool</a> provided to TME.<br>
<br>

<h3>ROLE</h3>
As Technical Leader, I was responsible for analyzing the requirements and selecting the appropriate technologies and implementation approaches, which I then validated with the business and management teams (following the technical offer and Feasibility Study provided to the client).<br>
<br>
I also managed a development team of four developers, ensuring that requirements were met, timelines were respected, and communication flowed effectively between the technical team, management, and the client.<br>
<br>
In addition to overseeing the development, I contributed to some of the front-end UI work, particularly focusing on the viewport-related code written in JavaScript (using the React and PixiJS frameworks).<br>
