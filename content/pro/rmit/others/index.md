---
title: "Gaming R&D"
subtitle: "Exploring game ideas in XR"
small_image: "oculus.jpg"
image: "images/0_lab.jpg"
image_copyright: "RMIT"
weight: 2
categories: [ "3D", "Computer Vision", "Embedded", "Gaming", "GUI", "R&D", "VR/AR", "Web" ]
tags: [ "Android", "Blender", "C#", "CSS", "HTML", "JavaScript", "OpenCV", "Unity" ]
images_copyright: "RMIT"
images:
- src: "0_lab.jpg"
  title: "RMIT's Mixed Reality Lab"
- src: "1_hardware.jpg"
  title: "Some of the hardware setup"
- src: "2_playing.jpg"
  title: "Me playing with VR"
- src: "3_brain_map.jpg"
  title: "Brainstorming"
- src: "4_blind.jpg"
  title: "'The Blind Swordsman' initial concept"
- src: "5_blind.jpg"
  title: "'The Blind Swordsman' expanded"
resources:
- src: "logos/8thwall.png"
  title: "8th Wall"
- src: "logos/arcore.png"
  title: "ARCore"
- src: "logos/easyar.png"
  title: "EasyAR"
- src: "logos/gopro.png"
  title: "GoPro"
- src: "logos/htcvive.png"
  title: "HTC Vive"
- src: "logos/kinect.png"
  title: "Kinect"
- src: "logos/matterport.png"
  title: "Matterport"
- src: "logos/oculus.png"
  title: "Oculus"
- src: "logos/unity.png"
  title: "Unity"
- src: "logos/vuforia.png"
  title: "Vuforia"
---

<h3>DESCRIPTION</h3>
The initial concept focused on creating an experience that simulates visual impairment.<br>
The goal was to design a game environment where individuals with visual disabilities could participate on par with others.<br>
<br>
Early ideas involved "blindfolding" the player, limiting or entirely removing visual input from the VR display, and instead relying heavily on spatial audio cues for navigation and interaction.<br>
Some of these concepts were developed into working prototypes.<br>
<br>

<h4>Blind Game (for lack of a better name)</h4>
<u>Mode:</u> Single-player<br>
<u>Concept:</u> The player navigates a tile-based obstacle course with the objective of reaching the end.<br>
<u>Gameplay:</u> Audio cues indicate the proximity and type of obstacles (holes, walls, etc.), guiding the player through the course.<br>
<u>Technology:</u> Developed in Unity, using a VR headset to track the player's position in the 3D environment and play sounds accordingly.<br>
<br>

<h4>The Blind Swordsman</h4>
<u>Mode:</u> Multiplayer (1 vs many)<br>
<u>Concept:</u> One blindfolded player, the "swordsman", confronting multiple opponents.<br>
<u>Gameplay:</u> The main player uses sounds to detect the location of other players who throw virtual projectiles. The aim is to strike the opponents while dodging their attacks.
Opponents can use audio decoys to mislead the blindfolded player or sabotage each other.<br>
<u>Technology:</u> Built in Unity with a client-server architecture. The blindfolded player uses a VR headset, while others play using tablets to aim and launch projectiles.<br>
<br>
As the project evolved, alternative prototypes were explored that moved away from the blindness simulation concept.<br>
<br>

<h4>AR Shooter</h4>
Inspired by "The Blind Swordsman", but with visual input restored to the main player.<br>
<br>
<u>Mode:</u> Multiplayer (1 vs many)<br>
<u>Concept:</u> Set in a closed arena, the main player moves freely while opponents attack from above throwing projectiles.<br>
<u>Gameplay:</u> The main player has to dodge incoming attacks, while shooting towards opponents attempting to strike them back.<br>
<u>Technology:</u> The main player wears a VR headset. Other players interact through tablets, aiming at the main player in the arena represented by a tabletop area enhanced with visual markers for AR tracking.
Optionally, the VR player can switch to a traditional FPS mode using keyboard and mouse.<br>
<br>

<h3>ROLE</h3>
An essential point was whether to use existing systems or develop our own around VR and/or motion capture technologies.<br>
To guide this decision, we needed to evaluate and experiment with available technologies.<br>
<br>
Thanks to the resources provided by the university's mixed reality lab, we had access to a wide range of devices and tools.<br>
Some of the technologies we investigated included:
<ul>
<li>VR headsets such as the HTC Vive and Oculus Rift, as well as smartphone-based devices (similar to Google Cardboard)</li>
<li>Microsoft Kinect</li>
<li>Microsoft HoloLens</li>
<li>Matterport 360 cameras</li>
<li>GoPro cameras</li>
<li>Various positioning sensors and motion capture systems</li>
</ul>
<br>
In addition to testing hardware, we also explored several key areas:
<ul>
<li>Existing AR frameworks on mobile devices (Vuforia, EasyAR, 8th Wall, ARCore, etc.)</li>
<li>Tracking methods for body, hands, head, face, and props through:</li>
    <ul>
    <li>2D and 3D image analysis</li>
    <li>Body tracking using Kinect</li>
    <li>Positioning sensors</li>
    </ul>
<li>Different camera setups, including:</li>
    <ul>
    <li>Front, side, top view</li>
    <li>Single vs multi-camera configurations</li>
    <li>Image vs depth-based</li>
    </ul>
<li>Single-player and multiplayer gameplay options</li>
</ul>
Once the main direction and technologies were determined, I worked on developing the different prototypes in Unity, presenting each iteration to the team during our regular meetings for feedback and refinement.<br>
