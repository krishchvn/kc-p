import React, { createContext, useRef, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
	const scrollRefs = {
		project: useRef(null),
		about: useRef(null),
		skills: useRef(null),
	};

	return (
		<ScrollContext.Provider value={scrollRefs}>
			{children}
		</ScrollContext.Provider>
	);
};

export const useScroll = () => {
	return useContext(ScrollContext);
};
