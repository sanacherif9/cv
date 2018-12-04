import React ,{Component} from 'react';

class Desc extends Component{

render(){
    return(
        <div>
            <h2>{this.props.titre}</h2>
            <p>{this.props.description}</p>
        </div>
    );
}

}
export default Desc;