---
title: "CATIA V5 Extension - Commands"
subtitle: "Custom Commands and Tools for CATIA V5"
image: "head.jpg"
image_copyright: "SONACA"
small_image: "catia.jpg"
categories: [ "TODO-sonaca-catia-extension" ]
tags: [ "C++", "CAA RADE", "VB", "SQL", "HTML", "CATIA V5", "VPM", "Visual Studio" ]
images_copyright: "SONACA"
images:
- src: "bounding_box_calculation-result.gif"
  title: "Bounding Box Calculation - Result"
- src: "coord_extraction-dialogbox.gif"
  title: "Points Coordinates Extraction"
- src: "rule_design_inspector-1-dialogbox.gif"
  title: "Rule Design Inspector - Dialog Box"
- src: "rule_design_inspector-2-comment.gif"
  title: "Rule Design Inspector - Result"
- src: "screw_pitching_definition-result.gif"
  title: "Screw Pitching Definition - Result"
- src: "settingup_sheet-dialogbox.jpg"
  title: "Setting Up Sheet Creation - Dialog Box"
- src: "settingup_sheet-result.gif"
  title: "Setting Up Sheet Creation - Result"
- src: "smooth_surface-dialogbox_1rear.gif"
  title: "Smooth Surface - Dialog Box 1"
- src: "smooth_surface-dialogbox_refine.gif"
  title: "Smooth Surface - Dialog Box 2"
- src: "smooth_surface-result_refine.gif"
  title: "Smooth Surface - Refine Result"
- src: "smooth_surface-result_surfgen.gif"
  title: "Smooth Surface - Surf Generation Refine"
- src: "straighten_profile-inputs.gif"
  title: "Straighten Profile - Inputs"
- src: "surf_dist_analysis-precision.gif"
  title: "Surface Distance - Dialog Box"
- src: "surf_dist_analysis-result.gif"
  title: "Surface Distance - Result"
- src: "symmetrical_positioning-more.gif"
  title: "Symmetrical Positionning - Dialog Box"
resources:
- src: "logos/airbus.jpg"
  title: "AIRBUS"
- src: "logos/bombardier.jpg"
  title: "BOMBARDIER"
- src: "logos/dassault.jpg"
  title: "DASSAULT"
- src: "logos/embraer.jpg"
  title: "EMBRAER"
---

<b>CLIENT:</b> SONACA, as external consultant<br>

<b>DESCRIPTION</b><br>
Manufactured parts a SONACA being aimed at the airspace industry, many specific similar tasks have to be done by the designers and engineers.<br>
To assist and accelerate their work, a set of commands and tools have been developed over the years, providing a powerful extension to the CATIA V5 design software.<br>
The main commands I had to work on were:<br>
- <b>Smooth Surface:</b> From a set of separate surfaces, the tool had to generate a single smooth continuous surface following and covering the original ones as much as possible. Parametrisation allowed to specify some aspects such as the maximum curving or thickness of the surface, as well as how precisely it had to follow the original surfaces.<br>
- <b>Sheet Creation:</b> The tool was used to generate plans aimed at the cutting machines, providing information required by the different machines depending on the selected configuration. The plans could then be automatically read by the machines directing how to cut parts in metal sheets.<br>
- <b>Rule Design Inspector:</b> Tool verifying that CAD models are satisfying a set of defined rules, either by highlighting invalid components or by automatically applying required modifications, thus validating the engineers work.<br>

<b>ROLE</b><br>
As a CAD Tools Developer, I was responsible for the maintenance and support of the existing tools, as well as for the development of new ones requested by the different departments.<br>
