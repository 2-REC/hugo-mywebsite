---
title: "Mangrove"
subtitle: "Nodal pipeline manager from 'The Yard VFX'"
small_image: "logos/mangrove_logo.png"
small_url: "https://opensource.theyard-vfx.com/mangrove/"
categories: [ "DB", "VFX", "Web" ]
tags: [ "Python", "Qt", "Scripting" ]
images_copyright: "Bad Clay Studio"
images:
- src: "0_mangrove_graph.jpg"
  title: "Example graph"
  copyright: "The Yard VFX"
- src: "1_settings.png"
  title: "Example settings"
- src: "2_scripts.png"
  title: "Example (in work) script"
resources:
- src: "logos/the_yard_vfx.png"
  title: "THE YARD VFX"
- src: "logos/mangrove_logo.png"
  title: "MANGROVE"
weight: 3
---

<h3>DESCRIPTION</h3>
As the studio began working on larger projects, the need for automation became increasingly critical.<br>
For major productions, such as the Vietnamese family fantasy film <a href="https://www.imdb.com/title/tt14391192/" target="_blank">Trang Ti</a> which required the delivery of over 600 VFX shots, manually building each shot was not manageable and a solution had to be found.<br>
<br>
To streamline repetitive tasks and centralize our production workflows, we adopted the nodal pipeline manager Mangrove, an open-source VFX Framework developed by the French studio <a href="https://theyard-vfx.com/" target="_blank">The Yard VFX</a>.<br>
<br>
Mangrove provides a visual interface where workflows are represented as graphs, with each node corresponding to a specific pipeline step.<br>
These graphs are fully customizable, centralized in a single application, and accessible across the studio.<br>
Mangrove also supports the creation of custom nodes using Python, allowing automation of specific processes and batch management of graph executions.<br>
<br>
While Mangrove offered a strong foundation, we needed to extend its capabilities to fully align with our pipeline requirements.<br>
We thus enhanced Mangrove to support:
<ul>
<li>Event-driven execution, enabling automatic graph execution triggered by specific events or the results of other graphs.</li>
<li>Conditional execution, allowing specific sections of graphs to run depending on defined parameters, and supporting more advanced features like loops, pauses, and replays.</li>
</ul>

Mangrove was integrated into our pipeline, allowing it to interface directly with our internal tools.<br>
New tools were also specifically developed to be used within Mangrove, mostly for the animation workflow.<br>
Additionally, thanks to the integration, Mangrove could be executed either from a global network installation or locally, offering both flexibility and improved performance when needed.<br>
<br>
Despite these efforts, over time we found that Mangrove did not fully meet our expectations. We then began <a href="pro/badclay/rnd">exploring alternative solutions</a>.<br>
<br>
Moreover, the Mangrove project appears to have been discontinued, though it remains accessible as a <a href="https://gitlab.com/RamTheRam/mangrove" target="_blank">GitLab repository</a>.<br>
<br>

<h3>ROLE</h3>
My main tasks related to Mangrove included:
<ul>
<li>Evaluating and testing the framework to understand its capabilities and potential use cases.</li>
<li>Integrating Mangrove into our <a href="pro/badclay/bcs_tools">pipeline</a>, enabling seamless interoperability with and accessibility from our internal tools.</li>
<li>Extending the framework to support more flexible and granular graph execution.</li>
<li>Improving stability by fixing bugs and adding missing features, as it was still under active development.</li>
<li>Designing and implementing workflow graphs using both in-house and third-party tools.</li>
</ul>

The main graph I developed was the animation workflow, which given a list of shot codes, automated the following steps for each shot:
<ul>
<li>Retrieve shot metadata</li>
<li>Build the corresponding Maya scene using the latest assets and animations</li>
<li>Export animation caches</li>
<li>Generate playblasts</li>
</ul>

Custom <a href="pro/badclay/maya_tools">tools</a> and <a href="pro/badclay/utilities">utilities</a> were developed specifically to perform these steps efficiently.<br>
