import { ThreeDots } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="12"
      color="#ca563f"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
