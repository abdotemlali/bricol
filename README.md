# My Bricole - Application Web de Bricolage

Une plateforme complète permettant de connecter les bricoleurs avec des professionnels pour partager des tutoriels, demander des services et gérer des projets de bricolage.

## 📋 Table des Matières

- [À Propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Technologies Utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [API Endpoints](#api-endpoints)
- [Structure du Projet](#structure-du-projet)
- [Contributeurs](#contributeurs)
- [Licence](#licence)

## 🔍 À Propos

My Bricole est une application web full-stack développée dans le cadre d'un projet intégré en Génie Informatique et Digitalisation. Cette plateforme facilite les interactions entre différents types d'utilisateurs dans le domaine du bricolage :

- **Visiteurs** : Navigation libre du catalogue de services
- **Clients** : Demande de services, évaluation et réclamations
- **Professionnels** : Création et gestion de services, propositions
- **Administrateurs** : Supervision globale de la plateforme

## ✨ Fonctionnalités

### Fonctionnalités Principales

- **🔐 Gestion des utilisateurs**
  - Inscription et connexion sécurisées
  - Gestion des profils utilisateur
  - Système de rôles (Visiteur, Client, Professionnel, Admin)

- **📚 Gestion des contenus**
  - Consultation et partage de tutoriels
  - Catalogue de services de bricolage
  - Système de recherche et filtrage avancés

- **💼 Gestion des services**
  - Création et publication de services par les professionnels
  - Système de demandes clients
  - Propositions et négociations

- **⭐ Système d'évaluation**
  - Reviews et notations
  - Gestion des réclamations
  - Suivi de la qualité des services

- **🛒 E-commerce**
  - Gestion du panier
  - Traitement des commandes
  - Historique des transactions

### Fonctionnalités Techniques

- **🔒 Sécurité**
  - Authentification JWT
  - Chiffrement des mots de passe avec BCrypt
  - Protection des routes avec Guards

- **🎨 Interface Utilisateur**
  - Design responsive et moderne
  - Interfaces intuitives avec Angular Material
  - Optimisation des performances avec Lazy Loading

## 🏗️ Architecture

L'application suit une architecture en couches modulaire :

```
┌─────────────────────────────────────┐
│           Frontend (Angular)        │
│    ┌─────────────────────────────┐  │
│    │    Presentation Layer       │  │
│    └─────────────────────────────┘  │
└─────────────────────────────────────┘
                    │
                    │ HTTP/REST API
                    ▼
┌─────────────────────────────────────┐
│          Backend (Spring Boot)     │
│    ┌─────────────────────────────┐  │
│    │      Controller Layer      │  │
│    └─────────────────────────────┘  │
│    ┌─────────────────────────────┐  │
│    │       Service Layer        │  │
│    └─────────────────────────────┘  │
│    ┌─────────────────────────────┐  │
│    │      Repository Layer      │  │
│    └─────────────────────────────┘  │
└─────────────────────────────────────┘
                    │
                    │ JPA/Hibernate
                    ▼
┌─────────────────────────────────────┐
│           MySQL Database           │
└─────────────────────────────────────┘
```

## 🛠️ Technologies Utilisées

### Backend
- **Spring Boot** - Framework Java pour le développement d'applications web
- **Spring Security** - Authentification et autorisation
- **Spring Data JPA** - Couche d'accès aux données
- **MySQL** - Base de données relationnelle
- **JWT** - Tokens d'authentification
- **BCrypt** - Chiffrement des mots de passe
- **Maven** - Gestion des dépendances

### Frontend
- **Angular 17** - Framework TypeScript pour SPA
- **TypeScript** - Langage de programmation typé
- **Angular Material** - Composants UI
- **Bootstrap** - Framework CSS responsive
- **NgRx** - Gestion d'état (optionnel)
- **HttpClient** - Communication avec l'API

### DevOps & Outils
- **Docker** - Conteneurisation
- **StarUML** - Modélisation UML
- **Git** - Contrôle de version

## 📋 Prérequis

Avant d'installer l'application, assurez-vous d'avoir :

- **Java 11+** installé
- **Node.js 16+** et npm
- **MySQL 8.0+** 
- **Docker** (optionnel, pour la conteneurisation)
- **Git** pour cloner le repository

## 🚀 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/my-bricole.git
cd my-bricole
```

### 2. Configuration de la base de données

Créez une base de données MySQL :

```sql
CREATE DATABASE mybricole_db;
CREATE USER 'mybricole_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON mybricole_db.* TO 'mybricole_user'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Installation du Backend

```bash
cd backend
./mvnw clean install
```

### 4. Installation du Frontend

```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### Backend (application.properties)

Créez le fichier `src/main/resources/application.properties` :

```properties
# Configuration Base de données
spring.datasource.url=jdbc:mysql://localhost:3306/mybricole_db
spring.datasource.username=mybricole_user
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Configuration JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Configuration JWT
jwt.secret=mySecretKey
jwt.expiration=86400000

# Configuration serveur
server.port=8080
```

### Frontend (environment.ts)

Créez le fichier `src/environments/environment.ts` :

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

## 🏃‍♂️ Utilisation

### Démarrage du Backend

```bash
cd backend
./mvnw spring-boot:run
```

Le backend sera accessible sur `http://localhost:8080`

### Démarrage du Frontend

```bash
cd frontend
ng serve
```

Le frontend sera accessible sur `http://localhost:4200`

### Utilisation avec Docker

```bash
# Construction et démarrage des conteneurs
docker-compose up -d

# Arrêt des conteneurs
docker-compose down
```

## 📡 API Endpoints

### Authentification
```
POST /api/auth/login      - Connexion utilisateur
POST /api/auth/register   - Inscription utilisateur
POST /api/auth/logout     - Déconnexion
```

### Gestion des utilisateurs
```
GET    /api/clients           - Lister tous les clients
GET    /api/clients/{id}      - Obtenir un client par ID
POST   /api/clients           - Créer un nouveau client
PUT    /api/clients/{id}      - Modifier un client
DELETE /api/clients/{id}      - Supprimer un client
```

### Gestion des services
```
GET    /api/services          - Lister tous les services
POST   /api/services          - Créer un nouveau service
GET    /api/services/{id}     - Obtenir un service par ID
PUT    /api/services/{id}     - Modifier un service
DELETE /api/services/{id}     - Supprimer un service
```

### Gestion des demandes
```
GET    /api/demandes          - Lister toutes les demandes
POST   /api/demandes          - Créer une nouvelle demande
GET    /api/demandes/{id}     - Obtenir une demande par ID
PUT    /api/demandes/{id}     - Modifier une demande
```

## 📁 Structure du Projet

```
my-bricole/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/mybricole/
│   │       │       ├── controller/
│   │       │       ├── service/
│   │       │       ├── repository/
│   │       │       ├── entity/
│   │       │       ├── dto/
│   │       │       └── config/
│   │       └── resources/
│   │           └── application.properties
│   ├── pom.xml
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── guards/
│   │   │   └── modules/
│   │   ├── assets/
│   │   └── environments/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
├── README.md
└── docs/
    ├── uml-diagrams/
    └── api-documentation/
```

## 👥 Contributeurs

- **SMAIKI Anas** - Développeur Full-Stack
- **TEMLALI Abderrahmane** - Développeur Backend
- **EL MASLOUHI Mouad** - Développeur Frontend
- **EL MAILOUDI Ali** - Développeur Full-Stack

**Encadré par :** Monsieur Slimane Bah

## 📝 Licence

Ce projet a été développé dans le cadre académique - Filière Génie Informatique et Digitalisation, Année Universitaire 2024/2025.

## 🔮 Évolutions Futures

- Intelligence artificielle pour l'analyse des projets
- Chat en temps réel entre utilisateurs
- Application mobile complémentaire
- Système de géolocalisation des services
- Intégration de systèmes de paiement en ligne
- Module de recommandations personnalisées

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue sur le repository GitHub ou contacter l'équipe de développement.

---

**Année Universitaire :** 2024/2025  
**Filière :** Génie Informatique et Digitalisation
