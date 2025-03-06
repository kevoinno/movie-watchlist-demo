import { useState } from 'react'

function MovieCard(props) {
 const [isWatched, setIsWatched] = useState(false);
 const markAsWatched = () => {
    setIsWatched(true); // Update state
 }

 return (
   <div>
     <h3>{props.name} ({props.genre})</h3>
     <button onClick={markAsWatched}>
 {isWatched ? "Watched" : "✅ Mark as Watched"}
     </button>
     <button>❌ Remove</button>
   </div>
 );
}

export default MovieCard;