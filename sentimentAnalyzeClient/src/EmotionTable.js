import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    state = { emotionList:[] }

    constructor(props) {
        super(props);        
        let emotions = [];
        for (let key in props.emotions) {            
            emotions.push([key, props.emotions[key]]);
        }
        console.log(emotions);
        this.setState({emotionList:emotions})
        console.log(this.state.emotionList);
    }

    render() {      
      return (            
        <div>
          {/*You can remove this line and the line below. */}
          {/*JSON.stringify(this.props.emotions)*/}
          <table className="table table-bordered">
            <tbody>
            {this.state.emotions.map(function(emotion){
                    return <tr><td>key={emotion}>{emotion}</td></tr>;
                  })
            }            
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
