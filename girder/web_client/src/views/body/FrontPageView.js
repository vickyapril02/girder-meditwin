import $ from 'jquery';

import version from '@girder/core/version';
import View from '@girder/core/views/View';
import { cancelRestRequests, getApiRoot } from '@girder/core/rest';
import events from '@girder/core/events';
import { getCurrentUser } from '@girder/core/auth';
import { translate, setLanguage, getCurrentLanguage } from '@girder/core/utilities/translations';

import '@girder/core/stylesheets/body/frontPage.styl';

/**
 * This is the view for the front page of the app.
 */
var FrontPageView = View.extend({
    events: {
        'click .g-register-link': function () {
            events.trigger('g:registerUi');
        },
        'click .g-login-link': function () {
            events.trigger('g:loginUi');
        },
        'click .g-explore-platform-btn': function () {
            events.trigger('g:loginUi');
        },
        'click .g-language-switcher': function (event) {
            event.preventDefault();
            const newLanguage = getCurrentLanguage() === 'french' ? 'english' : 'french';
            setLanguage(newLanguage);
        }
    },

    initialize: function (settings) {
        cancelRestRequests('fetch');
        this.brandName = settings.brandName || 'Meditwin';
        
        // Add class to hide default Girder elements
        $('body').addClass('g-landing-page-active');
        
        // Listen for language changes
        this.languageChangeHandler = () => {
            this.render();
        };
        window.addEventListener('languageChanged', this.languageChangeHandler);
        
        // Listen for login/logout events to re-render
        this.loginHandler = () => {
            this.render();
        };
        events.on('g:login', this.loginHandler);
        events.on('g:logout', this.loginHandler);
        
        this.render();
    },

    render: function () {
        const currentUser = getCurrentUser();
        
        if (currentUser) {
            // Remove the landing page class when logged in
            $('body').removeClass('g-landing-page-active');
            // For logged-in users, show a custom dashboard instead of redirecting
            this.renderLoggedInDashboard();
            return this;
        }
        
        // For anonymous users, show the full impressive Meditwin landing page
        this.$el.html(`
            <div class="g-landing">
                <div class="g-landing-header">
                    <div class="g-brand">
                        <div class="g-logo">
                            <div class="g-heart-logo">🫀</div>
                        </div>
                        <div class="g-title">
                            ${translate('TWIN SCD STEMI - CHUBX 2024/92')}<br/>
                            ${translate("Elaboration d'un jumeau numérique pour la prédiction de mort subite rythmique après un infarctus du myocarde")}
                        </div>
                    </div>
                    <div class="g-auth">
                        <button class="g-link g-login-link">${translate('Login')}</button>
                        <button class="g-link g-register-link">${translate('Sign up')}</button>
                        <button class="g-language-switcher">
                            <span class="g-current-lang">${getCurrentLanguage() === 'french' ? 'English' : 'Français'}</span>
                            <i class="icon-down-dir"></i>
                        </button>
                    </div>
                </div>
                
                <div class="g-landing-hero">
                    <div class="g-hero-title">${translate('Plateforme TWIN SCD STEMI')}</div>
                    <div class="g-hero-subtitle">${translate("Plateforme de dépôt de données complexes")}</div>
                    <div class="g-hero-cta">
                        <button class="g-cta-btn g-primary g-explore-platform-btn">
                            🔹 ${translate('Explore Platform')}
                        </button>
                    </div>
                </div>
                
                <div class="g-landing-content">
                    <div class="g-section">
                        <div class="g-section-header g-centered">
                            <div class="g-section-icon">🏥</div>
                            <div class="g-section-title">${translate('Our Project')}</div>
                        </div>
                        <div class="g-section-content">
                            <div class="g-project-description">
                                <p class="g-project-paragraph">${translate("TWIN-SCD STEMI est une cohorte prospective multicentrique, non randomisée, visant à établir un modèle de prédiction multimodal permettant une meilleure identification des patients à risque de mort subite après un premier infarctus du myocarde. Sous la Promotion du CHU de Bordeaux, cette étude s'inscrit dans les activités de l'IHU Liryc au sein du Consortium MEDITWIN, avec un financement de BPI France.")}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="g-section">
                        <div class="g-section-header g-centered">
                            <div class="g-section-icon">🔬</div>
                            <div class="g-section-title">${translate('Key Medical Domains')}</div>
                        </div>
                        <div class="g-section-content">
                            <div class="g-project-description">
                                <div class="g-features-grid">
                                    <div class="g-feature">
                                        <div class="g-feature-icon">❤️</div>
                                        <div class="g-feature-title">${translate('Cardiology')}</div>
                                        <div class="g-feature-desc">${translate('Heart modeling for rhythm and ischemia analysis')}</div>
                                    </div>
                                    <div class="g-feature">
                                        <div class="g-feature-icon">🔬</div>
                                        <div class="g-feature-title">${translate('Advanced Research Tools')}</div>
                                        <div class="g-feature-desc">${translate('Analyze, annotate, and visualize multi-modal medical data')}</div>
                                    </div>
                                    <div class="g-feature">
                                        <div class="g-feature-icon">🧩</div>
                                        <div class="g-feature-title">${translate('Data Integration')}</div>
                                        <div class="g-feature-desc">${translate('Combine imaging, genomics, and clinical data in one place')}</div>
                                    </div>
                                    <div class="g-feature">
                                        <div class="g-feature-icon">🔐</div>
                                        <div class="g-feature-title">${translate('Secure Data Management')}</div>
                                        <div class="g-feature-desc">${translate('Full HIPAA and GDPR compliance for medical data')}</div>
                                    </div>
                                    <div class="g-feature">
                                        <div class="g-feature-icon">🤝</div>
                                        <div class="g-feature-title">${translate('Collaborative Workspaces')}</div>
                                        <div class="g-feature-desc">${translate('Create shared projects between hospitals and research labs')}</div>
                                    </div>
                                    <div class="g-feature">
                                        <div class="g-feature-icon">📊</div>
                                        <div class="g-feature-title">${translate('Real-Time Analytics')}</div>
                                        <div class="g-feature-desc">${translate('Streamlined dashboards and live metrics for decision-making')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="g-section">
                        <div class="g-section-header g-centered">
                            <div class="g-section-icon">🤝</div>
                            <div class="g-section-title">${translate('Consortium & Partners')}</div>
                        </div>
                        <div class="g-section-content">
                            <div class="g-partners-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; width: 100%;">
                                <div class="g-partner-card">
                                    <div class="g-partner-logo-container">
                                        <img src="/static/built/img/chu_bordeaux_logo.png" 
                                             alt="CHU de Bordeaux" 
                                             class="g-partner-logo" />
                                    </div>
                                    <div class="g-partner-footer">
                                        <span class="g-project-link" onclick="window.open('https://www.chu-bordeaux.fr', '_blank')">
                                            ${translate('Learn More')} →
                                        </span>
                                    </div>
                                </div>
                                
                                <div class="g-partner-card">
                                    <div class="g-partner-logo-container">
                                        <img src="/static/built/img/ihu_liryc_logo.png" 
                                             alt="IHU Liryc" 
                                             class="g-partner-logo" />
                                    </div>
                                    <div class="g-partner-footer">
                                        <span class="g-project-link" onclick="window.open('https://www.ihu-liryc.fr/', '_blank')">
                                            ${translate('Learn More')} →
                                        </span>
                                    </div>
                                </div>
                                
                                <div class="g-partner-card">
                                    <div class="g-partner-logo-container">
                                        <img src="/static/built/img/inria_logo.png" 
                                             alt="INRIA" 
                                             class="g-partner-logo" />
                                    </div>
                                    <div class="g-partner-footer">
                                        <span class="g-project-link" onclick="window.open('https://www.inria.fr/fr/epione', '_blank')">
                                            ${translate('Learn More')} →
                                        </span>
                                    </div>
                                </div>
                                
                                <div class="g-partner-card">
                                    <div class="g-partner-logo-container">
                                        <img src="/static/built/img/meditwin_logo.png" 
                                             alt="Meditwin" 
                                             class="g-partner-logo" />
                                    </div>
                                    <div class="g-partner-footer">
                                        <span class="g-project-link" onclick="window.open('https://www.3ds.com/fr/science/meditwin', '_blank')">
                                            ${translate('Learn More')} →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="g-section">
                        <div class="g-section-header">
                            <div class="g-section-icon">🚀</div>
                            <div class="g-section-title">${translate('Recent Projects')}</div>
                        </div>
                        <div class="g-section-content">
                            <div class="g-projects-grid">
                                <div class="g-project-card" onclick="window.open('https://beat-af.com/?page_id=604', '_blank')">
                                    <div class="g-project-header">
                                        <div class="g-project-icon">💓</div>
                                        <div class="g-project-title">${translate('Beat-AF')}</div>
                                    </div>
                                    <div class="g-project-content">
                                        <h3 class="g-project-subtitle">${translate('THE BEAT-AF PROJECT')}</h3>
                                        <p class="g-project-description">
                                            ${translate('The BEAT-AF, Ground-BrEAking Electroporation-based inTervention for Atrial Fibrillation treatment is an action funded by the European Commission for 60 months and started on March, 1st, 2021. It is part of the HADEA agency (European Health and Digital Executive Agency).')}
                                        </p>
                                        <p class="g-project-description">
                                            ${translate('The BEAT-AF consortium regroup 9 partners all over Europe (France, Germany, Belgium, Austria, Czechia) presented in the "meet the centers". The coordinator is Pr Pierre Jaïs from Bordeaux University.')}
                                        </p>
                                    </div>
                                    <div class="g-project-footer">
                                        <span class="g-project-link">${translate('Learn More')} →</span>
                                    </div>
                                </div>
                                
                                <div class="g-project-card" onclick="window.open('https://ineurheart.eu/en/', '_blank')">
                                    <div class="g-project-header">
                                        <div class="g-project-icon">🧠</div>
                                        <div class="g-project-title">${translate('InEurHeart')}</div>
                                    </div>
                                    <div class="g-project-content">
                                        <h3 class="g-project-subtitle">${translate('AI, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation')}</h3>
                                        <p class="g-project-description">
                                            ${translate('inEurHeart is an innovation project in Artificial Intelligence, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation for Ventricular Tachycardia, making ablation therapy accessible to most patients.')}
                                        </p>
                                        <p class="g-project-description">
                                            ${translate('This project is a collaborative project between 5 organizations in France and Netherlands funded by EIT Health – the European Institute of Innovation and Technology, co-funded by the European Union. This project will exemplify how the academic-industrial relationships can be fostered and can lead to drastic changes in clinical practice.')}
                                        </p>
                                    </div>
                                    <div class="g-project-footer">
                                        <span class="g-project-link">${translate('Learn More')} →</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="g-section">
                        <div class="g-section-header">
                            <div class="g-section-icon">🏢</div>
                            <div class="g-section-title">${translate('About Us')}</div>
                        </div>
                        <div class="g-section-content">
                            <div class="g-company-info">
                                <p>${translate('We manage the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.')}</p>
                                
                                <div class="g-team-section">
                                    <h3 class="g-team-title">${translate('Our Team')}</h3>
                                    <div class="g-team-grid">
                                        <div class="g-team-member g-team-member-with-tooltip" onclick="window.open('https://team.inria.fr/epione/en/team/maxime-sermesant/', '_blank')">
                                            <div class="g-team-member-tooltip">
                                                <div class="g-tooltip-content">
                                                    <div class="g-tooltip-title">${translate('Maxime Sermesant')}</div>
                                                    <div class="g-tooltip-titles">
                                                        <div>${translate('Director de recherche')}</div>
                                                        <div>${translate('Head of Multimodal Data Science, IHU Liryc')}</div>
                                                        <div>${translate('Group leader Computational Cardiology, Inria')}</div>
                                                        <div>${translate('Université Côte d\'Azur')}</div>
                                                        <div>${translate('Chair of AI & Biophysics, 3IA Côte d\'Azur')}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="g-team-member-info">
                                                <div class="g-team-member-name">
                                                    ${translate('Maxime Sermesant')}
                                                </div>
                                                <div class="g-team-member-link">${translate('View Profile')} →</div>
                                            </div>
                                        </div>
                                        <div class="g-team-member">
                                            <div class="g-team-member-info">
                                                <div class="g-team-member-name">${translate('Vicky')}</div>
                                                <div class="g-team-member-role">${translate('Team Member')}</div>
                                            </div>
                                        </div>
                                        <div class="g-team-member">
                                            <div class="g-team-member-info">
                                                <div class="g-team-member-name">${translate('Buntheng')}</div>
                                                <div class="g-team-member-role">${translate('Team Member')}</div>
                                            </div>
                                        </div>
                                        <div class="g-team-member">
                                            <div class="g-team-member-info">
                                                <div class="g-team-member-name">${translate('Florent')}</div>
                                                <div class="g-team-member-role">${translate('Team Member')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="g-contact-info">
                                    <div class="g-contact-item">
                                        <strong>${translate('Contact:')}</strong> meditwin.contact@ihu-liryc.fr
                                    </div>
                                    <div class="g-contact-item">
                                        <strong>${translate('Institution:')}</strong> <a href="https://www.ihu-liryc.fr/" target="_blank" style="color: var(--medical-secondary); text-decoration: none;">IHU Liryc</a>
                                    </div>
                                    <div class="g-contact-item">
                                        <strong>${translate('Location:')}</strong> Bordeaux, France
                                    </div>
                                    <div class="g-contact-item">
                                        <strong>${translate('Version:')}</strong> V1.0 du 16/12/2025
                                    </div>
                                </div>
                                <div class="g-contact-note">
                                    <p>${translate("Pour toute question sur l'étude TWIN SCD STEMI, veuillez-vous adresser directement à votre contact ARC en charge de l'étude au CHU de Bordeaux")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        
        return this;
    },

    /**
     * Render a custom dashboard for logged-in users
     */
    renderLoggedInDashboard: function () {
        const currentUser = getCurrentUser();
        
        this.$el.html(`
            <div class="g-dashboard">
                <div class="g-dashboard-header">
                    <div class="g-welcome-section">
                        <div class="g-welcome-icon">🫀</div>
                        <div class="g-welcome-content">
                            <h1 class="g-welcome-title">${translate('Welcome to Meditwin')}</h1>
                            <p class="g-welcome-subtitle">${translate('Your medical data management platform')}</p>
                            <p class="g-user-greeting">${translate('Hello')}, <strong>${currentUser.get('firstName') || currentUser.get('login')}</strong>!</p>
                        </div>
                    </div>
                </div>
                
                <div class="g-dashboard-content">
                    <div class="g-dashboard-grid">
                        <div class="g-dashboard-card">
                            <div class="g-card-icon">📁</div>
                            <div class="g-card-content">
                                <h3 class="g-card-title">${translate('My Data')}</h3>
                                <p class="g-card-description">${translate('Access and manage your personal medical data and research files')}</p>
                                <a href="#user/${currentUser.id}" class="g-card-link">${translate('Go to My Data')} →</a>
                            </div>
                        </div>
                        
                        <div class="g-dashboard-card">
                            <div class="g-card-icon">🗂️</div>
                            <div class="g-card-content">
                                <h3 class="g-card-title">${translate('Collections')}</h3>
                                <p class="g-card-description">${translate('Browse and explore shared medical data collections')}</p>
                                <a href="#collections" class="g-card-link">${translate('View Collections')} →</a>
                            </div>
                        </div>
                        
                        <div class="g-dashboard-card">
                            <div class="g-card-icon">👥</div>
                            <div class="g-card-content">
                                <h3 class="g-card-title">${translate('Collaboration')}</h3>
                                <p class="g-card-description">${translate('Work with teams and share data securely')}</p>
                                <a href="#groups" class="g-card-link">${translate('Manage Groups')} →</a>
                            </div>
                        </div>
                        
                        <div class="g-dashboard-card">
                            <div class="g-card-icon">⚙️</div>
                            <div class="g-card-content">
                                <h3 class="g-card-title">${translate('Account Settings')}</h3>
                                <p class="g-card-description">${translate('Manage your account preferences and security settings')}</p>
                                <a href="#useraccount/${currentUser.id}/info" class="g-card-link">${translate('Account Settings')} →</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="g-dashboard-stats">
                        <div class="g-stats-section">
                            <h3 class="g-stats-title">${translate('Quick Stats')}</h3>
                            <div class="g-stats-grid">
                                <div class="g-stat-item">
                                    <div class="g-stat-number">--</div>
                                    <div class="g-stat-label">${translate('Files Uploaded')}</div>
                                </div>
                                <div class="g-stat-item">
                                    <div class="g-stat-number">--</div>
                                    <div class="g-stat-label">${translate('Collections')}</div>
                                </div>
                                <div class="g-stat-item">
                                    <div class="g-stat-number">--</div>
                                    <div class="g-stat-label">${translate('Groups Joined')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="g-dashboard-actions">
                        <h3 class="g-actions-title">${translate('Quick Actions')}</h3>
                        <div class="g-actions-buttons">
                            <button class="g-action-btn g-primary" onclick="events.trigger('g:navigateTo', 'collections')">
                                <i class="icon-folder"></i>
                                ${translate('Browse Collections')}
                            </button>
                            <button class="g-action-btn" onclick="events.trigger('g:navigateTo', 'user/' + '${currentUser.id}')">
                                <i class="icon-user"></i>
                                ${translate('My Data Space')}
                            </button>
                            <button class="g-action-btn" onclick="events.trigger('g:navigateTo', 'groups')">
                                <i class="icon-users"></i>
                                ${translate('Manage Groups')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);
        
        return this;
    },

    destroy: function () {
        // Clean up event listeners
        if (this.languageChangeHandler) {
            window.removeEventListener('languageChanged', this.languageChangeHandler);
        }
        if (this.loginHandler) {
            events.off('g:login', this.loginHandler);
            events.off('g:logout', this.loginHandler);
        }
        View.prototype.destroy.call(this);
    }
});

export default FrontPageView;
