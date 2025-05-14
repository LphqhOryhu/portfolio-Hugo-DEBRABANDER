import { Component, AfterViewInit, ElementRef, Renderer2, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Interface for project objects
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  originalTitle?: string; // Optional property to store the original title
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
  pageDescription: string = 'Explorez des projets concrets mettant en valeur mes compétences en développement, en algorithmie et en réseaux.';

  // Modal properties
  showModal: boolean = false;
  selectedImage: string = '';
  selectedImageTitle: string = '';

  // Property to store HTML content for portfolio title
  portfolioTitleHtml: SafeHtml;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    // Create the HTML for the portfolio title with clickable and animated "portfolio" word
    this.portfolioTitleHtml = this.sanitizer.bypassSecurityTrustHtml(
      '<a href="https://mon-portfolio-tan.vercel.app/" target="_blank" class="portfolio-link">Mon Ancien portfolio</a>'
    );
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.projectType = data['projectType'] || null;
      this.updateProjectsBasedOnType();

      // Apply HTML title to the first portfolio project when on the portfolio page
      if (this.projectType === 'portfolio' && this.portfolioProjects.length > 0) {
        // Store the original title for comparison in the HTML template
        this.portfolioProjects[0].originalTitle = this.portfolioProjects[0].title;
      }
    });
  }

  ngAfterViewInit(): void {
    // Set animation delay for staggered appearance
    const projectCards = this.el.nativeElement.querySelectorAll('.project-card');
    projectCards.forEach((card: HTMLElement, index: number) => {
      this.renderer.setStyle(card, '--index', index);
    });
  }

  // Open image modal
  openImageModal(image: string, title: string): void {
    // Don't open modal for PDF or PPTX files
    if (image.endsWith('.pdf') || image.endsWith('.pptx')) {
      return;
    }
    this.selectedImage = image;
    this.selectedImageTitle = title;
    this.showModal = true;
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }

  // Close image modal
  closeImageModal(): void {
    this.showModal = false;
    this.selectedImage = '';
    this.selectedImageTitle = '';
    // Restore scrolling
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
          this.pageTitle = 'Projet R.O.';
          this.pageDescription = 'Application des méthodes de recherche opérationnelle pour optimiser des processus.';
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

  // Main projects list for the main projects page
  projects: Project[] = [
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
      description: 'Une solution logicielle complète de sauvegarde locale avec cryptage, suivi et personnalisation.',
      technologies: ['C#', '.NET WPF', 'Cryptage', 'Multithreading'],
      image: 'assets/images/easysave.png',
      link: '/projects/easysave'
    },
    {
      title: 'Projet R.O.',
      description: 'Application d\'algorithmes évolués pour répondre à des enjeux logistiques et environnementaux.',
      technologies: ['Python', 'Recuit simulé', 'Algorithme génétique', 'Optimisation de graphes'],
      image: 'assets/images/ro.png',
      link: '/projects/recherche-operationnel'
    },
    {
      title: 'Projet Stage',
      description: 'Une plateforme de gestion des stages pour les étudiants et les entreprises.',
      technologies: ['PHP', 'MySQL', 'Bootstrap'],
      image: 'assets/images/gestion.png',
      link: '/projects/gestionstage'
    },
    {
      title: 'Projet TimeTrack',
      description: 'Un système de suivi du temps pour améliorer la productivité.',
      technologies: ['C#', 'SQL Server', 'Entity Framework'],
      image: 'assets/images/timetrack.png',
      link: '/projects/timetrack'
    }
  ];

  // Specific project details for each category
  portfolioProjects: Project[] = [
    {
      title: 'Page d\'accueil',
      description: 'La page d\'accueil de mon ancien portfolio.',
      technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'Angular','Parallaxe'],
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
