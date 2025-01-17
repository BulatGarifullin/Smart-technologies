import { useContext } from 'react';
import { LoaderContext } from '../loader-context';

export const useLoader = () => useContext(LoaderContext);
