---
title: "Head Tracking"
subtitle: "Tracking using OpenCV"
#image: ""
small_image: "headset.jpg"
weight: 1
categories: [ "3D", "Computer Vision", "Embedded", "Gaming", "R&D", "VR/AR" ]
tags: [ "Android", "C#", "OpenCV", "Unity" ]
images:
- src: "headset.jpg"
  title: "Headset 'balls'"
- src: "algo.jpg"
  title: "Pseudo algorithm notes"
resources:
- src: "logos/unity.png"
  title: "Unity"
- src: "logos/opencv.png"
  title: "OpenCV"
- src: "logos/kinect.png"
  title: "Kinect"
---

<h3>DESCRIPTION</h3>
During the development of the <a href="pro/rmit/rad">RAD game project</a>, significant drifting issues were encountered with head tracking when using the mobile device's sensors.<br>
The device's gyroscope can suffer precision problems, causing the virtual environment to gradually fall out of alignment with the player's real-world orientation.<br>
This made the game unplayable, as situations occur where players might be facing one direction while the game reacted as if they were facing another.<br>
<br>
To address this, we explored ways to correct the offset by realigning the virtual orientation with the real-world.<br>
<br>
Our initial approach involved using augmented reality (AR) on the client's mobile device.<br>
The system was globally working well, but not enough, as AR tracking was not mature as it is today. Lighting was also a big issue, as varying conditions could completely break the game.<br>
<br>
Additionnally, it was very demanding on the portable device, slowing down the game and draining the battery quickly.<br>
<br>
We then explored an alternative solution: using the Kinect's image and depth data for head tracking.<br>
Through image analysis, the orientation of the player's head could be estimated and transmitted to the mobile device in real time.<br>
<br>
The system works, but it has its own limitations: Tracking can be lost with fast movements and occlusions.<br>
As such, it remains an experimental, proof-of-concept solution.<br>
<br>
The solution was initially developed to fix drifting issues with sensors, but more recent devices with more reliable sensors, and short duration of gameplay, made it unnecessary as the drifting issue became negligible.<br>
The additional tracking system was no longer essential but remains a valuable fallback, enabling gameplay on devices with unreliable sensors or even those without sensors at all.<br>
<br>

<h3>ROLE</h3>
As the developer, I was responsible for the research and development efforts related to solving the head tracking drift issue.<br>
This involved investigating various potential solutions, assessing their feasibility and complexity. I then conducted tests on the most promising ones, determining the most appropriate.<br>
<br>
AR was the first option.<br>
I evaluated several AR libraries available on Android, each offering different advantages and drawbacks.<br>
Vuforia was ultimately chosen for its ease of setup and reliable performance at the time.<br>
This method relied on placing image markers in the physical environment, allowing the AR library to recognize fixed points and determine the device's position and orientation.<br>
<br>
As it was not good enough, an alternative solution based on image analysis on the server side was developed.<br>
For this, I selected the OpenCV library, which I had to integrate into Unity.<br>
To support this integration, I created a <a href="https://github.com/2-REC/unity-opencv-boilerplate" target="_blank">Unity-OpenCV template project</a> and a <a href="https://github.com/2-REC/unity-kinect-tracking" target="_blank">sample project combining OpenCV and Kinect integration</a>.<br>
<br>
A method had to be developed to efficiently do the tracking, using color-based object tracking.<br>
<br>
The system works by tracking color balls attached to the player's headset (2 balls minimum are required, of distinct bright colours).<br>
The balls can optionally be lit if lighting is an issue.<br>
This made it easier for the system to isolate and track specific color blobs in the video feed.<br>
<br>
The positions of the balls are tracked by combining image analysis (blob detection and tracking) with the Kinect's depth data.<br>
Combining the information, the 3D positions of the balls are determined, as well as their spatial relationship to one another.<br>
By comparing these real-time measurements with a predefined model, the system can estimate the pose of the headset, and by extension, the orientation of the player's head.<br>
