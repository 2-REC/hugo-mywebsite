---
title_image: "toyota.png"
title: "Drawing Comparison Tool"
subtitle: "Automated Comparison Tool between 2 drawing revisions"
cover_image: "toyota.png"
startDate: "2016-12-01"
endDate: "2017-09-01"
show_title: false
show_subtitle: false
show_subtitle2: false
#show_date: false

categories: [ "Automotive", "CAD", "Consulting", "Image Analysis", "Network", "Project Management", "R&D", "Team Management", "Web" ]
tags: [ "Agile", "CSS", "DB", "Git", "HTML", "IPC", "JavaScript", "Jira", "Linux", "MS Project", "Node.js", "OpenCV", "Scrum", "Sonar", "Visual Studio", "Windows", "XML" ]
images_copyright: "TOYOTA MOTOR EUROPE"
images:
- src: "clustering.jpg"
  title: "Clustering Process"
- src: "clustering2.jpg"
  title: "Clustering Result"
- src: "compare.jpg"
  title: "Comparison Process - Differences Highlight"
- src: "ui.jpg"
  title: "UI Main Components"
resources:
- src: "logos/1-toyota.png"
  title: "TOYOTA"
- src: "logos/2-akka.jpg"
  title: "AKKA"
---

<b>CLIENT:</b> TOYOTA MOTOR EUROPE (TME)<br>

<b>DESCRIPTION</b><br>
Triggered by a business need, in the context of Toyota R&D, engineers at TME (Toyota Motor Europe) or suppliers make drawings. In most cases, those drawings are changes from other drawings. Prior to official release, those drawings must be reviewed, validated and approved by the Toyota Engineer, Manager, Senior Manager and General Manager.<br>
This reviewing process consists in ensuring that all intended changes instructed in the ECI (engineering change instructions) are reflected in the drawing and that no unintended changes have been made.<br>
Engineers face the challenge that those drawings are big and each instruction must be confirmed (line, shape, dimension, text). This leads to the following issues:<br>
- Checking of a drawing takes a long time<br>
- The engineer can easily miss a change during the comparison, leading to risks to quality<br>
- Management cannot confirm if the job was done correctly without checking themselves<br>
- When a mistake is noticed and the drawing is modified, the whole validation process must be done again<br>
<br>
The purpose of the drawing comparison system is to:<br>
- Assist the engineer in comparing two revisions of a drawing<br>
    - The system will highlight the differences<br>
    - The engineer will judge them<br>
    - The engineer will also judge if the drawing comparison software has made the correct assumptions<br>
- Allow the engineer communicate the results of his comparison with his management for approval<br>
- Allow the engineer communicate the results of his comparison with his supplier for feedback in case of rejection<br>
<br>
AKKA was assigned the full realisation of the project thanks to the Feasibility Study document and the proof of concept tool provided to TME.<br>

<b>ROLE</b><br>
As Technical Leader, I was responsible for analysing and determining the appropriate technologies and implementation choices, and to validate them with the business and management (following the Technical Offer that had been made to the client with the [Feasibility Study](/pro/akka/dct-feasibility)).<br>
I was also responsible for managing the development team (composed of 4 developers) and making sure the requirements and planning were respected, as well as being the point of interaction between the technical team, the management and the client.<br>
Additionally to supervising the development, I also worked on some of the UI aspects of the front-end, mostly on the viewport related code.<br>
