document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded - initializing portfolio script...");

    // 1. Core Element Selection
    const htmlElement = document.documentElement;
    const themeCheckbox = document.getElementById('checkbox');
    const toolboxBtn = document.getElementById('toolboxBtn');
    const toolboxMenu = document.getElementById('toolboxMenu');
    const langToggle = document.getElementById('langToggle');
    const langSubmenu = document.getElementById('langSubmenu');
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    // 2. Load Data from global object (js/data.js)
    if (!window.siteData) {
        console.error("CRITICAL: siteData not found. Make sure js/data.js is loaded before main.js");
        return;
    }

    const translations = window.siteData.translations || {};
    // modalData is now expected to be structured as { fr: {...}, en: {...}, ... }
    const modalData = window.siteData.modalData || {};

    // 3. Robust Navigation Functions
    function showSection(targetId) {
        // console.log("Showing section:", targetId);
        const targetSection = document.getElementById(targetId);
        if (!targetSection) {
            // console.error("Section not found:", targetId);
            return;
        }

        document.querySelectorAll('section').forEach(s => {
            s.classList.remove('active');
            s.style.display = 'none';
        });
        
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
        if (targetId === 'home') targetSection.style.display = 'flex';

        window.scrollTo(0, 0);

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    }

    function changeLanguage(lang) {
        console.log("Changing language to:", lang);
        
        // Handle RTL for Arabic
        if (lang === 'ar') {
            htmlElement.setAttribute('dir', 'rtl');
            htmlElement.classList.add('rtl-layout');
        } else {
            htmlElement.setAttribute('dir', 'ltr');
            htmlElement.classList.remove('rtl-layout');
        }

        // Fallback to French if the language isn't found in translations
        const langData = translations[lang] || translations['fr'];
        
        if (!langData) return;
        
        // Update simple text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = langData[key] || translations['fr'][key];
            if (text) el.innerHTML = text;
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const text = langData[key] || translations['fr'][key];
            if (text) el.setAttribute('placeholder', text);
        });

        // Update Page Title
        document.title = `Matéis Cherpeau | ${langData['nav-home'] || 'Portfolio'}`;
        
        // Save preference
        localStorage.setItem('lang', lang);
        
        // Update active class in menu
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        // Refresh open modal if any
        const modal = document.getElementById('experienceModal');
        if (modal && modal.classList.contains('active') && modal.dataset.activeId) {
            openModal(modal.dataset.activeId);
        }
        
        // Re-index search for the new language
        if (typeof buildSearchIndex === 'function') {
            buildSearchIndex();
        }

        // Refresh theme UI to update the theme label in the correct language
        const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        updateThemeUI(currentTheme);
    }

    function updateThemeUI(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (themeCheckbox) {
            themeCheckbox.checked = (theme === 'dark');
        }

        const themeLabel = document.querySelector('.theme-toolbox-item [data-i18n]');
        if (themeLabel) {
            const lang = localStorage.getItem('lang') || 'fr';
            // If currently dark, the button should offer to switch to LIGHT mode
            const themeKey = theme === 'dark' ? 'nav-theme-light' : 'nav-theme-dark';
            themeLabel.setAttribute('data-i18n', themeKey);
            
            const langData = translations[lang] || translations['fr'];
            const fallbackData = translations['fr'];
            
            if (langData && langData[themeKey]) {
                themeLabel.innerHTML = langData[themeKey];
            } else if (fallbackData && fallbackData[themeKey]) {
                themeLabel.innerHTML = fallbackData[themeKey];
            }
        }
    }

    // 5. MODAL SYSTEM LOGIC
    const modal = document.getElementById('experienceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPeriod = document.getElementById('modalPeriod');
    const modalSummary = document.getElementById('modalSummary');
    const modalContext = document.getElementById('modalContext');
    const modalMissions = document.getElementById('modalMissions');
    const modalGallery = document.getElementById('modalGallery');
    const modalTags = document.getElementById('modalTags');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');
    let modalHistory = [];

    function openModal(id, isBack = false) {
        const lang = localStorage.getItem('lang') || 'fr';
        
        // Handle history
        const currentId = modal.dataset.activeId;
        if (!isBack && currentId && currentId !== id) {
            modalHistory.push(currentId);
        }
        if (isBack) {
            // No need to push, we are already popping
        } else if (!currentId) {
            modalHistory = []; // Reset history if opening from fresh
        }

        // Reset scroll position to top
        const scrollContent = document.querySelector('.modal-scroll-content');
        if (scrollContent) scrollContent.scrollTop = 0;
        
        // Try to get data for current language, fallback to English, then French
        let data = (modalData[lang] && modalData[lang][id]) ? modalData[lang][id] : null;
        if (!data) {
            data = (modalData['en'] && modalData['en'][id]) ? modalData['en'][id] : null;
        }
        if (!data) {
            data = (modalData['fr'] && modalData['fr'][id]) ? modalData['fr'][id] : null;
        }

        if (!data) {
            console.warn(`No modal data found for ID: ${id} in lang: ${lang}, en or fr`);
            return;
        }

        modal.dataset.activeId = id;
        modal.setAttribute('data-active-modal', id); // For CSS targeting

        // --- REORDERING LOGIC (Visual Layout Adjustments) ---
        // These elements are either declared in outer scope or found here
        const modalSkillsSection = document.getElementById('modalSkillsSection');
        const modalPhilosophy = document.getElementById('modalPhilosophy');
        const modalResults = document.getElementById('modalResults');

        if (id === 'carriere-joueur') {
            // Player: Strengths ABOVE Timeline (Missions)
            if (modalSkillsSection && modalMissions) {
                modalBody.insertBefore(modalSkillsSection, modalMissions);
            }
        } else if (id === 'encadrement-volley' || id === 'entraineur-m18f' || id === 'entraineur-adjoint-pnf' || id === 'entraineur-ufolep-blois' || id.startsWith('assistant-') || id.startsWith('detail-unss-vaucanson-') || id === 'ajb-detail' || id.startsWith('sc-')) {
            // Coach: Results ABOVE Missions, and Strengths/Philosophy at the BOTTOM
            if (modalResults && modalMissions) {
                modalBody.insertBefore(modalResults, modalMissions);
            }
            if (modalSkillsSection && modalResults) {
                // Ensure skills are after missions when results are moved up
                if (modalMissions) modalMissions.after(modalSkillsSection);
                if (modalPhilosophy) modalSkillsSection.after(modalPhilosophy);
            }
        } else {
            // DEFAULT ORDER: Summary -> Context -> ... -> Missions -> Results -> Skills -> Philosophy
            // Reset Results to be after Missions (if it was moved)
            if (modalResults && modalMissions) {
                modalMissions.after(modalResults);
            }
            // Reset Skills and Philosophy to be after Results
            if (modalSkillsSection && modalResults) {
                modalResults.after(modalSkillsSection);
                if (modalPhilosophy) modalSkillsSection.after(modalPhilosophy);
            }
        }

        // --- CLEANUP & RESET (Crucial to prevent content mixing) ---
        if (modalMissions) {
            // Supprimer tous les éléments ajoutés dynamiquement
            const dynamicElements = modalMissions.querySelectorAll('.modal-missions-cards, .modal-timeline, .modal-split-layout, .modal-formation-layout, .major-header');
            dynamicElements.forEach(el => el.remove());

            const missionsList = modalMissions.querySelector('ul');            if (missionsList) missionsList.style.display = 'grid'; // Default
        }

        // Reset Sport specific sections visibility
        const mPos = document.getElementById('modalPositions');
        if (mPos) mPos.style.display = 'none';
        const mTeams = document.getElementById('modalTeamsRep');
        if (mTeams) mTeams.style.display = 'none';
        const mRes = document.getElementById('modalResults');
        if (mRes) mRes.style.display = 'none';
        // --- END CLEANUP ---

        // Handle Brand Logo
        const modalBrandLogo = document.getElementById('modalBrandLogo');
        const modalLeftLogo = document.getElementById('modalLeftLogo');

        if (modalLeftLogo) {
            if (data.leftLogo) {
                if (Array.isArray(data.leftLogo)) {
                    modalLeftLogo.innerHTML = data.leftLogo.map(logo => `<img src="${logo}" alt="Logo">`).join('');
                } else {
                    modalLeftLogo.innerHTML = `<img src="${data.leftLogo}" alt="Logo">`;
                }
                modalLeftLogo.style.display = 'flex';
            } else {
                modalLeftLogo.style.display = 'none';
                modalLeftLogo.innerHTML = '';
            }
        }

        if (modalBrandLogo) {
            if (data.brandLogo) {
                if (Array.isArray(data.brandLogo)) {
                    modalBrandLogo.innerHTML = data.brandLogo.map(logo => {
                        if (logo.startsWith('fab ')) {
                            return `<i class="${logo} modal-social-icon"></i>`;
                        }
                        let classes = [];
                        const logoLower = logo.toLowerCase();
                        if (logoLower.includes('ldc')) classes.push('modal-logo--ldc');
                        if (logoLower.includes('pc')) classes.push('modal-logo--pc');
                        if (logoLower.includes('com-com')) classes.push('modal-logo--com-com');
                        if (logoLower.includes('ufcv')) classes.push('modal-logo--ufcv');
                        if (logoLower.includes('unss')) classes.push('modal-logo--unss');
                        if (logoLower.includes('rssc')) classes.push('modal-logo--rssc');
                        if (logoLower.includes('aajb')) classes.push('modal-logo--aajb');
                        if (logoLower.includes('ffvb')) classes.push('modal-logo--ffvb');
                        if (logoLower.includes('eso')) classes.push('modal-logo--eso');
                        if (logoLower.includes('snc')) classes.push('modal-logo--snc');
                        if (logoLower.includes('comité') || logoLower.includes('comite')) classes.push('modal-logo--comite41');
                        if (logoLower.includes('iut')) classes.push('modal-logo--iut');
                        if (logoLower.includes('suaps')) classes.push('modal-logo--suaps');
                        if (logoLower.includes('univ')) classes.push('modal-logo--univ');
                        if (logoLower.includes('vgf')) classes.push('modal-logo--vgf');
                        if (logoLower.includes('oleron')) classes.push('modal-logo--oleron');
                        if (logoLower.includes('lvf')) classes.push('modal-logo--lvf');
                        if (logoLower.includes('mbv')) classes.push('modal-logo--mbv');
                        if (logoLower.includes('canva')) classes.push('modal-logo--canva');
                        if (logoLower.includes('photoshop')) classes.push('modal-logo--photoshop');
                        if (logoLower.includes('capcut')) classes.push('modal-logo--capcut');
                        return `<img src="${logo}" alt="Logo" class="${classes.join(' ')}">`;
                    }).join('');
                } else {
                    if (data.brandLogo.startsWith('fab ')) {
                        modalBrandLogo.innerHTML = `<i class="${data.brandLogo} modal-social-icon"></i>`;
                    } else {
                        let classes = [];
                        const logoLower = data.brandLogo.toLowerCase();
                        if (logoLower.includes('ldc')) classes.push('modal-logo--ldc');
                        if (logoLower.includes('pc')) classes.push('modal-logo--pc');
                        if (logoLower.includes('com-com')) classes.push('modal-logo--com-com');
                        if (logoLower.includes('ufcv')) classes.push('modal-logo--ufcv');
                        if (logoLower.includes('unss')) classes.push('modal-logo--unss');
                        if (logoLower.includes('rssc')) classes.push('modal-logo--rssc');
                        if (logoLower.includes('aajb')) classes.push('modal-logo--aajb');
                        if (logoLower.includes('ffvb')) classes.push('modal-logo--ffvb');
                        if (logoLower.includes('eso')) classes.push('modal-logo--eso');
                        if (logoLower.includes('snc')) classes.push('modal-logo--snc');
                        if (logoLower.includes('comité') || logoLower.includes('comite')) classes.push('modal-logo--comite41');
                        if (logoLower.includes('iut')) classes.push('modal-logo--iut');
                        if (logoLower.includes('suaps')) classes.push('modal-logo--suaps');
                        if (logoLower.includes('univ')) classes.push('modal-logo--univ');
                        if (logoLower.includes('vgf')) classes.push('modal-logo--vgf');
                        if (logoLower.includes('oleron')) classes.push('modal-logo--oleron');
                        if (logoLower.includes('lvf')) classes.push('modal-logo--lvf');
                        if (logoLower.includes('mbv')) classes.push('modal-logo--mbv');
                        if (logoLower.includes('canva')) classes.push('modal-logo--canva');
                        if (logoLower.includes('photoshop')) classes.push('modal-logo--photoshop');
                        modalBrandLogo.innerHTML = `<img src="${data.brandLogo}" alt="Logo" class="${classes.join(' ')}">`;                    }
                }
                modalBrandLogo.style.display = 'flex';
            } else {
                modalBrandLogo.style.display = 'none';
                modalBrandLogo.innerHTML = '';
            }
        }

        // Reset contextual classes and icons
        modalBody.classList.remove('modal-volley-context');
        modalBody.classList.remove('modal-social-context');
        modalBody.classList.remove('modal-engineering-context');
        const hardSkillsIcon = document.getElementById('modalHardSkillsIcon');
        const softSkillsIcon = document.getElementById('modalSoftSkillsIcon');
        const materialIcon = document.getElementById('modalMaterialIcon');
        
        // Helper to set icon (either FontAwesome or Image)
        const setSkillIcon = (iconId, iconPath, isFA = true) => {
            const element = document.getElementById(iconId);
            if (!element) return;
            const parent = element.parentElement;
            if (isFA) {
                if (element.tagName === 'IMG') {
                    const newI = document.createElement('i');
                    newI.id = iconId;
                    newI.className = iconPath;
                    parent.replaceChild(newI, element);
                } else {
                    element.className = iconPath;
                }
            } else {
                if (element.tagName === 'I') {
                    const newImg = document.createElement('img');
                    newImg.id = iconId;
                    newImg.src = iconPath;
                    newImg.alt = "Icon";
                    newImg.className = "modal-section-icon-img";
                    parent.replaceChild(newImg, element);
                } else {
                    element.src = iconPath;
                    element.className = "modal-section-icon-img";
                }
            }
        };

        // Reset to default icons (New Orange PNGs)
        setSkillIcon('modalHardSkillsIcon', 'assets/icons/comp-orange.png', false);
        setSkillIcon('modalSoftSkillsIcon', 'assets/icons/soft-orange.png', false);
        if (materialIcon) materialIcon.className = 'fas fa-tools';
        
        // Custom icon from data if exists (allows overriding the PNG)
        if (data.hardSkillsIcon) {
            setSkillIcon('modalHardSkillsIcon', 'fas ' + data.hardSkillsIcon);
        }
        
        // Add contextual class for volleyball
        const isVolley = data.parentModalId === 'carriere-joueur' || 
            data.parentModalId === 'encadrement-volley' || 
            data.parentModalId === 'palmares-volley' ||
            id === 'carriere-joueur' ||
            id === 'encadrement-volley' ||
            id === 'palmares-volley' ||
            id === 'eso-detail' ||
            id === 'rssc-detail' ||
            id === 'dre-detail' ||
            id.includes('saison-m18') || 
            id.includes('saison-pnm');

        const isEngineering = id === 'but-mp' || 
            id === 'projet-batio3' || 
            id === 'electro-reparo' || 
            id === 'projet-pendule' || 
            id === 'stage-mp2' || 
            id === 'alternance-mp3';

        const isSocial = data.parentModalId === 'service-civique' || 
            id.includes('service-civique') || 
            id.startsWith('sc-') || 
            id === 'etudiant-relai' ||
            id === 'encadrement-sc-volley';

        if (isVolley) {
            modalBody.classList.add('modal-volley-context');
            if (!data.hardSkillsIcon) {
                setSkillIcon('modalHardSkillsIcon', 'fas fa-volleyball-ball');
            }
            if (materialIcon) {
                materialIcon.className = 'fas fa-clipboard-list';
            }
        } else {
            if (isEngineering) {
                modalBody.classList.add('modal-engineering-context');
            }
        }

        if (isSocial) {
            modalBody.classList.add('modal-social-context');
            if (materialIcon && !isVolley) {
                materialIcon.className = 'fas fa-laptop';
            }
        }

        // Populate content
        modalTitle.innerHTML = data.title;

        // General fix for title alignment
        const allSectionTitles = modalBody.querySelectorAll('.modal-section-title');
        allSectionTitles.forEach(t => {
            t.style.display = 'flex';
            t.style.alignItems = 'center';
        });

        if (data.period) {
            modalPeriod.textContent = data.period;
            modalPeriod.style.display = 'inline-flex';
        } else {
            modalPeriod.style.display = 'none';
        }

        modalSummary.querySelector('p').innerHTML = data.summary;
        modalSummary.style.display = data.summary ? 'block' : 'none';

        if (data.context) {
            modalContext.querySelector('p').innerHTML = data.context;
            modalContext.style.display = 'block';
        } else {
            modalContext.style.display = 'none';
        }

        // New Sections Logic
        const modalTeam = document.getElementById('modalTeam');
        if (modalTeam) {
            if (data.people) {
                modalTeam.querySelector('p').innerHTML = data.people;
                modalTeam.style.display = 'block';
            } else {
                modalTeam.style.display = 'none';
            }
        }

        const modalMaterial = document.getElementById('modalMaterial');
        if (modalMaterial) {
            const contentContainer = modalMaterial.querySelector('.modal-material-content') || modalMaterial;
            if (data.material) {
                if (Array.isArray(data.material)) {
                    contentContainer.innerHTML = '';
                    const ul = document.createElement('ul');
                    ul.className = 'modal-material-grid';
                    
                    data.material.forEach((item) => {
                        const li = document.createElement('li');
                        if (typeof item === 'object') {
                            if (item.image) {
                                const span = document.createElement('span');
                                span.className = 'clickable-material';
                                span.textContent = item.name;
                                span.addEventListener('click', () => {
                                    const lightbox = document.getElementById('lightbox');
                                    const lightboxImg = document.getElementById('lightbox-img');
                                    const lightboxCaption = document.getElementById('lightbox-caption');
                                    lightboxImg.src = item.image;
                                    lightboxCaption.textContent = item.name;
                                    lightboxCaption.style.display = 'block';
                                    lightbox.classList.add('active');
                                });
                                li.appendChild(span);
                            } else {
                                li.textContent = item.name;
                            }
                        } else {
                            li.textContent = item;
                        }
                        ul.appendChild(li);
                    });
                    contentContainer.appendChild(ul);
                } else {
                    contentContainer.innerHTML = `<p>${data.material}</p>`;
                }
                modalMaterial.style.display = 'block';
            } else {
                modalMaterial.style.display = 'none';
            }
        }

        const modalObjective = document.getElementById('modalObjective');
        if (modalObjective) {
            if (data.objective) {
                modalObjective.querySelector('p').textContent = data.objective;
                modalObjective.style.display = 'block';
            } else {
                modalObjective.style.display = 'none';
            }
        }

        const modalSkillsRow = document.getElementById('modalSkillsRow');
        let hasSkills = false;

        const modalTrainingStructure = document.getElementById('modalTrainingStructure');
        if (modalTrainingStructure) {
            const list = modalTrainingStructure.querySelector('ul');
            const titleSpan = modalTrainingStructure.querySelector('.modal-section-title span');
            
            if (titleSpan) {
                if (data.trainingStructureTitle) {
                    titleSpan.textContent = data.trainingStructureTitle;
                    titleSpan.removeAttribute('data-i18n');
                } else {
                    titleSpan.setAttribute('data-i18n', 'modal-training-structure');
                }
            }

            if (list) {
                list.innerHTML = '';
                if (data.trainingStructure && Array.isArray(data.trainingStructure) && data.trainingStructure.length > 0) {
                    data.trainingStructure.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = item;
                        list.appendChild(li);
                    });
                    modalTrainingStructure.style.display = 'block';
                } else {
                    modalTrainingStructure.style.display = 'none';
                }
            }
        }

        const modalHardSkills = document.getElementById('modalHardSkills');
        if (modalHardSkills) {
            const list = modalHardSkills.querySelector('ul');
            list.innerHTML = '';
            list.classList.remove('two-columns'); // Reset

            // Force title update logic
            const titleSpan = modalHardSkills.querySelector('.modal-section-title span');
            if (titleSpan) {
                const currentLang = localStorage.getItem('lang') || 'fr';
                if (modalBody.classList.contains('modal-volley-context')) {
                    if (id === 'carriere-joueur' || id === 'encadrement-volley') {
                        titleSpan.textContent = currentLang === 'fr' ? 'Mes Points Forts' : 'My Strengths';
                    } else {
                        titleSpan.textContent = currentLang === 'fr' ? 'Compétences Acquises' : 'Acquired Skills';
                    }
                } else if (modalBody.classList.contains('modal-social-context')) {
                    titleSpan.textContent = currentLang === 'fr' ? 'Compétences Acquises' : 'Acquired Skills';
                } else {
                    // Default from translations
                    titleSpan.setAttribute('data-i18n', 'modal-hard-skills');
                    titleSpan.textContent = currentLang === 'fr' ? 'Mes Points Forts' : 'My Strengths';
                }
                
                // If we forced text, remove data-i18n to prevent override during subsequent updates
                if (modalBody.classList.contains('modal-volley-context') || modalBody.classList.contains('modal-social-context')) {
                    titleSpan.removeAttribute('data-i18n');
                }
            }

            // In Volley context, we merge hard and soft skills into one list, 
            // EXCEPT for the Civic Service coaching which needs parallel columns (Social context style)
            if (modalBody.classList.contains('modal-volley-context') && id !== 'encadrement-sc-volley') {
                const combinedSkills = [...(data.hardSkills || []), ...(data.softSkills || [])];
                if (combinedSkills.length > 0) {
                    hasSkills = true;
                    combinedSkills.forEach(skill => {
                        const li = document.createElement('li');
                        li.innerHTML = skill;
                        list.appendChild(li);
                    });
                    
                    // If many skills, use two columns
                    if (combinedSkills.length > 5) {
                        list.classList.add('two-columns');
                    }
                    modalHardSkills.style.display = 'block';
                    
                    // Force specific titles for Volley to avoid translation overwrite
                    const titleSpan = modalHardSkills.querySelector('.modal-section-title span');
                    if (titleSpan) {
                        const currentLang = localStorage.getItem('lang') || 'fr';
                        if (id === 'carriere-joueur' || id === 'encadrement-volley') {
                            titleSpan.textContent = currentLang === 'fr' ? 'Mes Points Forts' : 'My Strengths';
                        } else {
                            titleSpan.textContent = currentLang === 'fr' ? 'Compétences Acquises' : 'Acquired Skills';
                        }
                        // Important: remove the attribute so the general translation loop doesn't touch it
                        titleSpan.removeAttribute('data-i18n');
                    }
                } else {
                    modalHardSkills.style.display = 'none';
                }
                
                // Hide soft skills section as it's merged
                const modalSoftSkills = document.getElementById('modalSoftSkills');
                if (modalSoftSkills) modalSoftSkills.style.display = 'none';
            } else {
                // Default behavior for other sections
                if (data.hardSkills && data.hardSkills.length > 0) {
                    hasSkills = true;
                    data.hardSkills.forEach(skill => {
                        const li = document.createElement('li');
                        li.innerHTML = skill;
                        list.appendChild(li);
                    });
                    modalHardSkills.style.display = 'block';
                } else {
                    modalHardSkills.style.display = 'none';
                }

                const modalSoftSkills = document.getElementById('modalSoftSkills');
                if (modalSoftSkills) {
                    const softList = modalSoftSkills.querySelector('ul');
                    softList.innerHTML = '';
                    if (data.softSkills && data.softSkills.length > 0) {
                        hasSkills = true;
                        data.softSkills.forEach(skill => {
                            const li = document.createElement('li');
                            li.innerHTML = skill;
                            softList.appendChild(li);
                        });
                        modalSoftSkills.style.display = 'block';
                    } else {
                        modalSoftSkills.style.display = 'none';
                    }
                }
            }
        }

        // Philosophy Section Logic
        if (modalPhilosophy) {
            const philList = modalPhilosophy.querySelector('ul');
            if (philList) {
                philList.innerHTML = '';
                if (data.philosophy && Array.isArray(data.philosophy) && data.philosophy.length > 0) {
                    data.philosophy.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = item;
                        philList.appendChild(li);
                    });
                    
                    if (data.philosophy.length > 5) {
                        philList.classList.add('two-columns');
                    } else {
                        philList.classList.remove('two-columns');
                    }
                    modalPhilosophy.style.display = 'block';
                } else {
                    modalPhilosophy.style.display = 'none';
                }
            }
        }

        const modalPositions = document.getElementById('modalPositions');
        if (modalPositions) {
            const list = modalPositions.querySelector('ul');
            list.innerHTML = '';
            if (data.positions && data.positions.length > 0) {
                data.positions.forEach(pos => {
                    const li = document.createElement('li');
                    li.textContent = pos;
                    list.appendChild(li);
                });
                modalPositions.style.display = 'block';
            } else {
                modalPositions.style.display = 'none';
            }
        }

        const modalTeamsRep = document.getElementById('modalTeamsRep');
        if (modalTeamsRep) {
            const list = modalTeamsRep.querySelector('ul');
            list.innerHTML = '';
            if (data.teamsRep && data.teamsRep.length > 0) {
                data.teamsRep.forEach(team => {
                    const li = document.createElement('li');
                    li.textContent = team;
                    list.appendChild(li);
                });
                modalTeamsRep.style.display = 'block';
            } else {
                modalTeamsRep.style.display = 'none';
            }
        }

        const modalGridRow = document.querySelector('.modal-grid-row');
        if (modalGridRow) {
            const hasPositions = data.positions && data.positions.length > 0;
            const hasTeams = data.teamsRep && data.teamsRep.length > 0;
            modalGridRow.style.display = (hasPositions || hasTeams) ? 'grid' : 'none';
        }

        if (modalResults) {
            const list = modalResults.querySelector('ul');
            list.innerHTML = '';
            if (data.results && data.results.length > 0) {
                // Support for custom results title and icon
                const resultsTitleEl = modalResults.querySelector('.modal-section-title');
                if (resultsTitleEl) {
                    const defaultResTitle = (translations[lang] && translations[lang]['modal-results']) || (translations['fr']['modal-results']) || 'Résultats';
                    const resIcon = data.resultsIcon || 'fa-chart-line';
                    resultsTitleEl.innerHTML = `<i class="fas ${resIcon}"></i> <span data-i18n="modal-results">${data.resultsTitle || defaultResTitle}</span>`;
                }

                data.results.forEach(res => {
                    const li = document.createElement('li');
                    li.textContent = res;
                    list.appendChild(li);
                });
                modalResults.style.display = 'block';
            } else {
                modalResults.style.display = 'none';
            }
        }

        if (modalSkillsSection) {
            modalSkillsSection.style.display = hasSkills ? 'block' : 'none';
        }
        if (modalSkillsRow) {
            modalSkillsRow.style.display = hasSkills ? '' : 'none';
        }

        const missionsSectionTitle = modalMissions.querySelector('.modal-section-title');
        
        // Handle icon preservation and translation for the mission section title
        const defaultMissionsTitle = (translations[lang] && translations[lang]['modal-missions']) || (translations['fr']['modal-missions']) || 'Missions & Réalisations';
        
        const shouldHideTitle = (data.missionsTitle === "");

        if (shouldHideTitle) {
            if (missionsSectionTitle) missionsSectionTitle.style.setProperty('display', 'none', 'important');
        } else {
            if (missionsSectionTitle) {
                let missionIcon = 'fa-bullhorn';
                if (id === 'carriere-joueur' || id === 'encadrement-volley' || id === 'eso-detail' || id === 'rssc-detail') {
                    missionIcon = 'fa-volleyball-ball';
                } else if (id === 'palmares-volley') {
                    missionIcon = 'fa-trophy';
                } else if (id !== 'service-civique' && !id.startsWith('sc-')) {
                    missionIcon = 'fa-clipboard-list';
                }

                missionsSectionTitle.style.setProperty('display', 'flex', 'important'); // CHANGÉ: flex au lieu de block pour supporter le gap CSS
                missionsSectionTitle.innerHTML = `<i class="fas ${missionIcon}"></i> <span data-i18n="modal-missions">${data.missionsTitle || defaultMissionsTitle}</span>`;
            }
        }
        
        // Re-translate fixed parts of the modal
        modal.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            // Special case: if it's the mission title and we have custom data.missionsTitle, don't overwrite with default key
            if (key === 'modal-missions' && data.missionsTitle) {
                el.innerHTML = data.missionsTitle;
                return;
            }
            if (key === 'modal-results' && data.resultsTitle) {
                el.innerHTML = data.resultsTitle;
                return;
            }
            const langData = translations[lang] || translations['fr'];
            const text = langData[key] || translations['fr'][key];
            if (text) el.innerHTML = text;
        });

        const missionsList = modalMissions.querySelector('ul');

        let hasMissions = false;

        if (id === 'palmares-volley') {
            modalBody.classList.add('modal-palmares-context');
        }

        // LOGIC FOR DIFFERENT LAYOUTS
        if (data.formationLayout) {
            hasMissions = true;
            missionsList.style.display = 'none';
            const formationContainer = document.createElement('div');
            formationContainer.className = 'modal-formation-layout';

            // 1. Pedagogy Paragraph
            if (data.missions && data.missions[0]) {
                const p1 = document.createElement('p');
                p1.className = 'formation-paragraph';
                p1.style.marginBottom = '1.5rem';
                p1.innerHTML = data.missions[0];
                formationContainer.appendChild(p1);
            }

            // 2. Subjects Title
            const subTitle = document.createElement('h3');
            subTitle.className = 'modal-section-title';
            subTitle.style.marginTop = '2rem';
            subTitle.style.paddingTop = '1.5rem';
            subTitle.style.borderTop = 'var(--border-width) solid var(--border)';
            const subTitleKey = 'modal-subjects';
            const subTitleText = (translations[lang] && translations[lang][subTitleKey]) || (translations['fr'][subTitleKey]) || 'Matières enseignées';
            subTitle.innerHTML = `<i class="fas fa-book"></i> <span data-i18n="${subTitleKey}">${subTitleText}</span>`;
            formationContainer.appendChild(subTitle);

            // 3. Subjects Grid (Logic copied from modalCompetences)
            if (data.competences) {
                const categoryGrid = document.createElement('div');
                categoryGrid.className = 'modal-competences-categories';
                categoryGrid.style.marginBottom = '2rem';
                
                Object.keys(data.competences).forEach(category => {
                    const col = document.createElement('div');
                    col.className = 'competence-category-column';
                    const catTitle = document.createElement('h4');
                    catTitle.className = 'competence-category-title';
                    catTitle.textContent = category;
                    col.appendChild(catTitle);
                    const ul = document.createElement('ul');
                    ul.className = 'modal-list-grid category-list';
                    data.competences[category].forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        ul.appendChild(li);
                    });
                    col.appendChild(ul);
                    categoryGrid.appendChild(col);
                });
                formationContainer.appendChild(categoryGrid);
            }

            // 4. Projects Title
            const projTitle = document.createElement('h3');
            projTitle.className = 'modal-section-title';
            projTitle.style.marginTop = '2rem';
            projTitle.style.paddingTop = '1.5rem';
            projTitle.style.borderTop = 'var(--border-width) solid var(--border)';
            const projTitleKey = 'modal-projects-title';
            const projTitleText = (translations[lang] && translations[lang][projTitleKey]) || (translations['fr'][projTitleKey]) || 'Projets et mise en pratique';
            projTitle.innerHTML = `<i class="fas fa-project-diagram"></i> <span data-i18n="${projTitleKey}">${projTitleText}</span>`;
            formationContainer.appendChild(projTitle);

            // 5. Projects Paragraph
            if (data.missions && data.missions[1]) {
                const p2 = document.createElement('p');
                p2.className = 'formation-paragraph';
                p2.innerHTML = data.missions[1];
                formationContainer.appendChild(p2);
            }

            modalMissions.appendChild(formationContainer);

        } else if (data.useSplitLayout) {
            hasMissions = true;
            // NEW SPLIT LAYOUT (Timeline Left | Cards Right)
            missionsList.style.display = 'none';
            if (missionsSectionTitle) missionsSectionTitle.style.setProperty('display', 'none', 'important'); // Masquer le titre principal pour aligner les titres de colonnes
            
            const splitContainer = document.createElement('div');
            splitContainer.className = 'modal-split-layout';

            // Left Column (Timeline)
            const leftCol = document.createElement('div');
            leftCol.className = 'modal-split-left modal-timeline';

            // Ajout du titre "Parcours Chronologique" à l'intérieur de la colonne gauche
            const leftTitle = document.createElement('h3');
            leftTitle.className = 'modal-section-title split-left-title';
            const leftTitleKey = 'modal-missions';
            const leftTitleText = data.missionsTitle || (translations[lang] && translations[lang][leftTitleKey]) || (translations['fr'][leftTitleKey]) || 'Parcours Chronologique';
            leftTitle.innerHTML = `<i class="fas fa-trophy"></i> <span data-i18n="${leftTitleKey}">${leftTitleText}</span>`;
            leftCol.appendChild(leftTitle);
            
            data.timelineSeasons.forEach(season => {
                const seasonBlock = document.createElement('div');
                seasonBlock.className = 'timeline-season-block';
                seasonBlock.innerHTML = `<div class="timeline-season-header"><span class="timeline-season-title">${season.season}</span></div>`;
                const itemsContainer = document.createElement('div');
                itemsContainer.className = 'timeline-items';
                season.items.forEach(item => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'timeline-item-card' + (item.targetModal ? ' timeline-item-clickable' : '');
                    
                    let iconHTML = '';
                    if (item.iconImg) {
                        iconHTML = `<img src="${item.iconImg}" alt="" class="timeline-item-card-icon">`;
                    }
                    
                    itemEl.innerHTML = `
                        <div class="timeline-item-content">
                            ${iconHTML}
                            <span class="timeline-item-title">${item.title}</span>
                        </div>
                        <span class="timeline-item-club">${item.club}</span>
                    `;
                    if (item.targetModal) {
                        itemEl.addEventListener('click', () => openModal(item.targetModal));
                    }
                    itemsContainer.appendChild(itemEl);
                });
                seasonBlock.appendChild(itemsContainer);
                leftCol.appendChild(seasonBlock);
            });

            // Divider
            const divider = document.createElement('div');
            divider.className = 'modal-split-divider';

            // Right Column (Cards)
            const rightCol = document.createElement('div');
            rightCol.className = 'modal-split-right';

            if (data.rightColumnTitle) {
                const rightTitle = document.createElement('h3');
                rightTitle.className = 'modal-section-title split-right-title';
                const titleKey = data.rightColumnTitle;
                const titleText = (translations[lang] && translations[lang][titleKey]) || (translations['fr'][titleKey]) || 'Certifications';
                rightTitle.innerHTML = `<i class="fas fa-graduation-cap"></i> <span data-i18n="${titleKey}">${titleText}</span>`;
                rightCol.appendChild(rightTitle);
            }

            data.rightColumnItems.forEach(item => {
                const card = document.createElement('div');
                    card.className = 'modal-right-card';
                    
                    let iconHTML = '';
                    if (item.iconImg) {
                        iconHTML = `<img src="${item.iconImg}" alt="${item.title}" class="modal-right-card-icon-img">`;
                    } else if (item.icon) {
                        iconHTML = `<i class="fas ${item.icon}"></i>`;
                    }

                    card.innerHTML = `
                        <div class="modal-right-card-icon">${iconHTML}</div>
                        <div class="modal-right-card-content">
                            <h4 class="modal-right-card-title">${item.title}</h4>
                            <p class="modal-right-card-desc">${item.desc}</p>
                        </div>
                    `;
                    if (item.targetModal) {
                        card.addEventListener('click', () => openModal(item.targetModal));
                    }
                    rightCol.appendChild(card);
                });

                splitContainer.appendChild(leftCol);
                splitContainer.appendChild(divider);
                splitContainer.appendChild(rightCol);
                modalMissions.appendChild(splitContainer);
            } else if (data.useCards && data.missionCards) {
            hasMissions = true;
            missionsList.style.display = 'none';
            
            // Masquer le titre principal si on a des titres de sections majeures (pour éviter les doublons)
            if (data.missionCards.some(c => c.isMajorHeader)) {
                if (missionsSectionTitle) missionsSectionTitle.style.setProperty('display', 'none', 'important');
            }

            let currentContainer = null;

            data.missionCards.forEach(card => {
                if (card.isMajorHeader) {
                    const majorHeader = document.createElement('h3');
                    majorHeader.className = 'modal-section-title major-header';
                    
                    // Si ce n'est pas le tout premier élément de la liste des missions, on met une bordure
                    const isFirst = modalMissions.querySelectorAll('.major-header, .modal-missions-cards').length === 0;
                    if (!isFirst) {
                        majorHeader.style.marginTop = '2.5rem';
                        majorHeader.style.paddingTop = '2rem';
                        majorHeader.style.borderTop = 'var(--border-width) solid var(--border)';
                    } else {
                        majorHeader.style.marginTop = '0';
                        majorHeader.style.paddingTop = '0';
                        majorHeader.style.borderTop = 'none';
                    }

                    let iconHTML = '';
                    if (card.iconImg) {
                        iconHTML = `<img src="${card.iconImg}" alt="${card.title}" class="major-header-img" style="width: 24px; height: 24px; object-fit: contain;">`;
                    } else if (card.icon) {
                        iconHTML = `<i class="fas ${card.icon}"></i>`;
                    }

                    majorHeader.innerHTML = `${iconHTML} <span>${card.title}</span>`;
                    modalMissions.appendChild(majorHeader);
                    
                    // Créer un nouveau conteneur de cartes pour cette section
                    currentContainer = document.createElement('div');
                    currentContainer.className = 'modal-missions-cards';
                    modalMissions.appendChild(currentContainer);
                } else if (card.isGroupHeader) {
                    // S'assurer qu'un conteneur existe
                    if (!currentContainer) {
                        currentContainer = document.createElement('div');
                        currentContainer.className = 'modal-missions-cards';
                        modalMissions.appendChild(currentContainer);
                    }
                    const headerEl = document.createElement('div');
                    headerEl.className = 'mission-group-header';
                    headerEl.innerHTML = `<i class="fas ${card.icon}"></i> ${card.title}`;
                    currentContainer.appendChild(headerEl);
                } else {
                    // S'assurer qu'un conteneur existe
                    if (!currentContainer) {
                        currentContainer = document.createElement('div');
                        currentContainer.className = 'modal-missions-cards';
                        modalMissions.appendChild(currentContainer);
                    }
                    const cardEl = document.createElement('div');
                    const isTrophy = card.icon === 'fa-trophy';
                    cardEl.className = 'mission-card' + (card.targetModal ? ' mission-card-link' : '') + (isTrophy ? ' mission-card-trophy' : '');
                    
                    let iconHTML = '';
                    if (card.iconImg) {
                        iconHTML = `<img src="${card.iconImg}" alt="" class="mission-card-icon-img" style="width: 1.2rem; height: 1.2rem; margin-right: 0.5rem; vertical-align: middle; object-fit: contain;">`;
                    } else if (card.icon) {
                        iconHTML = `<i class="fas ${card.icon}"></i>`;
                    }

                    cardEl.innerHTML = `
                        <p class="mission-card-title">${iconHTML} ${card.title}</p>
                        ${card.subtitle ? `<p style="margin: 0.5rem 0 0; font-size: 0.85rem; color: ${card.targetModal ? 'var(--secondary)' : 'var(--text-muted)'};">${card.subtitle}${card.targetModal ? ' →' : ''}</p>` : ''}
                    `;
                    if (card.targetModal) {
                        cardEl.addEventListener('click', () => openModal(card.targetModal));
                    }
                    currentContainer.appendChild(cardEl);
                }
            });
        } else if (data.useTimeline && data.timelineSeasons) {
            hasMissions = true;
            missionsList.style.display = 'none';
            const timelineContainer = document.createElement('div');
            timelineContainer.className = 'modal-timeline';
            data.timelineSeasons.forEach(season => {
                if (season.isMajorHeader) {
                    const majorHeader = document.createElement('h3');
                    majorHeader.className = 'modal-section-title major-header';
                    majorHeader.style.marginTop = '2.5rem';
                    majorHeader.style.paddingTop = '2rem';
                    majorHeader.style.borderTop = 'var(--border-width) solid var(--border)';
                    
                    let iconHTML = '';
                    if (season.icon) {
                        iconHTML = `<i class="fas ${season.icon}"></i>`;
                    }
                    majorHeader.innerHTML = `${iconHTML} <span>${season.majorHeaderTitle}</span>`;
                    timelineContainer.appendChild(majorHeader);
                }

                const seasonBlock = document.createElement('div');
                seasonBlock.className = 'timeline-season-block';
                seasonBlock.innerHTML = `<div class="timeline-season-header"><span class="timeline-season-title">${season.season}</span></div>`;
                const itemsContainer = document.createElement('div');
                itemsContainer.className = 'timeline-items';
                season.items.forEach(item => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'timeline-item-card' + (item.targetModal ? ' timeline-item-clickable' : '');
                    
                    let iconHTML = '';
                    if (item.iconImg) {
                        iconHTML = `<img src="${item.iconImg}" alt="" class="timeline-item-card-icon">`;
                    }
                    
                    itemEl.innerHTML = `
                        <div class="timeline-item-content">
                            ${iconHTML}
                            <span class="timeline-item-title">${item.title}</span>
                        </div>
                        <span class="timeline-item-club">${item.club}</span>
                    `;
                    if (item.targetModal) {
                        itemEl.addEventListener('click', () => openModal(item.targetModal));
                    }
                    itemsContainer.appendChild(itemEl);
                });
                seasonBlock.appendChild(itemsContainer);
                timelineContainer.appendChild(seasonBlock);
            });
            modalMissions.appendChild(timelineContainer);
        } else {
            missionsList.style.display = 'grid';
            missionsList.innerHTML = '';
            if (data.missions && data.missions.length > 0) {
                hasMissions = true;
                data.missions.forEach(mission => {
                    const li = document.createElement('li');
                    li.innerHTML = mission;
                    missionsList.appendChild(li);
                });
            } else {
                missionsList.style.display = 'none';
            }
        }

        modalMissions.style.display = hasMissions ? 'block' : 'none';

        modalTags.innerHTML = '';
        if (data.tags) {
            data.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'modal-tag';
                span.textContent = tag;
                modalTags.appendChild(span);
            });
        }

        const galleryGrid = modalGallery.querySelector('.modal-gallery-grid');
        galleryGrid.innerHTML = '';

        // Clear previous footer if exists
        const oldFooter = modalGallery.querySelector('.modal-gallery-footer');
        if (oldFooter) oldFooter.remove();

        if (data.gallery && data.gallery.length > 0) {
            modalGallery.style.display = 'block';
            data.gallery.forEach(item => {
                // Check if item is string (old format) or object (new format)
                const src = typeof item === 'string' ? item : item.src;
                const caption = typeof item === 'string' ? '' : (item.caption || item.alt || '');
                const unadapted = typeof item === 'object' && item.unadapted === true;

                const isVideo = src.toLowerCase().endsWith('.mov') || 
                               src.toLowerCase().endsWith('.mp4') || 
                               src.toLowerCase().endsWith('.webm');

                const div = document.createElement('div');
                div.className = `modal-gallery-item ${unadapted ? 'unadapted' : ''} ${isVideo ? 'video-item' : ''}`;

                if (isVideo) {
                    div.innerHTML = `
                        <div class="video-thumbnail-container">
                            <video src="${src}#t=0.1" preload="metadata"></video>
                            <div class="video-play-icon"><i class="fas fa-play"></i></div>
                        </div>
                        ${caption ? `<span class="gallery-caption">${caption}</span>` : ''}
                    `;
                } else {
                    div.innerHTML = `
                        <img src="${src}" alt="${caption || 'Gallery Image'}">
                        ${caption ? `<span class="gallery-caption">${caption}</span>` : ''}
                    `;
                }

                // Click event for lightbox
                div.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lightbox = document.getElementById('lightbox');
                    const lightboxImg = document.getElementById('lightbox-img');
                    const lightboxVideo = document.getElementById('lightbox-video');
                    const lightboxCaption = document.getElementById('lightbox-caption');

                    if (isVideo) {
                        lightboxImg.style.display = 'none';
                        lightboxVideo.style.display = 'block';
                        lightboxVideo.src = src;
                        lightboxVideo.play();
                    } else {
                        lightboxVideo.style.display = 'none';
                        lightboxVideo.pause();
                        lightboxVideo.src = '';
                        lightboxImg.style.display = 'block';
                        lightboxImg.src = src;
                    }

                    lightboxCaption.textContent = caption;
                    lightboxCaption.style.display = caption ? 'block' : 'none';
                    lightbox.classList.add('active');
                });

                galleryGrid.appendChild(div);
            });
            // Add gallery footer if specified in data
            if (data.galleryFooter) {
                const footer = document.createElement('div');
                footer.className = 'modal-gallery-footer';
                footer.style.marginTop = '1.5rem';
                footer.style.fontStyle = 'italic';
                footer.style.fontSize = '0.9rem';
                footer.style.opacity = '0.8';
                footer.style.textAlign = 'center';
                footer.innerHTML = data.galleryFooter;
                modalGallery.appendChild(footer);
            }
        } else {
            modalGallery.style.display = 'none';
        }

        // 6. Video Highlights
        const existingVideoHighlights = modalBody.querySelector('.modal-video-highlights');
        if (existingVideoHighlights) existingVideoHighlights.remove();

        if (data.videoHighlights && data.videoHighlights.length > 0) {
            const videoContainer = document.createElement('div');
            videoContainer.className = 'modal-video-highlights';
            
            // Ajouter une barre de séparation visuelle
            videoContainer.style.marginTop = '2.5rem';
            videoContainer.style.paddingTop = '2rem';
            videoContainer.style.borderTop = 'var(--border-width) solid var(--border)';

            videoContainer.innerHTML = `
                <h3 class="modal-section-title"><i class="fas fa-video"></i> <span data-i18n="modal-video-highlights">${translations[lang]['modal-video-highlights'] || 'Extraits Vidéo'}</span></h3>
                <ul class="modal-inner-list">
                    ${data.videoHighlights.map(video => `
                        <li>
                            <strong>${video.title} :</strong> 
                            <a href="${video.url}" target="_blank" class="modal-link">${video.url}</a>
                        </li>
                    `).join('')}
                </ul>
            `;
            
            // Placer au-dessus de la Galerie (ou de "Voir aussi" si pas de galerie)
            const modalRelated = document.getElementById('modalRelated');
            if (id === 'carriere-joueur' && modalSkillsSection) {
                // Spécifiquement pour Carrière Joueur: sous les points forts
                modalSkillsSection.after(videoContainer);
            } else if (modalGallery && modalGallery.style.display !== 'none') {
                modalGallery.before(videoContainer);
            } else if (modalRelated) {
                modalRelated.before(videoContainer);
            } else {
                modalBody.appendChild(videoContainer);
            }
        }

        // Competences (Programme & Matières)
        const modalCompetences = document.getElementById('modalCompetences');
        if (modalCompetences) {
            const container = modalCompetences.querySelector('.modal-competences-content') || modalCompetences;
            
            const comps = data.competences;
            if (comps && !data.formationLayout) {
                container.innerHTML = '';
                // Check if it's an object (Categorized) or Array (Flat)
                if (typeof comps === 'object' && !Array.isArray(comps)) {
                    // Create a grid container for categories
                    const categoryGrid = document.createElement('div');
                    categoryGrid.className = 'modal-competences-categories';
                    
                    // Add Title if needed (handled in HTML for the section, but categories need headers)
                    // No, we are inside the section.
                    
                    Object.keys(comps).forEach(category => {
                        const col = document.createElement('div');
                        col.className = 'competence-category-column';
                        
                        const catTitle = document.createElement('h4');
                        catTitle.className = 'competence-category-title';
                        catTitle.textContent = category;
                        col.appendChild(catTitle);
                        
                        const ul = document.createElement('ul');
                        ul.className = 'modal-list-grid category-list'; // Reuse grid style or new one
                        
                        comps[category].forEach(item => {
                            const li = document.createElement('li');
                            li.textContent = item;
                            ul.appendChild(li);
                        });
                        col.appendChild(ul);
                        categoryGrid.appendChild(col);
                    });
                    
                    // We need to ensure the title is preserved if it's inside the container? 
                    // No, the title is in modal-section-title which is a sibling of the content usually.
                    // But in index.html:
                    // <div class="modal-section modal-competences" id="modalCompetences">
                    //    <h3 ...>...</h3>
                    //    <ul class="modal-list-grid"></ul>  <-- This is what we selected before as 'ul'
                    // </div>
                    
                    // The previous code selected: const ul = modalCompetences.querySelector('ul');
                    // We need to target the content area.
                    // Let's verify index.html structure again.
                    // It is: <div ... id="modalCompetences"><h3...></h3> <ul class="modal-list-grid"></ul> </div>
                    
                    // So we should replace the <ul> with our new structure or append to the div.
                    // Let's select the ul to remove/replace it.
                    const existingUl = modalCompetences.querySelector('ul');
                    if (existingUl) existingUl.remove();
                    
                    // If we have a previous grid, remove it too
                    const existingGrid = modalCompetences.querySelector('.modal-competences-categories');
                    if (existingGrid) existingGrid.remove();

                    // If existingUl was the only content besides h3, we append.
                    modalCompetences.appendChild(categoryGrid);
                    
                } else if (Array.isArray(comps) && comps.length > 0) {
                    // Flat Array logic
                    const existingGrid = modalCompetences.querySelector('.modal-competences-categories');
                    if (existingGrid) existingGrid.remove();
                    
                    let ul = modalCompetences.querySelector('ul');
                    if (!ul) {
                        ul = document.createElement('ul');
                        ul.className = 'modal-list-grid';
                        modalCompetences.appendChild(ul);
                    }
                    ul.innerHTML = '';
                    comps.forEach(comp => {
                        const li = document.createElement('li');
                        li.textContent = comp;
                        ul.appendChild(li);
                    });
                }
                modalCompetences.style.display = 'block';
            } else {
                modalCompetences.style.display = 'none';
            }
        }

        // Related Modals
        const modalRelated = document.getElementById('modalRelated');
        if (modalRelated) {
            const relatedLinks = modalRelated.querySelector('.modal-related-links');
            
            // Logic to hide 'Voir aussi' if we come from that specific modal already (avoid loop)
            let filteredRelated = data.relatedModals || [];
            if (id === 'dre-detail' && modalHistory.includes('encadrement-volley')) {
                filteredRelated = [];
            }

            if (filteredRelated.length > 0) {
                relatedLinks.innerHTML = '';
                filteredRelated.forEach(related => {
                    const btn = document.createElement('button');
                    btn.className = 'modal-related-btn';
                    
                    // Support for i18n label
                    if (related.i18nKey) {
                        const langData = translations[lang] || translations['fr'];
                        btn.textContent = langData[related.i18nKey] || related.label;
                    } else {
                        btn.textContent = related.label;
                    }
                    
                    btn.addEventListener('click', () => {
                        const targetEl = document.getElementById(related.id);
                        if (targetEl) {
                            // Clear history to avoid re-opening parent modal
                            modalHistory = []; 
                            closeModal();

                            if (targetEl.tagName === 'SECTION') {
                                showSection(related.id);
                            } else {
                                // Find parent section
                                const parentSection = targetEl.closest('section');
                                if (parentSection) {
                                    showSection(parentSection.id);
                                }
                                // Scroll to element
                                setTimeout(() => {
                                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }, 300);
                            }
                        } else {
                            openModal(related.id);
                        }
                    });
                    
                    relatedLinks.appendChild(btn);
                });
                modalRelated.style.display = 'block';
            } else {
                modalRelated.style.display = 'none';
            }
        }

        modal.classList.add('active');
        document.body.classList.add('modal-open');

        // Trigger MathJax typesetting for the new content
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([modal]).catch((err) => console.log('MathJax typeset failed: ' + err.message));
        }
    }

    function closeModal() {
        const currentId = modal.dataset.activeId;
        const lang = localStorage.getItem('lang') || 'fr';

        if (modalHistory.length > 0) {
            const previousId = modalHistory.pop();
            openModal(previousId, true);
        } else {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
            delete modal.dataset.activeId;
            modalHistory = [];
        }
    }
    // 6. INITIALIZE STATE
    try {
        // Theme Auto-Detection
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            updateThemeUI(savedTheme);
        } else {
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            updateThemeUI(systemDark ? 'dark' : 'light');
        }

        // Language Initialization
        const savedLang = localStorage.getItem('lang') || 'fr';
        changeLanguage(savedLang);

        // Section Initialization
        const initialHash = window.location.hash.substring(1);
        if (initialHash && document.getElementById(initialHash)) {
            showSection(initialHash);
        } else {
            showSection('home');
        }
    } catch (e) {
        console.error("Initialization failed, forcing home view:", e);
        showSection('home');
    }

    // 7. EVENT LISTENERS
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', (e) => {
            updateThemeUI(e.target.checked ? 'dark' : 'light'); 
        });
    }

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = opt.getAttribute('data-lang');
            changeLanguage(lang);
            if (langSubmenu) langSubmenu.classList.remove('active');
            if (toolboxMenu) toolboxMenu.classList.remove('active');
        });
    });

    if (toolboxBtn && toolboxMenu) {
        toolboxBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toolboxMenu.classList.toggle('active');
        });
    }

    if (langToggle && langSubmenu) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langSubmenu.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (toolboxMenu && !toolboxBtn.contains(e.target) && !toolboxMenu.contains(e.target)) {
            toolboxMenu.classList.remove('active');
        }
        if (langSubmenu && !langToggle.contains(e.target) && !langSubmenu.contains(e.target)) {
            langSubmenu.classList.remove('active');
        }
        if (navList && navToggle && !navToggle.contains(e.target)) {
            navList.classList.remove('active');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
            history.pushState(null, null, `#${targetId}`);
        });
    });

    document.querySelectorAll('.logo, .nav-tile, .profile-card-link').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.closest('.social-mini-btn')) return;

            const href = el.getAttribute('href') || (el.id === 'heroProfileCard' ? '#about' : null);
            if (href && href.startsWith('#')) {
                e.preventDefault();
                showSection(href.substring(1));
                history.pushState(null, null, href);
            }
        });
    });

    if (navToggle && navList) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navList.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.className = navList.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
            }
        });
    }

    // Modal delegator
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-modal]');
        if (trigger) {
            e.preventDefault();
            openModal(trigger.getAttribute('data-modal'));
        }
    });

    const modalCloseBtn = document.querySelector('.modal-close');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Lightbox Close Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox) {
        const lightboxVideo = document.getElementById('lightbox-video');
        const closeLightbox = () => {
            if (lightboxVideo) {
                lightboxVideo.pause();
                lightboxVideo.src = '';
                lightboxVideo.load();
            }
            lightbox.classList.remove('active');
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // 8. SEARCH LOGIC
    let searchIndex = [];
    
    // Fallback map for modals not directly visible in the main DOM
    const modalToSectionFallback = {
        'vgf-2024': 'volleyball', 'vgf-2025': 'volleyball', 'stage-beach-lvf': 'volleyball', 'oleron-volley': 'volleyball',
        'champion-prenational-m18': 'volleyball', 'champion-pfr-m18': 'volleyball', 'saison-m18-rssc': 'volleyball',
        'saison-m18-aajb': 'volleyball', 'saison-pn-aajb': 'volleyball', 'encadrement-benevole-m15m21': 'volleyball',
        'assistant-n3-rssc': 'volleyball', 'assistant-m18f-pnf': 'volleyball', 'entraineur-m18f': 'volleyball',
        'entraineur-adjoint-pnf': 'volleyball', 'entraineur-ufolep-blois': 'volleyball', 'detail-eso-poule-d': 'volleyball',
        'detail-eso-poule-b': 'volleyball', 'detail-unss-joueur': 'volleyball', 'detail-unss-encadrement': 'volleyball',
        'lycee': 'about', 'but-mp': 'about', 'bafa-detail': 'about', 'psc1-detail': 'about'
    };

    function buildSearchIndex() {
        console.log("Indexing content for search...");
        searchIndex = [];
        
        const lang = localStorage.getItem('lang') || 'fr';
        // Use safe access to translations
        const t = (window.siteData.translations && window.siteData.translations[lang]) ? window.siteData.translations[lang] : (window.siteData.translations['fr'] || {});
        
        // Helper to get translated text for keys
        const getTrans = (key) => t[key] || key;

        // 1. Index Sections (Tabs)
        document.querySelectorAll('.section-title').forEach(el => {
            const section = el.closest('section');
            if (section && section.id) {
                searchIndex.push({ 
                    text: el.innerText, 
                    type: el.innerText, 
                    priority: 1, 
                    sectionId: section.id 
                });
            }
        });

        // 2. Index Modals/Cases - Using the current language data + Fallback
        const currentModalData = modalData[lang] || modalData['fr'] || {};
        
        Object.keys(currentModalData).forEach(key => {
            const d = currentModalData[key];
            const trigger = document.querySelector(`[data-modal="${key}"]`);
            let sectionId = null;
            if (trigger) {
                const parentSection = trigger.closest('section');
                if (parentSection) sectionId = parentSection.id;
            }
            if (!sectionId) sectionId = modalToSectionFallback[key] || null;
            
            let sectionName = "";
            if (sectionId) {
                const sectionEl = document.getElementById(sectionId);
                const titleEl = sectionEl ? sectionEl.querySelector('.section-title') : null;
                sectionName = titleEl ? titleEl.innerText : sectionId;
            }

            const caseTitle = d.title;

            // Index Title
            searchIndex.push({ 
                text: caseTitle, 
                type: sectionName ? `${sectionName} - Case` : 'Case', 
                priority: 2, 
                sectionId: sectionId, 
                modalId: key 
            });
            
            // Index Summary
            if (d.summary) {
                searchIndex.push({ 
                    text: d.summary, 
                    type: sectionName ? `${sectionName} - ${caseTitle} - Détail` : 'Détail', 
                    priority: 4, 
                    sectionId: sectionId, 
                    modalId: key 
                });
            }
            
            // Index Missions (Search keywords in missions)
            if (d.missions && Array.isArray(d.missions)) {
                d.missions.forEach(mission => {
                    searchIndex.push({ 
                        text: mission, 
                        type: sectionName ? `${sectionName} - ${caseTitle} - Mission` : 'Mission', 
                        priority: 6, 
                        sectionId: sectionId, 
                        modalId: key 
                    });
                });
            }

            // Index Gallery Captions
            if (d.gallery && Array.isArray(d.gallery)) {
                d.gallery.forEach(item => {
                    if (item.caption) {
                        searchIndex.push({
                            text: item.caption,
                            type: sectionName ? `${sectionName} - ${caseTitle} - Image` : 'Image',
                            priority: 8,
                            sectionId: sectionId,
                            modalId: key
                        });
                    }
                });
            }

            // Index Result Captions (if any)
            if (d.results && Array.isArray(d.results)) {
                d.results.forEach(res => {
                    const resText = typeof res === 'string' ? res : (res.text || res.caption);
                    if (resText) {
                        searchIndex.push({
                            text: resText,
                            type: sectionName ? `${sectionName} - ${caseTitle} - Résultat` : 'Résultat',
                            priority: 7,
                            sectionId: sectionId,
                            modalId: key
                        });
                    }
                });
            }
        });
    }

    const siteSearch = document.getElementById('siteSearch');
    const searchResults = document.getElementById('searchResults');

    function normalizeString(str) {
        if (!str) return "";
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    if (siteSearch && searchResults) {
        setTimeout(buildSearchIndex, 800);
        
        siteSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';
            searchResults.scrollTop = 0; 
            if (query.length < 2) { searchResults.classList.remove('active'); return; }
            
            const normalizedQuery = normalizeString(query);
            const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 0);
            
            const results = searchIndex.filter(item => {
                const normalizedText = normalizeString(item.text);
                
                if (normalizedQuery === 'en cours') {
                    return normalizedText.includes('en cours');
                }

                return queryWords.every(word => {
                    if (word.length <= 2) {
                        const regex = new RegExp(`\\b${word}\\b`, 'i');
                        return regex.test(normalizedText);
                    }
                    return normalizedText.includes(word);
                });
            }).sort((a, b) => a.priority - b.priority);
            
            if (results.length > 0) {
                results.slice(0, 10).forEach(result => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    let displayText = result.text;
                    const index = displayText.toLowerCase().indexOf(query);
                    if (displayText.length > 60) {
                        const start = Math.max(0, index - 30);
                        const end = Math.min(displayText.length, index + 30);
                        displayText = (start > 0 ? '...' : '') + displayText.substring(start, end) + (end < displayText.length ? '...' : '');
                    }
                    div.innerHTML = `<span class="result-context" style="font-size: 0.6rem; opacity: 0.7;">${result.type}</span><span class="result-text" style="font-size: 0.85rem;">${displayText}</span>`;
                    div.addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (result.sectionId) {
                            showSection(result.sectionId);
                            history.pushState(null, null, `#${result.sectionId}`);
                        }
                        if (result.modalId) {
                            const trigger = document.querySelector(`[data-modal="${result.modalId}"]`);
                            if (trigger) {
                                setTimeout(() => {
                                    trigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }, 50);
                            }
                            setTimeout(() => openModal(result.modalId), 150);
                        }
                        searchResults.classList.remove('active');
                        siteSearch.value = '';
                        if (toolboxMenu) toolboxMenu.classList.remove('active');
                    });
                    searchResults.appendChild(div);
                });
                searchResults.classList.add('active');
            }
        });
    }

    // 9. Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});
