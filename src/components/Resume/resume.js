import React, { Component } from "react";
import Education from "./education";
import Typical from "react-typical";
import Experience from "./experience";
import QuoteStart from "./quote.png";
import QuoteEnd from "./quote2.png";

class Resume extends Component {
  render() {
    return (
      <div className='all-resume'>
        <div className='Education'>
          <p className='citation-education'>
            {" "}
            <br />
            <img
              src={QuoteStart}
              style={{ height: "20px", width: "20px", marginRight: "20px" }}
            />
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                "         L'éducation est votre arme la plus puissante pour changer le monde. ",
                1500
              ]}
            />
            <img
              src={QuoteEnd}
              style={{ height: "20px", width: "20px", marginLeft: "20px" }}
            />
          </p>

          <Education />

          <p className='citation-education'>
            {" "}
            <br />
            <img
              src={QuoteStart}
              style={{ height: "20px", width: "20px", marginRight: "20px" }}
            />
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                "La seul facon de faire du bon Boulout,",
                1500,
                " cest daimer ce que vous faites",
                1500
              ]}
            />
            <img
              src={QuoteEnd}
              style={{ height: "20px", width: "20px", marginLeft: "20px" }}
            />
          </p>

          <Experience
            jobName='Gestionnaire de paie'
            nameBrand='ADP'
            startMonth={9}
            startYear={2018}
            endMonth={11}
            endYear={2019}
            descriptionJob='• Elaboration des bulletins de paie.'
            descriptionJob1='• Saisir, vérifier des éléments variables, contrôler les fiches de paie.'
            descriptionJob2='• Gérer le logiciel de GTA (gestion des plans de travail et des anomalies). '
            descriptionJob3=' • Gestion des attestations de salaire (maladie, maternité, mi-temps thérapeutique…). '
            descriptionJob4='• Etablir, contrôler et envoyer les STC (solde de tout compte).'
          />

          <Experience
            jobName='Co-Fondateur et responsable Marketing'
            nameBrand='Web commerce'
            startMonth={7}
            startYear={2014}
            endMonth={6}
            endYear={2018}
            descriptionJob=' Gestion et animation du site web (suivi, mise à jour) : http://lartisanet.com/fr/  '
            descriptionJob1='• Gestion et animation des campagnes ads (Google, facebook…)'
            descriptionJob2='• Conceptions des éléments graphiques nécessaires au marketing digital. '
            descriptionJob3='• Coordonner la création de contenu numérique (par exemple, site web, blogs, communiqués de presse et podcasts).'
          />

          <Experience
            jobName='Commercial'
            nameBrand='Point Dev'
            startMonth={4}
            startYear={2013}
            endMonth={2}
            endYear={2014}
            descriptionJob='• Conseiller les clients en leur proposant des solutions web adaptées à leurs besoins.'
            descriptionJob1='• Développer et maintenir une relation de partenariat et de confiance avec les clients.  '
            descriptionJob2=' • Recommander des stratégies pour augmenter le trafic en ligne à l’aide des meilleures techniques d’optimisation des moteurs de recherche. '
            descriptionJob3='• Visiter des prospects afin d’en faire des clients et de développer leur stratégie Web (prospection Téléphonique, RDV terrain).'
          />
        </div>
      </div>
    );
  }
}

export default Resume;
