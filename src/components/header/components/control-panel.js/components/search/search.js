import styled from 'styled-components';
import { Icon, Input } from '../../../../../';
import { ReactComponent as SearchSVG } from '../../../../../../icons/search.svg';
import { useMemo, useState } from 'react';
import { debounce } from '../../../../../../utils/';
import { useDispatch } from 'react-redux';

const SearchContainer = ({ className }) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [sholudSearch, setShouldSearch] = useState('');
	const dispatch = useDispatch();

	const startDelaySearch = useMemo(() => debounce(setShouldSearch, 2000, dispatch), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelaySearch(!sholudSearch, target.value);
	};

	return (
		<div className={className}>
			<Icon IconComponent={SearchSVG} size="24px" inactive={true} />
			<Input value={searchPhrase} onChange={onSearch} placeholder="Поиск"></Input>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	width: 150px;
	height: 48px;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;

	& > input {
		margin: 8.5px 12px;
		border: none;
		outline: none;
	}

	&::after {
		content: '';
		top: 45px;
		right: 10%;
		position: absolute;
		width: 90%;
		height: 1px;
		background-color: #c8cacb;
	}
`;
