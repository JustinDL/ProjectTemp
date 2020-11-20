import { useParams } from 'react-router-dom';

const User = () => {
    // returns entire object and puts in variable params
    //const params = useParams();

    // we only really want the user ID param
    const { userId } = useParams();


    console.log({userId});

    return(
        <div>
            Display user with ID: {userId}
        </div>
    )

}

export default User;