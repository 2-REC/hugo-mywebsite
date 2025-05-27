---
title: "Maya Advanced Tools"
subtitle: "LookDev & Animation Tools "
small_image: "logos/maya.png"
categories: [ "VFX" ]
tags: [ "Maya", "Python", "Qt" ]
images_copyright: "Bad Clay Studio"
images:
- src: "01_lazy_main.png"
  title: "Lazy Tool main UI"
- src: "02_lazy_rules.png"
  title: "Lazy Tool rules"
- src: "03_lazy_presets.jpg"
  title: "Lazy Tool presets file"
- src: "04_lazy_shader_graph.jpg"
  title: "Lazy Tool template graph"
- src: "05_scene_build.png"
  title: "Scene Build diagram"
- src: "06_ref_manager.png"
  title: "Scene Manager UI"
- src: "07_playblast_hud.png"
  title: "Playblast Generator UI"
- src: "08_attrizard.png"
  title: "Attrizard UI"
- src: "09_camdir_ui.png"
  title: "Camera Direction UI"
- src: "10_camdir.png"
  title: "Camera Direction view"
- src: "11_vray_proxy_out.png"
  title: "VRay Proxies Swap UI"
resources:
- src: "logos/maya.png"
  title: "Maya"
- src: "logos/qt.png"
  title: "Qt"
weight: 4
---

<h3>DESCRIPTION</h3>
As the studio expanded and took on larger projects, the need for new custom tools to support artists in their daily workflows grew significantly.<br>
<br>
With Maya being the central tool for the 3D work at the studio, pipeline developments were logically prioritized around it.<br>
Meanwhile, departments with more self-contained workflows (primarily for 2D work using Nuke) had fewer pipeline requirements.<br>
<br>
Several Maya tools were thus developed and integrated into the pipeline.<br>
<br>

<h4>Lazy Tool</h4>
A powerful shader builder designed to streamline look development.<br>
The tool allows artists to construct complex shader graphs using predefined templates and rules.<br>
It supports both GUI and command-line modes, enabling both single shader creation and batch processing.<br>
<br>
The tool greatly simplified shader creation and enabled the rapid generation of hundreds of shaders, which was essential for managing the massive asset count in the VFX-heavy Vietnamese action film <a href="https://www.imdb.com/title/tt25260664/" target="_blank">Thanh Sói</a>.<br>
<br>

<h4>Scene Builder</h4>
An automated animation scene assembly tool.<br>
Given a shot description generated from production data, this command-line tool builds a scene by loading all required rigged assets and their associated animation data, ensuring the latest versions are used (or specific ones if specified).<br>
The tool can either create new scenes or update existing ones with validated data.<br>
It greatly reduced the manual interventions of the animation and lighting departments, allowing artists to work directly with the most up-to-date assets.<br>
<br>
Integrated with <a href="pro/badclay/mangrove">Mangrove</a>, the tool supports building scenes for multiple shots at once, and can be included in wider workflows combined with reviewing and delivering processes.<br>
This greatly helped during the production of the Vietnamese family fantasy film <a href="https://www.imdb.com/title/tt14391192/" target="_blank">Trang Ti</a> and the Korean horror series <a href="https://www.imdb.com/title/tt14169960/" target="_blank">All of Us Are Dead</a>.<br>
<br>

<h4>Cache Scene Builder</h4>
A companion command-line tool to Scene Builder, focusing on generating animation cache scenes.<br>
For a given shot, it creates a new or updated Maya scene populated with animation and static caches.<br>
<br>
When integrated into a Mangrove workflow graph, it enables the automatic generation of cache scenes either directly from caches or by first caching animation data from the animation scene.<br>
<br>

<h4>Scene Manager</h4>
An advanced Maya reference manager.<br>
The tool analyzes a scene based on a shot description, listing all present and missing references.<br>
Outdated, missing, or extra references are highlighted to warn users.<br>
Through the tool's UI, each reference can be loaded or unloaded, updated by selecting the latest or a specifc version, or even replaced by another entity.<br>
<br>
Additionally, the tool inspects other objects present in the scene, and based on their names and namespaces try to determine their possible links to project entities or assets.<br>
<br>

<h4>Other Tools</h4>
Several smaller tools were also created to support artists with specific tasks:
<ul>
<li><b>Playblast Generator</b>: For a specific camera in a shot, generate a playblast video for quick review.</li>
<li><b>Turntable Generator</b>: Generate 360° views of assets, customizable through a set of properties (camera settings, view angle, speed, etc.).</li>
<li><b>Attrizard</b>: Attribute manager that enables batch editing of attributes across multiple objects (get/set/add/delete).</li>
<li><b>Megascans Shader Template</b>: Automatically build and assign shaders to Megascans assets within a scene.</li>
<li><b>Camera Direction</b>: Visualize and 'paint' areas visible through the camera frustum to identify scene geometry needing more detail.</li>
<li><b>SpeedTree Reducer</b>: Optimize tree geometry by reducing leaf density while preserving visual fidelity, used to make big scenes lighter as well as for LOD generation.</li>
<li><b>VRay Proxy Swap</b> & <b>VRay Exporter</b>: Manage VRay proxies and streamline exporting workflows.</li>
<li>etc.</li>
</ul>
<br>

<h3>ROLE</h3>
Working primarily in collaboration with the LookDev Supervisor, I was responsible for designing and implementing the tools using Python and Qt.
It was essential to thoroughly understand the user requirements and the different workflows, in order to both identify the needs and propose optimal solutions.<br>
<br>
Through iterative development, the tools grew in complexity and capability, providing solid assistance to departments working with 3D data.<br>
