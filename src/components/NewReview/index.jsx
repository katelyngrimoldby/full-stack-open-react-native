import NewReviewContainer from './Container';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { REVIEW } from '../../graphql/mutations';

const NewReview = () => {
  const navigate = useNavigate();
  const [mutate] = useMutation(REVIEW, {
    onCompleted: (data) => {
      if (data.createReview) {
        navigate(`/${data.createReview.repositoryId}`);
      }
    },
  });

  const submit = (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    mutate({
      variables: {
        review: {
          ownerName,
          repositoryName,
          rating: Number(rating),
          text,
        },
      },
    });
  };

  return <NewReviewContainer onSubmit={submit} />;
};

export default NewReview;
