---
title: "BCS Tools"
subtitle: "Initial Centralized VFX Pipeline"
small_image: "bcs.jpg"
categories: [ "VFX" ]
tags: [ "3ds Max", "Houdini", "Maya", "Nuke", "Python", "Qt" ]
weight: 2
---

<h3>DESCRIPTION</h3>
A centralized pipeline was set up to unify all the tools and make them accessible across every workstation in the studio.<br>
<br>
Main benefits of a centralized pipeline include:
<ul>
<li><b>Network-based tool access:</b> Tools are accessible directly over the network, eliminating the need for local installations. This greatly simplifies maintenance and updates. Local installations can still be supported in cases where performance is a priority.</li>
<li><b>Centralized environment management:</b> Project-specific configurations and user role-based settings (naming conventions, tool preferences, etc.) can be easily managed and applied studio-wide.</li>
<li><b>Seamless tool integration:</b> Both in-house and third-party tools are automatically integrated into the environment, either as command-line utilities (batch scripts) or directly within DCCs.</li>
</ul>

The core pipeline tools consisted of:
<ul>
<li><b>DCC Launchers:</b> The pipeline supports the studio's most commonly used DCC applications (Maya, 3ds Max, Nuke, and Houdini) launched with project-specific environments and preconfigured settings.</li>
<li><b><a href="/pro/badclay/maya_pipeline">Maya Asset Tools</a>:</b> A suite of tools focused on asset management, including import/export and publishing. The original tools were refactored to use the new pipeline framework.</li>
<li><b><a href="/pro/badclay/maya_tools">Maya Advanced Tools</a>:</b> Specialized tools automating or streamlining common tedious tasks.</li>
<li><b><a href="/pro/badclay/mangrove">Mangrove Framework</a>:</b> An open-source graph-based automation system integrated into the pipeline, allowing to visually build and manage production workflows.</li>
<li><b><a href="/pro/badclay/utilities">Utility Scripts</a>:</b> A wide range of scripts used across departments (modeling, lookdev, animation, etc.) to convert, clean, archive, and deliver asset and shot data.</li>
</ul>
<br>

<h3>ROLE</h3>
To streamline and standardize tool development across the studio, I designed and implemented a Python-based development framework.<br>
<br>
The framework provided:
<ul>
<li>Common utility modules for file I/O, environment handling, UI building, version control, logging, etc.</li>
<li>Tool templates composed of abstract base classes, designed to accelerate the development of new tools (tailored for different DCCs or standalone execution).</li>
</ul>

New tools could rapidly and easily be implemented from templates, composed of a core module (holding the logic), and optional UI or batch modules (or both) depending on the usage context.
Additionally, they could directly use the utility modules to access common pipeline operations.<br>
<br>
Existing tools were refactored to adopt the new framework, improving consistency, maintainability, and scalability.<br>
<br>
In addition to development, I was responsible for the ongoing maintenance and support of the pipeline, ensuring environments and configurations remained up to date, and integrating new in-house or third-party tools as needed.<br>
