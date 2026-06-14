import './Article.css';
import Card from './Card';

function Article(props) {
    console.log(props);
    return (
        <div className="article" >
            {
            Object.keys(props.db).map 
            (
                elem => {
                    return (<Card persone={props.db[elem]} />);
                }
            )
            }
        </div>
    );
}
export default Article;