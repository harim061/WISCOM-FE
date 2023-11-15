import * as I from './ProjectStyle';

const IntroWork = ({ data }) => {
  const handleClickServiceURL = () => {
    if (data && data.service_url) {
      window.location.href = data.service_url;
    }
  };

  return (
    <I.IntroContainer>
      {data && (
        <>
          <I.PrjDetail>{data.content}</I.PrjDetail>
          <I.PrjURL onClick={handleClickServiceURL}>{data.service_url}</I.PrjURL>
        </>
      )}
    </I.IntroContainer>
  );
};

export default IntroWork;
