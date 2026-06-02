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
  contactInfo = {
    phone: '+33 7 81 73 18 12',
    address: '37 Rue Gambetta, Le Petit-Quevilly 76140',
    email: 'hugodebrabander27310@gmail.com',
    github: 'https://github.com/LphqhOryhu',
    linkedin: 'https://www.linkedin.com/in/hugo-de-brabander/'
  };

  education = [
    {
      period: '2024 – Aujourd\'hui',
      degree: 'Cycle Ingénieur en Alternance (FISA)',
      institution: 'CESI, Saint-Étienne-du-Rouvray (76800)',
      description: 'Spécialité Informatique — 3ème année ingénieur',
      current: true
    },
    {
      period: '2022 – 2024',
      degree: 'BTS SIO – Solutions Logicielles et Applications Métiers',
      institution: 'Campus La Châtaigneraie, Le Mesnil-Esnard (76240)',
      description: 'Diplômé',
      current: false
    },
    {
      period: '2020 – 2022',
      degree: 'Licence Informatique',
      institution: 'Campus du Madrillet, Saint-Étienne-du-Rouvray (76800)',
      description: 'Électronique, énergie électrique, automatique',
      current: false
    },
    {
      period: '2016 – 2020',
      degree: 'Baccalauréat STI2D',
      institution: 'Lycée Jacques Prévert, Pont-Audemer (27500)',
      description: 'Sciences et Technologies de l\'Industrie et du Développement Durable — Diplômé',
      current: false
    }
  ];

  experience = [
    {
      period: '2024 – 2025',
      position: 'Alternant Développeur',
      company: 'SGA Mobility — France',
      type: 'Alternance',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'OCPP', 'WebSocket', 'Docker', 'Git'],
      description: 'Développement fullstack sur les solutions de supervision de bornes de recharge électrique.',
      achievements: [
        'Refonte du simulateur OCPP : implémentation complète du protocole (boot, autorisation, session de charge) — supprime une longue étape de vérification manuelle',
        'Migration de l\'interface de supervision vers Angular : nouvelle architecture frontend, amélioration UX et indicateurs de monitoring temps réel',
        'Maintenance évolutive du site web : résolution de bugs en production et développement de fonctionnalités métier',
        'Conception en autonomie de l\'architecture d\'un système d\'abonnement et de gestion des droits d\'accès'
      ]
    },
    {
      period: 'Janvier – Février 2024',
      position: 'Stagiaire Développeur',
      company: 'SGA Mobility — France',
      type: 'Stage',
      technologies: ['Angular', 'Git', 'Agile'],
      description: 'Développement en Angular sur un site de gestion de bornes, utilisation de Git en méthode Agile.',
      achievements: []
    },
    {
      period: 'Mai – Juin 2023',
      position: 'Stagiaire Développeur',
      company: 'Flazio — Italie',
      type: 'Stage international',
      technologies: ['AG-GRID', 'JavaScript', 'HTML/CSS'],
      description: 'Stage international au sein d\'une équipe de 20 développeurs italiens.',
      achievements: [
        'Intégration d\'AG-GRID dans l\'application avec coordination technique en anglais auprès du management',
        'Rédaction de la documentation technique en trois langues (français, anglais, italien) pour garantir la maintenabilité'
      ]
    }
  ];

  skillCategories = [
    { name: 'Développement Frontend', level: 'Avancé', skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Développement Backend', level: 'Avancé', skills: ['Node.js', 'PHP / Symfony', 'API REST', 'Express'] },
    { name: 'Bases de données', level: 'Intermédiaire', skills: ['SQL', 'SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'] },
    { name: 'Big Data & ETL', level: 'Intermédiaire', skills: ['Talend', 'HDFS', 'Hive', 'Hadoop', 'ETL'] },
    { name: 'Data Analysis', level: 'Intermédiaire', skills: ['Power BI', 'Dashboards', 'KPI', 'Reporting', 'Statistiques'] },
    { name: 'Machine Learning', level: 'Intermédiaire', skills: ['Python', 'scikit-learn', 'Random Forest', 'Classification', 'Régression linéaire'] },
    { name: 'Python & Algorithmie', level: 'Avancé', skills: ['Python', 'NumPy', 'pandas', 'Algorithmie', 'Optimisation'] },
    { name: 'Développement C#', level: 'Intermédiaire', skills: ['C#', '.NET', 'Orienté objet', 'Multithreading'] },
    { name: 'DevOps', level: 'Intermédiaire', skills: ['Docker', 'Git', 'CI/CD', 'GitHub Actions'] },
    { name: 'IoT & Systèmes Embarqués', level: 'Intermédiaire', skills: ['MQTT', 'Zigbee', 'LoRa', 'BLE', 'OCPP'] },
    { name: 'Réseaux & Cybersécurité', level: 'Intermédiaire', skills: ['Modèle OSI', 'TCP/UDP', 'VPN', 'Routage', 'Sécurisation'] },
    { name: 'Gestion de projet Agile', level: 'Intermédiaire', skills: ['SCRUM', 'Agile', 'Kanban', 'Git'] }
  ];

  softSkills = [
    'Rigueur et sens du détail',
    'Esprit critique et autonomie',
    'Capacité à vulgariser les résultats d\'analyse',
    'Travail collaboratif avec les équipes métier'
  ];

  qualities = [
    { name: 'Curiosité technique', description: 'Apprentissage constant via projets personnels.' },
    { name: 'Esprit d\'analyse', description: 'Mobilisé pour concevoir des solutions logiques et robustes.' },
    { name: 'Travail en équipe', description: 'Pratique de la méthode Agile au sein d\'une équipe pluridisciplinaire.' },
    { name: 'Autonomie', description: 'Développée lors de missions techniques en entreprise.' }
  ];

  languages = [
    { name: 'Anglais', level: 'B2', description: 'Communication technique et orale' },
    { name: 'Allemand', level: 'A2', description: 'Notions' }
  ];

  hobbies = [
    { label: 'Volleyball', detail: 'Loisir et compétitif', icon: 'sports_volleyball' },
    { label: 'Art visuel', detail: 'Dessin, design', icon: 'palette' },
    { label: 'Informatique', detail: 'Projets personnels', icon: 'computer' },
    { label: 'Voyage', detail: 'Découverte de nouvelles cultures', icon: 'flight' }
  ];
}
