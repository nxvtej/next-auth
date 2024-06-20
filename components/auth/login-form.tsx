import React from "react";
import { CardWrapper } from "./card-wrapper";
export const LoginForm = () => {
	return (
		<CardWrapper
			headerLabel=' Welcome back'
			backButtonHref='/auth/register'
			backButtonLabel="don't have an account"
		>
			<div>login form</div>
		</CardWrapper>
	);
};
