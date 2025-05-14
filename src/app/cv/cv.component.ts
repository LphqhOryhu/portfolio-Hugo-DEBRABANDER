import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  // Contact information
  contactInfo = {
    phone: '+33 7 81 73 18 12',
    address: '37 Rue Gambetta, Le Petit-Quevilly 76140',
    email: 'hugodebrabander27310@gmail.com',
    portfolio: 'https://mon-portfolio-tan.vercel.app/'
  };

  // CV data
  education = [
    {
      period: '2024 - Aujourd\'hui',
      degree: 'Cycle ingénieur en alternance (FISA)',
      institution: 'Campus CESI, Saint-Étienne-du-Rouvray (76800)',
      description: 'Spécialité : Informatique'
    },
    {
      period: '2022 - 2024',
      degree: 'BTS Services Informatiques aux Organisations',
      institution: 'Campus La Châtaigneraie, Le Mesnil-Esnard (76240)',
      description: 'Spécialité : Solutions Logicielles et Applications Métiers (diplômé)'
    },
    {
      period: '2020 - 2022',
      degree: 'LICENCE en informatique',
      institution: 'Campus du Madrillet, Saint-Étienne-du-Rouvray (76800)',
      description: 'Électronique, énergie électrique, automatique'
    },
    {
      period: '2016 - 2020',
      degree: 'BACCALAURÉAT',
      institution: 'Lycée Jacques Prévert, Pont-Audemer (27500)',
      description: 'Sciences et Technologies de l\'Industrie et du Développement Durable (diplômé)'
    }
  ];

  experience = [
    {
      period: '2024 - 2025',
      position: 'Alternant',
      company: 'SGA Mobility (FRANCE)',
      description: 'Création d\'un simulateur de borne de recharge (OCPP), maintenance évolutive du site web : correction d\'issues et ajout de nouvelles fonctionnalités, refonte complète de l\'interface de supervision'
    },
    {
      period: 'Janvier - Février 2024',
      position: 'Stagiaire',
      company: 'SGA Mobility (FRANCE)',
      description: 'Développement en Angular sur un site de gestion de bornes, utilisation de Git en méthode Agile'
    },
    {
      period: 'Mai - Juin 2023',
      position: 'Stagiaire',
      company: 'FLAZIO (ITALIE)',
      description: 'Implémentation d’AG-GRID dans un outil de visualisation d’échanges financiers, accompagnée d’une documentation technique en plusieurs langues'
    }
  ];

  // Skills categories
  skillCategories = [
    {
      name: 'Développement web',
      skills: ['Angular', 'HTML/CSS/TS', 'Tailwind', 'JavaScript', 'Sites responsives et orientés expérience utilisateur']
    },
    {
      name: 'Développement logiciel',
      skills: ['C# (OOP, multithreading, gestion des processus)']
    },
    {
      name: 'Documentation',
      skills: ['Rédaction claire', 'Maintenabilité des projets']
    },
    {
      name: 'Algorithmie / Optimisation',
      skills: ['Python', 'Résolution de problèmes complexes', 'Recherche opérationnelle']
    },
    {
      name: 'Bases de données',
      skills: ['SQL', 'SQL Server', 'MySQL', 'Requêtes optimisées']
    },
    {
      name: 'Méthodologies',
      skills: ['Travail en équipe Agile', 'Git', 'Collaboration pluridisciplinaire']
    },
    {
      name: 'Réseau & Système',
      skills: ['Architecture', 'Procédures communes', 'Virtualisation', 'Active Directory']
    }
  ];

  // Professional qualities
  qualities = [
    { name: 'Curiosité technique', description: 'Apprentissage constant via projets personnels.' },
    { name: 'Esprit d\'analyse', description: 'Mobilisé pour concevoir des solutions logiques et robustes.' },
    { name: 'Travail en équipe', description: 'Pratique de la méthode Agile au sein d\'une équipe pluridisciplinaire.' },
    { name: 'Autonomie', description: 'Développée lors de missions techniques.' }
  ];

  languages = [
    { name: 'Anglais', level: 'B2 (communication technique et orale)' },
    { name: 'Allemand', level: 'A2' }
  ];

  // Hobbies
  hobbies = [
    'Monde du jeu vidéo',
    'Art visuel',
    'Lecture : manga & science-fiction',
    'Musique électronique',
    'Projet personnel en informatique',
    'Voyage et découverte de nouvelles cultures'
  ];
}
