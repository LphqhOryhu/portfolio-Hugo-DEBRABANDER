import { Component, AfterViewInit, ElementRef, Renderer2, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Project {
  title: string;
  context?: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  achievements?: string[];
  placeholderBg?: string;
  initials?: string;
  originalTitle?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit, OnInit {
  projectType: string | null = null;
  pageTitle: string = 'Mes Réalisations';
  pageDescription: string = 'Explorez des projets concrets mettant en valeur mes compétences en développement, data, ML et IoT.';

  showModal: boolean = false;
  selectedImage: string = '';
  selectedImageTitle: string = '';

  portfolioTitleHtml: SafeHtml;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.portfolioTitleHtml = this.sanitizer.bypassSecurityTrustHtml(
      '<a href="https://mon-portfolio-tan.vercel.app/" target="_blank" class="portfolio-link">Mon Ancien portfolio</a>'
    );
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.projectType = data['projectType'] || null;
      this.updateProjectsBasedOnType();

      if (this.projectType === 'portfolio' && this.portfolioProjects.length > 0) {
        this.portfolioProjects[0].originalTitle = this.portfolioProjects[0].title;
      }
    });
  }

  ngAfterViewInit(): void {
    const projectCards = this.el.nativeElement.querySelectorAll('.project-card');
    projectCards.forEach((card: HTMLElement, index: number) => {
      this.renderer.setStyle(card, '--index', index);
    });
  }

  openImageModal(image: string, title: string): void {
    if (!image || image.endsWith('.pdf') || image.endsWith('.pptx')) return;
    this.selectedImage = image;
    this.selectedImageTitle = title;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeImageModal(): void {
    this.showModal = false;
    this.selectedImage = '';
    this.selectedImageTitle = '';
    document.body.style.overflow = '';
  }

  updateProjectsBasedOnType(): void {
    if (this.projectType) {
      switch (this.projectType) {
        case 'portfolio':
          this.pageTitle = 'Mon Ancien Portfolio';
          this.pageDescription = 'Découvrez mon ancien portfolio et son évolution.';
          this.projects = this.portfolioProjects;
          break;
        case 'assuranceplus':
          this.pageTitle = 'Projet Assurance+';
          this.pageDescription = 'Un projet de gestion d\'assurance développé avec des technologies modernes.';
          this.projects = this.assurancePlusProjects;
          break;
        case 'easysave':
          this.pageTitle = 'Projet EASY SAVE';
          this.pageDescription = 'Une solution de sauvegarde simple et efficace.';
          this.projects = this.easySaveProjects;
          break;
        case 'recherche-operationnel':
          this.pageTitle = 'Projet R.O. — VRP';
          this.pageDescription = 'Implémentation et comparaison de trois algorithmes d\'optimisation pour le problème de tournées de véhicules.';
          this.projects = this.rechercheOperationnelProjects;
          break;
        case 'gestionstage':
          this.pageTitle = 'Projet Stage';
          this.pageDescription = 'Une plateforme de gestion des stages pour les étudiants et les entreprises.';
          this.projects = this.gestionStageProjects;
          break;
        case 'timetrack':
          this.pageTitle = 'Projet TimeTrack';
          this.pageDescription = 'Un système de suivi du temps pour améliorer la productivité.';
          this.projects = this.timeTrackProjects;
          break;
        default:
          this.router.navigate(['/projects']);
          break;
      }
    }
  }

  // Used for sub-pages only
  projects: Project[] = [];

  // Professional & personal projects (from profile.json)
  proProjects: Project[] = [
    {
      title: 'TwYster — Réseau social microservices',
      context: 'Architecture microservices',
      description: 'Réseau social type Twitter/X en architecture microservices. 8 services indépendants orchestrés via Docker et Nginx, frontend React mobile-first, authentification JWT, bases hybrides MongoDB et PostgreSQL.',
      technologies: ['React', 'Node.js', 'Express', 'Docker', 'Nginx', 'MongoDB', 'PostgreSQL', 'JWT'],
      image: '',
      link: '#',
      placeholderBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      initials: 'TW',
      achievements: [
        '8 services découplés (User, Auth, Post, Like, Message, Media, Signalement) orchestrés via Docker et reverse proxy Nginx',
        'Stack hybride : React mobile-first, Node.js/Express, MongoDB (Mongoose) et PostgreSQL (Prisma), authentification JWT',
        'Fonctionnalités complètes : posts, likes, messagerie privée, upload média, modération, internationalisation'
      ]
    },
    {
      title: 'Simulateur de borne OCPP',
      context: 'SGA Mobility',
      description: 'Simulateur complet de borne de recharge électrique utilisant le protocole OCPP pour tester les systèmes de supervision sans matériel physique.',
      technologies: ['Node.js', 'OCPP', 'WebSocket', 'JavaScript'],
      image: '',
      link: '#',
      placeholderBg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      initials: 'OC',
      achievements: [
        'Simulation complète du cycle de vie d\'une borne : boot, autorisation, session de charge',
        'Remplacement du besoin de matériel physique — supprime une longue étape de vérification manuelle'
      ]
    },
    {
      title: 'Refonte de la supervision',
      context: 'SGA Mobility',
      description: 'Refonte de l\'interface de supervision du parc de bornes de recharge — nouvelle architecture frontend Angular, amélioration UX et monitoring temps réel.',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Dashboard'],
      image: '',
      link: '#',
      placeholderBg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      initials: 'SV',
      achievements: [
        'Refonte complète de l\'architecture frontend Angular',
        'Amélioration significative de l\'expérience utilisateur',
        'Intégration de nouveaux indicateurs de monitoring temps réel'
      ]
    },
    {
      title: 'Entrepôt de données & pipeline ETL',
      context: 'Big Data & ETL',
      description: 'Conception et déploiement d\'un data warehouse avec pipeline ETL complet : extraction depuis sources hétérogènes, transformation et chargement vers HDFS/Hive via Talend.',
      technologies: ['Talend', 'HDFS', 'Hive', 'Hadoop', 'SQL', 'ETL'],
      image: '',
      link: '#',
      placeholderBg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      initials: 'BD',
      achievements: [
        'Conception du modèle de données en étoile',
        'Développement des jobs ETL pour l\'alimentation automatique',
        'Requêtes analytiques HiveQL pour reporting et KPI'
      ]
    },
    {
      title: 'Prédiction d\'attrition RH',
      context: 'Machine Learning',
      description: 'Pipeline ML complet de prédiction de départ de salariés (classification binaire) sur IBM HR Analytics — 4 410 employés. Comparaison de 6 modèles et analyse what-if.',
      technologies: ['Python', 'scikit-learn', 'pandas', 'numpy', 'matplotlib', 'Google Colab'],
      image: '',
      link: '#',
      placeholderBg: 'linear-gradient(135deg, #4481eb 0%, #04befe 100%)',
      initials: 'ML',
      achievements: [
        'Pipeline complet : chargement multi-CSV, nettoyage, encodage, split train/test anti-leakage',
        'Comparaison de 6 modèles : Perceptron, Régression Logistique, SVM, KNN, Decision Tree, Random Forest',
        'Analyse what-if : identification des variables RH à fort impact sur l\'attrition'
      ]
    },
    {
      title: 'Résolution du VRP par métaheuristiques',
      context: 'Recherche Opérationnelle',
      description: 'Implémentation et comparaison de trois algorithmes d\'optimisation pour le problème de tournées de véhicules (VRP) sur un graphe réel.',
      technologies: ['Python', 'NumPy', 'NetworkX', 'Algorithme génétique', 'Recuit simulé'],
      image: 'assets/images/ro.png',
      link: '/projects/recherche-operationnel',
      achievements: [
        'Algorithme génétique : sélection par tournoi, croisement ordonné, mutation intra/inter-chemin',
        'Recuit simulé : refroidissement adaptatif, 3 opérateurs de voisinage (swap, move, inter-swap)',
        'Comparaison quantitative des performances (coût, temps d\'exécution) sur instance réelle'
      ]
    },
    {
      title: 'Projet IoT — Communication inter-objets',
      context: 'IoT & Systèmes embarqués',
      description: 'Architecture IoT avec protocoles Zigbee, MQTT, LoRa et BLE pour la communication entre objets connectés et remontée de données vers des services tiers.',
      technologies: ['MQTT', 'Zigbee', 'LoRa', 'BLE', 'Python'],
      image: '',
      link: '#',
      placeholderBg: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
      initials: 'IoT',
      achievements: [
        'Mise en œuvre d\'une architecture de communication multi-protocoles (Zigbee, MQTT, LoRa, BLE)',
        'Remontée de données vers services tiers en temps réel'
      ]
    }
  ];

  // Academic projects (BTS era)
  academicProjects: Project[] = [
    {
      title: 'Mon Ancien Portfolio',
      description: 'Découvrez mon ancien portfolio et son évolution.',
      technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'Angular'],
      image: 'assets/images/ancien-portfolio-intro.png',
      link: '/projects/portfolio'
    },
    {
      title: 'Projet Assurance+',
      description: 'Un projet de gestion d\'assurance intégrant sécurité réseau, supervision et services d\'infrastructure.',
      technologies: ['VPN', 'Proxy', 'DNS', 'Active Directory', 'Hyperviseur'],
      image: 'assets/images/ASSURANCEPLUS.pptx',
      link: '/projects/assuranceplus'
    },
    {
      title: 'Projet EASY SAVE',
      description: 'Solution logicielle complète de sauvegarde locale avec cryptage, suivi en temps réel et personnalisation.',
      technologies: ['C#', '.NET WPF', 'Cryptage', 'Multithreading'],
      image: 'assets/images/easysave.png',
      link: '/projects/easysave'
    },
    {
      title: 'Projet Stage',
      description: 'Plateforme de gestion des stages pour étudiants et entreprises, avec suivi et administration.',
      technologies: ['PHP', 'MySQL', 'Bootstrap'],
      image: 'assets/images/gestion.png',
      link: '/projects/gestionstage'
    },
    {
      title: 'Projet TimeTrack',
      description: 'Système de pointage et suivi du temps de travail avec gestion des droits et sécurité.',
      technologies: ['C#', 'SQL Server', 'Entity Framework'],
      image: 'assets/images/timetrack.png',
      link: '/projects/timetrack'
    }
  ];

  // Sub-page project detail arrays
  portfolioProjects: Project[] = [
    {
      title: 'Page d\'accueil',
      description: 'La page d\'accueil de mon ancien portfolio.',
      technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'Angular', 'Parallaxe'],
      image: 'assets/images/ancien-portfolio-acceuil.png',
      link: '#'
    },
    {
      title: 'Section Projets',
      description: 'Présentation de mes projets dans mon ancien portfolio.',
      technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'Angular'],
      image: 'assets/images/ancien-portfolio-projet.png',
      link: '#'
    },
    {
      title: 'Section Compétences',
      description: 'Mise en avant de mes compétences techniques.',
      technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'Angular'],
      image: 'assets/images/ancien-portfolio-competence.png',
      link: '#'
    },
    {
      title: 'Veille technologique',
      description: 'Mise en place d\'une veille technologique sur mon ancien portfolio.',
      technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'Angular'],
      image: 'assets/images/ancien-portfolio-veille.png',
      link: '#'
    }
  ];

  assurancePlusProjects: Project[] = [
    {
      title: 'Architecture Réseau Sécurisée',
      description: 'Segmentation réseau, VPN, proxy, DNS, firewall (visuel de topologie)',
      technologies: ['VPN', 'DNS', 'Intranet', 'Proxy', 'Firewall'],
      image: 'assets/images/assuranceplus-architecture.png',
      link: '#'
    },
    {
      title: 'Environnement Système',
      description: 'Utilisation d\'un hyperviseur, Active Directory, supervision',
      technologies: ['Hyperviseur', 'Active Directory', 'Supervision'],
      image: 'assets/images/ASSURANCEPLUS.pptx',
      link: '#'
    },
    {
      title: 'Impact Environnemental',
      description: 'Évaluation CO₂ des équipements IT utilisés',
      technologies: ['Empreinte Carbone', 'Développement Durable', 'Green IT'],
      image: 'assets/images/assuranceplus-impact.png',
      link: '#'
    },
    {
      title: 'Travail Collaboratif & Documentation',
      description: 'Projet mené à plusieurs, documentation technique en plusieurs langues',
      technologies: ['Travail d\'équipe', 'Documentation', 'Multilinguisme'],
      image: 'assets/images/ASSURANCEPLUS.pptx',
      link: '#'
    }
  ];

  easySaveProjects: Project[] = [
    {
      title: 'Sauvegarde Personnalisée',
      description: 'Création, exécution, suppression de sauvegardes, gestion des priorités',
      technologies: ['C#', '.NET', 'WPF', 'Gestion de priorités'],
      image: 'assets/images/easysave-perso.png',
      link: '#'
    },
    {
      title: 'Cryptage & Sécurité',
      description: 'Cryptage des fichiers, suivi des opérations, pause/reprise',
      technologies: ['C#', 'Cryptographie', 'Sécurité', 'Journalisation'],
      image: 'assets/images/Easy Save.pdf',
      link: '#'
    },
    {
      title: 'Interface Multi-pages',
      description: 'Vue client, paramètres, suivi des exécutions',
      technologies: ['C#', 'WPF', 'UI/UX', 'MVVM'],
      image: 'assets/images/easysave-user.png',
      link: '#'
    },
    {
      title: 'Vision Long Terme',
      description: 'Backup déporté, planification, extensions futures',
      technologies: ['C#', 'Planification', 'Architecture évolutive'],
      image: 'assets/images/Easy Save.pdf',
      link: '#'
    }
  ];

  rechercheOperationnelProjects: Project[] = [
    {
      title: 'Contexte & Objectif',
      description: 'Mobilité durable, logistique intelligente, appel d\'offre ADEME',
      technologies: ['Développement Durable', 'Logistique', 'Optimisation'],
      image: 'assets/images/ro-ademe.png',
      link: '#'
    },
    {
      title: 'Modélisation du Problème',
      description: 'Graphe de villes, contraintes, générations d\'instances',
      technologies: ['Théorie des Graphes', 'Modélisation', 'Contraintes'],
      image: 'assets/images/ro-exemple.png',
      link: '#'
    },
    {
      title: 'Méthodes de Résolution',
      description: 'Algorithmes : génétique, recuit simulé, plus proche voisin',
      technologies: ['Algorithmes Génétiques', 'Recuit Simulé', 'Heuristiques'],
      image: 'assets/images/ro-algo.png',
      link: '#'
    },
    {
      title: 'Analyse et Perspectives',
      description: 'Comparatif de performances, pistes d\'amélioration',
      technologies: ['Analyse de Données', 'Benchmarking', 'Optimisation'],
      image: 'assets/images/ro-comparatif.png',
      link: '#'
    }
  ];

  gestionStageProjects: Project[] = [
    {
      title: 'Interface Principale',
      description: 'Interface principale de la plateforme GestionStage.',
      technologies: ['PHP', 'MySQL', 'Bootstrap'],
      image: 'assets/images/gestion.png',
      link: '#'
    },
    {
      title: 'Gestion des Entreprises',
      description: 'Module de gestion des entreprises partenaires.',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      image: 'assets/images/gestionstageentreprise.png',
      link: '#'
    },
    {
      title: 'Liste des Stages',
      description: 'Affichage et gestion des offres de stage disponibles.',
      technologies: ['PHP', 'MySQL', 'DataTables'],
      image: 'assets/images/gestionstageliste.png',
      link: '#'
    },
    {
      title: 'Suivi de Projet',
      description: 'Suivi du développement du projet sur Trello.',
      technologies: ['Trello', 'Gestion de projet', 'Agile'],
      image: 'assets/images/gestionstagetrello.png',
      link: '#'
    }
  ];

  timeTrackProjects: Project[] = [
    {
      title: 'Interface de Pointage',
      description: 'Interface permettant aux employés de pointer leurs heures de travail.',
      technologies: ['C#', 'WinForms', 'SQL Server'],
      image: 'assets/images/timetrackpointage.png',
      link: '#'
    },
    {
      title: 'Interface d\'Administration',
      description: 'Interface d\'administration pour la gestion des utilisateurs et des droits.',
      technologies: ['C#', 'WinForms', 'SQL Server'],
      image: 'assets/images/timetrackadmin.png',
      link: '#'
    },
    {
      title: 'Sécurité',
      description: 'Système de sécurité avec hachage des mots de passe et gestion des sessions.',
      technologies: ['C#', 'Cryptographie', 'Sécurité'],
      image: 'assets/images/timetrackhash.png',
      link: '#'
    },
    {
      title: 'Suivi de Projet',
      description: 'Suivi du développement du projet sur Trello.',
      technologies: ['Trello', 'Gestion de projet', 'Agile'],
      image: 'assets/images/timetracktrello.png',
      link: '#'
    }
  ];
}
