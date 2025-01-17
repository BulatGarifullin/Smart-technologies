import styled from 'styled-components';

const LoaderContainer = ({ className }) => {
	return (
		<div className={className}>
			<span className="loader"></span>
		</div>
	);
};

export const Loader = styled(LoaderContainer)`
	display: flex;
	justify-content: center;
	margin: auto 0;

	.loader {
		width: 48px;
		height: 48px;
		border: 5px solid #fff;
		border-bottom-color: rgb(72, 120, 166);
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
