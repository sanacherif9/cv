import React  , {Component}from 'react';


class Exp extends Component {
render(props){
   
    var lieu= {
        display: 'flex' ,
        flexdirection: 'column' ,
        alignitems: 'center' ,
    
      }
    return(
        <div className="experience1">

            <h3>{this.props.date}</h3>
            <p>{this.props.desc}</p>
            <h3 style={lieu}>{this.props.lieu}</h3>
        </div>
    );
}

}
export default Exp