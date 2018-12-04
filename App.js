import React, { Component } from 'react';

import './App.css';
import Desc from './components/descr';
import Loisir from './components/loisir';
import Exp from './components/experience';
import Cordonée from './components/cordonnées';
import Info from './components/info';
import Sana from './photos/sana.png';
import Gmail from './photos/gmail.png';
import Linkedin from './photos/linkedin.png';
import Tel from './photos/telephone.png';
import Place from './photos/placeholder.png';
const com1= {titre: "Objectif" , description:" Acquérir des compétences techniques et humaines Être un project manager"};
const com2 ={titre:"Langues",description:"Arabe, Français, Anglais"};
const com3 ={titre:"Intérêts",description:"Vie associative, L'entrepreneuriat social, Activités sportives"};
const com0 ={photo:Sana, prenom:"sana", nom:"Cherif", specialité:"Génie des Télécommunication Specialité Securité Réseaux", citation:"Work hard until you no longer have to introduce your self"};
const cont0 ={photo:Place, description:"06 rue de teskraya Kram ouest Tunis"};
const cont1 ={photo:Tel, description:"58880396     "};
const cont2 ={photo:Gmail, description:"sanacherif2@gmail.com"};
const cont3 ={photo:Linkedin, description:"Sana cherif" };
const education1 ={date:"2014", desc:"Bac Math", lieu:"| Carthage dermech",titre:"education"};
const education2={date:"2014-2016", desc:"cycle preparatoire MP", lieu :"| Fac des sciences de monastir",titre:"education"};
const education3={date:"2016-2019", desc:"génie des telecommunication",lieu:"| Enet'Com",titre:"education"};
const stage1={date:"2017",desc:"switching routing et configuration des reseaux d'entreprise",lieu:"| Tunisie Telecom la Marsa", titre:"stage"};
const stage2={date:"2017",desc:"configuration des routeurs et des firwalls de Tunisair",lieu:"| Tunisair",titre:"satge"};
const stage3={date:"2018",desc:"application pour le DRH de cynapsys",lieu:"| Cynapsys by GFI",titre:"stage"};
const stage4={date:"2018",desc:"application pour la gestion des interventions de l'équipe sécurité",lieu:"| Ooredoo",titre:"stage"};
const extra1={date:"2010",desc:"membre actif",lieu:"| Association jeune science Tunisie",titre:"extra"};
const extra2={date:"2017-2018",desc:"Responsable RH et Formmation",lieu:"| Enactus Enet'Com",titre:"extra"};
const extra3={date:"été 2015-2016", desc:"Assistante d'une dentiste",lieu:"| Clinique Hannibaal Tunis",titre:"extra"};
const formation1={date:"2018",desc:"fromation en ReactJs",lieu:"| Go My Code Sfax"};
const formation2={date:"2018",desc:"Formation en implémentation de la sécurité resaux",lieu:"| Enet'Com"};
const formation3={date:"2017",desc:"Certification en création d'entreprise",lieu:"| Apii Tunisie- pépiniére sfax3"};
const formation4={date:"2017",desc:"Certification en CCNA1", lieu:"| Enet'Com"};
const formation5={date:"2017",desc:"Certification en SQL",lieu:"| Solo lean"};


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tab:[ com1, com2, com3],
      tab1:[com0],
      tab2:[cont0 , cont1, cont2 , cont3],
      tab3:[education1,education2,education3,stage1,stage2,stage3,stage4,extra1,extra2,extra3],
      tab4:[formation1,formation2,formation3,formation4,formation5],

    };
  }
  render() {
    return (
   <div className="App">
     <div className="coordonee-perso">
        {this.state.tab1.map((el,i)=>{return (<Cordonée  photo={el.photo}  prenom={el.prenom} nom={el.nom} specialité={el.specialité} citation={el.citation}/>);
         })}
         <div className="con"></div>
        <h2>Contact</h2>
        {this.state.tab2.map((el,i)=>{return (<Info photo={el.photo} description={el.description}/>);})}
        <h2>Longues</h2>
        <p>Anglais , Francais , Arabe </p>
        <div className="loisir">
        <h2 style={{textAlign:"center"}}>Loisir</h2>
        <div className="icone">
        <i class="fas fa-plane-departure"></i>
        <i class="fas fa-basketball-ball"></i>
        <i class="fas fa-dumbbell"></i>
        </div>
        </div>
     
     </div>
     <hr className="ligne"></hr>
     <div className="experience">
       <h2>Education</h2>
       {this.state.tab3.filter(x=>x.titre==="education").map((x)=>{return(<Exp date={x.date}  desc={x.desc} lieu={x.lieu}/>);})}
       <h2>Stage</h2>
       {this.state.tab3.filter(x=>x.titre==="stage").map((x)=>{return(<Exp date={x.date}  desc={x.desc} lieu={x.lieu}/>);})}
      <h2>Formation&Certification</h2>
      {this.state.tab4.map((x)=>{return(<Exp date={x.date}  desc={x.desc} lieu={x.lieu}/>);})}
       <h2>Experience extraprofetionelle</h2>
       {this.state.tab3.filter(x=>x.titre==="extra").map((x)=>{return(<Exp date={x.date}  desc={x.desc} lieu={x.lieu}/>);})}
     </div>
   </div>
    );
  }
}

export default App;
