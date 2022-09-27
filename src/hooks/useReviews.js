import axios from "axios";
import { useQuery } from "react-query";

const useReviews = () => {
  const { isLoading, data } = useQuery("reviews", () =>
    axios(`https://digital-healthcare.onrender.com/reviews`)
  );
  return [isLoading, data];
};

export default useReviews;
