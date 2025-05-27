---
title: "OpenPype"
subtitle: "OpenPype VFX Pipeline with ftrack"
small_image: "logos/openpype.png"
small_url: "https://openpype.ynput.io/"
categories: [ "VFX" ]
tags: [ "ftrack", "OpenPype", "Python", "Qt", "Scripting", "VB" ]
images_copyright: "Bad Clay Studio"
images:
- src: "1_openpype_settings.png"
  title: "OpenPype Settings"
- src: "2_ftrack_projects.jpg"
  title: "ftrack Projects"
- src: "3_ftrack_prj_template.png"
  title: "ftrack Project Creation from Excel Template"
- src: "4_shot_description.png"
  title: "Shot Description in Excel"
- src: "5_process_monitor.png"
  title: "Process Monitor"
- src: "6_dailyqc_plugins_diff.png"
  title: "DailyQC vs Publish Plugins"
resources:
- src: "logos/openpype.png"
  title: "OpenPype"
weight: 7
---

<h3>DESCRIPTION</h3>
Following <a href="pro/badclay/rnd">extensive research and experimentation</a>, we built our pipeline around OpenPype, leveraging its strong integration with ftrack.<br>
<br>
While both OpenPype and ftrack provide solid out-of-the-box functionality, extensive customization was necessary to align with the studio's needs.
Early in development, we identified areas requiring modifications, ranging from configuration and code changes to the creation of entirely new components.<br>
<br>
The main areas of focus for the OpenPype-based pipeline included:
<ul>
<li>Pipeline setup and management.</li>
<li>Customization to align with studio's workflows (settings, project configurations, plugins, feature enhancements, etc.).</li>
<li>Tool integration maintenance, ensuring compatibility with evolving and new tools.</li>
<li>Regular updates to the latest OpenPype versions, while maintaining compatibility with custom developments.</li>
<li>Contribution to the open-source repository, including bug fixes and feature proposals.</li>
<li><a href="pro/badclay/training">Training and support</a> for artists, producers, and technical departments.</li>
</ul>
<br>
This resulted in ongoing integration and refinement of the pipeline to manage the studio workflows, focusing primarily on ftrack, Maya and Nuke.<br>
<br>

<h3>ROLE</h3>

<h4>Setup and Configuration Management</h4>
Proper setup and configuration were essential for the system to function effectively, requiring phases of experimentation and testing.<br>
Time was needed to fully understand the system's capabilities and get the most out of it.<br>
<br>
We initially started with OpenPype v2, later transitioning to v3, which offered enhanced customization, improved functionality, and better support.<br>
Our setup included a local installation, with a dedicated local ftrack event server and database.<br>
<br>
Once the system was operational, we began migrating existing projects (previously managed solely within ftrack) into the new OpenPype-based pipeline.<br>
<br>
Managing project configurations involved a range of ongoing tasks, including:
<ul>
<li>Setting up and configuring new projects</li>
<li>Adapting configurations as new features or components were introduced</li>
<li>Updating supported software versions</li>
<li>Implementing temporary or project-specific adjustments</li>
<li>etc.</li>
</ul>
<br>

<h4>Plugin Development and Management</h4>
Plugins are a core component of OpenPype, be it for creating or publishing data.<br>
The system includes a range of built-in plugins designed for specific tasks, often associated to particular DCCs.<br>
<br>
While many of these default plugins are suitable for standard VFX workflows, several modifications were required by the studio:
<ul>
<li>Adapt existing plugins for better compatibility with internal tools and workflows</li>
<li>Develop custom plugins to support studio-specific processes</li>
<li>Centralize plugin management via a shared network location, ensuring that updates are instantly accessible across the studio</li>
<li>Enhance filtering capabilities, including support for project-specific plugin profiles to improve flexibility and control</li>
</ul>
<br>

<h4>ftrack Project Creator</h4>
To streamline and automate project setup, we developed a custom project creation tool, fully integrated into the ftrack environment.<br>
<br>
The tool, based on a project description in an Excel file, creates a new project in the pipeline, with associated data in ftrack, OpenPype and the file system.<br>
<br>
The production team creates a new project by filling the Excel template with project specific information.<br>
The tool will then parse the file and create the project with appropriate configuration and structure.<br>
<br>
Before this tool, the studio used an Excel template for project creation, the Project Structure Generator.<br>
The template was creating the appropriate file structure on the network based on rules and filled in data, via a VBA macro.<br>
Over time, this solution was improved with various automation enhancements, but it lacked integration with ftrack and OpenPype.<br>
<br>
The new tool replaces that workflow, offering a fully integrated solution that creates the entire project setup in a single operation.<br>
The Excel template no longer relies on macros, as all logic and processing are now handled within the pipeline itself.<br>
<br>

<h4>ftrack Delivery Tool</h4>
We developed a custom ftrack action that automates the creation of delivery packages directly from within the ftrack interface.<br>
<br>
This delivery system allows the execution of a configurable sequence of operations on selected files, based on their file type and associated DCC.<br>
The operations can include:
<ul>
<li>In-DCC tasks, using scripts written in Python or the native scripting language of the DCC (Maya's MEL or Nuke's TCL).</li>
<li>Pre- and post-processing steps, executed as standalone Python scripts, to handle tasks outside the DCC environments.</li>
</ul>
<br>
Once all operations are completed successfully, the tool generates finalized delivery archives.<br>
<br>
Definitions and organization of these operations are handled via JSON configuration files, managed at project level for the different clients.<br>
<br>

<h4>Process Monitor Addon</h4>
The Process Monitor module was developed to automate time tracking for artists, eliminating the need for manual time logging.<br>
<br>
The tool keeps track of the running applications, and manages session timers base on when applications are opened or closed.<br>
It integrates with the ftrack time log system combined with OpenPype's timer management module.<br>
<br>
The tool also added the possibility to visualize currently running applications handled by the pipeline, showing the active one, and allowing to user to manually set the active one.<br>
When opening or closing applications, the system either updates the active application (if unambiguous), or prompts the user to soecify it.<br>
<br>
This addon streamlines time tracking across the studio, ensuring reliable data for production management while reducing manual overhead for artists.<br>
<br>

<h4>Dual Versioning</h4>
We started working on a system to enhance version management by supporting dual versioning, which would allow for both internal daily WIP versions and standard published versions.<br>
<br>
The system enabled artists to publish their work daily, with a reduced or tailored set of QC checks, validating work-in-progress without requiring final polish.<br>
<br>
This gave team leads better visibility into ongoing progress, while also allowing more flexible tasks handovers, especially during unexpected absences.<br>
<br>
Daily publishes were managed using our custom DailyQC tool, built on a <a href="pro/badclay/qc_tools">modified version of Pyblish (and QuickQC)</a>, and fully integrated into OpenPype.<br>
<br>
The DailyQC tool operated alongside OpenPype's standard publishing system, using dedicated configurations and plugins tailored for internal daily submissions.<br>
