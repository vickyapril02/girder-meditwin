/**
 * Translation utility for multi-language localization
 */

// English translations
const englishTranslations = {
    // Common UI elements
    'Login': 'Login',
    'Sign up': 'Sign up',
    'Info saved.': 'Info saved.',
    'Password changed.': 'Password changed.',
    'Passwords do not match, try again.': 'Passwords do not match, try again.',
    
    // Front page content
    'TWIN SCD STEMI - CHUBX 2024/92': 'TWIN SCD STEMI - CHUBX 2024/92',
    'Elaboration d\'un jumeau numérique pour la prédiction de mort subite rythmique après un infarctus du myocarde': 'Development of a digital twin for the prediction of sudden cardiac death after myocardial infarction',
    'Plateforme TWIN SCD STEMI': 'TWIN SCD STEMI Platform',
    'Plateforme de dépôt de données complexes': 'Complex Data Repository Platform',
    'MEDITWIN Platform': 'MEDITWIN Platform',
    'Building the future of personalized medicine through digital twins': 'Building the future of personalized medicine through digital twins',
    'Explore Platform': 'Explore Platform',
    'Learn More': 'Learn More',
    'Our Project': 'Our Project',
    'TWIN-SCD STEMI est une cohorte prospective multicentrique, non randomisée, visant à établir un modèle de prédiction multimodal permettant une meilleure identification des patients à risque de mort subite après un premier infarctus du myocarde. Sous la Promotion du CHU de Bordeaux, cette étude s\'inscrit dans les activités de l\'IHU Liryc au sein du Consortium MEDITWIN, avec un financement de BPI France.': 'TWIN-SCD STEMI is a prospective, multicenter, non-randomized cohort study aimed at establishing a multimodal prediction model to better identify patients at risk of sudden cardiac death after a first myocardial infarction. Promoted by Bordeaux University Hospital, this study is part of IHU Liryc activities within the MEDITWIN Consortium, with funding from BPI France.',
    'MEDITWIN is revolutionizing healthcare with personalized virtual twins of organs, metabolism, and tumors to improve diagnosis and treatment. Seven medical innovations in neurology, cardiology, and oncology will be developed and deployed via a sovereign industrial cloud platform. Led by Dassault Systèmes and top medical institutions, MEDITWIN sets a new global standard for virtual healthcare.': 'MEDITWIN is revolutionizing healthcare with personalized virtual twins of organs, metabolism, and tumors to improve diagnosis and treatment. Seven medical innovations in neurology, cardiology, and oncology will be developed and deployed via a sovereign industrial cloud platform. Led by Dassault Systèmes and top medical institutions, MEDITWIN sets a new global standard for virtual healthcare.',
    
    // Key Domains
    'Key Medical Domains': 'Key Competencies',
    'Cardiology': 'Cardiology',
    'Heart modeling for rhythm and ischemia analysis': 'Heart modeling for rhythm and ischemia analysis',
    
    // Features
    'Advanced Research Tools': 'Advanced Research Tools',
    'Analyze, annotate, and visualize multi-modal medical data': 'Analyze, annotate, and visualize multi-modal medical data',
    'Data Integration': 'Data Integration',
    'Combine imaging, genomics, and clinical data in one place': 'Combine imaging, genomics, and clinical data in one place',
    'Secure Data Management': 'Secure Data Management',
    'Full HIPAA and GDPR compliance for medical data': 'Full HIPAA and GDPR compliance for medical data',
    'Collaborative Workspaces': 'Collaborative Workspaces',
    'Create shared projects between hospitals and research labs': 'Create shared projects between hospitals and research labs',
    'Real-Time Analytics': 'Real-Time Analytics',
    'Streamlined dashboards and live metrics for decision-making': 'Streamlined dashboards and live metrics for decision-making',
    
    // Partners
    'Consortium & Partners': 'Consortium & Partners',
    'Dassault Systèmes': 'Dassault Systèmes',
    'Technology Partner': 'Technology Partner',
    'IHU LIRYC': 'IHU LIRYC',
    'Lead Institution': 'Lead Institution',
    'Bordeaux University Hospital': 'Bordeaux University Hospital',
    'Clinical Partner': 'Clinical Partner',
    'Inserm': 'Inserm',
    'Research Partner': 'Research Partner',
    'CNRS': 'CNRS',
    'Academic Partner': 'Academic Partner',
    'International Collaborators': 'International Collaborators',
    'Global Network': 'Global Network',
    
    // Recent Projects
    'Recent Projects': 'Recent Projects',
    'Beat-AF': 'Beat-AF',
    'THE BEAT-AF PROJECT': 'THE BEAT-AF PROJECT',
    'The BEAT-AF, Ground-BrEAking Electroporation-based inTervention for Atrial Fibrillation treatment is an action funded by the European Commission for 60 months and started on March, 1st, 2021. It is part of the HADEA agency (European Health and Digital Executive Agency).': 'The BEAT-AF, Ground-BrEAking Electroporation-based inTervention for Atrial Fibrillation treatment is an action funded by the European Commission for 60 months and started on March, 1st, 2021. It is part of the HADEA agency (European Health and Digital Executive Agency).',
    'The BEAT-AF consortium regroup 9 partners all over Europe (France, Germany, Belgium, Austria, Czechia) presented in the "meet the centers". The coordinator is Pr Pierre Jaïs from Bordeaux University.': 'The BEAT-AF consortium regroup 9 partners all over Europe (France, Germany, Belgium, Austria, Czechia) presented in the "meet the centers". The coordinator is Pr Pierre Jaïs from Bordeaux University.',
    'InEurHeart': 'InEurHeart',
    'AI, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation': 'AI, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation',
    'inEurHeart is an innovation project in Artificial Intelligence, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation for Ventricular Tachycardia, making ablation therapy accessible to most patients.': 'inEurHeart is an innovation project in Artificial Intelligence, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation for Ventricular Tachycardia, making ablation therapy accessible to most patients.',
    'This project is a collaborative project between 5 organizations in France and Netherlands funded by EIT Health – the European Institute of Innovation and Technology, co-funded by the European Union. This project will exemplify how the academic-industrial relationships can be fostered and can lead to drastic changes in clinical practice.': 'This project is a collaborative project between 5 organizations in France and Netherlands funded by EIT Health – the European Institute of Innovation and Technology, co-funded by the European Union. This project will exemplify how the academic-industrial relationships can be fostered and can lead to drastic changes in clinical practice.',
    'Learn More': 'Learn More',
    
    // About section
    'About Us': 'About Us',
    'Meditwin is developed by a team of medical professionals, data scientists, and software engineers dedicated to advancing healthcare through technology. We are committed to providing innovative solutions that improve patient outcomes and accelerate medical research.': 'Meditwin is developed by a team of medical professionals, data scientists, and software engineers dedicated to advancing healthcare through technology. We are committed to providing innovative solutions that improve patient outcomes and accelerate medical research.',
    'We manage the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.': 'We manage the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.',
    'Our Team': 'Our Team',
    'Maxime Sermesant': 'Maxime Sermesant',
    'Head': 'Head',
    'Vicky': 'Vicky',
    'Buntheng': 'Buntheng',
    'Florent': 'Florent',
    'Team Member': 'Team Member',
    'View Profile': 'View Profile',
    'Contact:': 'Contact:',
    'Institution:': 'Institution:',
    'Location:': 'Location:',
    'Bordeaux, France': 'Bordeaux, France',
    
    // User account
    'Email': 'Email',
    'First Name': 'First Name',
    'Last Name': 'Last Name',
    'Admin': 'Admin',
    'Old Password': 'Old Password',
    'New Password': 'New Password',
    'Retype Password': 'Retype Password',
    'Change Password': 'Change Password',
    'API Keys': 'API Keys',
    'Two-Factor Authentication': 'Two-Factor Authentication',
    
    // Collections and navigation
    'Collections': 'Collections',
    'Users': 'Users',
    'Groups': 'Groups',
    'Admin Panel': 'Admin Panel',
    'Search': 'Search',
    'Upload': 'Upload',
    'Download': 'Download',
    'Delete': 'Delete',
    'Edit': 'Edit',
    'Create': 'Create',
    'Save': 'Save',
    'Cancel': 'Cancel',
    'Close': 'Close',
    'Back': 'Back',
    'Next': 'Next',
    'Previous': 'Previous',
    'Loading...': 'Loading...',
    'Error': 'Error',
    'Success': 'Success',
    'Warning': 'Warning',
    'Info': 'Info',
    
    // Language switcher
    'Language': 'Language',
    'English': 'English',
    'Français': 'Français',
    
    // Folder dropdown navigation
    'Folder Navigation': 'Folder Navigation',
    'Select All': 'Select All',
    'Loading folders...': 'Loading folders...',
    'Error loading folders': 'Error loading folders',
    'No folders found': 'No folders found',
    'Expand': 'Expand',
    'Collapse': 'Collapse',
    // Landing page
    'Welcome to': 'Welcome to',
    'You are currently browsing anonymously.': 'You are currently browsing anonymously.',
    'To explore the data hosted on this server, start with the': 'To explore the data hosted on this server, start with the',
    'page.': 'page.',
    'To create an account, use the': 'To create an account, use the',
    'link in the upper right corner.': 'link in the upper right corner.',
    'If you already have an account you can': 'If you already have an account you can',
    'log in': 'log in',
    'with the link in the upper right corner.': 'with the link in the upper right corner.',
    'You are currently logged in as': 'You are currently logged in as',
    'personal data space': 'personal data space',
    'or your': 'or your',
    'user account page': 'user account page',
    'Girder is': 'Girder is',
    'is powered by Girder,': 'is powered by Girder,',
    'Kitware\'s open-source platform for data management, analytics, and visualization. To learn more about how Kitware and Girder can help to solve your data challenges, read our series of': 'Kitware\'s open-source platform for data management, analytics, and visualization. To learn more about how Kitware and Girder can help to solve your data challenges, read our series of',
    'blog posts': 'blog posts',
    'or': 'or',
    'contact us': 'contact us',
    'directly.': 'directly.',
    'To learn more about Girder\'s software, including how you can host your own instance either locally or in the cloud, see the': 'To learn more about Girder\'s software, including how you can host your own instance either locally or in the cloud, see the',
    'User Guide': 'User Guide',
    'the': 'the',
    'full documentation': 'full documentation',
    'or visit the': 'or visit the',
    'GitHub repository': 'GitHub repository',
    'To use the REST API to interact with this server, check out the': 'To use the REST API to interact with this server, check out the',
    'interactive web API docs': 'interactive web API docs',
            'This instance of': 'This instance of',
            'was built from version': 'was built from version',
            // Meditwin Landing Page
            'Meditwin brings together French science and technology excellence around virtual twins for the future of medical care': 'Meditwin brings together French science and technology excellence around virtual twins for the future of medical care',
            'Meditwin Complex Data Platform': 'Meditwin Complex Data Platform',
            'Manage, explore, and share your data securely': 'Manage, explore, and share your data securely',
            'Our Project': 'Our Project',
            'MEDITWIN is revolutionizing healthcare with personalized virtual twins of organs, metabolism, and tumors to improve diagnosis and treatment. Seven medical innovations in neurology, cardiology, and oncology will be developed and deployed via a sovereign industrial cloud platform. Led by Dassault Systèmes and top medical institutions, MEDITWIN sets a new global standard for virtual healthcare.': 'MEDITWIN is revolutionizing healthcare with personalized virtual twins of organs, metabolism, and tumors to improve diagnosis and treatment. Seven medical innovations in neurology, cardiology, and oncology will be developed and deployed via a sovereign industrial cloud platform. Led by Dassault Systèmes and top medical institutions, MEDITWIN sets a new global standard for virtual healthcare.',
            'Advanced Research Tools': 'Advanced Research Tools',
            'State-of-the-art data analysis and visualization capabilities for medical research': 'State-of-the-art data analysis and visualization capabilities for medical research',
            'HIPAA Compliant': 'HIPAA Compliant',
            'Full compliance with medical data protection regulations and standards': 'Full compliance with medical data protection regulations and standards',
            'Collaborative Platform': 'Collaborative Platform',
            'Enable seamless collaboration between medical teams and research institutions': 'Enable seamless collaboration between medical teams and research institutions',
            'Real-time Analytics': 'Real-time Analytics',
            'Live data processing and insights for immediate clinical decision support': 'Live data processing and insights for immediate clinical decision support',
            'Recent Projects': 'Recent Projects',
            'Beat-AF': 'Beat-AF',
            'THE BEAT-AF PROJECT': 'THE BEAT-AF PROJECT',
            'The BEAT-AF, Ground-BrEAking Electroporation-based inTervention for Atrial Fibrillation treatment is an action funded by the European Commission for 60 months and started on March, 1st, 2021. It is part of the HADEA agency (European Health and Digital Executive Agency).': 'The BEAT-AF, Ground-BrEAking Electroporation-based inTervention for Atrial Fibrillation treatment is an action funded by the European Commission for 60 months and started on March, 1st, 2021. It is part of the HADEA agency (European Health and Digital Executive Agency).',
            'The BEAT-AF consortium regroup 9 partners all over Europe (France, Germany, Belgium, Austria, Czechia) presented in the "meet the centers". The coordinator is Pr Pierre Jaïs from Bordeaux University.': 'The BEAT-AF consortium regroup 9 partners all over Europe (France, Germany, Belgium, Austria, Czechia) presented in the "meet the centers". The coordinator is Pr Pierre Jaïs from Bordeaux University.',
            'InEurHeart': 'InEurHeart',
            'AI, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation': 'AI, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation',
            'inEurHeart is an innovation project in Artificial Intelligence, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation for Ventricular Tachycardia, making ablation therapy accessible to most patients.': 'inEurHeart is an innovation project in Artificial Intelligence, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation for Ventricular Tachycardia, making ablation therapy accessible to most patients.',
            'This project is a collaborative project between 5 organizations in France and Netherlands funded by EIT Health – the European Institute of Innovation and Technology, co-funded by the European Union. This project will exemplify how the academic-industrial relationships can be fostered and can lead to drastic changes in clinical practice.': 'This project is a collaborative project between 5 organizations in France and Netherlands funded by EIT Health – the European Institute of Innovation and Technology, co-funded by the European Union. This project will exemplify how the academic-industrial relationships can be fostered and can lead to drastic changes in clinical practice.',
            'Learn More': 'Learn More',
            'About Us': 'About Us',
            'Meditwin is developed by a team of medical professionals, data scientists, and software engineers dedicated to advancing healthcare through technology. We are committed to providing innovative solutions that improve patient outcomes and accelerate medical research.': 'Meditwin is developed by a team of medical professionals, data scientists, and software engineers dedicated to advancing healthcare through technology. We are committed to providing innovative solutions that improve patient outcomes and accelerate medical research.',
            'We manage the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.': 'We manage the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.',
            'We the Multimodal data science team manages the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.': 'We the Multimodal data science team manages the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.',
            'Contacts': 'Contacts',
            'Valérie BOILET': 'Valérie BOILET',
            'Cheffe de projet': 'Project Manager',
            'Fabrice BLARD': 'Fabrice BLARD',
            'ARC coordonnateur': 'ARC Coordinator',
            'Our Team': 'Our Team',
            'Maxime Sermesant': 'Maxime Sermesant',
            'Head': 'Head',
            'Director de recherche': 'Research Director',
            'Head of Multimodal Data Science, IHU Liryc': 'Head of Multimodal Data Science, IHU Liryc',
            'Group leader Computational Cardiology, Inria': 'Group leader Computational Cardiology, Inria',
            'Université Côte d\'Azur': 'Université Côte d\'Azur',
            'Chair of AI & Biophysics, 3IA Côte d\'Azur': 'Chair of AI & Biophysics, 3IA Côte d\'Azur',
            'Vicky': 'Vicky',
            'Buntheng': 'Buntheng',
            'Florent': 'Florent',
            'Team Member': 'Team Member',
            'View Profile': 'View Profile',
            'Contact:': 'Contact:',
            'Institution:': 'Institution:',
            'Location:': 'Location:',
            'Version:': 'Version:',
            'Pour toute question sur l\'étude TWIN SCD STEMI, veuillez-vous adresser directement à votre contact ARC en charge de l\'étude au CHU de Bordeaux': 'For any questions about the TWIN SCD STEMI study, please contact your ARC contact in charge of the study at Bordeaux University Hospital',
            // Dashboard translations
            'Welcome to Meditwin': 'Welcome to Meditwin',
            'Your medical data management platform': 'Your medical data management platform',
            'Hello': 'Hello',
            'My Data': 'My Data',
            'Access and manage your personal medical data and research files': 'Access and manage your personal medical data and research files',
            'Go to My Data': 'Go to My Data',
            'Browse and explore shared medical data collections': 'Browse and explore shared medical data collections',
            'View Collections': 'View Collections',
            'Collaboration': 'Collaboration',
            'Work with teams and share data securely': 'Work with teams and share data securely',
            'Manage Groups': 'Manage Groups',
            'Manage your account preferences and security settings': 'Manage your account preferences and security settings',
            'Quick Stats': 'Quick Stats',
            'Files Uploaded': 'Files Uploaded',
            'Groups Joined': 'Groups Joined',
            'Quick Actions': 'Quick Actions',
            'Browse Collections': 'Browse Collections',
            'My Data Space': 'My Data Space'
};

