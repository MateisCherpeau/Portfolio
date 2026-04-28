/**
 * Modal data - Sports and Volleyball (English)
 */
Object.assign(window.siteData.modalData.en, {
    'carriere-joueur': {
        title: 'Player Career - Volleyball',
        summary: 'A competitive journey marked by constant progression, from UFOLEP departmental level to the regional elite. This page traces my technical and tactical evolution across various clubs (ESO, RSSC, AAJB) and school selections (UNSS), with a focus on my specialization as a Libero.',
        useTimeline: true,
        timelineSeasons: [
            {
                season: '2025-2026 Season',
                subtitle: 'Confirmation in Pre-National',
                items: [
                    { title: 'Senior Pre-National Masculine', club: 'AAJB', targetModal: 'saison-pnm-25-26' }
                ]
            },
            {
                season: '2024-2025 Season',
                subtitle: 'The historic double',
                items: [
                    { title: 'Senior Pre-National Masculine', club: 'AAJB', targetModal: 'saison-pnm-24-25' },
                    { title: 'Under 18 Pre-National', club: 'AAJB', targetModal: 'saison-m18-aajb' },
                    { title: 'Vaucanson high school sports association team', club: '', targetModal: 'detail-unss-joueur-23-24' }
                ]
            },
            {
                season: '2023-2024 Season',
                subtitle: 'Regional Excellence',
                items: [
                    { title: 'Under 18 Regional', club: 'RSSC', targetModal: 'saison-m18-rssc' },
                    { title: 'Vaucanson high school sports association team', club: '', targetModal: 'detail-unss-joueur-23-24' }
                ]
            },
            {
                season: '2022-2023 Season',
                subtitle: 'UFOLEP Progression',
                items: [
                    { title: 'UFOLEP Indre et Loire - Pool B & E', club: 'ESO', targetModal: 'detail-eso-poule-b' },
                    { title: 'Vaucanson high school sports association team', club: '', targetModal: 'detail-unss-joueur-22-23' }
                ]
            },
            {
                season: '2021-2022 Season',
                subtitle: 'First Season',
                items: [
                    { title: 'UFOLEP Indre et Loire - Pool D', club: 'ESO', targetModal: 'detail-eso-poule-d' },
                    { title: 'Vaucanson high school sports association team', club: '', targetModal: 'detail-unss-joueur-21-22' }
                ]
            }
        ],
        softSkills: [],
        tags: ['Volleyball', 'Competition', 'Team Sport', 'AAJB', 'RSSC', 'ESO'],
        gallery: [],
        videoHighlights: [
            { title: 'Highlights', url: 'https://youtu.be/2kiCH_AMjEc' }
        ]
    },
    'encadrement-volley': {
        title: 'Volleyball Coaching',
        summary: 'A coaching journey in full ascent, marked by technical specialization and the achievement of the Regional Coaching Diploma (DRE 1). This page retraces my recent experiences within federal structures (AAJB, RSSC, UVBT), detailing my coaching responsibilities from regional elite to youth sections. At the bottom of the page, find an analysis of "My Strengths" as well as my "Game Principles and Philosophy" that define my technical identity.',
        missionsTitle: "",
        hardSkills: [
            'Management & Performance: Leading Senior (Pre-National) and Youth (Regional) squads toward major results.',
            'Training Engineering: Designing programs adapted to all levels, from initiation to National 3.',
            'Tactical & Video Expertise: Opponent analysis, real-time statistical tracking, and monitoring technical evolutions.',
            'Club Project Management: Technical coordination between teams and building a coherent sports project.',
            'Safety & Prevention: Mastery of federal regulatory frameworks and active monitoring (VSS, First Aid).',
            'Team Leadership: On-court leadership, motivational management, and staff supervision (assistants).'
        ],
        philosophy: [
            'Defensive Identity: Tactics based on iron-clad solidity, physical energy, and keeping the ball alive in every exchange.',
            'Offensive Variety: Seeking the breakthrough via tactical use of "soft touches" (feints, push, dunks, block out).',
            'Game Fluidity: Using the libero as a central transition link and a confidence factor for hitters.',
            'Offensive Blocking: Building an aggressive blocking system as the primary technical pressure point.',
            'Potential Scouting: Identifying and technically shaping inexperienced profiles with high future potential.',
            'Organization & Roles: Game system based on a clear and rigorous distribution of tasks and responsibilities.',
            'Engagement & Motivation: Affinity for groups showing a thirst for learning and a drive for evolution.'
        ],
        useSplitLayout: true,
        rightColumnTitle: 'modal-certifications',
        rightColumnItems: [
            {
                title: 'DRE 1',
                desc: 'Regional Coaching Diploma 1',
                iconImg: 'assets/projects/ligue/icone ffvb orange.png',
                targetModal: 'dre-detail'
            },
            {
                title: 'First Aid Level 1',
                desc: 'First Aid',
                iconImg: 'assets/projects/protection-civile/Icone PC orange 2.png',
                targetModal: 'psc1-detail'
            },
            {
                title: 'Driving License',
                desc: 'Mobility and autonomy',
                date: '02/2024',
                icon: 'fa-car'
            }
        ],
        useTimeline: true,
        timelineSeasons: [
            {
                season: '2025-2026 Season',
                subtitle: 'Main responsibilities',
                items: [
                    { title: 'Female Senior Pre-National Assistant Coach', club: 'AAJB', targetModal: 'entraineur-adjoint-pnf' },
                    { title: 'Female Under 18 Head Coach PNF', club: 'AAJB', targetModal: 'entraineur-m18f' },
                    { title: 'CRE Assistant Coach', club: 'Regional Center', targetModal: 'assistant-cre-25-26' },
                    { title: 'UFOLEP-CDF Compet\'lib', club: 'AAJB', targetModal: 'entraineur-ufolep-blois' }
                ]
            },
            {
                season: '2024-2025 Season',
                subtitle: 'Transition to AAJB',
                items: [
                    { title: 'Female Regional Training Assistant', club: 'AAJB', targetModal: 'assistant-rsf-24-25' },
                    { title: 'Female Under 18 Training Assistant RF', club: 'AAJB', targetModal: 'assistant-m18f-24-25' },
                    { title: 'AS Vaucanson coach', club: '', targetModal: 'detail-unss-vaucanson-24-25' }
                ]
            },
            {
                season: '2023-2024 Season',
                subtitle: 'RSSC Experiences',
                items: [
                    { title: 'Training Assistant Under 13 / 15 / 18 / 21', club: 'RSSC', targetModal: 'encadrement-benevole-m15m21' },
                    { title: 'Female National 3 Training Assistant', club: 'UVBT', targetModal: 'assistant-n3-rssc' },
                    { title: 'AS Vaucanson Coach', club: '', targetModal: 'detail-unss-vaucanson-23-24' }
                ]
            },
            {
                season: '2022-2023 Season',
                subtitle: 'First steps',
                items: [
                    { title: 'AS Vaucanson Coach', club: '', targetModal: 'detail-unss-vaucanson-22-23' }
                ]
            }
        ],
        diplomaCard: {
            title: 'Federal Volleyball Coach Diploma',
            icon: 'fa-award',
            targetModal: 'dre-detail'
        },
        missions: [
            'UNSS team coach (4 seasons)',
            'Assistant U13/U15/U18/U21 + N3W (RSSC)',
            'Assistant M18F Regional + RSF (AAJB)',
            'Head Coach M18F Pre Nat (AAJB)',
            'Assistant Coach PNF (AAJB)',
            'UFOLEP-CDF Compet\'lib (AAJB)'
        ],
        tags: ['Coach', 'DRE', 'UNSS', 'RSSC', 'AAJB'],
        gallery: []
    },
    'palmares-volley': {
        title: 'Awards and Events',
        summary: 'A comprehensive summary of my competitive performances and immersive experiences. This page presents my achievements within the regional elite, both as a player and a coach, as well as a retrospective of my participation in high-level tournaments and camps. For each stage, discover the technical analysis, results achieved, and the context of these experiences.',
        missionsTitle: 'Sporting Results',
        useTimeline: true,
        timelineSeasons: [
            {
                season: 'Player',
                subtitle: 'Titles & Victories',
                items: [
                    { title: 'M18 Pre-National Champion 2024-2025', club: 'AAJB', targetModal: 'champion-prenational-m18' },
                    { title: 'Regional Final Phase Winner 2024-2025', club: 'AAJB', targetModal: 'champion-pfr-m18' }
                ]
            },
            {
                season: 'Coach',
                subtitle: 'Sporting results',
                items: [
                    { title: 'Coming soon...', club: '', targetModal: null }
                ]
            },
            {
                isMajorHeader: true,
                majorHeaderTitle: 'Volleyball Events',
                icon: 'fa-volleyball-ball',
                season: 'Camps',
                subtitle: 'High-Level Immersion',
                items: [
                    { title: 'LVF Camp - August 2024', club: 'Montpellier', targetModal: 'stage-beach-lvf' }
                ]
            },
            {
                season: 'Tournois',
                subtitle: 'Summer Competitions',
                items: [
                    { title: 'Oléron Volley Plage', club: 'Oléron', targetModal: 'oleron-volley' },
                    { title: 'Volley Green Festival 2025', club: 'Savonnières', targetModal: 'vgf-2025' },
                    { title: 'Volley Green Festival 2024', club: 'Savonnières', targetModal: 'vgf-2024' }
                ]
            }
        ],
        missions: [],
        tags: ['Awards', 'Competition', 'Events', 'Volleyball'],
        gallery: []
    },
    'eso-detail': { 
        title: 'Eveil Sportif Oésien (ESO)', 
        period: '09/2021 - 08/2023', 
        summary: 'A foundational club and the bedrock of my volleyball identity, ESO marks my competitive debut and rapid ascent through the UFOLEP leagues. This pivotal stage traces my journey from learning fundamentals in Pool D to a strategic specialization as a libero in Pool B. Between leading Team 5 (Pool E Champion with only one loss) and integrating the club\'s elite, these two seasons forged my competitive spirit and initial tactical vision.', 
        context: 'Eveil Sportif Oésien (ESO) is a recreational and UFOLEP competition club located in Notre-Dame-d\'Oé. Under the technical direction of Michael Fontaine, the club offers a dynamic training environment with a weekly volume of 3 to 6 hours. The structure hosts numerous youth categories of all ages and levels, and has 6 senior teams competing in the UFOLEP departmental championship, confirming its position as a major grassroots volleyball club in Indre-et-Loire.', 
        useCards: true,
        missionsTitle: 'Player Career',
        missionCards: [
            { title: '2022-2023 Season', subtitle: 'Ufolep - Pool B & E', icon: 'fa-tshirt', targetModal: 'detail-eso-poule-b' },
            { title: '2021-2022 Season', subtitle: 'Ufolep - Pool D', icon: 'fa-tshirt', targetModal: 'detail-eso-poule-d' }
        ],
        brandLogo: [
            'assets/projects/eso/Icone ESO orange.png',
            'assets/projects/ufolep/icone ufolep orange.png'
        ],
        hardSkills: [
            'Mastery of club volleyball fundamentals',
            'Senior defensive anticipation and trajectory reading',
            'Specific Libero expertise (movement, transition)',
            'Tactical management of game systems (4-2, 5-1)',
            'Fighting spirit and competitive mindset',
            'Adaptability and tactical versatility',
            'Training discipline (increase from 3h to 6h weekly)'
        ],
        gallery: [],
        relatedModals: [
            { id: 'carriere-joueur', label: 'Player Career' }
        ],
        tags: ['ESO', 'UFOLEP', 'Training', 'Libero', 'Beginnings']
    },
    'rssc-detail': { 
        title: 'Réveil Sportif de Saint-Cyr-sur-Loire (RSSC)', 
        period: '09/2023 - 06/2024', 
        summary: 'A true discovery of excellence, RSSC marks my immersion into high-level federal volleyball. This milestone season combines intensive play in U18 Regional and my debut as a volleyball coach. Between the regional elite and technical observation of the Women\'s National 3 (UVBT), RSSC served as the laboratory for my technical rigor and my transition toward coaching responsibilities.', 
        context: 'Réveil Sportif de Saint-Cyr-sur-Loire (RSSC) is a major federal volleyball institution in Indre-et-Loire. Under the technical direction of Paul Hinckel, the club is characterized by a strong female training identity, illustrated by its team in National 3 (N3W), while overseeing all categories from baby volley to seniors. The club offered me a high-performance environment allowing for a training volume of 6 to 8 hours per week, complemented by technical coaching opportunities (4 to 6 hours weekly). The development stages organized during school holidays were an essential lever for my progress.', 
        useCards: true,
        missionsTitle: 'Player Career',
        missionCards: [
            { title: '2023-2024 Season', subtitle: 'U18 Regional & French Cup', icon: 'fa-tshirt', targetModal: 'saison-m18-rssc' },
            
            { isMajorHeader: true, title: 'Coaching & Management', iconImg: 'assets/projects/volleyball/logo-encadrement-orange.png' },
            { title: 'N3 Women\'s Assistant', subtitle: 'Union Volley Ball Touraine', icon: 'fa-users', targetModal: 'assistant-n3-rssc' },
            { title: 'Youth Coaching', subtitle: 'U13 to U21 - Volunteer', icon: 'fa-users', targetModal: 'encadrement-benevole-m15m21' }
        ],
        brandLogo: [
            'assets/projects/rssc/icone rssc orange.png',
            'assets/projects/ligue/icone ffvb orange.png'
        ],
        hardSkills: [
            'Awareness and structuring of technical volleyball movements',
            'Specific, technical and tactical training',
            'Regional level game reading and tactical anticipation',
            'Analysis of high-level requirements (N3W)',
            'Adaptability and versatility (Player / Coach / Assistant)',
            'Discipline and rigor (Sustained training volume)'
        ],
        gallery: [
            { src: 'assets/projects/rssc-detail/equipes-m18-fg.jpg', caption: "RSSC U18 Boys and Girls squads." },
            { src: 'assets/projects/rssc-detail/stage-club-1.png', caption: "Coaching during the Autumn club camp." },
            { src: 'assets/projects/rssc-detail/stage-club-2.png', caption: "Technical workshops during school holidays." }
        ],
        relatedModals: [
            { id: 'carriere-joueur', label: 'Player Career' }
        ],
        tags: ['RSSC', 'Formation', 'High Level', 'Coaching']
    },
    'ajb-detail': { 
        title: 'AAJB Blois - Club Experience', 
        period: '09/2024 - 06/2026', 
        summary: 'AAJB (Association Amicale de la Jeunesse Blésoise) was the heart of my sporting and professional commitment between 2024 and 2026. This page centralizes my multi-dimensional involvement within the club: from my Voluntary Civic Service mission dedicated to professionalizing communication and events, to my journey as a player in the Men\'s Pre-National league. It also details my investment in technical coaching, where I oversaw the training of young talents and my integration into the Women\'s Pre-National coaching staff, illustrating a global vision serving the development and performance of the Blois structure.', 
        context: 'Founded in Blois, AAJB is an iconic volleyball structure in Loir-et-Cher. Playing at the Raymond Etelin gymnasium, the club stands out for its friendliness and high-level regional ambition. My involvement there was total, allowing me to combine my professional aspirations in communication and my passion for sports performance.', 
        useCards: true,
        missionsTitle: 'Review of my Missions',
        missionCards: [
            { isMajorHeader: true, title: 'My Player Journey', icon: 'fa-volleyball-ball' },
            { title: '2025-2026 PNM Season', subtitle: 'Libero - Pre-National', icon: 'fa-tshirt', targetModal: 'saison-pnm-25-26' },
            { title: '2024-2025 PNM Season', subtitle: 'Libero - Pre-National', icon: 'fa-tshirt', targetModal: 'saison-pnm-24-25' },
            { title: '2024-2025 U18 Season', subtitle: 'Libero - PN Champion', icon: 'fa-tshirt', targetModal: 'saison-m18-aajb' },
            
            { isMajorHeader: true, title: 'Coaching & Management', iconImg: 'assets/projects/volleyball/logo-encadrement-orange.png' },
            { title: 'Women\'s Pre-National', subtitle: 'Assistant Coach', icon: 'fa-users', targetModal: 'entraineur-adjoint-pnf' },
            { title: 'U18 Girls (Pre-National)', subtitle: 'Head Coach', icon: 'fa-users', targetModal: 'entraineur-m18f' },
            { title: 'UFOLEP-CDF Compet\'lib', subtitle: 'Head Coach', icon: 'fa-users', targetModal: 'entraineur-ufolep-blois' },

            { isMajorHeader: true, title: 'Professional Mission', icon: 'fa-briefcase' },
            { title: 'AAJB Voluntary Civic Service', subtitle: 'Com, Events & Technique', icon: 'fa-handshake', targetModal: 'service-civique' }
        ],
        relatedModals: [
            { id: 'encadrement-volley', label: 'Coaching' },
            { id: 'carriere-joueur', label: 'Player Career' },
            { id: 'palmares-volley', label: 'Awards' }
        ],
        tags: ['AAJB', 'Blois', 'Club', 'Volley', 'Civic Service', 'Player', 'Coach'], 
        brandLogo: [
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [] 
    },
    'saison-pnm-25-26': { 
        title: 'Senior Pre-National Masculine Season - AAJB', 
        period: '09/2026 - 08/2027', 
        summary: 'Confirmation season as First Choice Libero. Crucial vocal and tactical leadership to stabilize a renewed and physical squad. A notable improvement in all-terrain transition is underway.',
        context: 'Established as the First Choice Libero under the guidance of Nicolas Fouquet (3 hours of weekly training). This season is marked by a deep squad overhaul where I assume a central vocal and tactical leadership. Defense is the pillar of our system, allowing us to consistently compete with the top teams through rigorous back-court organization.',        positions: ['Libero'],
        teamsRep: ['Senior First Team (Pre-National Masculine)'],
        results: [
            '6th in Pre-National Masculine - Maintien'
        ],
        hardSkills: [
            'Expertise in defense through block openings (fast reading and consequent positioning)',
            'Systematization of support and proactive block coverage',
            'Mastery of "all-terrain" transition setting to accelerate offensive transitions',
            'Excellence in 2-player, 3-player, and overhead (10-finger) reception',
            'Tactical management of powerful service trajectories'
        ],
        softSkills: [
            'Leadership and directive communication to reassure the team',
            'High adaptability to varied player profiles',
            'Composure and consistency under high defensive pressure'
        ],
        tags: ['Senior', 'Libero', 'AAJB', 'Nicolas Fouquet', 'Confirmation', 'Support'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        videoHighlights: [
            { title: 'Highlights', url: 'https://youtu.be/2kiCH_AMjEc' },
            { title: 'Reception', url: 'https://youtu.be/u2BVYBNZQt8' },
            { title: 'Defense', url: 'https://youtu.be/b7fZNarQWkI' },
            { title: 'Rally', url: 'https://youtu.be/36mT4Qt-XCk' },
            { title: 'Support', url: 'https://youtu.be/fXHiNtNDyYk' },
            { title: 'Transition', url: 'https://youtu.be/fszAX9yoSpE' }
        ],
        gallery: [
            { src: 'assets/projects/pnm-25-26/Equipe 1.jpeg', caption: "The AAJB Pre-National Masculine squad - 2025-2026 Season." },
            { src: 'assets/projects/pnm-25-26/Equipe 2.jpg', caption: "The AAJB PNM squad." },
            { src: 'assets/projects/pnm-25-26/Moi_jeu_2.JPG', caption: "Match photo" },
            { src: 'assets/projects/pnm-25-26/Moi_jeu_1.JPG', caption: "Collective celebration after a point in a match" },
            { src: 'assets/projects/pnm-25-26/Jeu_1.JPG', caption: "Collective celebration after a point in a match" },
            { src: 'assets/projects/pnm-25-26/Moi_jeu_3.JPG', caption: "Reception phase in a match" }
        ],                            
        relatedModals: [
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'carriere-joueur' 
    },
    'saison-pnm-24-25': { 
        title: 'Senior Pre-National Masculine Season - AAJB', 
        period: '09/2024 - 06/2025', 
        summary: 'Senior debut as Libero and tactical Outside Hitter in Pre-National league. Progressive integration into an experienced group thanks to a notable technical improvement. 6th place in Pre-National for this first senior year.',
        context: 'First experience at Senior level within a new club. This season was paced by an intensive training volume of 3 weekly hours under the guidance of Nicolas Fouquet. Initially designated as backup libero, I earned my place through consistency. My versatile profile allowed me to be included in match sheets as a tactical R4 before playing my first matches as a starter at the end of the championship.', 
        positions: ['Libero', 'Outside Hitter (Tactical R4 / Substitutions)'],
        teamsRep: ['Senior First Team (Pre-National Masculine)'],
        results: [
            '6th in the Senior Pre-National Masculine Championship'
        ],
        hardSkills: [
            'Enormous technical improvement: Defense, reception, and transition',
            'Advanced trajectory reading and anticipation (improved reaction time)',
            'Discovery and integration of systematic support',
            'Major improvement in transition setting (high-ball precision and accuracy)',
            'Reliability of hybrid and float services during tactical substitutions'
        ],
        softSkills: [
            'Patience and perseverance to earn a place within an experienced squad',
            'Rigor and seriousness in the face of demanding management',
            'Team spirit and constant support regardless of the role on court'
        ],
        tags: ['Senior', 'Pre-National', 'AAJB', 'Libero', 'R4', 'Regional Elite'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/pnm-24-25/Equipe PNM_1.png', caption: "The AAJB Pre-National Masculine squad - 2024-2025 Season." },
            { src: 'assets/projects/pnm-24-25/Equipe PNM_2.png', caption: "PNM team photo - 2024-2025 Season." }
        ], 
        relatedModals: [                                
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'carriere-joueur' 
    },
    'saison-m18-aajb': { 
        title: 'Under 18 Pre-National Season - AAJB', 
        period: '09/2024 - 06/2025', 
        summary: 'Season of achievement at AAJB Blois, moving from Outside Hitter to Libero. Leading role within a rebuilding squad, with a notable tactical improvement. Double title as Regional Champion and Final Phase Winner.', 
        context: 'Joined a new club within a U18 squad that was almost entirely renewed. In this context, I assumed a leadership role to facilitate group cohesion. The season was characterized by a training volume of 3 weekly hours focused on cohesion and tactics. Initially lined up as an Outside Hitter, I switched to the Libero position after the French Cup at the request of the senior coach to perfect my defensive skills.', 
        positions: ['Outside Hitter (Until French Cup)', 'Libero (Post-elimination)'],
        teamsRep: ['U18 Pre-National Team (Regional)', 'U18 French Cup Team', 'U18 Regional Final Phase Team'],
        results: [
            '🏆 Pre-National Champion (Only 2 losses throughout the season)',
            '🏆 U18 Masculine Regional Final Phase Winner',
            '3rd round of the French Cup (Elimination against ACBB and CAJVB)'
        ],
        hardSkills: [
            'Development of a varied offensive palette (block out, support block, push, dunk, ...) to compensate for a height deficit',
            'Mastery of diversified and aggressive services: hybrid, roll shot and float service',
            'Advanced expertise in defense and transition (focus on first contact precision)',
            'Reliability in reception and complex trajectory reading',
            'Specific technical mastery of the Libero position (movement, passivity)'
        ],
        softSkills: [
            'Dominant technical and vocal leadership within the squad',
            'Rapid adaptability to a new position and club',
            'Collective mindset and long-term vision (Senior project preparation)'
        ],
        tags: ['AAJB', 'Champion', 'M18', 'Libero', 'R4', 'Leadership', 'French Cup'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/m18-aajb/M18G Champion Phase finales 2025.JPG', caption: "🏆 Celebration of the M18 Regional Champion title after the final phases." },
            { src: 'assets/projects/m18-aajb/Collectif_coupe.jpg', caption: "🏆 The AAJB collective celebrating the victory with the trophy." },
            { src: 'assets/projects/m18-aajb/Equipe _1.JPG', caption: "The AAJB U18 Pre-National squad - 2024-2025 Season." },
            { src: 'assets/projects/m18-aajb/Equipe_3.JPG', caption: "AAJB U18 team - A group united towards the title." },
            { src: 'assets/projects/m18-aajb/Moi_jeu_1.JPG', caption: "Match action: Libero position in late season." },
            { src: 'assets/projects/m18-aajb/jeu_1.JPG', caption: "Photo taken during a timeout" },
            { src: 'assets/projects/m18-aajb/Jeu_2.JPG', caption: "Match action: Outside Hitter position in early season." }
        ],                            
        relatedModals: [
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'carriere-joueur' 
    },
    'saison-m18-rssc': { 
        title: 'Under 18 Regional Season - RSSC', 
        period: '09/2023 - 06/2024', 
        summary: 'Integration season at RSSC defined by intensive practice and a high-level environment alongside the N3W team. This page details my technical progression as an Outside Hitter, our French Cup journey, and regional championship results.', 
        context: 'After two founding seasons, I joined RSSC under Paul Hinckel. This season was marked by intensive practice (6h to 8h per week). It was common for our team to perform additional training sessions with the U18 Female team and the National 3 Female team, providing an environment of excellence that boosted my progression.', 
        positions: ['Outside Hitter (R4)', 'Libero (Backup for 2 matches)'],
        teamsRep: ['Under 18 Regional (RSSC)', 'Under 18 French Cup', 'Under 18 Regional Final Phase'],
        results: [
            '3rd round of the French Cup (Epic tie-break win against Blois in the 2nd round)',
            '7th in the Under 18 Regional Championship (7 wins / 10 losses)',
            '13th in the regional final phases (Combined Pre-National & Regional)'
        ],
        hardSkills: [
            'Broadening the offensive palette (variety of attack shots)',
            'Development of blocking techniques and transition setting',
            'Major improvement in game reading, trajectory analysis, and anticipation',
            'Mastery of overhead (10-finger) reception for precise ball control'
        ],
        tags: ['RSSC', 'French Cup', 'Regional', 'Federal'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/rssc/icone rssc orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/m18-rssc/equipe-cdf.jpg', caption: "The RSSC U18 squad during the French Cup." },
            { src: 'assets/projects/m18-rssc/jeu-1.jpg', caption: "Collective game phase." },
            { src: 'assets/projects/m18-rssc/victoire-luisant.jpg', caption: "Celebration after the victory against Luisant." },
            { src: 'assets/projects/m18-rssc/jeu-3.jpg', caption: "Collective game phase." },
            { src: 'assets/projects/m18-rssc/victoire-montargis.jpg', caption: "3-0 victory against Montargis." },
            { src: 'assets/projects/m18-rssc/jeu-4.jpg', caption: "Timeout - moment of collective cohesion" },
            { src: 'assets/projects/m18-rssc/jeu-5.jpg', caption: "Collective game phase" },
            { src: 'assets/projects/m18-rssc/jeu-2.jpg', caption: "Timeout - moment of collective cohesion" }
        ],
        relatedModals: [
            { id: 'rssc-detail', label: 'RS Saint-Cyr (RSSC)' }
        ],
        parentModalId: 'carriere-joueur'
    },
    'champion-prenational-m18': { 
        title: '🏆 M18 Pre-National Champion', 
        period: '09/2024 - 06/2025', 
        summary: 'Account of a victorious regional championship season. Find key moments of the AAJB journey, analysis of a rebuilding squad\'s cohesion, and my tactical evolution from Outside Hitter to Libero.', 
        context: 'Integrated a new M18 squad in full reconstruction, blending youth with high progression potential. Within a demanding championship featuring reference clubs like TVB or C\'Chartres, our team established tactical rigor and solid organization from the start of the season. This collective mastery allowed us to approach every match with great composure, handling high-pressure moments with calm, including during tie-breaks. our journey resulted in a clear dominance, with only two setbacks late in the season due to a reshuffled roster during school holidays. On a personal level, my transition from Outside Hitter to Libero two-thirds of the way through the season allowed for the integration of players who had progressed throughout the season, while enabling me to return to my base position.', 
        positions: ['Outside Hitter (Until 2/3 of the season)', 'Libero (End of championship)'],
        teamsRep: ['M18 Pre-National Team (Regional)'],
        results: [
            '🏆 Pre-National Champion (Only 2 losses throughout the entire regular season)'
        ],
        tags: ['AAJB', 'Champion', 'M18', 'Consistency', 'Leadership', 'Regional'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ],
        gallery: [
            { src: 'assets/projects/m18-champion/M18G Champion Phase finales 2025.JPG', caption: "🏆 Celebration of the M18 Regional Champion title after the final phases." },
            { src: 'assets/projects/m18-champion/Equipe _1.JPG', caption: "The AAJB U18 Pre-National squad - 2024-2025 Season." },
            { src: 'assets/projects/m18-champion/Equipe_2.jpg', caption: "Team photo - Focus and determination." },
            { src: 'assets/projects/m18-champion/Equipe_3.JPG', caption: "AAJB U18 team - A group united towards the title." },
            { src: 'assets/projects/m18-champion/Moi_jeu_1.JPG', caption: "Game action: Libero position in late season." },
            { src: 'assets/projects/m18-champion/Jeu_2.JPG', caption: "Game action: Outside Hitter position in early season." },
            { src: 'assets/projects/m18-champion/Capture d\'écran 2026-03-18 155852.png', caption: "Official ranking: 2024-2025 Pre-National Champion." }
        ],
        relatedModals: [
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'palmares-volley'
    },
    'champion-pfr-m18': { 
        title: '🏆 Regional Final Phase Champion', 
        period: '05/2025', 
        summary: 'Regional consecration during the season-ending tournament. This page traces straight-set victories against the region\'s best squads, the culmination of a high-performing collective system, and a symbolic win against my former club.', 
        context: 'The regional final phases mark the culmination of the season, bringing together the best M18G squads from the Pre-National and Regional championships for a single day in Montargis. During this event, our collective demonstrated remarkable efficiency, relying on perfectly established cohesion and game systems. With constant technical mastery, we won our matches without dropping a single set: a 2-0 victory in the semi-final against RSSC, followed by a 2-0 success in the final against Nogent-le-Rotrou, securing our regional champion title.', 
        positions: ['Libero'],
        teamsRep: ['M18 Regional Final Phase Team (AAJB)'],
        results: [
            '🏆 M18 Masculine Regional Final Phase Winner'
        ],
        tags: ['AAJB', 'Champion', 'PFR', 'M18', 'Libero', 'Final Victory', 'Regional'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ],
        gallery: [
            { src: 'assets/projects/m18-pfr/M18G Champion Phase finales 2025.jpg', caption: "🏆 2025 M18G Regional Final Phase Champions." },
            { src: 'assets/projects/m18-pfr/Collectif_coupe.jpg', caption: "The joy of the AAJB collective lifting the regional trophy." },
            { src: 'assets/projects/m18-pfr/podium phase finales M18G 2025.jpg', caption: "On the top step of the regional podium." },
            { src: 'assets/projects/m18-pfr/Coupe régionale.jpg', caption: "The M18G Regional Champion trophy." },
            { src: 'assets/projects/m18-pfr/Capture d\'écran 2026-03-18 155852.png', caption: "Affiche de célébration du titre" }
        ],
        relatedModals: [
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'palmares-volley'
    },
    'vgf-2024': {
        title: 'Volley Green Festival 2024',
        period: '06/2024',
        summary: 'Participation au tournoi 3x3 sur herbe de Savonnières, l\'un des plus importants de la région. Cette page détaille mon parcours en tournoi masculin et mixte, les spécificités techniques du jeu sur herbe, ainsi que les résultats obtenus (Top 8 le samedi).',
        context: 'Organisé à Savonnières (Tours) par Lucas Ramon (Libéro du TVB et de l\'Équipe de France) et Thibault Barré (Passeur N2 du SAS), le Volley Green Festival est devenu dès sa création une référence du volley sur herbe, se positionnant comme l\'un des plus grands tournois "Green" de France. Le tournoi accueille naturellement des joueurs de niveaux internationaux, professionnels et nationaux en grand nombre, ce qui en fait une compétition au niveau extrêmement relevé. Le festival se déroule sur un week-end complet, avec le tournoi masculin le samedi et le mixte le dimanche.',
        positions: ['Passeur (Tournoi Masculin)', 'Réceptionneur-Attaquant (Tournoi Mixte)'],
        results: [
            '🏆 Top 8 du tournoi masculin (Samedi)',
            '🏆 Défaite en huitième de finale du tournoi mixte face aux finalistes (Dimanche)'
        ],
        missionsTitle: 'Expérience & Compétition',
        missions: [
            'Exploitation intensive des push, dunks et block-out (adaptés aux règles et à la surface herbe).',
            'Mise en place d\'un jeu rapide favorisé par la stabilité de la surface.',
            'Gestion des contraintes extérieures : adaptation constante au soleil et au vent.',
            'Système de jeu articulé sur le complexe service / block-défense.',
            'Utilisation d\'une tactique en "tiroir" pour optimiser le block défense'
        ],
        tags: ['VGF', '3x3 Herbe', 'Savonnières', 'Top 8', 'National', 'Lucas Ramon'],
        brandLogo: [
            'assets/projects/volleyball/VGF-orange.png'
        ],
        gallery: [
            { src: 'assets/projects/vgf-2024/LKOP1645.JPG', caption: "VGF 2024" },
            { src: 'assets/projects/vgf-2024/LFWI6881.JPG', caption: "VGF 2024" },
            { src: 'assets/projects/vgf-2024/XSCT1127.JPG', caption: "VGF 2024" }
        ],
        parentModalId: 'palmares-volley'
    },
    'vgf-2025': {
        title: 'Volley Green Festival 2025',
        period: '06/2025',
        summary: 'Deuxième participation au VGF avec un focus sur la régularité des performances. Retrouvez ici le détail des compétitions mixtes et masculines, l\'adaptation tactique face à des joueurs de niveau national, et les résultats en phase finale (Quart de finale mixte).',
        context: 'À nouveau organisé par Lucas Ramon (Libéro de l\'Équipe de France) et Thibault Barré, le VGF a confirmé son statut de référence nationale et de l\'un des plus importants tournois sur herbe du pays. Le festival accueille de nombreux joueurs internationaux et professionnels, garantissant un niveau technique exceptionnel. Le week-end se décompose avec le tournoi masculin le samedi et le mixte le dimanche.',
        positions: ['Passeur (Tournoi Masculin)', 'Réceptionneur-Attaquant (Tournoi Mixte)'],
        results: [
            '🏆 Finaliste de la consolante du tournoi masculin (Samedi)',
            '🏆 Défaite en quart de finale du tournoi mixte face aux finalistes (Dimanche)'
        ],
        missionsTitle: 'Expérience & Compétition',
        missions: [
            'Exploitation intensive des push, dunks et block-out (adaptés aux règles et à la surface herbe).',
            'Mise en place d\'un jeu rapide favorisé par la stabilité de la surface.',
            'Gestion des contraintes extérieures : adaptation constante au soleil et au vent.',
            'Système de jeu articulé sur le complexe service / block-défense.',
            'Utilisation d\'une tactique en "tiroir" pour optimiser le block défense'
        ],
        tags: ['VGF', '3x3 Herbe', 'Savonnières', '1/8 Finale', 'National', 'Lucas Ramon'],
        brandLogo: [
            'assets/projects/volleyball/VGF-orange.png'
        ],
        gallery: [
            { src: 'assets/projects/vgf-2025/Jeu.png', caption: "VGF 2025" },
            { src: 'assets/projects/vgf-2025/Jeu 2.png', caption: "VGF 2025" }
        ],
        parentModalId: 'palmares-volley'
    },
    'stage-beach-lvf': {
        title: 'LVF Camp - Montpellier',
        period: '19 - 25 Août 2024',
        summary: 'Immersion dans l\'écosystème professionnel du Beach Volley à Montpellier. Cette page retrace ma découverte des structures d\'entraînement de haut niveau et d\'un planning millimétré, ainsi que ma progression technique sur sable, le tout documenté par une série de Vlogs en immersion.',
        context: 'Réalisé dans les infrastructures du club de beach volley de Montpellier, ce stage regroupait 30 joueurs de moins de 18 ans (niveaux régional et national). Le programme était rythmé par 2 entraînements quotidiens, complétés par des interventions de nutritionnistes, préparateurs physiques et joueurs professionnels. L\'organisation, portée par Jérôme Brysse et Iskander El Gouthi, incluait une forte dimension médiatique qui m\'a poussé à documenter mon expérience.',
        people: '<span class="roster-bullet">•</span> <strong>Groupe :</strong> 30 joueurs M18 mixtes (niveaux Pré-Nationale / N3).<br><span class="roster-bullet">•</span> <strong>Joueurs notables :</strong><ul class="modal-inner-list"><li>Thimoté Carpentier (Joueur NCAA)</li><li>Ally Ozanne Pian (Pôle Chatenay Beach)</li><li>Lucas Chazot (Pôle Montpellier Beach / N3 Le Havre)</li><li>Lise Benech (N3 Cesson Saint-Brieuc)</li></ul><span class="roster-bullet">•</span> <strong>Staff & Intervenants :</strong><ul class="modal-inner-list"><li>Stéphane Canet (Ancien Olympien)</li><li>Téo Rotar (Champion du Monde U19)</li><li>Arthur Canet (Champion du Monde U19)</li><li>Manon Rebuffel (Ancienne joueuse Équipe de France)</li><li>Julien Prigent (Coach Pôle France Beach)</li><li>Iskander El Gouthi (Joueur Équipe de France Snow Volley)</li><li>Jérôme Brysse (Le Volleyeur Français, Influenceur)</li></ul>',
        resultsTitle: 'Communication and social networks',
        resultsIcon: 'fa-share-nodes',
        results: [
            'Production and editing of a series of daily immersive Vlogs',
            'Development of expertise in sports "Storytelling" and capturing athlete life moments',
            'Constitution of a strategic address book: pro players, influencers and com managers'
        ],
        missionsTitle: 'Sporting progression',
        missions: [
            'Intensive practice (14 sessions) focused on sand technique and game reading.',
            'Participation in workshops: Sports nutrition, physical preparation and career management.',
            '3 tournaments organized during the week to evaluate level against the U18 elite.',
            'Major technical improvement in Beach Volley and reinforcement of indoor fundamentals.'
        ],
        tags: ['Beach Volley', 'Montpellier', 'Le Volleyeur Français', 'Influence', 'Vlogs', 'High Level'],
        brandLogo: [
            'assets/projects/volleyball/Icone-LVF-orange.png',
            'assets/projects/volleyball/MBV-orange.png'
        ],
        gallery: [
            { src: 'assets/projects/lvf-camp/Effectif complet.jpg', caption: "The complete LVF Camp 2024 collective at Montpellier Beach Volley." },
            { src: 'assets/projects/lvf-camp/Conférence.jpg', caption: "Meeting with Arthur Canet and Téo Rotar, U19 World Champions." },
            { src: 'assets/projects/lvf-camp/jeu.jpg', caption: "Training on the second ball contact" },
            { src: 'assets/projects/lvf-camp/Jeu 2.jpg', caption: "Taking technical advice during training" },
            { src: 'assets/projects/lvf-camp/Photo avec Arthur Canet et Teo Rotar.JPG', caption: "Photo with Arthur Canet and Teo Rotar, U19 world champions" },
            { src: 'assets/projects/lvf-camp/Staff encadrant.jpg', caption: "Coaching staff of the camp" },
            { src: 'assets/projects/lvf-camp/Photo.jpg', caption: "Photo taken during the camp" },
            { src: 'assets/projects/lvf-camp/Stars du LVF Camp 2024.JPG', caption: "Winning team at the end-of-camp tournament (Ally, Timothée, Damien)" },
            { src: 'assets/projects/lvf-camp/Analyse de la finale Stephane Canet.MP4', caption: "Video: Stéphane Canet analyzes the camp tournament final." },
            { src: 'assets/projects/lvf-camp/Conseils Stephane Canet.MOV', caption: "Video: Technical advice and feedback from Stéphane Canet." },
            { src: 'assets/projects/lvf-camp/Message de fin du LVF camp.MOV', caption: "Video: Summary and closing message of the 2024 edition." },
            { src: 'assets/projects/lvf-camp/Victoire des jeunes contre le staff.MP4', caption: "Video of the youth victory against the staff" }
        ],
        relatedModals: [
            { id: 'communication', i18nKey: 'nav-com', label: 'Communication & Events' }
        ],
        parentModalId: 'palmares-volley'
    },
    'oleron-volley': {
        title: 'Oléron Volley Plage',
        period: '08/2023 - Present',
        summary: 'Multi-faceted summer experience blending youth coaching and high-level competition. Discover here my coach missions for children\'s camps, my participation in 3x3 tournaments on asphalt against pro players, and my role as an event speaker.',
        context: 'Accustomed for 5 years to the courts of La Brée-les-Bains, I joined the club\'s coaching team (open exclusively in July and August). The structure organizes intensive camps for children in the morning and bi-weekly mixed 3x3 tournaments attracting a high density of professional players.',
        positions: ['Setter/Defender', 'Outside Hitter', 'Coach (Children\'s camps)', 'Speaker at exhibition nights and tournaments'],
        resultsTitle: 'Events and networks',
        resultsIcon: 'fa-share-nodes',
        results: [
            'Creation of content on networks, and video creation',
            'Participation in an opening match as a guest player (Exhibition)',
            'Global animation and management of the event\'s microphone atmosphere'
        ],
        missionsTitle: 'Coaching & Competition',
        missions: [
            'Specialization in setting to optimize the efficiency of high-level attackers (pro players).',
            'Implementation of a "drawer" tactic and focus on back-court defense.',
            'Coach for children\'s camps: 5 sessions of 2h per week focused on fundamentals.',
            'Competition in mixed 3x3: Regular confrontations with the French pro elite on asphalt.'
        ],
        tags: ['Oléron', 'Coach', 'Speaker', '3x3 Mixed', 'High Level', 'Asphalt'],
        brandLogo: [
            'assets/projects/volleyball/oleron-volley-orange.png'
        ],
        gallery: [
            { src: 'assets/projects/oleron-volley/Photo_collective.JPG', caption: "Team photo with the coaching staff at La Brée-les-Bains." },
            { src: 'assets/projects/oleron-volley/exhibition_2.jpg', caption: "Game action during a night exhibition match." },
            { src: 'assets/projects/oleron-volley/moi_jeu_1.JPG', caption: "Game phase: Focus on defense and positioning." },
            { src: 'assets/projects/oleron-volley/moi_jeu_2.JPG', caption: "Trajectory reading and anticipation." },
            { src: 'assets/projects/oleron-volley/moi_jeu_3.JPG', caption: "Constant support and communication on the court." },
            { src: 'assets/projects/oleron-volley/RCNL6297.JPG', caption: "Atmosphere and intensity of summer asphalt tournaments." }
        ],
        relatedModals: [
            { id: 'communication', i18nKey: 'nav-com', label: 'Communication & Events' },
            { id: 'encadrement-volley', i18nKey: 'volley-enc-title', label: 'Volleyball Coaching' }
        ],
        parentModalId: 'palmares-volley'
    },
    'assistant-n3-rssc': { 
        title: 'Female National 3 Training Assistant - Union Volleyball Touraine', 
        period: '09/2023 - 06/2024', 
        summary: 'Immersive experience within a Women\'s National 3 team to discover the requirements of high-level play. I actively assisted the head coach in session preparation, technical performance analysis, and logistics management to ensure a rigorous and high-performance training environment.', 
        context: 'Volunteer role of observation and logistical support under Paul Hinckel within the Union Volleyball Touraine (UVBT). This structure was a union of Touraine clubs aimed at promoting a strong women\'s team in the region, with for base logistical and administrative the club RSSC. My mission consisted of helping set up sessions and observing the functioning of a national group to understand high-level requirements.', 
        positions: ['Volunteer Assistant'],
        teamsRep: ['National 3 Female (RSSC)'],
        people: '<span class="roster-bullet">•</span> Young and inexperienced roster.<br><span class="roster-bullet">•</span> Key individuals:<ul class="modal-inner-list"><li>Melissandre Figaro (Outside Hitter, currently at Pôle France)</li><li>Elisa Mpouppe (Currently in N2 at Neptunes de Nantes)</li></ul>',
        missionsTitle: 'Missions & achievements',
        missions: [
            'Helping with the logistical and material setup of training sessions.',
            'Active observation of Paul Hinckel\'s feedbacks and methods.',
            'Learning the requirements and rigor of the National level.',
            'Support in running drills under the coach\'s direction.'
        ], 
        tags: ['RSSC', 'National 3', 'Volunteering', 'Learning', 'Rigor'], 
        brandLogo: [
            'assets/projects/ligue/icone ffvb orange.png',
            'assets/projects/rssc/icone rssc orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/uvbt/equipe-uvbt.jpg', caption: "Union Volleyball Touraine (UVBT) squad." },
            { src: 'assets/projects/uvbt/temps-mort-1.jpg', caption: "Tactical observation during a timeout." },
            { src: 'assets/projects/uvbt/equipe-n3.png', caption: "Women's National 3 Team - 2023-2024 Season." },
            { src: 'assets/projects/uvbt/temps-mort-2.jpg', caption: "Technical instructions and team cohesion." },
            { src: 'assets/projects/uvbt/jeu.jpg', caption: "Game phase in National competition." }
        ], 
        relatedModals: [
            { id: 'rssc-detail', label: 'RS Saint-Cyr (RSSC)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'assistant-rsf-24-25': { 
        title: 'Female Regional Training Assistant - AAJB', 
        period: '09/2024 - 06/2025', 
        summary: 'Technical collaboration on the promotion project for the female regional team. My contribution focused on tactical analysis and pedagogical support during a season marked by the promotion to Pre-National level, consolidating my senior group management skills.', 
        context: 'Volunteer assistant coach for the Female Regional team. My mission was to assist Florian Busteau in the group\'s technical and tactical preparation. I used my past experiences and hours of tactical analysis while observing senior management, with the goal of learning the ropes of reaching the higher level.', 
        positions: ['Volunteer Assistant (Support & Learning)'],
        teamsRep: ['Female Regional (AAJB)'],
        results: [
            '4th in the Female Regional Senior Championship',
            'Promotion to Pre-National'
        ],
        people: '<span class="roster-bullet">•</span> 12 players.<br><span class="roster-bullet">•</span> Heterogeneous group (half over 25 / half 18 years or less).<br><span class="roster-bullet">•</span> Key individuals :<ul class="modal-inner-list"><li>Miadana Rakatanaivo (Outside Hitter, ex-Libero N2 Nancy)</li><li>Laly Antoina (Outside Hitter, 17 years old)</li><li>Solenne Quessard Bourget (Setter, 14 years old)</li><li>Axelle Romero (Setter, 16 years old)</li></ul>',
        missionsTitle: 'Missions & achievements',
        missions: [
            'Helping lead weekly training sessions.',
            'Providing technical and tactical advice on positioning, game reading, and techniques, drawing from my past experiences as a player and coach.',
            'Active observation of senior squad management in search of promotion.',
            'Collaboration with the head coach for tactical follow-up.'
        ], 
        tags: ['AAJB', 'Female Regional', 'Volunteering', 'Learning', 'Promotion'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/rsf-reg/equipe-rsf.png', caption: "AAJB Regional Female squad - 2024-2025 season" },
            { src: 'assets/projects/rsf-reg/Equipe.jpg', caption: "Senior group during promotion to Pre-National" }
        ], 
        relatedModals: [
            { id: 'encadrement-volley', label: 'Volleyball Coaching' },
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'assistant-m18f-24-25': { 
        title: 'Female Under 18 Regional Training Assistant - AAJB', 
        period: '09/2024 - 06/2025', 
        summary: 'Supporting the youth elite towards a historic treble (Championship, Final Phases, 4th round of the French Cup). Technical and tactical support focused on game analysis and tactical training management with the primary goal of rapid team improvement.', 
        context: 'Volunteer assistant coach at training with Carine Antoina. This season was a key step in getting to know the players, mastering the regional championship stakes, and understanding category-specific requirements. I contributed technical and tactical expertise while actively preparing for my future role as head coach.', 
        positions: ['Volunteer Assistant'],
        teamsRep: ['Female Under 18 Regional'],
        results: [
            '🏆 Regional Under 18 Champions (Championship)',
            '🏆 Regional Under 18 Final Phase Winners',
            '🔥 4th round of the Under 18 French Cup'
        ],
        people: '<span class="roster-bullet">•</span> 12 players (ages 13 to 18).<br><span class="roster-bullet">•</span> Homogeneous group with already one year of experience in the championship (majority of girls in their last year of U18).<br><span class="roster-bullet">•</span> Key individuals :<ul class="modal-inner-list"><li>Solenne Quessard Bourget (Setter, 14 years old)</li><li>Laly Antoina (Outside Hitter, 17 years old)</li><li>Axelle Romero (Setter, 16 years old)</li><li>Chloé Roudier (Middle Blocker, 13 years old, selection for the CRE of Ligue du Centre-Val de Loire)</li></ul>',
        missionsTitle: 'Missions & achievements',
        missions: [
            'Active observation of the squad and game dynamics for the following season.',
            'Providing precise technical and tactical advice during training sessions.',
            'Supporting Carine Antoina in French Cup round preparations.',
            'Immersion in coaching high-potential youth players.'
        ], 
        tags: ['AAJB', 'Under 18', 'Volunteering', 'Learning', 'Strategy'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/m18f-reg/equipe M18F 2024-2025.png', caption: "U18F French Cup Squad" },
            { src: 'assets/projects/m18f-reg/equipe M18F 2024-2025_2.png', caption: "AAJB U18F squad during the 2024-2025 season" }
        ], 
        parentModalId: 'encadrement-volley' 
    },
    'entraineur-m18f': { 
        title: 'Female Under 18 Head Coach PNF', 
        period: '09/2026 - 08/2027', 
        summary: 'Global management of a squad in a technical and tactical reconstruction phase. The main theme of this season is to establish a new training cycle focused on regional excellence, the integration of game systems, the learning of technical movements, and the development of individual potential towards the regional and national senior levels.', 
        context: 'Head coach of the Female Under 18 Pre-National (Regional) squad. I manage 3 hours of weekly training and the French Cup campaign, while coordinating the league with an assistant. The challenge this season is to launch a new training cycle by combining individual progression towards high-level play and collective unity.', 
        positions: ['Head Coach'],
        teamsRep: ['Female Under 18 Pre-National (AAJB)', 'Female Under 18 French Cup'],
        results: [
            '5th in Pre-National U18F',
            '3rd round of Challenge France'
        ],
        people: '<span class="roster-bullet">•</span> 12 players (ages 13 to 18).<br><span class="roster-bullet">•</span> Homogeneous group with already one year of experience in the championship (majority of girls in their last year).<br><span class="roster-bullet">•</span> Key individuals :<ul class="modal-inner-list"><li>Solenne Quessard Bourget (Outside Hitter, 15 years old)</li><li>Axelle Romero (Setter, 17 years old)</li><li>Chloé Roudier (Middle Blocker, 14 years old, selection for the CRE of Ligue du Centre-Val de Loire)</li></ul>',
        missionsTitle: 'Missions & achievements',
        missions: [
            'Leading 3 hours of weekly training and the French Cup campaign.',
            'Pedagogical planning for homogeneous groups (PNF).',
            'Tactical implementation of the 5-1 system (use of a libero as OH).',
            'Highlighting potential: Relocating Solenne from Setter to OH.',
            'Strategic vision: Cycle reconstruction and potential scouting.'
        ],
        tags: ['AAJB', 'Head Coach', 'Development', 'Management', 'French Cup'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/m18f-pn/Equipe_1.jpg', caption: "The M18F Pre-National squad of AAJB Volleyball - Official photo." },
            { src: 'assets/projects/m18f-pn/Equipe 2.jpeg', caption: "The M18F Pre-National squad of AAJB Volleyball - 2025-2026 Season." },
            { src: 'assets/projects/m18f-pn/Tour 1 challenge france_equipe.jpg', caption: "The team during the 1st round of Challenge France." },
            { src: 'assets/projects/m18f-pn/Temps mort 1.JPG', caption: "In-match coaching: Tactical briefing during a timeout." },
            { src: 'assets/projects/m18f-pn/Fiche Equipe M18F.png', caption: "Monitoring tool: Squad presentation and objectives sheet." },
            { src: 'assets/projects/m18f-pn/Fiche M18F Axelle Romero.png', caption: "Individual monitoring: Example of personalized technical and statistical sheet (Axelle)." },
            { src: 'assets/projects/m18f-pn/Fiche M18F Chloé Roudier.png', caption: "Individual monitoring: Example of personalized technical and statistical sheet (Chloé)." },
            { src: 'assets/projects/m18f-pn/Fiche M18F Solenne Quessard Bourget.png', caption: "Individual monitoring: Example of personalized technical and statistical sheet (Solenne)." }
        ], 
        relatedModals: [
            { id: 'encadrement-volley', label: 'Volleyball Coaching' },
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'assistant-cre-25-26': { 
        title: 'CRE Assistant Coach', 
        period: '2025 - 2026 Season', 
        summary: 'Immersive experience at the service of the regional elite. Active support for Centre-Val de Loire selections during training camps preparing for the Volleyades, under the direction of renowned coaches. Focus on methodological observation and technical analysis of high-potential players.', 
        context: 'Intervention during regional camps (first and last weekends of school holidays) to assist Benoît Rousseau (Girls\' CRE) and Sylvain Piletan (Boys\' CRE). This mission allows for growth in contact with expert contributors (Kevin Lemaintec, Franck Varambon, Marc Francastel) and prepares teams for the national Volleyades competition.', 
        positions: ['Assistant Coach'],
        teamsRep: ['Regional Selections (CRE Centre-Val de Loire)'],
        people: '<span class="roster-bullet">•</span> Boys and Girls Regional Selections (12 players per roster).<br><span class="roster-bullet">•</span> Players licensed in Centre-Val de Loire, born in 2011 at the latest.<br><span class="roster-bullet">•</span> High-potential profiles, mostly evolving in Development Centers.<br><span class="roster-bullet">•</span> Coached individuals:<ul class="modal-inner-list"><li>Lucas Cros</li><li>Nelia Ameza</li><li>Lilou Pouget</li><li>Zoé Lefevre</li></ul>',
        missionsTitle: 'Missions & achievements',
        missions: [
            'Assisting in session setup and logistical support for technical staff (identical to N3 mission).',
            'Active observation of high-level federal training methods.',
            'Analysis of individual and collective performance during friendly matches.',
            'Technical monitoring of young prospects from the territory during gatherings.',
            'Immersion in managing a regional elite squad in preparation for a national competition.'
        ], 
        tags: ['Ligue du Centre', 'CRE', 'Volleyades', 'High Level', 'Detection'], 
        brandLogo: ['assets/projects/ligue/Icone LDC orange.png'], 
        gallery: [
            { src: 'assets/projects/dre/Effectif_selection_cre_M15F_ligue_CVL_2024_2025.png', caption: "Ligue Centre-Val de Loire U15 Girls squad - 2024-2025 Season." },
            { src: 'assets/projects/dre/entrainement_4_demonstration_Marc_Francastel.png', caption: "Technical analysis: Demonstration by Marc Francastel." },
            { src: 'assets/projects/dre/entrainement_5_block_avec_benoit_rousseau.png', caption: "Specific block work with Benoît Rousseau." },
            { src: 'assets/projects/dre/Affiche Coloc Marc Francastel.png', caption: "Event organization: Coaches' clinic poster." },
            { src: 'assets/projects/dre/entrainement 1.png', caption: "Specific attack training using coaching techniques." },
            { src: 'assets/projects/dre/entrainement 2.png', caption: "Specific attack sequence training." },
            { src: 'assets/projects/dre/entrainement 3.png', caption: "Specific attack training using coaching techniques." },
            { src: 'assets/projects/dre/entrainement 6.png', caption: "Warm-up at the start of training with the regional selection." }
        ], 
        parentModalId: 'encadrement-volley' 
    },
    'entraineur-adjoint-pnf': { 
        title: 'Women\'s Pre-National Assistant Coach - AAJB', 
        period: '09/2026 - 08/2027', 
        summary: 'Tactical expertise and defensive specialization within the regional elite. Working in tandem with the head coach, I provide real-time statistical analysis and strategic decision support to optimize senior back-court stabilization, while ensuring the monitoring and support of high-potential youth players from the Under 18 squad.', 
        context: 'Appointed assistant coach of the first women\'s team following the promotion to PNF. My mission is facilitated by the presence of 4 players from my Under 18 squad. Having been an assistant coach for Under 18 and Female Regional teams last season, I benefit from a deep knowledge of the collective and strong legitimacy. Present at all training sessions, I work in partnership with Florian Busteau to optimize performance. I have the full attention of the players who regularly consult me on specific technical and tactical points.', 
        positions: ['Assistant Coach'],
        teamsRep: ['Women\'s Pre-National (AAJB)'],
        results: [
            '7th in Pre-National - Maintien'
        ],
        people: '<span class="roster-bullet">•</span> 12 players.<br><span class="roster-bullet">•</span> Heterogeneous group (half over 25 / half 18 years or less).<br><span class="roster-bullet">•</span> Key individuals:<ul class="modal-inner-list"><li>Miadana Rakatanaivo (Outside Hitter, ex-Libero N2 Nancy)</li><li>Jeanne Longuet (Outside Hitter, 18 years old, former MB/Opp N3 Levallois)</li><li>Solenne Quessard Bourget (OH/Opp, 15 years old)</li><li>Axelle Romero (Setter, 17 years old)</li></ul>',
        missionsTitle: 'Missions & achievements',
        missions: [
            'Active support at all weekly training sessions (game systems, technique).',
            'Assistant bench coaching for tactical decision-making.',
            'Real-time statistical tracking during matches for performance analysis.',
            'Focus on senior transition and defense quality.',
            'Opponent analysis and assistance with pre-match tactical briefings.'
        ], 
        tags: ['AAJB', 'PNF', 'Senior', 'Assistant', 'Defensive Expertise'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/pnf/Equipe.jpg', caption: "The Women's Pre-National (PNF) squad of AAJB Volleyball." },
            { src: 'assets/projects/pnf/Equipe 2.jpg', caption: "Team photo at practice - orange theme" },
            { src: 'assets/projects/pnf/Fiche equipe PNF.png', caption: "Monitoring tool: Squad presentation and objectives sheet." },
            { src: 'assets/projects/pnf/Fiche PNF Jeanne Longuet.png', caption: "Individual monitoring: Example of personalized technical and statistical sheet (Jeanne)." },
            { src: 'assets/projects/pnf/Fiche PNF Axelle Romero.png', caption: "Individual monitoring: Example of personalized technical and statistical sheet (Axelle)." },
            { src: 'assets/projects/pnf/Fiche PNF Mia Ranaivo.png', caption: "Individual monitoring: Example of personalized technical and statistical sheet (Mia)." },
            { src: 'assets/projects/pnf/Fiche PNF Solenne Quessard Bourget.png', caption: "Individual monitoring: Example of personalized technical and statistical sheet (Solenne)." }
        ], 
        relatedModals: [
            { id: 'encadrement-volley', label: 'Volleyball Coaching' },
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'entraineur-ufolep-blois': { 
        title: 'UFOLEP-CDF Compet\'lib - AAJB', 
        period: '09/2026 - 08/2027', 
        summary: 'Technical direction and transformation of a heterogeneous mixed group. My action focuses on accelerating the learning of competitive basics and strategic scouting of potential to feed the club\'s federal rosters.', 
        context: 'Head of the AAJB Blois UFOLEP section (1.5 hours of weekly training). My mission is to transform motivated beginners into squads capable of performing in the departmental league (UFOLEP 41). I launched a collaborative dynamic by integrating captain Justin Fotso Tetchou as an assistant, fostering member investment in club life. Team 1 UFOLEP notably participated in the Coupe de France Compet\'lib this season.', 
        positions: ['Head Coach'],
        teamsRep: ['Team 1 UFOLEP (Loir-et-Cher)', 'Team 2 UFOLEP (Loir-et-Cher)', 'Coupe de France Compet\'lib Team'],
        results: [
            'Regular season in progress (Teams manage matches autonomously)'
        ],
        people: '<span class="roster-bullet">•</span> 20 to 25 people (Mixed group).<br><span class="roster-bullet">•</span> Wide age range (18 to 50 years old, average 25).<br><span class="roster-bullet">•</span> Notable individuals:<ul class="modal-inner-list"><li>Justin Fotso Tetchou (Assistant Coach, International Cameroonian Referee)</li><li>Claire Pinto (Former professional soccer player)</li></ul>',
        missionsTitle: 'Missions & achievements',
        missions: [
            'Design and animation of sessions adapted to a heterogeneous and beginner audience.',
            'Scouting and perfecting promising profiles for the Senior project (Pre-National).',
            'Support and mentoring of the assistant coach for his staff integration.',
            'Managing group dynamics combining playing pleasure and competitive rigor.'
        ], 
        tags: ['AAJB', 'UFOLEP', 'Mixed', 'Training', 'Leisure Competition'], 
        brandLogo: [
            'assets/projects/ufolep/icone ufolep orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/ufolep/Effectif ufolep 2025-2026.JPG', caption: "The AAJB Volleyball UFOLEP team - 2025-2026 Season." },
            { src: 'assets/projects/ufolep/Coupe de France Compet\'Lib Phase regional Team.JPG', caption: "Squad during the regional phase of the Coupe de France Compet\'Lib." }
        ], 
        relatedModals: [
            { id: 'encadrement-volley', label: 'Volleyball Coaching' },
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'encadrement-sc-volley': { 
        title: 'Volleyball Coach', 
        period: '2023 - Present', 
        summary: 'Coaching expertise characterized by great versatility and the ability to adapt to extremely varied audiences. My journey has allowed me to lead sessions for all ages (from 7 to 50 years old) and all levels, from initiation in volleyball schools to the excellence of high-level regional and national play.', 
        context: 'Through my various roles at AAJB Blois, RS Saint-Cyr, and UNSS, I have developed a differentiated pedagogy. Whether supervising youth sections in full reconstruction or assisting senior high-level teams, my commitment remains the same: technical transmission, tactical rigor, and squad development.',
        missionsTitle: 'Diversity of Supervised Audiences',
        missions: [
            '<strong>Regional & National Elite:</strong> Assistant and associate coach for high-level squads (Men\'s National 3 at RSSC, Women\'s Pre-National at AAJB), focus on performance and tactical analysis.',
            '<strong>Youth Competition (Federal & School):</strong> Head and assistant coach for categories ranging from U15 to U21, both male and female. Management of UNSS (Vaucanson HS) and federal (RSSC, AAJB) squads in regional championships and the French Cup.',
            '<strong>Training & Initiation:</strong> Leading the volleyball school (U11) and supervising departmental development camps for the youngest players, focused on acquiring fundamental technical skills.',
            '<strong>Recreational & Adult Volleyball:</strong> Management of Female Senior Regional (RSF) squads and UFOLEP sections, balancing social enjoyment, technical progress, and competitive goals.'
        ],
        tags: ['Coaching', 'Pedagogy', 'Multi-level', 'Volleyball', 'AAJB', 'RSSC'], 
        brandLogo: [
            'assets/projects/aajb/Icone AAJB orange.png',
            'assets/projects/rssc/icone rssc orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/volleyball-coach/Effectif PNF AAJB 2025-2026.jpg', caption: "Female Pre-National Collective (PNF) - AAJB Blois (2025-2026)" },
            { src: 'assets/projects/volleyball-coach/Effectif M15G RSSC 2023-2024.jpg', caption: "U15 Men's Team - RS Saint-Cyr (2023-2024)" },
            { src: 'assets/projects/volleyball-coach/Effectif Unss junior masculin  lycée vaucanson 2024-2025.jpg', caption: "Junior Men's UNSS Team - Lycée Vaucanson (2024-2025)" },
            { src: 'assets/projects/volleyball-coach/Groupe de stage départempental.png', caption: "Technical Supervision: Departmental Volleyball Camp" },
            { src: 'assets/projects/volleyball-coach/Effectif M18F regional 2024-2025 AAJB.png', caption: "U18 Female Regional Team - AAJB Blois (2024-2025)" },
            { src: 'assets/projects/volleyball-coach/Effectif Nationale 3 RSSC 2023-2024.png', caption: "Men's National 3 Group - RS Saint-Cyr (2023-2024)" },
            { src: 'assets/projects/volleyball-coach/Effectif Unss féminin lycée vaucanson 2022-2023.jpg', caption: "Female UNSS Team - Lycée Vaucanson (2022-2023)" },
            { src: 'assets/projects/volleyball-coach/Effectif AAJB ufolep 2025-2026.JPG', caption: "UFOLEP Team - AAJB Blois (2025-2026)" },
            { src: 'assets/projects/volleyball-coach/Entrainement M11 RSSC 2023-2024.png', caption: "Volleyball School Training Session (U11) - RS Saint-Cyr" },
            { src: 'assets/projects/volleyball-coach/Equipe AAJB RSF 2024-2025.jpg', caption: "Female Senior Regional Collective (RSF) - AAJB Blois (2024-2025)" },
            { src: 'assets/projects/volleyball-coach/Effectif M15F RSSC 2023-2024.png', caption: "U15 Female Team - RS Saint-Cyr (2023-2024)" },
            { src: 'assets/projects/volleyball-coach/Effectif AAJB M18F Pré national 2025-2026.jpg', caption: "U18 Female Pre-National Team - AAJB Blois (2025-2026)" }
        ], 
        relatedModals: [
            { id: 'encadrement-volley', label: 'Coaching journey' }
        ]
    },
    'encadrement-benevole-m15m21': { 
        title: 'Training Assistant Under 13 / 15 / 18 / 21 - RSSC', 
        period: '09/2023 - 06/2024', 
        summary: 'Pedagogical transmission and technical animation for diverse youth and leisure sections. Intervention focused on acquiring fundamentals and guidance towards competition, while ensuring logistical and methodological support to the federal staff.', 
        context: 'Similar to the N3W mission, this role combined logistical observation and active training support, particularly for the U15 and U21 leisure sections. I also took responsibility for coaching various youth groups during competition tournaments.', 
        positions: ['Volunteer Assistant & Coach (Tournaments)'],
        teamsRep: [
            'U13 Departmental', 
            'U15F Departmental', 
            'U15M Departmental', 
            'U18F Departmental', 
            'U18F Regional', 
            'U21F Departmental'
        ],
        people: '<span class="roster-bullet">•</span> Heterogeneous and homogeneous roster depending on the teams.<br><span class="roster-bullet">•</span> Key individuals:<ul class="modal-inner-list"><li>Melissandre Figaro (OH, currently at Pôle France)</li><li>Elisa Mpouppe (Currently in N2 at Neptunes de Nantes)</li></ul>',
        missionsTitle: 'Missions & achievements',
        missions: [
            'Helping with the logistical and material setup of training sessions.',
            'Active observation of Paul Hinckel\'s feedbacks and methods.',
            'Technical supervision and animation of training sessions.',
            'Tactical coaching and group management during competition tournaments.',
            'Transmission of technical fundamentals to young players in training.'
        ], 
        tags: ['RSSC', 'Youth', 'Coaching', 'Volunteering', 'Development'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/rssc/icone rssc orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/rssc-jeunes/equipe-m15f-cdf.png', caption: "U15 Girls team during the French Cup." },
            { src: 'assets/projects/rssc-jeunes/entrainement-m11.png', caption: "Leading a U11 training session." },
            { src: 'assets/projects/rssc-jeunes/equipe-m15g.jpg', caption: "RSSC U15 Boys squad." },
            { src: 'assets/projects/rssc-jeunes/m15f-temps-mort.png', caption: "Tactical instructions during a timeout." },
            { src: 'assets/projects/rssc-jeunes/equipe-m21f-1.png', caption: "U21 Girls team - 2023-2024 Season." },
            { src: 'assets/projects/rssc-jeunes/plateau-m11.png', caption: "Managing a U11 competition tournament." },
            { src: 'assets/projects/rssc-jeunes/equipe-m21f-2.png', caption: "U21 squad during departmental championships." },
            { src: 'assets/projects/rssc-jeunes/m15f-victoire.png', caption: "Celebration after a tournament victory" }
        ], 
        relatedModals: [
            { id: 'rssc-detail', label: 'RS Saint-Cyr (RSSC)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'detail-eso-poule-d': { 
        title: 'UFOLEP Pool D Season - ESO', 
        period: '09/2021 - 06/2022',
        summary: 'First federal season at ESO as Setter and Outside Hitter. Year dedicated to learning technical basics and discovering senior competition. Notable improvement and first solid championship experience.', 
        context: 'Joined ESO (Notre Dame d\'Oé) under Michael Fontaine (3h weekly training). This first season allowed for learning technical basics and game systems, plus a first experience in senior competition (Pool D).', 
        positions: ['Setter', 'Outside Hitter (R4)'],
        teamsRep: ['U18 Premium', 'UFOLEP Senior (Pool D)'],
        hardSkills: [
            'Learning volleyball basics',
            'Discovery of defense and early fighting spirit',
            'Learning game systems (4-2 and 5-1 rotations)',
            'Learning court positioning'
        ],
        tags: ['ESO', 'UFOLEP', 'Beginnings', 'Setter', 'R4'], 
        brandLogo: ['assets/projects/ufolep/icone ufolep orange.png', 'assets/projects/eso/Icone ESO orange.png'], 
        gallery: [], 
        relatedModals: [
            { id: 'eso-detail', label: 'Eveil Sportif Oésien (ESO)' }
        ],
        parentModalId: 'carriere-joueur' 
    },
    'detail-eso-poule-b': { 
        title: 'UFOLEP Pool B & E Season - ESO', 
        period: '09/2022 - 06/2023', 
        summary: 'Major transition season at Outside Hitter and Libero positions. Promotion to the first team following notable technical improvement. 1st in Pool E and successful integration into the club\'s elite.', 
        context: 'Second season at ESO with a training volume of 6 hours per week. Playing as R4 with Team 5 (Pool E), my progression allowed me to integrate Team 1 (Pool B) mid-season to fill the libero position for the final 8 matches.', 
        positions: ['Outside Hitter (R4)', 'Setter', 'Libero (Preferred position)'],
        teamsRep: ['Team 5 (Pool E)', 'Team 1 (Pool B)'],
        results: [
            '1st in Pool E (Only one loss all season)',
            '6th in Pool B (Joined mid-season)'
        ],
        hardSkills: [
            'Service mastery (float jump and jump serve)',
            'Learning specific Libero positioning',
            'Discovery of 3-player and 2-player reception',
            'Significant improvement in defensive trajectory reading'
        ],
        tags: ['ESO', 'UFOLEP', 'Libero', 'Pool Champion'], 
        brandLogo: ['assets/projects/ufolep/icone ufolep orange.png', 'assets/projects/eso/Icone ESO orange.png'], 
        gallery: [
            { src: 'assets/projects/eso-detail/equipe-eso.jpg', caption: "The ESO team, Pool E champions." },
            { src: 'assets/projects/eso-detail/jeu-eso.jpg', caption: "Collective game phase in Pool B." }
        ], 
        relatedModals: [
            { id: 'eso-detail', label: 'Eveil Sportif Oésien (ESO)' }
        ],
        parentModalId: 'carriere-joueur' 
    },
    'recherche-club-detail': {
        title: 'Sports Project & Collaborations - 2026/2027',
        period: '2026-2027 Season',
        summary: 'With a hybrid profile combining technical expertise on the court and management skills on the bench, I am seeking an ambitious project for the 2026-2027 season. My commitment can revolve around two major axes, separate or combined according to the organization\'s needs.',
        context: 'My journey within the regional elite and my coaching diplomas now allow me to aspire to increased responsibilities. I wish to put my dynamism and tactical vision at the service of a club aiming for excellence, with a total openness to national levels and high-level structuring projects.',
        brandLogo: [],
        missionsTitle: 'Collaboration Opportunities',
        missions: [
            '<strong>Coaching Axis:</strong> Technical direction of a Senior squad (Pre-National / N3 minimum) or joining a high-level staff (N3, N2, Elite) as an assistant coach to provide my expertise in video and tactical analysis.',
            '<strong>Performance Axis (Player):</strong> First Choice Libero position from National 3 upwards. I remain open to Pre-National projects if they are driven by a clear ambition for promotion or to squads in higher divisions (N2) looking for a dedicated and invested player.',
            '<strong>Dual Competence:</strong> Possibility of combining these two roles within the club if the organization allows it.',
            '<strong>Ambition:</strong> Beyond the level, I am primarily looking for a demanding environment where learning and self-improvement are at the heart of the sporting project.'
        ],
        tags: ['Libero', 'Coach', 'N3 / N2 / Pre-Nat', 'High Level', 'Versatility', 'Performance'],
        gallery: []
    }
});