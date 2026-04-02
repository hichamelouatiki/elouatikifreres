# Elouatikifreres

Site vitrine Next.js exporté en **statique** pour un déploiement sur **Hostinger**.

Ce projet utilise `output: "export"` et génère un dossier `out/` à déployer tel quel (HTML/CSS/JS).

## Prérequis

- Node.js + npm

## Démarrer en local (développement)

```bash
npm install
npm run dev
```

Ouvre `http://localhost:3000`.

## Vérifier le projet (qualité / build)

```bash
npm run lint
npm run build
```

## Variables d’environnement (Web3Forms)

Le formulaire peut être connecté à Web3Forms via une clé publique.

Crée un fichier `.env.local` (non commité) :

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=ta_cle_web3forms
```

Puis relance :

```bash
npm run build
```

## Tester la version exportée (comme en prod)

Après `npm run build`, un dossier `out/` est généré.

Pour le servir en local :

```bash
npx serve out -l 3001
```

Ouvre `http://localhost:3001`.

> Note : `npm run start` ne s’applique pas ici (export statique).

## Déployer sur Hostinger

### 1) Générer l’export

```bash
npm install
npm run build
```

### 2) Uploader sur Hostinger

Sur Hostinger, va dans le **Gestionnaire de fichiers** (ou via FTP) et ouvre le dossier de ton site :

- `public_html/` (domaine principal), ou
- le dossier du sous-domaine / sous-site correspondant

Ensuite, **copie le contenu de `out/`** (pas le dossier `out` lui-même) dans `public_html/` :

- `index.html`
- `_next/`
- `favicon.ico`
- `404.html`, etc.

### 3) Vérification

- visite ton domaine
- teste les pages et les assets (CSS/JS)

## Structure

- `src/app/` : pages et layout (App Router)
- `src/components/` : composants UI
