---
title: "Pipeline R&D"
subtitle: "VFX Production & Asset Management Solutions"
small_image: "brain.png"
categories: [ "VFX" ]
tags: [ "JavaScript", "Python", "Qt" ]
images:
- src: "..."
  title: "..."
  copyright: "..."
resources:
- src: "logos/aquarium.png"
  title: "Aquarium"
- src: "logos/damas.png"
  title: "Damas"
- src: "logos/ftrack.png"
  title: "ftrack"
- src: "logos/kabaret.png"
  title: "Kabaret"
- src: "logos/kitsu.png"
  title: "Kitsu"
- src: "logos/openpype.png"
  title: "OpenPype"
- src: "logos/plex.png"
  title: "Plex"
- src: "logos/prism.png"
  title: "Prism"
- src: "logos/shotgrid.png"
  title: "ShotGrid/Flow"
- src: "logos/tactic.png"
  title: "TACTIC"
weight: 6
---

<h3>DESCRIPTION</h3>
Building a complete in-house pipeline from scratch with just a single developer was unrealistic, despite being challenging and very interesting.<br>
We thus decided to look for existing solutions that could meet the studio's needs. A wide variety of existing tools and solutions were explored, to identify the best fit.<br>
<br>
For production management, we assessed industry-standard as well as lesser known solutions, including <a href="https://www.autodesk.com/company/autodesk-platform/me" target="_blank">ShotGrid</a> (formerly Shotgun, now Flow), <a href="https://www.ftrack.com" target="_blank">ftrack</a>, <a href="https://www.cg-wire.com/kitsu" target="_blank">Kitsu</a>, <a href="https://www.southpawtech.com/tactic-open-source" target="_blank">TACTIC</a>, and <a href="https://fatfi.sh/aquarium/" target="_blank">Aquarium</a>.<br>
<br>
In parallel, we explored a range of open-source pipeline and asset management tools such as <a href="https://ynput.io/openpype/" target="_blank">OpenPype</a> (now AYON), <a href="https://prism-pipeline.com/" target="_blank">Prism</a>, <a href="https://github.com/alexanderrichtertd/plex" target="_blank">Plex</a>, <a href="http://damas-software.org/" target="_blank">Damas</a>, and <a href="https://www.kabaretstudio.com/" target="_blank">Kabaret</a>.<br>
<br>
Ultimately, we chose a combination of OpenPype and ftrack, which formed the foundation of <a href="/pro/badclay/openpype">our pipeline</a>.<br>
This setup has since undergone extensive customization to better align with the evolving workflow requirements.<br>
<br>

<h3>ROLE</h3>
<h4>Production Managers</h4>
To identify the best production management tool for our needs, I conducted an in-depth analysis of existing solutions.<br>
Each was evaluated based on maturity, features, customizability, support options, and community engagement.<br>
<br>
The main systems considered were Flow/ShotGrid, ftrack, Kitsu, TACTIC, and Aquarium.<br>
<br>
Being open-source and locally deployable, Kitsu and TACTIC were the first candidates I tested extensively through local installations.<br>
<br>
Kitsu impressed us with its clean interface and focused feature set, but ultimately it lacked several capabilities required by the studio (though it has since improved considerably).<br>
<br>
TACTIC, on the other hand, felt overly complex and more suited to large enterprises than VFX studios.<br>
A specialized VFX version existed but was outdated and buggy. I made several code adjustments to improve compatibility with newer environments, but persistent issues and the lack of support for the open-source version led us to discard it.<br>
<br>
I later came across Aquarium, which showed strong potential but was still in early development and not production-ready.<br>
<br>
ftrack was already in use at the studio, so we already knew what it was capable of.<br>
<br>
ShotGrid couldn't be directly tested due to licensing constraints, but internal knowledge from the team provided sufficient insights and made testing unnecessary.<br>
<br>
Throughout the evaluation process, I regularly presented findings to studio leadership, the production team and supervisors. I also organized <a href="/pro/badclay/training">basic training sessions</a> to let team members test and give feedback on each solution.<br>
<br>
In the end, we chose ftrack, which offered the best balance of features, cost, and integration potential.<br>
ShotGrid was a strong contender, but its higher pricing and the lack of integration into OpenPype (see below) made us choose ftrack.<br>
<br>

<h4>Pipeline</h4>
In parallel to production management research, I also explored open-source pipeline and asset management tools.<br>
<br>
The main ones were OpenPype (now AYON), Prism, Plex, Damas and Kabaret.<br>
<br>
Prism and Plex were well-designed and user-friendly but seemed tailored more toward smaller teams or individuals.<br>
<br>
OpenPype stood out for its robust feature set, scalability, and customizability. Its integration with ftrack was also a big positive.<br>
Even more, as it is based on Pyblish, we were already familiar with its usage and some of our work could be reused.<br>
<br>
Damas was more of an experimental project with an innovative UI, but it lacked essential features for production use.<br>
<br>
Kabaret was very powerful and flexible, but it was more a development framework on which tools have to be built than a ready to use solution.<br>
I built a few prototype tools with it to test its capabilities, but it required significant development effort to build a usable foundation.<br>
It would be ideal as an added layer to an existing pipeline.<br>
<br>
Ultimately, we built our pipeline around OpenPype, tightly integrated with ftrack, and <a href="/pro/badclay/openpype">adapted it extensively</a> to meet our specific production needs.<br>
