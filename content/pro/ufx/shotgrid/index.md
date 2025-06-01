---
title: "Flow/Shotgrid AMIs"
subtitle: "Customized context menu items"
small_image: "logos/flow.png"
weight: 2
categories: [ "DB", "VFX", "Web" ]
tags: [ "CSS", "Flask", "Flow/SG", "HTML", "JavaScript", "Python" ]
#images_copyright: "UFX STUDIOS"
images:
- src: "sg-actions.png"
  title: "Example of custom 'Action Menu Item'"
  copyright: "AUTODESK"
- src: "flask.png"
  title: "Example of Flask code"
resources:
- src: "logos/flow.png"
  title: "Flow/ShotGrid"
---

<h3>DESCRIPTION</h3>
Help supervisors, production, and I/O teams in their daily tasks by adding commands in Flow (formerly ShotGrid).<br>
<br>
These commands allow users to trigger various pipeline processes directly from Flow, without the need to open specific DCC applications (which is time consuming and not always available on their machines).<br>
<br>
Examples of implemented commands include:
<ul>
<li>Projects, users and tasks management</li>
<li>Generation of client versions from internal versions</li>
<li>Sequence rendering and re-rendering</li>
<li>etc.</li>
</ul>
<br>

<h3>ROLE</h3>
In addition to developing new commands, I also adapted existing ones to accommodate evolving pipeline requirements and feature requests.<br>
<br>
These commands are integrated into Flow through Action Menu Items (AMIs), which allow to customize context menus based on entity types.<br>
AMI requests are then handled by a local Flask server, which hosts the web pages and associated backend logic for each action.<br>
<br>
As the backend is using Flask, the code for the actions is written in Python.<br>
The web pages displayed in Flow (for control and feedback) are built using HTML, CSS, JavaScript, and Jinja templating.<br>
