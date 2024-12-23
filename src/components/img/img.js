import styled from 'styled-components';

const ImgContainer = ({ className, url }) => {
	return <img className={className} src={url} alt="alt"></img>;
};

export const Img = styled(ImgContainer)`
	user-select: none;
`;
