---
title: "RAD"
subtitle: "Competitive Mixed-Reality Game"
image: "ingame.png"
small_image: "rad_logo.jpg"
weight: 0
categories: [ "Gaming", "R&D", "VR" ]
tags: [ "Android", "C#", "JavaScript", "Unity" ]
images_copyright: "RMIT"
images:
- src: "0_design.jpg"
  title: "Design notes"
- src: "1_components.png"
  title: "Components diagram"
- src: "2__demo.jpg"
  title: "Demo"
- src: "3_festival.jpg"
  title: "Vietnam Festival Of Media & Design"
- src: "4_play.jpg"
  title: "Gameplay session"
- src: "5_tv.jpg"
  title: "Showcased on Vietnam's national TV"
- src: "6_security.jpg"
  title: "Even the security guard gave it a try! XD"
- src: "rad_front.jpg"
  title: "RAD Flyer recto"
- src: "rad_rear.jpg"
  title: "RAD Flyer verso"
resources:
- src: "logos/unity.png"
  title: "Unity"
- src: "logos/kinect.png"
  title: "Kinect"
---
<style>
#demo_video {
    width: 50%;
}
@media (max-width: 992px) {
    #demo_video {
        width: 100%;
    }
}
#caption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
</style>
<figure id="demo_video" class="no-photoswipe">
    <img src="/pro/rmit/rad/rad_demo.gif" style="background-color: black;" width="100%" alt="" title="RAD" alt="RAD gameplay">
    <figcaption id="caption">RAD gameplay (VTV footage)</figcaption>
</figure>
<br>
<h3>DESCRIPTION</h3>
After <a href="/pro/rmit/others">exploring several mixed reality project ideas</a> with the team, we ultimately developed RAD.<br>
<br>
RAD is a modern, single-player reimagining of Pong, designed for mixed reality (AR/VR).<br>
The project served as a research initiative to explore the potential of mixed reality gaming without relying on a VR headset.<br>
<br>
The resulting proof-of-concept prototype also demonstrates how simple gameplay mechanics combined with immersive AR/VR technology can create an engaging and entertaining experience.<br>
<br>
The project is available as a <a href="https://gitlab.com/2-REC/rad" target="_blank">GitLab repository</a>.<br>
<br>

<h4>Gameplay</h4>
Gameplay takes place inside a virtual cage with one open side behind the player.<br>
A ball continuously bounces around within the cage, and the player's goal is to keep it from escaping through the open rear.<br>
<br>
Using virtual paddles controlled by real-time hand movements, the player must deflect the ball to keep it in play.<br>
<br>
Each time the ball bounces on a paddle, a point is added, and the ball's speed is increased, gradually raising the difficulty.<br>
<br>
If the ball escapes through the open side, the game is lost.<br>
To win, the player must keep the ball in play for a full minute.<br>
Once the timer expires, the game ends, and the final score is recorded on a high-score leaderboard for others to challenge.<br>
<br>
The player wears a headset made from a mobile phone, which overlays the 3D virtual environment onto the real world.<br>
The entire body of the player is tracked in real time and his movements are replicated in the game's environment, creating an immersive and responsive experience.<br>
<br>
Spectators can view the action from outside the virtual world via an external screen, which displays a live representation of the player inside the cage.<br>
<br>

<h4>Architecture</h4>
The game architecture follows a client-server model.<br>
<br>
The server manages the core gameplay logic and real-time tracking of the player's body.<br>
It also transmits the positions of the player's body parts, paddles, and the ball to the client.<br>
<br>
The client tracks the player's head orientation, and in combination with the data received from the server, is allowed to render the scene as if the player were wearing a virtual headset.<br>
<br>
This setup creates a convincing mixed-reality experience by synchronizing real world physical movements with the virtual environment.<br>
<br>
The game was developed using the Unity game engine.<br>
The server runs on a Windows PC, with a connected Microsoft Kinect device for the body tracking.<br>
The client runs on an Android mobile device (Google Pixel 2 in our case), using the device's sensors* to track the player's head orientation.<br>
<br>

<h4>Reception</h4>
The game was showcased at the 2019 <a href="https://vfcd.events/en/home/" target="_blank">Vietnam Festival Of Media & Design</a> in Hanoi, where it attracted significant attention.<br>
Its intuitive controls, fast-paced sessions, and competitive high-score system made it an instant hit. Attendees lined up to take their turn and try to climb the leaderboard.<br>
<br>
The positive reception highlighted the game's potential beyond a prototype, with many viewing it as a fresh and innovative take on interactive entertainment.<br>
<br>
The project, part of the festival, was also featured on Vietnam's national television channel VTV1.<br>
<br>

<h3>ROLE</h3>
Our four-member team collaborated closely on developing the concept and determining how best to bring it to life.<br>
After evaluating various gameplay components, hardware options, and implementation strategies, we agreed on a clear direction for the project.<br>
<br>
As the sole developer, I was responsible for all software development tasks, including building the game in Unity.<br>
<br>
The first step involved setting up and testing the Kinect SDK within Unity. The Kinect device conveniently provides body tracking data along with video and depth images, which had to be adapted for game logic, transmission and display purposes.<br>
<br>
Next, a multiplayer-like system was needed to support the client-server architecture of the game.<br>
The SpaceBrew toolkit was chosen for the server management and communication with the clients.<br>
The SpaceBrew server was fully integrated into the project, allowing it to be launched and controlled directly from within Unity. I created a separate <a href="https://github.com/2-REC/unity-multi" target="_blank">Unity template project</a> that includes a customized version of SpaceBrew along with a built-in Node.js setup. On the client side, integration was based on the spacebrewUnity library.<br>
<br>
To enhance the overall experience, I incorporated additional features such as a main title screen, settings menu, and screens for success, failure, and high scores. These were managed through a previous <a href="https://github.com/2-REC/unity-state-engine" target="_blank">personal Unity project</a> dedicated to handling game state transitions.<br>
<br>

<br>
At the start of the project, we discovered that head tracking using the mobile device's built-in sensors was unreliable, suffering from noticeable drift during gameplay. This caused the in-game environment to fall out of sync with the real world, making the game unplayable.<br>
<br>
We explored several <a href="/pro/rmit/head_tracking">potential solutions</a> to address this issue.<br>
However, after switching to a Google Pixel device, and given the short duration of gameplay sessions, the drifting problem was no longer present, eliminating the need for additional fixes.<br>
<br>
To accommodate both scenarios, an option was added to the client application to play with or without the drift compensation solution.<br>
