import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
const Auth = createContext({})

export const AuthProvider = ({ children }) => {

	const { address } = useAccount();  
	
	return (
		<Auth.Provider
			value={{
				address
			}}
		>
		{children}
		</Auth.Provider>
	);
};

export default Auth;
