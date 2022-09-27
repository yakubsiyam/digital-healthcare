import axios from 'axios';
import { useQuery } from 'react-query';

const useReviews = () => {
    const { isLoading, data } = useQuery("reviews", () =>
        axios(`https://wood-peckers.herokuapp.com/reviews`)
    );
    return [isLoading, data];
};

export default useReviews;