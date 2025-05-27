---
title: "Nuke Nodes"
subtitle: "Custom Nuke Nodes to streamline compositing workflows"
small_image: "logos/nuke.png"
weight: 0
categories: [ "VFX" ]
tags: [ "Nuke", "Python", "SG/Flow" ]
images_copyright: "UFX STUDIOS"
#images:
#- src: "..."
#  title: "..."
resources:
- src: "logos/nuke.png"
  title: "Nuke"
---

<h3>DESCRIPTION</h3>
Creation of custom Nuke nodes to automate pipeline related tasks, allowing compositors to concentrate on creative work rather than technical processes.<br>
The developed nodes were the 'Output', 'Precomp' and 'Post' nodes, each with their specific purpose.<br>
<br>

<h4>Output Node</h4>
Generates data that will be used downstream in the VFX workflow, essentially the rendered images sequence.<br>
Its main tasks include:
<ul>
<li>Rendering the image sequence</li>
<li>Generating preview video</li>
<li>Adding slate and overlays</li>
<li>Publishing to Flow (formerly ShotGrid)</li>
<li>Copying the Nuke script and rendered outputs to the vault (locked directory on the file system)</li>
</ul>
The node also manages file versioning to prevent overwriting previously published data.<br>
<br>

<h4>Precomp Node</h4>
Functions similarly to a standard precomp node, but with added features for pipeline integration (essentially versioning and publishing).<br>
The generated output can then be used in other compositions through standard Read nodes.<br>
<br>

<h4>Post Node</h4>
Applies final processing to the image stream, such as:<br>
<ul>
<li>Converting OCIO colorspace</li>
<li>Configuring color channels</li>
<li>Reframing and cropping</li>
<li>Applying LUTs</li>
<li>etc.</li>
</ul>
<br>

<h3>ROLE</h3>
In collaboration with the compositing leads:
<ul>
<li>Continued and completed the refactoring of the existing Output node, to simplify its usage and maintainability, and increase its flexibility.</li>
<li>Developed a new Precomp node, building on the Output node.</li>
<li>Developed a new Post node, partly reusing removed parts from the previous Output node.</li>
</ul>
The custom nodes combine Nuke node graphs with specific properties and embedded Python scripts to handle pipeline integration and interaction with Flow.<br>