// French translations
const frenchTranslations = {
    // Common UI elements
    'Login': 'Connexion',
    'Sign up': 'S\'inscrire',
    'Info saved.': 'Informations sauvegardées.',
    'Password changed.': 'Mot de passe modifié.',
    'Passwords do not match, try again.': 'Les mots de passe ne correspondent pas, réessayez.',
    
    // Front page content
    'TWIN SCD STEMI - CHUBX 2024/92': 'TWIN SCD STEMI - CHUBX 2024/92',
    'Elaboration d\'un jumeau numérique pour la prédiction de mort subite rythmique après un infarctus du myocarde': 'Elaboration d\'un jumeau numérique pour la prédiction de mort subite rythmique après un infarctus du myocarde',
    'Plateforme TWIN SCD STEMI': 'Plateforme TWIN SCD STEMI',
    'Plateforme de dépôt de données complexes': 'Plateforme de dépôt de données complexes',
    'MEDITWIN Platform': 'Plateforme MEDITWIN',
    'Building the future of personalized medicine through digital twins': 'Construire l\'avenir de la médecine personnalisée grâce aux jumeaux numériques',
    'Explore Platform': 'Explorer la Plateforme',
    'Learn More': 'En Savoir Plus',
    'Our Project': 'Notre Projet',
    'TWIN-SCD STEMI est une cohorte prospective multicentrique, non randomisée, visant à établir un modèle de prédiction multimodal permettant une meilleure identification des patients à risque de mort subite après un premier infarctus du myocarde. Sous la Promotion du CHU de Bordeaux, cette étude s\'inscrit dans les activités de l\'IHU Liryc au sein du Consortium MEDITWIN, avec un financement de BPI France.': 'TWIN-SCD STEMI est une cohorte prospective multicentrique, non randomisée, visant à établir un modèle de prédiction multimodal permettant une meilleure identification des patients à risque de mort subite après un premier infarctus du myocarde. Sous la Promotion du CHU de Bordeaux, cette étude s\'inscrit dans les activités de l\'IHU Liryc au sein du Consortium MEDITWIN, avec un financement de BPI France.',
    'MEDITWIN is revolutionizing healthcare with personalized virtual twins of organs, metabolism, and tumors to improve diagnosis and treatment. Seven medical innovations in neurology, cardiology, and oncology will be developed and deployed via a sovereign industrial cloud platform. Led by Dassault Systèmes and top medical institutions, MEDITWIN sets a new global standard for virtual healthcare.': 'MEDITWIN révolutionne la santé grâce à des jumeaux virtuels personnalisés des organes, du métabolisme et des tumeurs pour mieux diagnostiquer et soigner. Sept innovations médicales en neurologie, cardiologie et oncologie seront développées et déployées via une plateforme cloud souveraine. Porté par Dassault Systèmes et des institutions médicales d\'excellence, MEDITWIN établit un nouveau standard mondial en santé virtuelle.',
    
    // Key Domains
    'Key Medical Domains': 'Compétences Clés',
    'Cardiology': 'Cardiologie',
    'Heart modeling for rhythm and ischemia analysis': 'Modélisation cardiaque pour l\'analyse du rythme et de l\'ischémie',
    
    // Features
    'Advanced Research Tools': 'Outils de Recherche Avancés',
    'Analyze, annotate, and visualize multi-modal medical data': 'Analyser, annoter et visualiser des données médicales multi-modales',
    'Data Integration': 'Intégration de Données',
    'Combine imaging, genomics, and clinical data in one place': 'Combiner imagerie, génomique et données cliniques en un seul endroit',
    'Secure Data Management': 'Gestion Sécurisée des Données',
    'Full HIPAA and GDPR compliance for medical data': 'Conformité totale HIPAA et RGPD pour les données médicales',
    'Collaborative Workspaces': 'Espaces de Travail Collaboratifs',
    'Create shared projects between hospitals and research labs': 'Créer des projets partagés entre hôpitaux et laboratoires de recherche',
    'Real-Time Analytics': 'Analyses en Temps Réel',
    'Streamlined dashboards and live metrics for decision-making': 'Tableaux de bord rationalisés et métriques en direct pour la prise de décision',
    
    // Partners
    'Consortium & Partners': 'Consortium et Partenaires',
    'Dassault Systèmes': 'Dassault Systèmes',
    'Technology Partner': 'Partenaire Technologique',
    'IHU LIRYC': 'IHU LIRYC',
    'Lead Institution': 'Institution Pilote',
    'Bordeaux University Hospital': 'CHU de Bordeaux',
    'Clinical Partner': 'Partenaire Clinique',
    'Inserm': 'Inserm',
    'Research Partner': 'Partenaire de Recherche',
    'CNRS': 'CNRS',
    'Academic Partner': 'Partenaire Académique',
    'International Collaborators': 'Collaborateurs Internationaux',
    'Global Network': 'Réseau Mondial',
    
    // Recent Projects
    'Recent Projects': 'Projets Récents',
    'Beat-AF': 'Beat-AF',
    'THE BEAT-AF PROJECT': 'LE PROJET BEAT-AF',
    'The BEAT-AF, Ground-BrEAking Electroporation-based inTervention for Atrial Fibrillation treatment is an action funded by the European Commission for 60 months and started on March, 1st, 2021. It is part of the HADEA agency (European Health and Digital Executive Agency).': 'BEAT-AF, Intervention Révolutionnaire basée sur l\'Électroporation pour le Traitement de la Fibrillation Auriculaire est une action financée par la Commission Européenne pour 60 mois et commencée le 1er mars 2021. Elle fait partie de l\'agence HADEA (Agence Exécutive Européenne de la Santé et du Numérique).',
    'The BEAT-AF consortium regroup 9 partners all over Europe (France, Germany, Belgium, Austria, Czechia) presented in the "meet the centers". The coordinator is Pr Pierre Jaïs from Bordeaux University.': 'Le consortium BEAT-AF regroupe 9 partenaires dans toute l\'Europe (France, Allemagne, Belgique, Autriche, République Tchèque) présentés dans "rencontrez les centres". Le coordinateur est le Pr Pierre Jaïs de l\'Université de Bordeaux.',
    'InEurHeart': 'InEurHeart',
    'AI, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation': 'IA, Jumeau Numérique et Essai Clinique pour une Disruption dans l\'Ablation par Cathéter',
    'inEurHeart is an innovation project in Artificial Intelligence, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation for Ventricular Tachycardia, making ablation therapy accessible to most patients.': 'inEurHeart est un projet d\'innovation en Intelligence Artificielle, Jumeau Numérique et Essai Clinique pour une Disruption dans l\'Ablation par Cathéter pour la Tachycardie Ventriculaire, rendant la thérapie d\'ablation accessible à la plupart des patients.',
    'This project is a collaborative project between 5 organizations in France and Netherlands funded by EIT Health – the European Institute of Innovation and Technology, co-funded by the European Union. This project will exemplify how the academic-industrial relationships can be fostered and can lead to drastic changes in clinical practice.': 'Ce projet est un projet collaboratif entre 5 organisations en France et aux Pays-Bas financé par EIT Health – l\'Institut Européen d\'Innovation et de Technologie, co-financé par l\'Union Européenne. Ce projet illustrera comment les relations académico-industrielles peuvent être favorisées et peuvent conduire à des changements drastiques dans la pratique clinique.',
    'Learn More': 'En Savoir Plus',
    
    // About section
    'About Us': 'À Propos de Nous',
    'Meditwin is developed by a team of medical professionals, data scientists, and software engineers dedicated to advancing healthcare through technology. We are committed to providing innovative solutions that improve patient outcomes and accelerate medical research.': 'Meditwin est développé par une équipe de professionnels de la santé, de scientifiques des données et d\'ingénieurs logiciels dédiés à l\'amélioration des soins de santé par la technologie. Nous nous engageons à fournir des solutions innovantes qui améliorent les résultats des patients et accélèrent la recherche médicale.',
    'We manage the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.': 'Nous gérons la plateforme de gestion de données qui permet une collaboration transparente entre les équipes médicales et les institutions de recherche, fournissant une gestion sécurisée et efficace des données pour la recherche clinique et les soins aux patients.',
    'Our Team': 'Notre Équipe',
    'Maxime Sermesant': 'Maxime Sermesant',
    'Head': 'Chef',
    'Vicky': 'Vicky',
    'Buntheng': 'Buntheng',
    'Florent': 'Florent',
    'Team Member': 'Membre de l\'Équipe',
    'View Profile': 'Voir le Profil',
    'Contact:': 'Contact :',
    'Institution:': 'Institution :',
    'Location:': 'Localisation :',
    'Bordeaux, France': 'Bordeaux, France',
    
    // User account
    'Email': 'Email',
    'First Name': 'Prénom',
    'Last Name': 'Nom',
    'Admin': 'Administrateur',
    'Old Password': 'Ancien Mot de Passe',
    'New Password': 'Nouveau Mot de Passe',
    'Retype Password': 'Retapez le Mot de Passe',
    'Change Password': 'Changer le Mot de Passe',
    'API Keys': 'Clés API',
    'Two-Factor Authentication': 'Authentification à Deux Facteurs',
    
    // Collections and navigation
    'Collections': 'Collections',
    'Users': 'Utilisateurs',
    'Groups': 'Groupes',
    'Admin Panel': 'Panneau d\'Administration',
    'Search': 'Rechercher',
    'Upload': 'Télécharger',
    'Download': 'Télécharger',
    'Delete': 'Supprimer',
    'Edit': 'Modifier',
    'Create': 'Créer',
    'Save': 'Sauvegarder',
    'Cancel': 'Annuler',
    'Close': 'Fermer',
    'Back': 'Retour',
    'Next': 'Suivant',
    'Previous': 'Précédent',
    'Loading...': 'Chargement...',
    'Error': 'Erreur',
    'Success': 'Succès',
    'Warning': 'Avertissement',
    'Info': 'Information',
    
    // Language switcher
    'Language': 'Langue',
    'English': 'English',
    'Français': 'Français',
    
    // Folder dropdown navigation
    'Folder Navigation': 'Navigation des Dossiers',
    'Select All': 'Tout Sélectionner',
    'Loading folders...': 'Chargement des dossiers...',
    'Error loading folders': 'Erreur lors du chargement des dossiers',
    'No folders found': 'Aucun dossier trouvé',
    'Expand': 'Développer',
    'Collapse': 'Réduire',
    // Landing page
    'Welcome to': 'Bienvenue sur',
    'You are currently browsing anonymously.': 'Vous naviguez actuellement de manière anonyme.',
    'To explore the data hosted on this server, start with the': 'Pour explorer les données hébergées sur ce serveur, commencez par la page',
    'page.': '.',
    'To create an account, use the': 'Pour créer un compte, utilisez le lien',
    'link in the upper right corner.': 'dans le coin supérieur droit.',
    'If you already have an account you can': 'Si vous avez déjà un compte, vous pouvez vous',
    'log in': 'connecter',
    'with the link in the upper right corner.': 'avec le lien dans le coin supérieur droit.',
    'You are currently logged in as': 'Vous êtes actuellement connecté en tant que',
    'personal data space': 'espace de données personnel',
    'or your': 'ou votre',
    'user account page': 'page de compte utilisateur',
    'Girder is': 'Girder est',
    'is powered by Girder,': 'est alimenté par Girder,',
    'Kitware\'s open-source platform for data management, analytics, and visualization. To learn more about how Kitware and Girder can help to solve your data challenges, read our series of': 'plateforme open-source de Kitware pour la gestion de données, l\'analyse et la visualisation. Pour en savoir plus sur la façon dont Kitware et Girder peuvent vous aider à résoudre vos défis de données, lisez notre série de',
    'blog posts': 'articles de blog',
    'or': 'ou',
    'contact us': 'contactez-nous',
    'directly.': 'directement.',
    'To learn more about Girder\'s software, including how you can host your own instance either locally or in the cloud, see the': 'Pour en savoir plus sur le logiciel Girder, y compris comment vous pouvez héberger votre propre instance localement ou dans le cloud, consultez le',
    'User Guide': 'Guide de l\'utilisateur',
    'the': 'la',
    'full documentation': 'documentation complète',
    'or visit the': 'ou visitez le',
    'GitHub repository': 'dépôt GitHub',
    'To use the REST API to interact with this server, check out the': 'Pour utiliser l\'API REST pour interagir avec ce serveur, consultez la',
    'interactive web API docs': 'documentation interactive de l\'API web',
            'This instance of': 'Cette instance de',
            'was built from version': 'a été construite à partir de la version',
            // Meditwin Landing Page
            'Meditwin brings together French science and technology excellence around virtual twins for the future of medical care': 'Meditwin rassemble l\'excellence française en science et technologie autour des jumeaux virtuels pour l\'avenir des soins médicaux',
            'Meditwin Complex Data Platform': 'Plateforme de Données Complexes Meditwin',
            'Manage, explore, and share your data securely': 'Gérez, explorez et partagez vos données en toute sécurité',
            'Our Project': 'Notre Projet',
            'MEDITWIN is revolutionizing healthcare with personalized virtual twins of organs, metabolism, and tumors to improve diagnosis and treatment. Seven medical innovations in neurology, cardiology, and oncology will be developed and deployed via a sovereign industrial cloud platform. Led by Dassault Systèmes and top medical institutions, MEDITWIN sets a new global standard for virtual healthcare.': 'MEDITWIN révolutionne la santé grâce à des jumeaux virtuels personnalisés des organes, du métabolisme et des tumeurs pour mieux diagnostiquer et soigner. Sept innovations médicales en neurologie, cardiologie et oncologie seront développées et déployées via une plateforme cloud souveraine. Porté par Dassault Systèmes et des institutions médicales d\'excellence, MEDITWIN établit un nouveau standard mondial en santé virtuelle.',
            'Advanced Research Tools': 'Outils de Recherche Avancés',
            'State-of-the-art data analysis and visualization capabilities for medical research': 'Capacités d\'analyse et de visualisation de données de pointe pour la recherche médicale',
            'HIPAA Compliant': 'Conforme HIPAA',
            'Full compliance with medical data protection regulations and standards': 'Conformité totale aux réglementations et standards de protection des données médicales',
            'Collaborative Platform': 'Plateforme Collaborative',
            'Enable seamless collaboration between medical teams and research institutions': 'Permettre une collaboration transparente entre les équipes médicales et les institutions de recherche',
            'Real-time Analytics': 'Analyses en Temps Réel',
            'Live data processing and insights for immediate clinical decision support': 'Traitement de données en direct et insights pour un support décisionnel clinique immédiat',
            'Recent Projects': 'Projets Récents',
            'Beat-AF': 'Beat-AF',
            'THE BEAT-AF PROJECT': 'LE PROJET BEAT-AF',
            'The BEAT-AF, Ground-BrEAking Electroporation-based inTervention for Atrial Fibrillation treatment is an action funded by the European Commission for 60 months and started on March, 1st, 2021. It is part of the HADEA agency (European Health and Digital Executive Agency).': 'BEAT-AF, Intervention Révolutionnaire basée sur l\'Électroporation pour le Traitement de la Fibrillation Auriculaire est une action financée par la Commission Européenne pour 60 mois et commencée le 1er mars 2021. Elle fait partie de l\'agence HADEA (Agence Exécutive Européenne de la Santé et du Numérique).',
            'The BEAT-AF consortium regroup 9 partners all over Europe (France, Germany, Belgium, Austria, Czechia) presented in the "meet the centers". The coordinator is Pr Pierre Jaïs from Bordeaux University.': 'Le consortium BEAT-AF regroupe 9 partenaires dans toute l\'Europe (France, Allemagne, Belgique, Autriche, République Tchèque) présentés dans "rencontrez les centres". Le coordinateur est le Pr Pierre Jaïs de l\'Université de Bordeaux.',
            'InEurHeart': 'InEurHeart',
            'AI, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation': 'IA, Jumeau Numérique et Essai Clinique pour une Disruption dans l\'Ablation par Cathéter',
            'inEurHeart is an innovation project in Artificial Intelligence, Digital Twin & Clinical Trial for a Disruption in Catheter Ablation for Ventricular Tachycardia, making ablation therapy accessible to most patients.': 'inEurHeart est un projet d\'innovation en Intelligence Artificielle, Jumeau Numérique et Essai Clinique pour une Disruption dans l\'Ablation par Cathéter pour la Tachycardie Ventriculaire, rendant la thérapie d\'ablation accessible à la plupart des patients.',
            'This project is a collaborative project between 5 organizations in France and Netherlands funded by EIT Health – the European Institute of Innovation and Technology, co-funded by the European Union. This project will exemplify how the academic-industrial relationships can be fostered and can lead to drastic changes in clinical practice.': 'Ce projet est un projet collaboratif entre 5 organisations en France et aux Pays-Bas financé par EIT Health – l\'Institut Européen d\'Innovation et de Technologie, co-financé par l\'Union Européenne. Ce projet illustrera comment les relations académico-industrielles peuvent être favorisées et peuvent conduire à des changements drastiques dans la pratique clinique.',
            'Learn More': 'En Savoir Plus',
            'About Us': 'À Propos de Nous',
            'Meditwin is developed by a team of medical professionals, data scientists, and software engineers dedicated to advancing healthcare through technology. We are committed to providing innovative solutions that improve patient outcomes and accelerate medical research.': 'Meditwin est développé par une équipe de professionnels de la santé, de scientifiques des données et d\'ingénieurs logiciels dédiés à l\'amélioration des soins de santé par la technologie. Nous nous engageons à fournir des solutions innovantes qui améliorent les résultats des patients et accélèrent la recherche médicale.',
            'We manage the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.': 'Nous gérons la plateforme de gestion de données qui permet une collaboration transparente entre les équipes médicales et les institutions de recherche, fournissant une gestion sécurisée et efficace des données pour la recherche clinique et les soins aux patients.',
            'We the Multimodal data science team manages the data management platform that enables seamless collaboration between medical teams and research institutions, providing secure and efficient data handling for clinical research and patient care.': 'Nous, l\'équipe de science des données multimodales, gérons la plateforme de gestion de données qui permet une collaboration transparente entre les équipes médicales et les institutions de recherche, fournissant une gestion sécurisée et efficace des données pour la recherche clinique et les soins aux patients.',
            'Contacts': 'Contacts',
            'Valérie BOILET': 'Valérie BOILET',
            'Cheffe de projet': 'Cheffe de projet',
            'Fabrice BLARD': 'Fabrice BLARD',
            'ARC coordonnateur': 'ARC coordonnateur',
            'Our Team': 'Notre Équipe',
            'Maxime Sermesant': 'Maxime Sermesant',
            'Head': 'Chef',
            'Director de recherche': 'Directeur de recherche',
            'Head of Multimodal Data Science, IHU Liryc': 'Responsable Science des Données Multimodales, IHU Liryc',
            'Group leader Computational Cardiology, Inria': 'Chef de groupe Cardiologie Computationnelle, Inria',
            'Université Côte d\'Azur': 'Université Côte d\'Azur',
            'Chair of AI & Biophysics, 3IA Côte d\'Azur': 'Chaire IA & Biophysique, 3IA Côte d\'Azur',
            'Vicky': 'Vicky',
            'Buntheng': 'Buntheng',
            'Florent': 'Florent',
            'Team Member': 'Membre de l\'Équipe',
            'View Profile': 'Voir le Profil',
            'Contact:': 'Contact :',
            'Institution:': 'Institution :',
            'Location:': 'Localisation :',
            'Version:': 'Version :',
            'Pour toute question sur l\'étude TWIN SCD STEMI, veuillez-vous adresser directement à votre contact ARC en charge de l\'étude au CHU de Bordeaux': 'Pour toute question sur l\'étude TWIN SCD STEMI, veuillez-vous adresser directement à votre contact ARC en charge de l\'étude au CHU de Bordeaux',
            // Dashboard translations
            'Welcome to Meditwin': 'Bienvenue sur Meditwin',
            'Your medical data management platform': 'Votre plateforme de gestion de données médicales',
            'Hello': 'Bonjour',
            'My Data': 'Mes Données',
            'Access and manage your personal medical data and research files': 'Accédez et gérez vos données médicales personnelles et fichiers de recherche',
            'Go to My Data': 'Aller à Mes Données',
            'Browse and explore shared medical data collections': 'Parcourir et explorer les collections de données médicales partagées',
            'View Collections': 'Voir les Collections',
            'Collaboration': 'Collaboration',
            'Work with teams and share data securely': 'Travailler avec des équipes et partager des données en toute sécurité',
            'Manage Groups': 'Gérer les Groupes',
            'Manage your account preferences and security settings': 'Gérer vos préférences de compte et paramètres de sécurité',
            'Quick Stats': 'Statistiques Rapides',
            'Files Uploaded': 'Fichiers Téléchargés',
            'Groups Joined': 'Groupes Rejoints',
            'Quick Actions': 'Actions Rapides',
            'Browse Collections': 'Parcourir les Collections',
            'My Data Space': 'Mon Espace de Données'
};

