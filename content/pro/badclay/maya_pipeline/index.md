---
title: "Maya Asset Tools"
subtitle: "Shaders, Animation and Groom Management"
small_image: "logos/maya.png"
categories: [ "VFX" ]
tags: [ "Maya", "Python", "Qt" ]
images_copyright: "Bad Clay Studio"
images:
- src: "export_anim_cache.png"
  title: "Export Anim Cache"
- src: "export_shader.png"
  title: "Export Shader"
- src: "import_anim_cache.png"
  title: "Import Anim Cache"
- src: "shader-in.png"
  title: "Import Shader"
- src: "yeti-fur-out.png"
  title: "Export Yeti FUR Cache"
resources:
- src: "logos/maya.png"
  title: "Maya"
- src: "logos/yeti.png"
  title: "Yeti"
- src: "logos/qt.png"
  title: "Qt"
weight: 1
---

<h3>DESCRIPTION</h3>
As the studio got bigger, it became essential to manage data efficiently between the different departments and teams.<br>
In the process of developing a VFX pipeline, a series of tool had to be created to accelerate and automate assets workflows within Maya.<br>
<br>
The main areas of interest were shader, animation, and fur management.<br>
<br>
The resulting suite of tools included:
<ul>
<li>Shader Management</li>
    <ul>
    <li>Export Shader</li>
    <li>Reexport Shader</li>
    <li>Import Shader</li>
    </ul>
<li>Animation Caching</li>
    <ul>
    <li>Export Still Cache</li>
    <li>Export Anim Cache</li>
    <li>Import Anim Cache</li>
    </ul>
<li>Yeti (Fur) Tools</li>
    <ul>
    <li>Export Yeti Nodes</li>
    <li>Export Yeti Curves</li>
    <li>Export Yeti Fur</li>
    <li>Import Yeti Cache</li>
    </ul>
</ul>

Combined with our QC and publishing tools, these formed the foundation of a basic yet effective VFX pipeline centered around Maya.<br>
<br>
These tools greatly helped the studio to successfully deliver hundreds of shots across major productions, including the Chinese fantasy film <a href="https://www.imdb.com/title/tt12151820/" target="_blank">The Yinyang Master</a> and the Korean horror series <a href="https://www.imdb.com/title/tt11612120/" target="_blank">Sweet Home</a>.
<br>

<h3>ROLE</h3>
Tool design and implementation were carried out in close collaboration with the VFX supervisor.<br>
Through a combination of notes, diagrams, UI mockups, and ongoing discussions, we defined a clear development roadmap.<br>
<br>
All the tools were developed in Python.<br>
Initially, the user interfaces were built using Maya's cmds module, but were later refactored with Qt.<br>
<br>
These were the studio's first import/export pipeline tools.<br>
They were fully integrated into Maya via custom shelves and menus, and also usable as command line tools (through mayapy).<br>
<br>
Publishing functionality supported project-specific configurations based on predefined rules and naming conventions.<br>
This automated the handling of version control, file naming and storage paths.<br>
