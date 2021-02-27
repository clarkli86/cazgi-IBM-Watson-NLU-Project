import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    constructor(props) {
        super(props);        
        let emotions = [];
        for (let key in props.emotions) {            
            emotions.push([key, props.emotions[key]]);
        }
        console.log(emotions);
        this.state = {emotionList:emotions}
        console.log(this.state.emotionList);
    }

    render() {      
      return (            
        <div>
          {/*You can remove this line and the line below. */}
          {/*JSON.stringify(this.props.emotions)*/}
          <table className="table table-bordered">
            <tbody>
            {
                this.state.emotionList.map(
                    function(emotion){
                        return <tr><td>{emotion[0]}</td><td>{emotion[1]}</td></tr>;
                    })
            }            
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