// Current language state - load from localStorage or default to French
let currentLanguage = localStorage.getItem('meditwin-language') || 'french';

// Get current translations based on language
function getCurrentTranslations() {
    return currentLanguage === 'french' ? frenchTranslations : englishTranslations;
}

/**
 * Translate a key based on current language
 * @param {string} key - The text to translate
 * @returns {string} - The translated text or the original key if not found
 */
export function translate(key) {
    const translations = getCurrentTranslations();
    return translations[key] || key;
}

/**
 * Set the current language
 * @param {string} language - 'english' or 'french'
 */
export function setLanguage(language) {
    if (language === 'english' || language === 'french') {
        currentLanguage = language;
        // Save language choice to localStorage for persistence
        localStorage.setItem('meditwin-language', currentLanguage);
        // Trigger a custom event to notify components to re-render
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: currentLanguage } 
        }));
    }
}

/**
 * Get the current language
 * @returns {string} - Current language ('english' or 'french')
 */
export function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * Get all available translations for current language
 * @returns {Object} - The translations object for current language
 */
export function getTranslations() {
    return getCurrentTranslations();
}

/**
 * Add or update a translation for both languages
 * @param {string} key - The text key
 * @param {string} englishValue - The English translation
 * @param {string} frenchValue - The French translation
 */
export function setTranslation(key, englishValue, frenchValue) {
    englishTranslations[key] = englishValue;
    frenchTranslations[key] = frenchValue;
}

export default {
    translate,
    setLanguage,
    getCurrentLanguage,
    getTranslations,
    setTranslation
};
