import { GetServerSideProps } from 'next';
import fetchApi from '@/fetchApi';

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchUrl = 'https://fakestoreapi.com/users';
  const data = await fetchApi(fetchUrl);

  return {
    props: {
      data
    }
  };
};
