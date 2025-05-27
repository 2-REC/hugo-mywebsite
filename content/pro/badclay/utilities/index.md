---
title: "Pipeline Utilities"
subtitle: "Utility Scripts for VFX"
small_image: "terminal-solid.png"
categories: [ "VFX" ]
tags: [ "3ds Max", "Maya", "Python", "Scripting" ]
weight: 5
---

<h3>DESCRIPTION</h3>
In addition to the <a href="pro/badclay/maya_tools">Advanced Maya Tools</a>, a suite of command-line utilities was developed to support a wide range of production needs.<br>
These tools focused on exporting, converting, cleaning, and archiving asset and shot data across various DCCs.<br>
<br>

<h4>Conversion Tools</h4>
<ul>
<li><b>color_convert</b>:<br>
Batch conversion of textures between OCIO color spaces.</li>
<li><b>convert_tx_textures</b>:<br>
Batch conversion of bitmap textures to TX textures for Arnold renderer.</li>
<li><b>convert_tiled_exr</b>:<br>
Batch conversion of texture files to tiled EXRs with appropriate color spaces using VRay tools.</li>
<li><b>usd_convert</b>:<br>
Conversion of Maya .ma file to USD. Extracts specific nodes and their transforms, maintaining hierarchy.</li>
</ul>
<br>

<h4>Cleaning & Update Tools</h4>
<ul>
<li><b>fix_references</b>:<br>
Update/fix references in file. Replaces outdated paths with latest or valid versions.<br>
Used for example for rig updates in animation files.</li>
<li><b>fix_namespaces</b>:<br>
Update/fix namespaces in file. Sets correct namespaces based on associated file names.</li>
<li><b>maya_clean_file</b>:<br>
Delete unwanted nodes or commands in .ma files using configurable JSON templates.<br>
Useful for removing unused plugins or custom data.</li>
<li><b>maya_commands_to_json</b>:<br>
Convert MEL commands to generalized JSON rules for use with the 'maya_clean_file' utility.</li>
<li><b>maya_virus</b>:<br>
Variation of the 'maya_clean_file' utility specifically for removing viruses from Maya .ma file.<br>
The tool was developed in addition to the GUI tool to allow batch processing on entire file systems.</li>
<li><b>remove_arnold_deps</b>:<br>
Variation of the 'maya_clean_file' utility specifically for stripping out all Arnold renderer plugin dependencies.</li>
</ul>
<br>

<h4>Import/Export & Archiving Tools</h4>
<ul>
<li><b>maya_delivery</b>:<br>
Automated archive/packaging tool. Cleans files (virus scan, reference path update), optionally converts to .mb, and copies deliverables to a output directory with date.</li>
<li><b>extract_animation_controllers / extract_rest_poses</b>:<br>
Extract animation controllers or rest poses from rigged assets.</li>
<li><b>insert_rest_poses</b>:<br>
Add rest pose keys and pre-roll frames to animation timelines.</li>
<li><b>extract_project_data</b>:<br>
Convert project configuration data from Excel to JSON for integration into pipeline tools.</li>
<li><b>extract_scene_description</b>:<br>
Extract scene description for a specific shot from Excel file and convert it to JSON.</li>
<li><b>extract_sim_cache</b>:<br>
Export tyFlow simulation caches in 3ds Max. Updates references (camera and assets), exports simulation caches, and generates playblasts.</li>
<li><b>mirror_data</b>:<br>
Synchronize files between server and local workstation in both directions, based on defined rules.</li>
</ul>
<br>
Many of these utilities were integrated into <a href="pro/badclay/mangrove">Mangrove workflows</a>.<br>
<br>

<h3>ROLE</h3>
I was actively engaged with artists and team leads to understand their needs, and identify priorities.<br>
From there, I had to analyze and offer solutions.<br>
<br>
The utilities were developed using different scripting languages depending on the case (Python, Shell, MEL, MAXScript, etc.).<br>
Some tools were fully standalone, while others were designed to run within the command-line environments of DCC applications (such as mayapy for Maya).<br>
<br>
In certain cases, external libraries and dependencies were integrated to handle more complex processes.<br>
