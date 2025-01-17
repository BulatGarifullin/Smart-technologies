import { createContext, useState } from 'react';

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);

	return <LoaderContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoaderContext.Provider>;
};
