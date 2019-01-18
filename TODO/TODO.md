TO DO:

- [ ] GENERAL:
  - [ ] Complete README.md file
    => What to add?
  - [ ] Create and add "favicon.ico"
  - [ ] Determine and set sizes of all images
    => Use responsove images?
    LOOK AT:
        <picture class="photo-wide orientation-landscape loaded">
            <source media="(min-width: 1024px)" srcset="image_large.jpg, image_large_retina.jpg 2x">
            <source media="(min-width: 640px) and (max-width: 1024px)" srcset="image_medium.jpg, image_medium_retina.jpg 2x">
            ...
        </picture>
  - [ ] ? - Add additional taxonomy for the different tools/technos/languages?
      => Need to define in "config.toml" (look at doc)
      (Or set them as "tags"?)
  - [ ] Decide and set colours of theme (CSS)
  - [ ] Set resources links using CDN (from hosting servers? eg Netlify?)
    => As well as "local" as falldown alternative?
  - [ ] Add a recommendations/references page (?)
  - [ ] Decide which hosting platform & deploy
      => Look at: https://gohugo.io/hosting-and-deployment/
  LATER:
    - [ ] Create Font Awesome (or other svg) icons (gears, retropad, windows, book?, DSP, ...)
    - [ ] Add links to other websites... blogs, shops etc. (?)

- [ ] HOME
  - [ ] Change image?
  - [ ] Make better texts?

- [ ] ABOUT
  - [ ] Make better texts?
  - [ ] Add photo disclaimer? (+ link to photographer? How/what to do? - At bottom of section?)
  - [ ] Add link to "interests" (other website, when done)

- [ ] SERVICES
  - [ ] Check categories and lists
  - [ ] Decide and set icons
  - [ ] Make better texts?
  LATER:
    - [ ] Create and set icons

- [ ] SKILLS
  - [ ] Make better texts?
  LATER:
    => Replace the tags and categories blocks by the 2 skills table, with each keyword being a link to a taxonomy page.
    - [ ] Add the 2 HTML tables
    - [ ] Set tags and categories in tables (with links for taxonomies)
    - [ ] Generate tables dynamically from data files (instead of static html tables)
      - skills.json => Should have all skills data defined here, and used to fill tables (so that can have dynamic number of tables)
        (! - and it should be matched with tags and categories from each project!)

- [ ] PROJECTS
  - [ ] HOMEPAGE
    - [ ] PERSO
      - [ ] Determine categories and sort projects.
      LATER:
        - [ ] Add text and set it as non-scrolling.
    - [ ] PRO
      - [ ] Remove "technos" logos (technos already in tags, and too many logos).
      LATER:
        - [ ] Add text and set it as vertical scrolling.
          - For scrolling text, look at:
            https://www.quackit.com/css/codes/marquees/
            => Adapt layout as in AIRSPACE theme, "Contact" form
    - [ ] PROJECTS LISTS (subsections)
      - [ ] Determine and set orders for each projects list page (look in notes).
      LATER:
        - PROJECTS (LIST)
          - Separate page.
          => Projects page, containing 3 sections:
          - "TIMELINE" (link to "TIMELINE")
          - "BY COMPANY" (link to "PROJECTS_COMPANY" - with no company selected)
          - "ALL PROJECTS" (link to "PROJECTS_PRO_ALL")
          - Also containing the main header with links to main sections.
        - PROJECTS_PRO_ALL
          => Page listing all the projects, with possibility to filter on tags/categories.
          - Separate page.
          - Similar to "PROJECTS_COMPANY" page.
            - Without position/role block.
            - With a search possibility (List of tags -?)
              => Displayed projects related to tags.
        - PROJECTS_PERSO_ALL
          => Page listing all the projects, with possibility to filter on tags/categories.
          - Separate page.
          - Similar to "PROJECTS_PRO_ALL" page, but for personal projects.
            - Without position/role block.
            - With a search possibility (List of tags -?)
              => Displayed projects related to tags.

      - [ ] PRO (LIST)
        - [ ] _index.md: Change content text
        - [ ] Add companies and projects
        LATER:
          - [ ] Add timeline page (look at NEWSPRINT theme, "library").
            => Page with vertical timeline (top = present), listing positions in time.
            - Separate page.
            - When clicking on a company icon, it opens a small pop-up with the position description.
            - In the pop-up, there is a button ("Projects"?) to open the related company projects page ("PROJECTS_COMPANY").
              => Look at "NEWSPRINT" theme, "The Library" section for timeline example.

      - [ ] PERSO (LIST)
        - [ ] _index.md: Change content text
        - [ ] Add categories and projects

    - [ ] PROJECT (SINGLE)
      - [ ] Create page for each project.
      - [ ] Determine and get images, screenshots, logos.
      - [ ] Determine categories for each project.
        (from (non exhaustive):
            Airspace, Automotive, Railway, Banking, Security, R&D, Medical, Consulting, 3D, CAD, Real-time simulation, VR, Image analysis, Video, Web, Network, Embedded, Data exchange, Project management, Team management
        )
      - [ ] PRO (SINGLE)
        - [ ] Remove technologies stuff, as there will already be the company's project tags.
        - [ ] IFAST images? (Can display sheets?)
        - [ ] DCT images? (No plans...?)
        - [ ] DSHOW => Get description from doc
        - [ ] Add links in DCT poc+feasibility and infrabel akka projects (to TME and Infrabel's pages)

- [ ] CONTACT
  - [ ] Make better texts?
  - [ ] Keep GMAIL email address?
  - [ ] Check social links/icons

- [ ] FOOTER
  - [ ] Add copyright stuff (for my stuff, but also images, themes, etc I "took").

- [ ] ICONS
  => In [data]
    - icons.json => many icons to create...
        => List of icons with display name and icon file name (icons files stored in "static/images" - maybe "icons" subdirectory?)
        E.g.: (! - check json syntax!)
            technologies = [
                cpp = {
                    name = "C++",
                    icon = "cpp"
                },
                ...
            ]
            => When referring to an icon,
                - find entry in list
                - if found
                    - set name
                    - get icon file
                - if not found
                    - set name as entry name (input name)
                    - look for icon with same name
                    - if no icon
                        - ignore entry/icon

====================

PROJECTS:

- [ ] Put names of companies & products in bold/italic?
- [ ] Make logos bigger!

- [ ] PRO
  - [ ] ADD COMPANIES & PROJECTS!
  - [ ] Add clients when adequate (AIRBUS, SNCB, EMBRAER, etc.!!!)
  - [ ] Check/Add tags for each project
    eg: embedded, requirements gathering / business analysis, analysis, QA, QC, (porting?), etc.
  - [ ] Check categories for each project
  - [ ] AGC
    - [ ] Add image to home page, and small image
    - [ ] FINISH PROJECTS! (+images & icons)
  - [ ] TME
    - [ ] Add image to home page, and small image
    - [ ] FINISH PROJECTS! (+images & icons)
  - [ ] VR Context
    - [ ] "export plugin"
      - [ ] Add 3DSMAX icon
      - [ ] Add images
    - [ ] "human models"
      - [ ] Add 3DSMAX icon

