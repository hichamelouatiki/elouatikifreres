# Note explicative : vers une planification probabiliste

## 1. Introduction : la fin du déterminisme

Dans la gestion de projet traditionnelle, chaque tâche est associée à une durée fixe (ex. : « 3 jours »). Ce modèle, dit **déterministe**, est souvent pris en défaut par la réalité technique et humaine. En réalité, l'humain a tendance à être trop optimiste ou à ajouter des « marges de sécurité » cachées qui finissent par être gaspillées à cause de la **Loi de Parkinson**. Le changement de paradigme proposé consiste à passer d'une valeur unique à une **modélisation de l'incertitude** pour commencer à dire la vérité avec une marge d'erreur explicite.

## 2. Le concept de la racine : les estimations « 3-points »

Au lieu de forcer un expert à donner un chiffre unique (souvent arbitraire), on lui demande d'évaluer trois scénarios pour chaque tâche :

* **Optimiste ($a$)** : tout se passe parfaitement, sans aucun accroc.
* **Le plus probable ($m$)** : ce qui se passe dans environ 80 % des cas (la « normale »).
* **Pessimiste ($b$)** : tout ce qui peut mal tourner tourne mal ; tous les risques identifiés se réalisent.

## 3. Les deux modèles principaux

### A. La distribution triangulaire

Elle trace littéralement un triangle entre les points $a$, $m$ et $b$.

* **Avantages** : très intuitive et facile à expliquer.
* **Usage** : idéale quand on manque de données historiques. Elle accorde autant de poids aux extrêmes qu'au milieu.

### B. La distribution PERT (Beta-Erlang)

C'est la méthode de référence en analyse de risques. Elle donne beaucoup plus de poids à la valeur « Probable » ($m$) pour éviter que les scénarios catastrophes ($b$) ne faussent trop la moyenne.

**Les Formules Mathématiques :**

* **Espérance ($E$)** (Durée attendue) :

$$E = \frac{a + 4m + b}{6}$$

* **Écart-type ($\sigma$)** (indicateur du niveau de risque) :

$$\sigma = \frac{b - a}{6}$$

> **Exemple pratique :**
> Si un expert estime qu'une tâche prend normalement 5 jours ($m$), mais qu'en cas de problème majeur elle pourrait en prendre 20 ($b$), le modèle déterministe s'arrêterait à 5 jours. Le calcul PERT, lui, donnera une moyenne pondérée d'environ **7,5 jours**. Cette valeur est bien plus réaliste pour absorber les aléas.

## 4. Pourquoi ce changement est-il une « révolution » ?

* **Réalisme psychologique** : les experts sont plus à l'aise pour donner une fourchette que pour s'engager sur une date ferme face à l'inconnu.
* **Simulation de Monte Carlo** : en combinant ces distributions, un logiciel peut simuler le projet 10 000 fois. On obtient une probabilité (ex. : « 85 % de chances de finir avant le 12 juin »).
* **Transparence et priorisation** : on repère immédiatement les tâches avec une « traîne » pessimiste immense (grand écart entre $m$ et $b$), qui sont les vraies priorités à surveiller.

## 5. Conclusion

Ce paradigme transforme le planning d'un document statique en un **outil dynamique d'aide à la décision**. On passe d'une gestion « au doigt mouillé » à une livraison **statistique et résiliente**.
