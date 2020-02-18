import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";


class Resume extends Component {
  render() {
    return (
      <div className='all-resume'>
        <div className='Education'>
          <p className='citation-education'>
            {" "}<br/>
            "Leducation est votre arme la plus puissante pour changer le monde "
          </p>

          <Education
          />



<p className='citation-education'>
            {" "}<br/>
            "La seul facon de faire du bon Boulout, c'est daimer ce que vous faites "
          </p>

          <Experience
jobName="Gestionnaire de paie"
nameBrand="ADP"
startMonth={9}
startYear={2018}
endMonth={11}
endYear={2019}
descriptionJob="Elaboration des bulletins de paie. 
• Saisir, vérifier des éléments variables, contrôler les fiches de paie.  
 • Gérer le logiciel de GTA (gestion des plans de travail et des anomalies).  
  • Gestion des attestations de salaire (maladie, maternité, mi-temps thérapeutique…). 
    • Etablir, contrôler et envoyer les STC (solde de tout compte).    
     • Etablir la DSN (Déclaration Sociales Nominative). "
/>

<Experience
jobName="Co-Fondateur et responsable Marketing"
nameBrand="Web commerce"
startMonth={7}
startYear={2014}
endMonth={6}
endYear={2018}
descriptionJob=" Gestion et animation du site web (suivi, mise à jour) : http://lartisanet.com/fr/    • Gestion et animation des campagnes ads (Google, facebook…)     • Conceptions des éléments graphiques nécessaires au marketing digital.    • Coordonner la création de contenu numérique (par exemple, site web, blogs, communiqués de presse et podcasts).     • L'analyse de la concurrence, des tendances et des typologies des consommateurs.     • Webmaster du site (www.lartisanet.com).     "
/>

<Experience
jobName="Commercial"
nameBrand="Point Dev"
startMonth={4}
startYear={2013}
endMonth={2}
endYear={2014}
descriptionJob= "• Conseiller les clients en leur proposant des solutions web adaptées à leurs besoins.    • Développer et maintenir une relation de partenariat et de confiance avec les clients.    • Recommander des stratégies pour augmenter le trafic en ligne à l’aide des meilleures techniques d’optimisation des moteurs de recherche.    • Visiter des prospects afin d’en faire des clients et de développer leur stratégie Web (prospection Téléphonique, RDV terrain)."
/>
        </div>

        {/*  
  <Cell col={5} className="Experience">
<Experience
jobName = "Gestionaire de paie"
JobDescription = "mamaaakk"
nameBrand= "ADP Tunis"
startMonth = {11}
startYear = {2018}
endMonth ={10}
endYear = {2019}
/>

<Experience
jobName = "Co-fondateur et Webmarketing Manager"
JobDescription = "lolo"
nameBrand= "Web Commerce"
startMonth = {8}
startYear = {2014}
endMonth ={10}
endYear = {2018}
/>
  </Cell> */}

        {/* <Cell col={1} className='react'>
          <img className='imghtml' src={html} />
          <span> </span>
        </Cell> */}
      </div>
    );
  }
}

export default Resume;
