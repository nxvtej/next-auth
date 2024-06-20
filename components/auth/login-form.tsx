import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Form,
	FormControl,
	FormLabel,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";

import { CardWrapper } from "./card-wrapper";
export const LoginForm = () => {
	return (
		<CardWrapper
			headerLabel=' Welcome back'
			backButtonHref='/auth/register'
			backButtonLabel="don't have an account"
			showSocial
		>
			Login form
		</CardWrapper>
	);
};
