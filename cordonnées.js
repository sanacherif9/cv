import React , {Component} from 'react';

class Cordonée extends Component{

render(){
return(
    <div className="Cordonée">
      <img src= {this.props.photo} className="photo" alt=""/>
      <div  className="nom_p">
        <h2>{this.props.prenom}</h2>
        <h1>{this.props.nom}</h1>
      </div>
      <p>{this.props.specialité}</p>
      <h1>{this.props.citation}</h1>
    </div>
);
}
    


}
export default Cordonée;