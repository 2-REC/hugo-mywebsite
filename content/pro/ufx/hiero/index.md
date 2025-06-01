---
title: "Hiero Pipeline Integration"
subtitle: "I/O Pipeline Tools in Hiero"
small_image: "logos/hiero.png"
weight: 1
categories: [ "DB", "GUI", "VFX", "Web" ]
tags: [ "CSS", "Flask", "Flow/SG", "Hiero", "HTML", "JavaScript", "Nuke", "Python", "Qt" ]
images_copyright: "UFX STUDIOS"
images:
- src: "1-import-ref.png"
  title: "References Importer"
- src: "2-export-refs.png"
  title: "References Exporter"
- src: "3-import-plates.png"
  title: "Plates Importer"
- src: "4-ingest.png"
  title: "Ingest Manager"
- src: "5-export-cut.png"
  title: "Cut Exporter"
- src: "6-cut.png"
  title: "Generated Cut Info"
- src: "7-cut-items.png"
  title: "Generated Cut Items"
resources:
- src: "logos/hiero.png"
  title: "Hiero"
---

<h3>DESCRIPTION</h3>
Development and integration of new and existing pipeline tools in Hiero, to enable the I/O team to operate directly within the software and automate part of the tedious manual processes.<br>
<br>
Existing pipeline components to be integrated:
<ul>
<li>Workspace and Work Area Managers for session and file management</li>
<li>Ingest Manager</li>
</ul>
The integrated components require additional features to work tightly with Hiero.<br>
<br>
New tools to be developed:
<ul>
<li>References import/export</li>
<li>Plates import</li>
<li>Cuts and cut items creation (in ShotGrid/Flow)</li>
</ul>
<br>

<h3>ROLE</h3>
In close collaboration with the I/O team, I was responsible for the development of the tools.<br>
<br>
Existing pipeline components required modifications to support Hiero integration (most tools have a generic implementation from which DCC specific implementations are derived).<br>
<br>
The Ingest Manager standalone tool required significant refactoring.<br>
The main tasks included:
<ul>
<li>Improving modularity to enable integration into other applications, specifically Hiero</li>
<li>Adapting the tool's features to align with Hiero's workflow and design principles, while maintaining consistency with the pipeline</li>
<li>Updating the tool to take advantage of the in-house chores system, enabling tasks to be dispatched remotely to the render farm for parallel execution</li>
</ul>
<br>
New tools were developed from scratch, though existing workflow documentation and Python scripts provided by the I/O team were used as references or guidelines.<br>
<br>
Additionally, to support ongoing and future development, I implemented a command creation framework, making it significantly easier to add new functionalities to Hiero's panels and menus.<br>
