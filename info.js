import React ,{Component} from 'react';


class Info extends Component{
  render(){
      return(
          <div className="info">
          <div>
          <img src={this.props.photo} className="photo1"/></div>
          
       
          <div>
          <p className="descinfo">{this.props.description}</p></div>
          </div>
      );

  }

}
export default Info;