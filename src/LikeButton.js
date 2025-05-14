import react ,{useState} from 'react';

const Likes = () => {
      const [noOfLikes, AddLike] = useState(0);

      return <div> <p>Likes : {noOfLikes}</p>
            <button onClick={() => AddLike(noOfLikes+1)}>Like</button>
            </div>;
}

export default Likes;