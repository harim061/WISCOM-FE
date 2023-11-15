import * as DP from './ProjectStyle';

const DeveloperProfile = (props) => {
  return (
    <DP.DeveloperProfileContainer>
      {props && (
        <>
          <DP.DeveloperImg>
            <DP.BackgroundImg src={props.bg} />
            <DP.PersonalImg src={`https://wiscom2023.store/${props.image}`} bg={props.bg} alt="개발자 이미지" />
          </DP.DeveloperImg>
          <DP.Name>{props.name}</DP.Name>
          <DP.Impression>{props.impression}</DP.Impression>
        </>
      )}
    </DP.DeveloperProfileContainer>
  );
};

export default DeveloperProfile;
