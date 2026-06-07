/**
 * Données des modales - Sports et Volley-ball (Français)
 */
Object.assign(window.siteData.modalData.fr, {
    'carriere-joueur': {
        title: 'Parcours joueur',
        summary: 'Un parcours compétitif marqué par une progression constante, du niveau départemental UFOLEP à l\'élite régionale. Cette page retrace mon évolution technique et tactique à travers mes différents clubs (ESO, RSSC, AAJB) et mes sélections scolaires (UNSS), avec un focus sur ma spécialisation au poste de Libéro.',
        useTimeline: true,
        timelineSeasons: [
            {
                season: 'Saison 2025-2026',
                subtitle: 'Confirmation en Pré-Nationale',
                items: [
                    { title: 'Sénior Pré-Nationale', club: 'AAJB', targetModal: 'saison-pnm-25-26' }
                ]
            },
            {
                season: 'Saison 2024-2025',
                subtitle: 'Le doublé historique',
                items: [
                    { title: 'Sénior Pré-Nationale', club: 'AAJB', targetModal: 'saison-pnm-24-25' },
                    { title: 'Moins de 18 ans Pré-Nationale', club: 'AAJB', targetModal: 'saison-m18-aajb' },
                    { title: 'Équipe de l\'association sportive du lycée vaucanson', club: '', targetModal: 'detail-unss-joueur-23-24' }
                ]
            },
            {
                season: 'Saison 2023-2024',
                subtitle: 'Excellence régionale',
                items: [
                    { title: 'Moins de 18 ans Régionale', club: 'RSSC', targetModal: 'saison-m18-rssc' },
                    { title: 'Équipe de l\'association sportive du lycée vaucanson', club: '', targetModal: 'detail-unss-joueur-23-24' }
                ]
            },
            {
                season: 'Saison 2022-2023',
                subtitle: 'Progression UFOLEP',
                items: [
                    { title: 'UFOLEP Indre et Loire - Poule B & E', club: 'ESO', targetModal: 'detail-eso-poule-b' },
                    { title: 'Équipe de l\'association sportive du lycée vaucanson', club: '', targetModal: 'detail-unss-joueur-22-23' }
                ]
            },
            {
                season: 'Saison 2021-2022',
                subtitle: 'Première saison',
                items: [
                    { title: 'UFOLEP Indre et Loire - Poule D', club: 'ESO', targetModal: 'detail-eso-poule-d' },
                    { title: 'Équipe de l\'association sportive du lycée vaucanson', club: '', targetModal: 'detail-unss-joueur-21-22' }
                ]
            }
        ],
        softSkills: [],
        tags: ['Volley-ball', 'Compétition', 'Sport collectif', 'AAJB', 'RSSC', 'ESO'],
        gallery: [],
        videoHighlights: [
            { title: 'Highlights', url: 'https://youtu.be/2kiCH_AMjEc' }
        ]
    },
    'encadrement-volley': {
        title: 'Encadrement Volley-ball',
        summary: 'Un parcours d\'encadrement en pleine ascension, marqué par une spécialisation technique et l\'obtention du Diplôme Régional d\'Entraîneur (DRE 1). Cette page retrace mes expériences récentes au sein de structures fédérales (AAJB, RSSC, UVBT), détaillant mes responsabilités de coaching de l\'élite régionale aux sections jeunes. Retrouvez en bas de page l\'analyse de mes "Points Forts" ainsi que mes "Principes et philosophie de jeu" qui définissent mon identité technique.',
        missionsTitle: "",
        hardSkills: [
            'Gestion & Performance : Pilotage de groupes Senior (Pré-National) et Jeunes (Régional) vers des résultats d\'ampleur.',
            'Ingénierie de l\'Entraînement : Conception de programmes adaptés à tous niveaux, de l\'initiation à la Nationale 3.',
            'Expertise Tactique & Vidéo : Analyse d\'adversaires, prise de statistiques en temps réel et veille sur les évolutions techniques.',
            'Gestion de Projet Club : Coordination technique entre les collectifs et construction d\'un projet sportif cohérent.',
            'Sécurité & Prévention : Maîtrise des cadres réglementaires fédéraux et vigilance active (VSS, Secourisme).',
            'Direction de Collectif : Leadership de terrain, management motivationnel et gestion du staff (adjoints).'
        ],
        philosophy: [
            'Identité Défensive : Tactique fondée sur une solidité de fer, l\'énergie physique et la vie du ballon à chaque échange.',
            'Variété Offensive : Recherche de la rupture via l\'usage tactique des "touches molles" (feintes, push, dunks, block out).',
            'Fluidité du Jeu : Utilisation du libéro comme maillon central de transition et facteur de confiance pour les attaquants.',
            'Block Offensif : Construction d\'un système de block agressif comme premier rempart de pression technique.',
            'Détection de Potentiels : Attrait pour l\'identification et le façonnage technique de profils inexpérimentés à fort devenir.',
            'Organisation & Rôles : Système de jeu fondé sur une répartition des tâches et des responsabilités claire et rigoureuse.',
            'Engagement & Motivation : Affinité pour les groupes démontrant une soif d\'apprentissage et une volonté d\'évolution.'
        ],
        useSplitLayout: true,
        rightColumnTitle: 'modal-certifications',
        rightColumnItems: [
            {
                title: 'DRE 1',
                desc: 'Diplôme Régional d\'Entraîneur 1',
                iconImg: 'assets/projects/ligue/icone ffvb orange.png',
                targetModal: 'dre-detail'
            },
            {
                title: 'DRE 2',
                desc: 'Animateur Beach Volley',
                iconImg: 'assets/projects/ligue/icone ffvb orange.png',
                targetModal: 'dre2-detail'
            },
            {
                title: 'PSC1',
                desc: 'Premiers Secours',
                iconImg: 'assets/projects/protection-civile/Icone PC orange 2.png',
                targetModal: 'psc1-detail'
            },
            {
                title: 'Permis B',
                desc: 'Mobilité et autonomie',
                date: '02/2024',
                icon: 'fa-car'
            }
        ],
        useTimeline: true,
        timelineSeasons: [
            {
                season: 'Saison 2025-2026',
                subtitle: 'Responsabilités principales',
                items: [
                    { title: 'Entraîneur Adjoint Pré-Nationale Féminine', club: 'AAJB', targetModal: 'entraineur-adjoint-pnf' },
                    { title: 'Entraîneur Principal Moins de 18 ans Féminine PNF', club: 'AAJB', targetModal: 'entraineur-m18f' },
                    { title: 'Assistant Entraîneur du CRE', club: 'Ligue du Centre', targetModal: 'assistant-cre-25-26' },
                    { title: 'UFOLEP-CDF Compet\'lib', club: 'AAJB', targetModal: 'entraineur-ufolep-blois' }
                ]
            },
            {
                season: 'Saison 2024-2025',
                subtitle: 'Transition vers AAJB',
                items: [
                    { title: 'Assistant Entraînement Régionale Féminine', club: 'AAJB', targetModal: 'assistant-rsf-24-25' },
                    { title: 'Assistant Entraînement Moins de 18 ans Féminine RF', club: 'AAJB', targetModal: 'assistant-m18f-24-25' },
                    { title: 'Entraîneur AS Vaucanson', club: '', targetModal: 'detail-unss-vaucanson-24-25' }
                ]
            },
            {
                season: 'Saison 2023-2024',
                subtitle: 'Expériences RSSC',
                items: [
                    { title: 'Assistant entraînement Moins de 13 / 15 / 18 / 21 ans', club: 'RSSC', targetModal: 'encadrement-benevole-m15m21' },
                    { title: 'Assistant Entraînement Nationale 3 Féminine', club: 'UVBT', targetModal: 'assistant-n3-rssc' },
                    { title: 'Entraîneur AS Vaucanson', club: '', targetModal: 'detail-unss-vaucanson-23-24' }
                ]
            },
            {
                season: 'Saison 2022-2023',
                subtitle: 'Premiers pas',
                items: [
                    { title: 'Entraîneur AS Vaucanson', club: '', targetModal: 'detail-unss-vaucanson-22-23' }
                ]
            }
        ],
        diplomaCard: {
            title: 'Diplôme Fédéral d\'Entraîneur de Volley',
            icon: 'fa-award',
            targetModal: 'dre-detail'
        },
        missions: [
            'Entraîneur équipe UNSS (4 saisons)',
            'Assistant M13/M15/M18/M21 + N3F (RSSC)',
            'Assistant M18F Régional + RSF (AAJB)',
            'Entraîneur principal M18F Pré Nat (AAJB)',
            'Entraîneur adjoint PNF (AAJB)',
            'UFOLEP-CDF Compet\'lib (AAJB)'
        ],
        tags: ['Entraîneur', 'DRE', 'UNSS', 'RSSC', 'AAJB'],
        gallery: []
    },
    'palmares-volley': {
        title: 'Palmarès et Événements',
        summary: 'Récapitulatif complet de mes performances en compétition et de mes expériences immersives. Cette page présente mon palmarès de joueur au sein de l\'élite régionale, ainsi qu\'une rétrospective de mes participations à des tournois et stages de haut niveau. Découvrez pour chaque étape l\'analyse technique, les résultats obtenus et le contexte de ces expériences.',
        missionsTitle: 'Résultats sportifs',
        useTimeline: true,
        timelineSeasons: [
            {
                season: 'Joueur',
                subtitle: 'Titres & Victoires',
                items: [
                    { title: 'Champion M18 Pré-National 2024-2025', club: 'AAJB', targetModal: 'champion-prenational-m18' },
                    { title: 'Vainqueur Phases Finales Régionales M18 2025', club: 'AAJB', targetModal: 'champion-pfr-m18' }
                ]
            },
            {
                isMajorHeader: true,
                majorHeaderTitle: 'Événements Volleyistiques',
                icon: 'fa-volleyball-ball',
                season: 'Stages',
                subtitle: 'Immersion Haut Niveau',
                items: [
                    { title: 'LVF Camp - Août 2024', club: 'Montpellier', targetModal: 'stage-beach-lvf' }
                ]
            },
            {
                season: 'Tournois',
                subtitle: 'Compétitions Estivales',
                items: [
                    { title: 'Oléron Volley Plage', club: 'Oléron', targetModal: 'oleron-volley' },
                    { title: 'Volley Green Festival 2025', club: 'Savonnières', targetModal: 'vgf-2025' },
                    { title: 'Volley Green Festival 2024', club: 'Savonnières', targetModal: 'vgf-2024' }
                ]
            }
        ],
        missions: [],
        tags: ['Palmarès', 'Compétition', 'Événements', 'Volley-ball'],
        gallery: []
    },
    'eso-detail': { 
        title: 'Eveil Sportif Oésien (ESO)', 
        period: '09/2021 - 08/2023', 
        summary: 'Club formateur et socle de mon identité de volleyeur, l\'ESO marque mes débuts compétitifs et ma progression fulgurante en championnat UFOLEP. Cette étape cruciale retrace mon passage de l\'apprentissage des fondamentaux en Poule D à une spécialisation stratégique au poste de libéro en Poule B. Entre leadership en Équipe 5 (Champion de Poule E avec une seule défaite) et intégration de l\'élite du club, ces deux saisons ont forgé ma combativité et ma vision tactique initiale.', 
        context: 'L\'Eveil Sportif Oésien (ESO) est un club de loisir et de compétition UFOLEP situé à Notre-Dame-d\'Oé. Sous la direction technique de Michael Fontaine, le club propose un cadre d\'entraînement dynamique avec un volume horaire allant de 3h à 6h par semaine. La structure accueille de nombreuses catégories jeunes de tous ajouts et niveaux, et compte 6 équipes seniors engagées en championnat départemental UFOLEP, affirmant sa place de club majeur du volley-ball de masse en Indre-et-Loire.', 
        useCards: true,
        missionsTitle: 'Parcours Joueur',
        missionCards: [
            { title: 'Saison 2022-2023', subtitle: 'Ufolep - Poule B & E', icon: 'fa-tshirt', targetModal: 'detail-eso-poule-b' },
            { title: 'Saison 2021-2022', subtitle: 'Ufolep - Poule D', icon: 'fa-tshirt', targetModal: 'detail-eso-poule-d' }
        ],
        brandLogo: [
            'assets/projects/eso/Icone ESO orange.png',
            'assets/projects/ufolep/icone ufolep orange.png'
        ],
        hardSkills: [
            'Maîtrise des fondamentaux du volley-ball club',
            'Lecture de trajectoires et anticipation défensive senior',
            'Expertise spécifique au poste de Libéro (déplacement, relance)',
            'Gestion tactique des systèmes de jeu (4-2, 5-1)',
            'Combativité et esprit de compétition',
            'Adaptabilité et polyvalence tactique',
            'Discipline d\'entraînement (passage de 3h à 6h hebdomadaires)'
        ],
        gallery: [],
        relatedModals: [
            { id: 'carriere-joueur', label: 'Parcours joueur' }
        ],
        tags: ['ESO', 'UFOLEP', 'Formation', 'Libéro', 'Débuts']
    },
    'rssc-detail': { 
        title: 'Réveil Sportif de Saint-Cyr-sur-Loire (RSSC)', 
        period: '09/2023 - 06/2024', 
        summary: 'Véritable découverte de l\'exigence, le RSSC marque mon immersion dans le volley-ball fédéral de haut niveau. Cette saison charnière combine une pratique intensive en M18 Régionale, et mes débuts en tant qu\'entraîneur de volley. Entre l\'élite régionale et l\'observation technique de la Nationale 3 Féminine (UVBT), le RSSC a été le laboratoire de ma rigueur technique et de ma transition vers des responsabilités de coaching.', 
        context: 'Le Réveil Sportif de Saint-Cyr-sur-Loire (RSSC) est une institution majeure du volley-ball fédéral en Indre-et-Loire. Sous la direction technique de Paul Hinckel, le club se distingue par une forte identité de formation féminine, illustrée par son équipe en Nationale 3 (N3F), tout en encadrant toutes les catégories du baby volley aux seniors. Le club m\'a offert un environnement de haute performance permettant un volume d\'entraînement de 6h à 8h par semaine, complété par des opportunités d\'assistanat technique (4h à 6h hebdomadaires). Les stages de perfectionnement organisés durant les vacances scolaires ont été un levier essentiel de ma progression.', 
        useCards: true,
        missionsTitle: 'Parcours Joueur',
        missionCards: [
            { title: 'Saison 2023-2024', subtitle: 'M18 Régionale & Coupe de France', icon: 'fa-tshirt', targetModal: 'saison-m18-rssc' },
            
            { isMajorHeader: true, title: 'Encadrement & Coaching', iconImg: 'assets/projects/volleyball/logo-encadrement-orange.png' },
            { title: 'Assistant N3 Féminine', subtitle: 'Union Volley Ball Touraine', icon: 'fa-users', targetModal: 'assistant-n3-rssc' },
            { title: 'Encadrement Jeunes', subtitle: 'M13 à M21 - Bénévole', icon: 'fa-users', targetModal: 'encadrement-benevole-m15m21' }
        ],
        brandLogo: [
            'assets/projects/rssc/icone rssc orange.png',
            'assets/projects/ligue/icone ffvb orange.png'
        ],
        hardSkills: [
            'Conscientisation et structuration des gestes techniques du volley',
            'Entraînement spécifique, technique et tactique',
            'Lecture de jeu et anticipation tactique de niveau régional',
            'Analyse des exigences du haut niveau (N3F)',
            'Adaptabilité et polyvalence (Joueur / Coach / Assistant)',
            'Discipline et rigueur (Volume d\'entraînement soutenu)'
        ],
        gallery: [
            { src: 'assets/projects/rssc-detail/equipes-m18-fg.jpg', caption: "Collectifs M18 Masculin et Féminin du RSSC." },
            { src: 'assets/projects/rssc-detail/stage-club-1.png', caption: "Encadrement lors du stage club de Toussaint." },
            { src: 'assets/projects/rssc-detail/stage-club-2.png', caption: "Ateliers techniques pendant les vacances scolaires." }
        ],
        relatedModals: [
            { id: 'carriere-joueur', label: 'Parcours joueur' }
        ],
        tags: ['RSSC', 'Formation', 'Haut Niveau', 'Coaching']
    },
    'ajb-detail': { 
        title: 'AAJB Blois - Expérience Club', 
        period: '09/2024 - 06/2026', 
        summary: 'L\'AAJB (Association Amicale de la Jeunesse Blésoise) a constitué le cœur de mon engagement sportif et professionnel entre 2024 et 2026. Cette page centralise mon implication multidimensionnelle au sein du club : de ma mission de Service Civique dédiée à la professionnalisation de la communication et de l\'événementiel, à mon parcours de joueur évoluant en Pré-Nationale Masculine. Elle détaille également mon investissement dans l\'encadrement technique, où j\'ai assuré la formation des jeunes talents et mon intégration dans le coaching de la Pré-Nationale Féminine, illustrant une vision globale au service du développement et de la performance de la structure blésoise.', 
        context: 'Fondée à Blois, l\'AAJB est une structure emblématique du volley-ball en Loir-et-Cher. Évoluant au gymnase Raymond Etelin, le club se distingue par sa convivialité et son ambition de haut niveau régional. Mon implication y a été totale, me permettant de conjuguer mes aspirations professionnelles en communication et ma passion pour la performance sportive.', 
        useCards: true,
        missionsTitle: 'Bilan de mes Missions',
        missionCards: [
            { isMajorHeader: true, title: 'Mon Parcours de Joueur', icon: 'fa-volleyball-ball' },
            { title: 'Saison PNM 2025-2026', subtitle: 'Libéro - Pré-Nationale', icon: 'fa-tshirt', targetModal: 'saison-pnm-25-26' },
            { title: 'Saison PNM 2024-2025', subtitle: 'Libéro - Pré-Nationale', icon: 'fa-tshirt', targetModal: 'saison-pnm-24-25' },
            { title: 'Saison M18 2024-2025', subtitle: 'Libéro - Champion PN', icon: 'fa-tshirt', targetModal: 'saison-m18-aajb' },
            
            { isMajorHeader: true, title: 'Encadrement & Coaching', iconImg: 'assets/projects/volleyball/logo-encadrement-orange.png' },
            { title: 'Pré-Nationale Féminine', subtitle: 'Entraîneur Adjoint', icon: 'fa-users', targetModal: 'entraineur-adjoint-pnf' },
            { title: 'M18 Filles (Pré-National)', subtitle: 'Entraîneur Principal', icon: 'fa-users', targetModal: 'entraineur-m18f' },
            { title: 'UFOLEP-CDF Compet\'lib', subtitle: 'Entraîneur Principal', icon: 'fa-users', targetModal: 'entraineur-ufolep-blois' },

            { isMajorHeader: true, title: 'Mission Professionnelle', icon: 'fa-briefcase' },
            { title: 'Service Civique AAJB', subtitle: 'Com, Événementiel & Technique', icon: 'fa-handshake', targetModal: 'service-civique' }
        ],
        relatedModals: [
            { id: 'encadrement-volley', label: 'Encadrement' },
            { id: 'carriere-joueur', label: 'Carrière Joueur' },
            { id: 'palmares-volley', label: 'Palmarès' }
        ],
        tags: ['AAJB', 'Blois', 'Club', 'Volley', 'Service Civique', 'Joueur', 'Coach'], 
        brandLogo: [
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [] 
    },
    'saison-pnm-25-26': { 
        title: 'Saison Pré-Nationale Masculine Senior - AAJB', 
        period: '09/2026 - 08/2027', 
        summary: 'Saison de la confirmation en tant que Libéro titulaire. Leadership vocal et tactique central pour stabiliser un collectif renouvelé et physique. Une amélioration notable de la relance tout terrain est en cours.', 
        context: 'Installé en tant que libéro sous la direction de Nicolas Fouquet (3h d\'entraînement hebdomadaires). Cette saison est marquée par une profonde refonte du collectif où j\'assume un leadership vocal et tactique central. La défense est le pilier de notre système, nous permettant de rivaliser avec les meilleures équipes du championnat grâce à une organisation arrière rigoureuse.', 
        positions: ['Libéro'],
        teamsRep: ['Équipe 1 Senior (Pré-Nationale Masculine)'],
        results: [
            '6e de Pré-Nationale Masculine - Maintien'
        ],
        hardSkills: [
            'Expertise en défense en ouverture de bloc (lecture rapide et placement en conséquence)',
            'Systématisation du soutien et de la couverture de block proactive',
            'Maîtrise de la relance "tout terrain" pour accélérer les transitions offensives',
            'Excellence en réception à 2, à 3 et réception haute (10 doigts)',
            'Gestion tactique des trajectoires de services puissants'
        ],
        softSkills: [
            'Leadership et communication directive pour rassurer le collectif',
            'Grande capacité d\'adaptation aux profils de joueurs variés',
            'Sang-froid et régularité sous haute pression défensive'
        ],
        tags: ['Senior', 'Libéro', 'AAJB', 'Nicolas Fouquet', 'Confirmation', 'Soutien'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        videoHighlights: [
            { title: 'Highlights', url: 'https://youtu.be/2kiCH_AMjEc' },
            { title: 'Réception', url: 'https://youtu.be/u2BVYBNZQt8' },
            { title: 'Défense', url: 'https://youtu.be/b7fZNarQWkI' },
            { title: 'Relance', url: 'https://youtu.be/36mT4Qt-XCk' },
            { title: 'Soutien', url: 'https://youtu.be/fXHiNtNDyYk' },
            { title: 'Transition', url: 'https://youtu.be/fszAX9yoSpE' }
        ],
        gallery: [
            { src: 'assets/projects/pnm-25-26/Equipe 1.jpeg', caption: "Le collectif Pré-Nationale Masculine de l'AAJB - Saison 2025-2026." },
            { src: 'assets/projects/pnm-25-26/Equipe 2.jpg', caption: "Le collectif PNM de l'AAJB Volley-ball." },
            { src: 'assets/projects/pnm-25-26/Moi_jeu_2.JPG', caption: "Photo de match" },
            { src: 'assets/projects/pnm-25-26/Moi_jeu_1.JPG', caption: "Célébration collective après un point en match" },
            { src: 'assets/projects/pnm-25-26/Jeu_1.JPG', caption: "Célébration collective après un point en match" },
            { src: 'assets/projects/pnm-25-26/Moi_jeu_3.JPG', caption: "Phase de réception en match" }
        ],                            
        relatedModals: [
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'carriere-joueur' 
    },
    'saison-pnm-24-25': { 
        title: 'Saison Pré-Nationale Masculine Senior - AAJB', 
        period: '09/2024 - 06/2025', 
        summary: 'Débuts en Pré-Nationale Senior en tant que Libéro et Réceptionneur-Attaquant tactique. Gain de place progressif au sein d\'un groupe expérimenté grâce à une amélioration technique notable. 6e place de Pré-Nationale pour cette première année senior.',
        context: 'Première expérience au niveau Senior au sein d\'un nouveau club. Cette saison a été rythmée par un volume d\'entraînement de 3h hebdomadaires intensives sous la direction de Nicolas Fouquet. Désigné initialement comme libéro remplaçant, j\'ai su gagner ma place par la régularité. Mon profil polyvalent m\'a permis d\'être intégré aux feuilles de match comme R4 tactique avant de disputer mes premiers matchs en tant que titulaire en fin de championnat.', 
        positions: ['Libéro', 'Réceptionneur-Attaquant (R4 tactique / Entrées en jeu)'],
        teamsRep: ['Équipe 1 Senior (Pré-Nationale Masculine)'],
        results: [
            '6ème du championnat Pré-Nationale Masculine Senior'
        ],
        hardSkills: [
            'Énorme amélioration technique : Défense, réception et relance',
            'Lecture de trajectoire avancée et anticipation (gain de temps de réaction)',
            'Découverte et imprégnation du soutien systématique',
            'Amélioration majeure de la passe de transition (relance haute et précision)',
            'Fiabilité du service hybride et flottant lors des entrées tactiques'
        ],
        softSkills: [
            'Patience et persévérance pour gagner sa place dans un collectif d\'expérience',
            'Rigueur et sérieux face à un encadrement exigeant',
            'Esprit d\'équipe et soutien constant quel que soit le rôle sur le terrain'
        ],
        tags: ['Senior', 'Pré-Nationale', 'AAJB', 'Libéro', 'R4', 'Élite Régionale'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/pnm-24-25/Equipe PNM_1.png', caption: "Le collectif Pré-Nationale Masculine de l'AAJB - Saison 2024-2025." },
            { src: 'assets/projects/pnm-24-25/Equipe PNM_2.png', caption: "Photo d'équipe PNM - Saison 2024-2025." }
        ], 
        relatedModals: [                                
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'carriere-joueur' 
    },
    'saison-m18-aajb': { 
        title: 'Saison M18 Pré-National - AAJB', 
        period: '09/2024 - 06/2025', 
        summary: 'Saison de consécration à l\'AAJB Blois, de Réceptionneur-Attaquant à Libéro. Leader moteur au sein d\'un groupe en reconstruction, avec une amélioration notable sur le plan tactique. Double titre de Champion Régional et Vainqueur des Phases Finales.', 
        context: 'Arrivée dans un nouveau club au sein d\'un collectif M18 presque intégralement renouvelé. Dans ce contexte, j\'ai assumé un rôle de leader pour faciliter la cohésion du groupe. La saison a été rythmée par un volume d\'entraînement de 3h hebdomadaires focalisées sur la cohésion et la tactique. Initialement aligné comme Réceptionneur-Attaquant, j\'ai basculé au poste de libéro après la Coupe de France à la demande de l\'entraîneur senior pour parfaire mon apprentissage défensif.', 
        positions: ['Réceptionneur-Attaquant (Jusqu\'en Coupe de France)', 'Libéro (Post-élimination CdF)'],
        teamsRep: ['Équipe M18 Pré-Nationale (Régionale)', 'Équipe Coupe de France M18', 'Équipe Phase Finales Régionales M18'],
        results: [
            '🏆 Champion Pré-National (Seulement 2 défaites sur l\'ensemble de la saison)',
            '🏆 Vainqueur des Phases Finales Régionales M18 Masculine',
            '3e tour de Coupe de France (Élimination contre l\'ACBB et le CAJVB)'
        ],
        hardSkills: [
            'Développement d\'une palette d\'attaque variée (block out, block soutien, push, dunk 10 doigts, roulette, ...) pour compenser un déficit de taille',
            'Maîtrise de services diversifiés et agressifs : service hybride, roulette et flottant',
            'Expertise avancée en défense et en relance (focus sur la précision du premier contact)',
            'Fiabilité en réception et lecture de trajectoires complexes',
            'Maîtrise technique spécifique au poste de Libéro (déplacements, passivité)'
        ],
        softSkills: [
            'Leadership technique et vocal prépondérant au sein du collectif',
            'Capacité d\'adaptation rapide à un nouveau poste et un nouveau club',
            'Esprit collectif et vision à long terme (Préparation du projet Senior)'
        ],
        tags: ['AAJB', 'Champion', 'M18', 'Libéro', 'R4', 'Leadership', 'Coupe de France'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/m18-aajb/M18G Champion Phase finales 2025.JPG', caption: "🏆 Célébration du titre de Champion Régional M18 après les phases finales." },
            { src: 'assets/projects/m18-aajb/Collectif_coupe.jpg', caption: "🏆 Le collectif AAJB célébrant la victoire avec le trophée." },
            { src: 'assets/projects/m18-aajb/Equipe _1.JPG', caption: "Le collectif M18 Pré-Nationale de l'AAJB - Saison 2024-2025." },
            { src: 'assets/projects/m18-aajb/Equipe_3.JPG', caption: "Équipe M18 AAJB - Un groupe soudé vers le titre." },
            { src: 'assets/projects/m18-aajb/Moi_jeu_1.JPG', caption: "Action de jeu : Poste de Libero en fin de saison." },
            { src: 'assets/projects/m18-aajb/jeu_1.JPG', caption: "Photo prise lors d'un temps mort" },
            { src: 'assets/projects/m18-aajb/Jeu_2.JPG', caption: "Action de jeu : Poste de Réceptionneur-Attaquant en début de saison." }
        ],                            
        relatedModals: [
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'carriere-joueur' 
    },
    'saison-m18-rssc': { 
        title: 'Saison Moins de 18 ans Régionale - RSSC', 
        period: '09/2023 - 06/2024', 
        summary: 'Saison d\'intégration au RSSC marquée par une pratique intensive et un environnement d\'excellence au contact du haut niveau féminin (N3F). Cette page détaille ma progression technique en tant que Réceptionneur-Attaquant, notre parcours en Coupe de France et les résultats en championnat régional.', 
        context: 'Après deux saisons fondatrices, j\'ai rejoint le RSSC sous la direction de Paul Hinckel. Cette saison a été marquée par une pratique intensive (6h à 8h par semaine). Il était courant que notre équipe réalise des entraînements supplémentaires avec l\'équipe Moins de 18 ans Féminine et l\'équipe Nationale 3 Féminine, offrant un environnement d\'excellence qui a boosté ma progression.', 
        positions: ['Réceptionneur-Attaquant (R4)', 'Libéro (Dépannage sur 2 matchs)'],
        teamsRep: ['Moins de 18 ans Régionale (RSSC)', 'Moins de 18 ans Coupe de France', 'Moins de 18 ans Phase Finale Régionale'],
        results: [
            '3e tour de Coupe de France (Victoire épique contre Blois au tie-break au 2e tour)',
            '7e du championnat Régional Moins de 18 ans (7 victoires / 10 défaites)',
            '13e des phases finales régionales (Regroupement Pré-Nationale & Régionale)'
        ],
        hardSkills: [
            'Élargissement de la palette offensive (variété des coups d\'attaque)',
            'Développement des techniques de bloc et de la passe de transition',
            'Amélioration majeure de la lecture de jeu, de la trajectoire et de l\'anticipation',
            'Maîtrise de la réception à 10 doigts pour une relance précise'
        ],
        tags: ['RSSC', 'Coupe de France', 'Régionale', 'Fédérale'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/rssc/icone rssc orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/m18-rssc/equipe-cdf.jpg', caption: "Le collectif M18 du RSSC lors de la Coupe de France." },
            { src: 'assets/projects/m18-rssc/jeu-1.jpg', caption: "Phase de jeu collective." },
            { src: 'assets/projects/m18-rssc/victoire-luisant.jpg', caption: "Célébration après la victoire contre Luisant." },
            { src: 'assets/projects/m18-rssc/jeu-3.jpg', caption: "Phase de jeu collective." },
            { src: 'assets/projects/m18-rssc/victoire-montargis.jpg', caption: "Victoire 3-0 contre Montargis." },
            { src: 'assets/projects/m18-rssc/jeu-4.jpg', caption: "Temps mort - moment de cohésion collective" },
            { src: 'assets/projects/m18-rssc/jeu-5.jpg', caption: "Phase de jeu collective" },
            { src: 'assets/projects/m18-rssc/jeu-2.jpg', caption: "Temps mort - moment de cohésion collective" }
        ],
        relatedModals: [
            { id: 'rssc-detail', label: 'RS Saint-Cyr (RSSC)' }
        ],
        parentModalId: 'carriere-joueur'
    },
    'champion-prenational-m18': {
        title: '🏆 Champion Prénational M18',
        period: '09/2024 - 06/2025',
        summary: 'Récit d\'une saison victorieuse en championnat régional. Retrouvez les moments clés du parcours de l\'AAJB, l\'analyse de la cohésion d\'un groupe en reconstruction, ainsi que mon évolution tactique du poste de Réceptionneur-Attaquant vers celui de Libéro.',
        context: 'Intégration d\'un nouveau collectif M18 en pleine reconstruction, alliant jeunesse et fort potentiel de progression. Au sein d\'un championnat relevé incluant des clubs de référence comme le TVB ou C\'Chartres, notre équipe a su imposer une rigueur tactique et une organisation solide dès le début de saison. Cette maîtrise collective nous a permis d\'aborder chaque rencontre avec une grande sérénité, gérant avec sang-froid les moments de tension, y compris lors des tie-breaks. Notre parcours s\'est soldé par une domination nette, avec seulement deux revers en fin de saison dûs à un effectif remanié par l\'intégration de jeunes joueurs lors des vacances scolaires. Sur le plan personnel, mon passage du poste de Réceptionneur-Attaquant à celui de Libéro aux deux tiers de la saison a permis de laisser la place à des joueurs qui ont progressé au cours de la saison, et de retrouver mon poste de base.',
        positions: ['Réceptionneur-Attaquant (Jusqu\'aux 2/3 de la saison)', 'Libéro (Fin de championnat)'],
        teamsRep: ['Équipe M18 Pré-Nationale (Régionale)'],
        results: [
            '🏆 Champion Pré-National (Seulement 2 défaites sur l\'ensemble de la saison régulière)'
        ],
        tags: ['AAJB', 'Champion', 'M18', 'Régularité', 'Leadership', 'Régional'],
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ],
        gallery: [
            { src: 'assets/projects/m18-champion/M18G Champion Phase finales 2025.JPG', caption: "🏆 Célébration du titre de Champion Régional M18 après les phases finales." },
            { src: 'assets/projects/m18-champion/Equipe _1.JPG', caption: "Le collectif M18 Pré-National de l'AAJB - Saison 2024-2025." },
            { src: 'assets/projects/m18-champion/Equipe_2.jpg', caption: "Photo d'équipe - Un groupe soudé vers l'objectif." },
            { src: 'assets/projects/m18-champion/Equipe_3.JPG', caption: "L'équipe M18 de l'AAJB - La force du collectif." },
            { src: 'assets/projects/m18-champion/Moi_jeu_1.JPG', caption: "Action de jeu : Poste de Libéro en fin de saison." },
            { src: 'assets/projects/m18-champion/Jeu_2.JPG', caption: "Action de jeu : Poste de Réceptionneur-Attaquant en début de saison." },
            { src: 'assets/projects/m18-champion/Capture d\'écran 2026-03-18 155852.png', caption: "Affiche de célébration du titre" }
        ],
        relatedModals: [
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'palmares-volley'
    },
    'champion-pfr-m18': {
        title: '🏆 Champion Phases Finales Régionales',
        period: '05/2025',
        summary: 'Consécration régionale lors du tournoi de clôture de la saison. Cette page retrace les victoires nettes face aux meilleures formations de la région, l\'aboutissement d\'un système de jeu collectif performant et le succès symbolique face à mon ancien club.',
        context: 'Les phases finales régionales marquent l\'aboutissement de la saison, réunissant sur une seule journée à Montargis les meilleures formations M18G des championnats Pré-National et Régional. Lors de cet événement, notre collectif a fait preuve d\'une efficacité remarquable, s\'appuyant sur une cohésion et un système de jeu parfaitement en place. Avec une maîtrise technique constante, nous avons remporté nos rencontres sans concéder le moindre set : une victoire 2-0 en demi-finale face au RSSC, suivie d\'un succès 2-0 en finale contre Nogent-le-Rotrou, scellant ainsi notre titre de champion régional.',
        positions: ['Libéro'],
        teamsRep: ['Équipe Phase Finales Régionales M18 (AAJB)'],
        results: [
            '🏆 Vainqueur des Phases Finales Régionales M18 Masculine'
        ],
        tags: ['AAJB', 'Champion', 'PFR', 'M18', 'Libéro', 'Victoire Finale', 'Régional'],
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ],
        gallery: [
            { src: 'assets/projects/m18-pfr/M18G Champion Phase finales 2025.jpg', caption: "🏆 Champions des Phases Finales Régionales M18G 2025." },
            { src: 'assets/projects/m18-pfr/Collectif_coupe.jpg', caption: "La joie du collectif AAJB soulevant le trophée régional." },
            { src: 'assets/projects/m18-pfr/podium phase finales M18G 2025.jpg', caption: "Sur la première marche du podium régional." },
            { src: 'assets/projects/m18-pfr/Coupe régionale.jpg', caption: "Le trophée de Champion Régional M18G." },
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
        resultsTitle: 'Communication et réseaux sociaux',
        resultsIcon: 'fa-share-nodes',
        results: [
            'Production et montage d\'une série de Vlogs quotidiens en immersion',
            'Développement d\'une expertise en "Storytelling" sportif et captation de moments de vie d\'athlètes',
            'Constitution d\'un carnet d\'adresses stratégique : joueurs pros, influenceurs et responsables com'
        ],
        missionsTitle: 'Progression sportive',
        missions: [
            'Pratique intensive (14 séances) axée sur la technique sable et la lecture de jeu.',
            'Participation aux ateliers : Nutrition du sportif, préparation physique et gestion de carrière.',
            '3 tournois organisés durant la semaine pour évaluer le niveau face à l\'élite M18.',
            'Amélioration technique majeure en Beach-Volley et renforcement des fondamentaux salle.'
        ],
        tags: ['Beach Volley', 'Montpellier', 'Le Volleyeur Français', 'Influence', 'Vlogs', 'Haut Niveau'],
        brandLogo: [
            'assets/projects/volleyball/Icone-LVF-orange.png',
            'assets/projects/volleyball/MBV-orange.png'
        ],
        gallery: [
            { src: 'assets/projects/lvf-camp/Effectif complet.jpg', caption: "Le collectif complet du LVF Camp 2024 au Montpellier Beach Volley." },
            { src: 'assets/projects/lvf-camp/Conférence.jpg', caption: "Rencontre avec Arthur Canet et Téo Rotar, Champions du Monde U19." },
            { src: 'assets/projects/lvf-camp/jeu.jpg', caption: "Entraînement sur le second contact de balle " },
            { src: 'assets/projects/lvf-camp/Jeu 2.jpg', caption: "Prise de conseil technique lors de l'entraînement" },
            { src: 'assets/projects/lvf-camp/Photo avec Arthur Canet et Teo Rotar.JPG', caption: "Photo avec Arthur Canet et Teo Rotar, champions du monde U19" },
            { src: 'assets/projects/lvf-camp/Staff encadrant.jpg', caption: "Staff d'encadrement du stage" },
            { src: 'assets/projects/lvf-camp/Photo.jpg', caption: "Photo prise lors du stage" },
            { src: 'assets/projects/lvf-camp/Stars du LVF Camp 2024.JPG', caption: "Equipe vainqueur lors du tournoi de fin de stage (Ally, Timothée, Damien)" },
            { src: 'assets/projects/lvf-camp/Analyse de la finale Stephane Canet.MP4', caption: "Vidéo : Stéphane Canet analyse la finale du tournoi du camp." },
            { src: 'assets/projects/lvf-camp/Conseils Stephane Canet.MOV', caption: "Vidéo : Conseils techniques et retours d'expérience de Stéphane Canet." },
            { src: 'assets/projects/lvf-camp/Message de fin du LVF camp.MOV', caption: "Vidéo : Bilan et message de clôture de l'édition 2024." },
            { src: 'assets/projects/lvf-camp/Victoire des jeunes contre le staff.MP4', caption: "Vidéo de la victoire des jeunes contre le staff" }
        ],
        relatedModals: [
            { id: 'communication', i18nKey: 'nav-com', label: 'Communication & Événementiel' }
        ],
        parentModalId: 'palmares-volley'
    },
    'oleron-volley': {
        title: 'Oléron Volley Plage',
        period: '08/2023 - Aujourd\'hui',
        summary: 'Expérience estivale multi-facettes mêlant encadrement de jeunes et compétition de haut niveau. Découvrez ici mes missions de coach pour les stages enfants, ma participation aux tournois 3x3 sur bitume face à des joueurs pro, et mon rôle de speaker événementiel.',
        context: 'Habitué depuis 5 ans des terrains de La Brée-les-Bains, j\'ai intégré l\'équipe d\'encadrement du club (ouvert exclusivement en juillet et août). La structure organise des stages intensifs pour enfants le matin et des tournois 3x3 mixtes bi-hebdomadaires attirant une forte densité de joueurs professionnels.',
        positions: ['Passeur/Défenseur', 'Réceptionneur-Attaquant', 'Entraîneur (Stages enfants)', 'Speaker lors des soirées d\'exhibitions et tournois'],
        resultsTitle: 'Événements et réseaux',
        resultsIcon: 'fa-share-nodes',
        results: [
            'Création de contenu sur les réseaux, et création de vidéo',
            'Participation à un match d\'ouverture en tant que joueur invité (Exhibition)',
            'Animation globale et gestion de l\'ambiance micro des événements'
        ],
        missionsTitle: 'Encadrement & Compétition',
        missions: [
            'Spécialisation à la passe pour optimiser l\'efficacité d\'attaquants de haut niveau (joueurs pro).',
            'Mise en place d\'une tactique en "tiroir" et focus sur la défense arrière.',
            'Entraîneur pour les stages enfants : 5 séances de 2h par semaine axées sur les fondamentaux.',
            'Compétition en 3x3 mixte : Confrontations régulières avec l\'élite pro française sur bitume.'
        ],
        tags: ['Oléron', 'Entraîneur', 'Speaker', '3x3 Mixte', 'Haut Niveau', 'Bitume'],
        brandLogo: [
            'assets/projects/volleyball/oleron-volley-orange.png'
        ],
        gallery: [
            { src: 'assets/projects/oleron-volley/Photo_collective.JPG', caption: "Photo d'équipe avec le staff d'encadrement à La Brée-les-Bains." },
            { src: 'assets/projects/oleron-volley/exhibition_2.jpg', caption: "Action de jeu lors d'un match d'exhibition nocturne." },
            { src: 'assets/projects/oleron-volley/moi_jeu_1.JPG', caption: "Phase de jeu : Focus sur la défense et le placement." },
            { src: 'assets/projects/oleron-volley/moi_jeu_2.JPG', caption: "Lecture de trajectoire et anticipation." },
            { src: 'assets/projects/oleron-volley/moi_jeu_3.JPG', caption: "Soutien et communication constante sur le terrain." },
            { src: 'assets/projects/oleron-volley/RCNL6297.JPG', caption: "Ambiance et intensité des tournois estivaux sur bitume." }
        ],
        relatedModals: [
            { id: 'communication', i18nKey: 'nav-com', label: 'Communication & Événementiel' },
            { id: 'encadrement-volley', i18nKey: 'volley-enc-title', label: 'Encadrement Volley-ball' }
        ],
        parentModalId: 'palmares-volley'
    },
    'assistant-n3-rssc': { 
        title: 'Assistant Entraînement Nationale 3 Féminine - Union Volleyball Touraine', 
        period: '09/2023 - 06/2024', 
        summary: 'Expérience immersive au sein d\'une équipe de Nationale 3 Féminine pour découvrir les exigences du haut niveau. J\'ai activement secondé l\'entraîneur principal dans la préparation des séances, l\'analyse des performances techniques et la gestion logistique, afin de garantir un environnement de travail rigoureux et performant.', 
        context: 'Rôle bénévole d\'observation et de soutien logistique auprès de Paul Hinckel au sein de l\'Union Volleyball Touraine (UVBT). Cette structure était une union des clubs de la Touraine visant à promouvoir une équipe féminine forte dans la région, avec pour base logistique et administrative le club du RSSC. Ma mission consistait à aider à la mise en place des séances et à observer le fonctionnement d\'un groupe national, afin de comprendre les exigences du haut niveau.', 
        positions: ['Assistant Bénévole'],
        teamsRep: ['National 3 Féminine (RSSC)'],
        people: '<span class="roster-bullet">•</span> Effectif jeune et inexpérimenté.<br><span class="roster-bullet">•</span> Individualités :<ul class="modal-inner-list"><li>Melissandre Figaro (R4, actuellement au Pôle France)</li><li>Elisa Mpouppe (Actuellement en N2 aux Neptunes de Nantes)</li></ul>',
        missionsTitle: 'Missions & réalisations',
        missions: [
            'Aide à la mise en place logistique et matérielle des séances d\'entraînement.',
            'Observation active des feedbacks et des méthodes de Paul Hinckel.',
            'Apprentissage des exigences et de la rigueur du niveau National.',
            'Soutien à l\'animation des ateliers sous la direction du coach.'
        ], 
        tags: ['RSSC', 'National 3', 'Bénévolat', 'Apprentissage', 'Rigueur'], 
        brandLogo: [
            'assets/projects/ligue/icone ffvb orange.png',
            'assets/projects/rssc/icone rssc orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/uvbt/equipe-uvbt.jpg', caption: "Collectif de l'Union Volleyball Touraine (UVBT)." },
            { src: 'assets/projects/uvbt/temps-mort-1.jpg', caption: "Observation tactique lors d'un temps mort." },
            { src: 'assets/projects/uvbt/equipe-n3.png', caption: "Équipe Nationale 3 Féminine - Saison 2023-2024." },
            { src: 'assets/projects/uvbt/temps-mort-2.jpg', caption: "Consignes techniques et cohésion d'équipe." },
            { src: 'assets/projects/uvbt/jeu.jpg', caption: "Phase de jeu en compétition Nationale." }
        ], 
        relatedModals: [
            { id: 'rssc-detail', label: 'RS Saint-Cyr (RSSC)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'assistant-rsf-24-25': { 
        title: 'Assistant Entraînement Régionale Féminine - AAJB', 
        period: '09/2024 - 06/2025', 
        summary: 'Collaboration technique au projet de promotion de l\'équipe régionale féminine. Ma contribution a porté sur l\'analyse tactique et le soutien pédagogique lors d\'une saison marquée par l\'accession au niveau Pré-National, consolidant mes compétences en management de groupe senior.', 
        context: 'Adjoint bénévole à l\'entraînement pour l\'équipe Régionale Féminine. Ma mission consistait à aider Florian Busteau dans la préparation technique et tactique du groupe. J\'ai mis mes expériences passées et mes heures d\'analyses tactiques à profit tout en observant la gestion senior, avec pour objectif d\'apprendre les rouages de l\'accession au niveau supérieur.', 
        positions: ['Assistant Bénévole (Aide & Apprentissage)'],
        teamsRep: ['Régionale Féminine (AAJB)'],
        results: [
            '4ème du championnat Régionale Senior Féminine',
            'Montée en Pré-Nationale'
        ],
        people: '<span class="roster-bullet">•</span> 12 joueuses.<br><span class="roster-bullet">•</span> Groupe hétérogène (moitié plus 25 ans / moitié 18 ans ou moins).<br><span class="roster-bullet">•</span> Individualités :<ul class="modal-inner-list"><li>Miadana Rakatanaivo (R4, ex-Libéro N2 Nancy)</li><li>Laly Antoina (R4, 17 ans)</li><li>Solenne Quessard Bourget (Passeuse, 14 ans)</li><li>Axelle Romero (Passeuse, 16 ans)</li></ul>',
        missionsTitle: 'Missions & réalisations',
        missions: [
            'Aide à l\'animation des séances d\'entraînement hebdomadaires.',
            'Apport de conseils techniques et tactiques sur le placement, la lecture de jeu et les gestes, s\'appuyant sur la capitalisation de mes expériences passées de joueur et de coach.',
            'Observation active de la gestion d\'un collectif senior en quête de montée.',
            'Collaboration avec le coach principal pour le suivi tactique.'
        ], 
        tags: ['AAJB', 'Régionale Féminine', 'Bénévolat', 'Apprentissage', 'Montée'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/rsf-reg/equipe-rsf.png', caption: "Le collectif Régionale Féminine de l'AAJB lors de la saison 2024-2025" },
            { src: 'assets/projects/rsf-reg/Equipe.jpg', caption: "Groupe senior lors de l'accession en Pré-Nationale" }
        ], 
        relatedModals: [
            { id: 'encadrement-volley', label: 'Volleyball Coaching' },
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'assistant-m18f-24-25': { 
        title: 'Assistant Entraînement Moins de 18 ans Féminine Régionale Féminine - AAJB', 
        period: '09/2024 - 06/2025', 
        summary: 'Accompagnement de l\'élite jeune vers un triplé historique (Championnat, Phases Finales, 4e tour de Coupe de France). Soutien technique et tactique axé sur l\'analyse du jeu et la gestion tactique des entraînements dans l\'objectif principal de l\'amélioration rapide du collectif.', 
        context: 'Adjoint bénévole à l\'entraînement auprès de Carine Antoina. Cette saison a été une étape clé pour apprendre à connaître les joueuses, maîtriser les enjeux du championnat régional et comprendre les spécificités de la catégorie. J\'ai apporté mes connaissances techniques et tactiques tout en préparant activement ma future prise de poste en tant qu\'entraîneur principal.', 
        positions: ['Assistant Bénévole'],
        teamsRep: ['Moins de 18 ans Féminine Régionale'],
        results: [
            '🏆 Championnes Régionales Moins de 18 ans (Championnat)',
            '🏆 Championnes des Phases Finales Régionales Moins de 18 ans',
            '🔥 4ème tour de Coupe de France Moins de 18 ans'
        ],
        people: '<span class="roster-bullet">•</span> 12 joueuses (entre 13 et 18 ans).<br><span class="roster-bullet">•</span> Groupe homogène avec déjà une année d\'expérience dans le championnat (majorité de filles en M18 dernière année).<br><span class="roster-bullet">•</span> Individualités :<ul class="modal-inner-list"><li>Solenne Quessard Bourget (Passeuse, 14 ans)</li><li>Laly Antoina (R4, 17 ans)</li><li>Axelle Romero (Passeuse, 16 ans)</li><li>Chloé Roudier (Centrale, 13 ans, sélection au CRE de la Ligue du Centre-Val de Loire)</li></ul>',
        missionsTitle: 'Missions & réalisations',
        missions: [
            'Observation active du groupe et des dynamiques de jeu pour la saison future.',
            'Apport de conseils techniques et tactiques précis lors des entraînements.',
            'Soutien à Carine Antoina dans la préparation des tours de Coupe de France.',
            'Immersion dans le coaching des jeunes joueuses à haut potentiel.'
        ], 
        tags: ['AAJB', 'Moins de 18 ans', 'Bénévolat', 'Apprentissage', 'Stratégie'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/m18f-reg/equipe M18F 2024-2025.png', caption: "Effectif M18F Coupe de France" },
            { src: 'assets/projects/m18f-reg/equipe M18F 2024-2025_2.png', caption: "Le collectif M18F de l'AAJB lors de la saison 2024-2025" }
        ], 
        parentModalId: 'encadrement-volley' 
    },
    'entraineur-m18f': { 
        title: 'Entraîneur Principal Moins de 18 ans Féminine PNF', 
        period: '09/2026 - 08/2027', 
        summary: 'Pilotage global d\'un collectif en phase de reconstruction technique et tactique. Le fil conducteur de cette saison vise à instaurer un nouveau cycle de formation axé sur l\'excellence régionale, l\'intégration de systèmes de jeu, l\'apprentissage de mouvements techniques et le développement du potentiel individuel vers le niveau senior régional et national', 
        context: 'Coach principal du collectif Moins de 18 ans Féminine Pré-Nationale (Régionale). dirige les 3h d\'entraînements hebdomadaires et le parcours en Coupe de France, tout en coordonnant le championnat avec un adjoint. L\'enjeu de cette saison est de lancer un nouveau cycle de formation en alliant progression individuelle vers le haut niveau et cohésion collective.', 
        positions: ['Entraîneur Principal (Head Coach)'],
        teamsRep: ['Moins de 18 ans Féminine Pré-Nationale (AAJB)', 'Moins de 18 ans Féminine Coupe de France', 'Moins de 18 ans Féminine Coupe du Loir et Cher'],
        results: [
            '5e Pré-Nationale M18F',
            '3e tour de Challenge France',
            '1er Coupe Loir-et-Cher'
        ],
        people: '<span class="roster-bullet">•</span> 12 joueuses (entre 13 et 18 ans).<br><span class="roster-bullet">•</span> Groupe homogène avec déjà une année d\'expérience dans le championnat (majorité de filles en M18 dernière année).<br><span class="roster-bullet">•</span> Individualités :<ul class="modal-inner-list"><li>Solenne Quessard Bourget (R4, 15 ans)</li><li>Axelle Romero (Passeuse, 17 ans)</li><li>Chloé Roudier (Centrale, 14 ans, sélection au CRE de la Ligue du Centre-Val de Loire)</li></ul>',
        missionsTitle: 'Missions & réalisations',
        missions: [
            'Direction des 3h d\'entraînements hebdomadaires et du parcours en Coupe de France.',
            'Planification pédagogique pour groupes homogènes (PNF).',
            'Mise en place tactique du système 5-1 (utilisation d\'une libero comme R4).',
            'Mise en avant de potentiel : Replacement de Solenne de Passeuse à R4.',
            'Vision stratégique : Reconstruction de cycle et détection de potentiels.'
        ],
        tags: ['AAJB', 'Head Coach', 'Formation', 'Management', 'Coupe de France'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/m18f-pn/Equipe_1.jpg', caption: "Le collectif M18F Pré-Nationale de l'AAJB Volley - Photo officielle." },
            { src: 'assets/projects/m18f-pn/Equipe 2.jpeg', caption: "Le collectif M18F Pré-Nationale de l'AAJB Volley - Saison 2025-2026." },
            { src: 'assets/projects/m18f-pn/Tour 1 challenge france_equipe.jpg', caption: "L'équipe lors du 1er tour du Challenge France." },
            { src: 'assets/projects/m18f-pn/Temps mort 1.JPG', caption: "Coaching en match : Briefing tactique lors d'un temps mort." },
            { src: 'assets/projects/m18f-pn/Fiche Equipe M18F.png', caption: "Outil de suivi : Fiche de présentation et objectifs du collectif." },
            { src: 'assets/projects/m18f-pn/Fiche M18F Axelle Romero.png', caption: "Suivi individuel : Exemple de fiche technique et statistique personnalisée (Axelle)." },
            { src: 'assets/projects/m18f-pn/Fiche M18F Chloé Roudier.png', caption: "Suivi individuel : Exemple de fiche technique et statistique personnalisée (Chloé)." },
            { src: 'assets/projects/m18f-pn/Fiche M18F Solenne Quessard Bourget.png', caption: "Suivi individuel : Exemple de fiche technique et statistique personnalisée (Solenne)." }
        ], 
        relatedModals: [
            { id: 'encadrement-volley', label: 'Volleyball Coaching' },
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'assistant-cre-25-26': { 
        title: 'Assistant Entraîneur du CRE', 
        period: 'Saison 2025 - 2026', 
        summary: 'Expérience immersive au service de l\'élite régionale. Soutien actif aux sélections Centre-Val de Loire lors des stages de préparation aux Volleyades, sous la direction d\'entraîneurs de renom. Focus sur l\'observation méthodologique et l\'analyse technique de joueurs à haut potentiel.', 
        context: 'Intervention lors des stages régionaux (premiers et derniers week-ends de vacances scolaires) pour assister Benoît Rousseau (CRE Filles) et Sylvain Piletan (CRE Garçons). Cette mission permet d\'évoluer au contact d\'intervenants experts (Kevin Lemaintec, Franck Varambon, Marc Francastel) et de préparer les collectifs à la compétition nationale des Volleyades.', 
        positions: ['Assistant Entraîneur'],
        teamsRep: ['Sélections Régionales (CRE Centre-Val de Loire)'],
        people: '<span class="roster-bullet">•</span> Sélections Régionales Filles et Garçons (12 joueurs/joueuses par effectif).<br><span class="roster-bullet">•</span> Joueurs(ses) licenciés en Centre-Val de Loire, nés en 2011 au maximum.<br><span class="roster-bullet">•</span> Profils à haut potentiel évoluant majoritairement en Pôle.<br><span class="roster-bullet">•</span> Individualités coachées :<ul class="modal-inner-list"><li>Lucas Cros</li><li>Nelia Ameza</li><li>Lilou Pouget</li><li>Zoé Lefevre</li></ul>',
        missionsTitle: 'Missions & réalisations',
        missions: [
            'Aide à la mise en place des séances et soutien logistique au staff technique (identique à la mission N3).',
            'Observation active des méthodes d\'entraînement de haut niveau fédéral.',
            'Analyse des performances individuelles et collectives lors des matchs amicaux.',
            'Suivi technique des jeunes espoirs du territoire lors des rassemblements.',
            'Immersion dans la gestion d\'un groupe d\'élite régionale en préparation d\'une compétition nationale.'
        ], 
        tags: ['Ligue du Centre', 'CRE', 'Volleyades', 'Haut Niveau', 'Détection'], 
        brandLogo: ['assets/projects/ligue/Icone LDC orange.png'], 
        gallery: [
            { src: 'assets/projects/dre/Effectif_selection_cre_M15F_ligue_CVL_2024_2025.png', caption: "Collectif M15F de la Ligue Centre-Val de Loire - Saison 2024-2025." },
            { src: 'assets/projects/dre/entrainement_4_demonstration_Marc_Francastel.png', caption: "Analyse technique : Démonstration de Marc Francastel." },
            { src: 'assets/projects/dre/entrainement_5_block_avec_benoit_rousseau.png', caption: "Travail spécifique au bloc avec Benoît Rousseau." },
            { src: 'assets/projects/dre/Affiche Coloc Marc Francastel.png', caption: "Organisation d'événements : Affiche du colloque pour entraîneurs." },
            { src: 'assets/projects/dre/entrainement 1.png', caption: "Entraînement spécifique à l'attaque avec utilisation des techniques d'entraîneurs." },
            { src: 'assets/projects/dre/entrainement 2.png', caption: "Entraînement spécifique enchaînement à l'attaque." },
            { src: 'assets/projects/dre/entrainement 3.png', caption: "Entraînement spécifique à l'attaque avec utilisation des techniques d'entraîneurs." },
            { src: 'assets/projects/dre/entrainement 6.png', caption: "Échauffement en début d'entraînement avec la sélection régionale." }
        ], 
        parentModalId: 'encadrement-volley' 
    },
    'entraineur-adjoint-pnf': { 
        title: 'Entraîneur Adjoint Pré-Nationale Féminine - AAJB', 
        period: '09/2026 - 08/2027', 
        summary: 'Expertise tactique et spécialisation défensive au sein de l\'élite régionale. En binôme avec l\'entraîneur principal, j\'assure l\'analyse statistique en temps réel et le soutien à la décision stratégique pour optimiser la stabilisation du secteur arrière senior, tout en assurant le suivi et l\'accompagnement des jeunes joueuses à haut potentiel issues du collectif M18F.', 
        context: 'Nommé entraîneur adjoint de l\'équipe première féminine suite à la montée en PNF. Ma mission est facilitée par la présence de 4 joueuses issues de mon groupe Moins de 18 ans. Ayant été assistant Moins de 18 ans et Régionale Féminine la saison passée, je bénéficie d\'une connaissance poussée du collectif et d\'une forte légitimité. Présent à l\'intégralité des séances d\'entraînement, je travaille en binôme avec Florian Busteau pour optimiser la performance. Je dispose de toute l\'attention des joueuses qui me sollicitent régulièrement sur des points techniques et tactiques précis.', 
        positions: ['Entraîneur Adjoint'],
        teamsRep: ['Pré-Nationale Féminine (AAJB)'],
        results: [
            '7e de Pré-Nationale Féminine - Maintien'
        ],
        people: '<span class="roster-bullet">•</span> 12 joueuses.<br><span class="roster-bullet">•</span> Groupe hétérogène (moitié plus 25 ans / moitié 18 ans ou moins).<br><span class="roster-bullet">•</span> Individualités :<ul class="modal-inner-list"><li>Miadana Rakatanaivo (R4, ex-Libéro N2 Nancy)</li><li>Jeanne Longuet (R4, 18 ans, ex centrale-pointue en N3 à Levallois)</li><li>Solenne Quessard Bourget (R4-Pointue, 15 ans)</li><li>Axelle Romero (Passeuse, 17 ans)</li></ul>',
        missionsTitle: 'Missions & réalisations',
        missions: [
            'Soutien actif à tous les entraînements de la semaine (systèmes de jeu, technique).',
            'Coaching adjoint sur le banc pour l\'aide à la décision tactique.',
            'Prise de statistiques en temps réel durant les matchs pour l\'analyse de performance.',
            'Focus sur la qualité de la relance et de la défense senior.',
            'Analyse de l\'adversaire et aide aux briefings tactiques d\'avant-match.'
        ], 
        tags: ['AAJB', 'PNF', 'Senior', 'Adjoint', 'Expertise Défense'], 
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/pnf/Equipe.jpg', caption: "Le collectif Pré-Nationale Féminine (PNF) de l'AAJB Volley-ball." },
            { src: 'assets/projects/pnf/Equipe 2.jpg', caption: "Photo d'équipe à l'entraînement thème orange" },
            { src: 'assets/projects/pnf/Fiche equipe PNF.png', caption: "Outil de suivi : Fiche de présentation et objectifs de l'équipe Pré-Nationale Féminine." },
            { src: 'assets/projects/pnf/Fiche PNF Jeanne Longuet.png', caption: "Suivi individuel : Exemple de fiche technique et statistique personnalisée (Jeanne)." },
            { src: 'assets/projects/pnf/Fiche PNF Axelle Romero.png', caption: "Suivi individuel : Exemple de fiche technique et statistique personnalisée (Axelle)." },
            { src: 'assets/projects/pnf/Fiche PNF Mia Ranaivo.png', caption: "Suivi individuel : Exemple de fiche technique et statistique personnalisée (Mia)." },
            { src: 'assets/projects/pnf/Fiche PNF Solenne Quessard Bourget.png', caption: "Suivi individuel : Exemple de fiche technique et statistique personnalisée (Solenne)." }
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
        summary: 'Direction technique et transformation d\'un groupe mixte hétérogène. Mon action se concentre sur l\'accélération de l\'apprentissage des bases compétitives et la détection stratégique de potentiels pour alimenter les effectifs fédéraux du club.', 
        context: 'Responsable de la section UFOLEP de l\'AAJB Blois (1h30 d\'entraînement hebdomadaire). Ma mission est de transformer un groupe de débutants motivés en collectifs capables de performer en championnat départemental (UFOLEP 41). J\'ai impulsé une dynamique collaborative en intégrant le capitaine Justin Fotso Tetchou comme adjoint, favorisant l\'investissement des membres dans la vie du club. L\'Équipe 1 UFOLEP a notamment participé à la Coupe de France Compet\'lib cette saison.', 
        positions: ['Entraîneur Principal'],
        teamsRep: ['Équipe 1 UFOLEP (Loir-et-Cher)', 'Équipe 2 UFOLEP (Loir-et-Cher)', 'Équipe Coupe de France Compet\'lib'],
        results: [
            '1er du championnat UFOLEP 41',
            '9e de la phase régionale de compet\'lib'
        ],
        people: '<span class="roster-bullet">•</span> 20 à 25 personnes (Groupe mixte).<br><span class="roster-bullet">•</span> Large mixité d\'âge (18 à 50 ans, moyenne 25 ans).<br><span class="roster-bullet">•</span> Individualités notables :<ul class="modal-inner-list"><li>Justin Fotso Tetchou (Entraîneur adjoint, Arbitre International Camerounais)</li><li>Claire Pinto (Ex-footballeuse professionnelle)</li></ul>',
        missionsTitle: 'Missions & réalisations',
        missions: [
            'Conception et animation de séances adaptées à un public hétérogène et débutant.',
            'Détection et perfectionnement des profils prometteurs pour le projet Senior (Pré-Nationale).',
            'Accompagnement et mentorat de l\'entraîneur adjoint pour son intégration au staff.',
            'Gestion de la dynamique de groupe alliant plaisir de jeu et rigueur compétitive.'
        ], 
        tags: ['AAJB', 'UFOLEP', 'Mixité', 'Formation', 'Loisir Compétition'], 
        brandLogo: [
            'assets/projects/ufolep/icone ufolep orange.png',
            'assets/projects/aajb/Icone AAJB orange.png'
        ], 
        gallery: [
            { src: 'assets/projects/ufolep/Effectif ufolep 2025-2026.JPG', caption: "L'équipe UFOLEP de l'AAJB Volley-ball - Saison 2025-2026." },
            { src: 'assets/projects/ufolep/Coupe de France Compet\'Lib Phase régionale Equipe.JPG', caption: "Collectif lors de la phase régionale de la Coupe de France Compet\'Lib." }
        ], 
        relatedModals: [
            { id: 'encadrement-volley', label: 'Volleyball Coaching' },
            { id: 'ajb-detail', label: 'AAJB Volley (Blois)' }
        ],
        parentModalId: 'encadrement-volley' 
    },
    'laval-detail': {
        title: 'ASPTT Laval - Saison 2026/2027',
        period: 'Saison 2026-2027',
        summary: 'Engagement au sein de l\'ASPTT Laval Volley-ball pour la saison 2026-2027. Ce nouveau chapitre s\'inscrit dans une dynamique de performance et de développement continu au sein d\'une structure ambitieuse de la Mayenne.',
        context: '<strong>[Contenu à venir]</strong> - Ma mission et mon rôle précis au sein de l\'ASPTT Laval (joueur/encadrement) seront détaillés prochainement avec le lancement de la saison.',
        brandLogo: [
            'assets/icons/laval-orange.png'
        ],
        missionsTitle: 'Perspectives de la Saison',
        missions: [
            'Intégration du projet sportif de l\'ASPTT Laval.',
            'Contribution à la performance collective du club.',
            'Développement des compétences techniques et tactiques en milieu fédéral.',
            'Collaboration avec le staff technique et les membres du club.'
        ],
        tags: ['ASPTT Laval', 'Laval', 'Nouveau Club', 'Saison 2026-2027', 'Performance'],
        gallery: []
    },
    'dre2-detail': {
        title: 'Certificat d\'Animateur de Beach-Volley (DRE 2)',
        period: '23 - 24 Mai 2026',
        summary: 'Formation intensive de 2 jours réalisée à la Plaine Départementale des Sports de Châteauroux. Ce cursus permet l\'obtention du Certificat d\'Animateur de Beach-Volley, validant les compétences techniques et pédagogiques nécessaires pour encadrer la discipline sur sable.',
        context: 'Formation dirigée par Frederic Cros et Johny Francoise, s\'appuyant sur la sélection régionale M15 Féminine et Masculine comme collectifs supports. Ce module du DRE 2 se concentre sur la transmission des fondamentaux et la gestion de groupes de jeunes en milieu spécifique (sable).',
        brandLogo: [
            'assets/projects/ligue/Icone LDC orange.png'
        ],
        missionsTitle: 'Acquisitions & Encadrement',
        missions: [
            '<strong>Certification Animateur :</strong> Validation des compétences d\'encadrement spécifique au Beach-Volley.',
            '<strong>Pédagogie Sable :</strong> Adaptation des exercices techniques aux contraintes de la surface et de l\'environnement extérieur.',
            '<strong>Direction de Collectif Jeune :</strong> Coaching et animation de séances avec les sélections régionales M15.',
            '<strong>Ingénierie de Séance :</strong> Conception de situations d\'apprentissage progressives pour le 2x2 sur sable.',
            '<strong>Expertise Intervenants :</strong> Apprentissage des méthodes de haut niveau auprès de Frederic Cros et Johny Francoise.',
            '<strong>Vie Collective :</strong> Gestion des temps de vie collective et de la cohésion de groupe lors d\'un stage.'
        ],
        tags: ['DRE 2', 'Beach-Volley', 'Entraîneur', 'FFVB', 'Performance', 'Haut Niveau'],
        gallery: [
            { src: 'assets/projects/dre/IMG_5912.jpeg', caption: "Affiche de la formation Animateur Beach Volley - Niveau 1." },
            { src: 'assets/projects/dre/IMG_5893.jpeg', caption: "Vue d'ensemble de la structure couverte de Châteauroux." },
            { src: 'assets/projects/dre/IMG_5892.jpeg', caption: "Situation d'opposition avec le groupe M15F" },
            { src: 'assets/projects/dre/IMG_5888.jpeg', caption: "Situation de jeu lors du stage" }
        ],
        relatedModals: [
            { id: 'encadrement-volley', label: 'Encadrement Volley-ball' }
        ]
    }
});