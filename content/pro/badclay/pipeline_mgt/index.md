---
title: "Pipeline Management"
subtitle: "VFX Pipeline Development & Maintenance"
small_image: "maintenance.png"
categories: [ "VFX" ]
tags: [ "ftrack", "Maya", "Nuke", "OpenPype", "Python", "Scripting" ]
weight: 8
---

<h3>DESCRIPTION</h3>

A VFX pipeline is constantly evolving, requiring ongoing maintenance to adapt to the studio's growing needs.<br>
<br>
Beyond providing daily <a href="/pro/badclay/training">support and training</a>, several key tasks were involved in maintaining the pipeline, including:
<ul>
<li>Managing and maintaining <a href="/pro/badclay/openpype">our OpenPype setup</a></li>
<li>Supervising the local ftrack event server instance</li>
<li>Adjusting project environments and software configurations</li>
<li>Conducting R&D to optimize workflows</li>
<li>Developing and/or integrating new tools into the pipeline</li>
<li>Creating and adapting installation scripts</li>
<li>Testing and improving development processes</li>
<li>Administering the local GitLab development server</li>
<li>Collaborating closely with the IT team on infrastructure decisions</li>
</ul>
<br>

<h3>ROLE</h3>
As the sole person responsible for the studio's pipeline development and setup, I was constantly busy maintaining the core pipeline and its integrated tools.<br>
In addition to ensuring that everything functioned smoothly, I was consistently looking for new solutions to enhance workflows and improve efficiency throughout every department.<br>
<br>
My role required actively listening to feedback from supervisors, production teams, and artists, balancing the time and cost of building new solutions against leveraging existing tools.<br>
It required me to keep researching, testing and evaluating with target users for additional tools and libraries across various stages of production.<br>
<br>
I explored plugins and tools for the main DCCs used at the studio (Maya, 3ds Max, Nuke, and Houdini), as well as standalone tools like:
<ul>
<li>Gaffer (look development)</li>
<li>Deadline, CGRU, and OpenCue (render farm management)</li>
<li>Cortex, NXT (development frameworks)</li>
<li>Etc.</li>
</ul>
<br>
Many of these open-source tools required building from source necessitating Windows-specific scripting adjustments and debugging  (as often designed for Linux environments).<br>
Libraries such as OCIO, OIIO, USD, and Alembic required one or more specialized build environments using Visual Studio, MSYS/MinGW, and CMake.<br>
<br>
<br>
I also focused on optimizing our development workflows.<br>
One of the first steps was setting up a local GitLab server to centralize and organize code repositories and tasks.<br>
<br>
To streamline deployment, I developed automated installation scripts for tools across the network and artist workstations, significantly speeding up rollout times.<br>
<br>
To separate development from production environments, I experimented with sandboxing and virtualization tools such as Sandboxie and virtual machines.<br>
It worked well with pipeline developments, but was not easily manageable with ftrack being remotely hosted.<br>
