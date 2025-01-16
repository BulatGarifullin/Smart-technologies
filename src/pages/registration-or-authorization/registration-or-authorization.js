import { ReactComponent as CrossSVG } from '../../icons/x.svg';
import { ReactComponent as LockSVG } from '../../icons/lock.svg';
import { ReactComponent as EyeInputSVG } from '../../icons/eye-input.svg';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { H1, Input, Button, StyledLink, Icon, FormError } from '../../components';
import { closeModal, openModal, setUser } from '../../actions';
import { useResetForm, useServerRequest } from '../../hooks';
import { getDefaultValuesAndFormScheme } from './utils';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';
import styled from 'styled-components';

const RegistrationOrAuthorizationContainer = ({ className, isRegistration }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const [serverError, setServerError] = useState(null);
	const { defaultValues, formScheme } = getDefaultValuesAndFormScheme(isRegistration);
	const roleId = useSelector(selectUserRole);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues,
		resolver: yupResolver(formScheme),
		mode: 'onSubmit',
	});

	const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
	const toggleRepeatPasswordVisibility = () => setRepeatPasswordVisible(!repeatPasswordVisible);

	const onSubmit = ({ login, password, passcheck }) => {
		if (isRegistration) {
			requestServer('register', login, password, passcheck).then(({ error, res }) => {
				if (error) {
					setServerError(`Ошибка запроса: ${error}`);
					return;
				}

				dispatch(setUser(res));
				sessionStorage.setItem('userData', JSON.stringify(res));
				dispatch(closeModal());
			});
		} else {
			requestServer('authorize', login, password).then(({ error, res }) => {
				if (error) {
					setServerError(`Ошибка запроса: ${error}`);
					return;
				}

				dispatch(setUser(res));
				sessionStorage.setItem('userData', JSON.stringify(res));
				dispatch(closeModal());
			});
		}
	};

	useResetForm(reset);

	const formError = errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMesage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<div className="header">
				{isRegistration ? <H1 size={2}>Регистрация</H1> : <H1 size={2}>Вход</H1>}
				<Icon IconComponent={CrossSVG} size="48px" onClick={() => dispatch(closeModal())} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Логин
					<Input
						className="input login"
						type="text"
						{...register('login', {
							onChange: () => {},
						})}
					/>
				</label>

				<label>
					{isRegistration ? 'Придумайте пароль' : 'Пароль'}
					<Icon IconComponent={LockSVG} size="24px" inactive={true} />
					<Input
						className="input password"
						type={passwordVisible ? 'text' : 'password'}
						{...register('password', {
							onChange: () => {},
						})}
					/>
					<Icon IconComponent={EyeInputSVG} size="24px" onClick={togglePasswordVisibility} />
				</label>
				{isRegistration && (
					<label>
						Повторите пароль
						<Icon IconComponent={LockSVG} size="24px" inactive={true} />
						<Input
							className="input pass-check"
							type={repeatPasswordVisible ? 'text' : 'password'}
							{...register('passcheck', {
								onChange: () => {},
							})}
						/>
						<Icon IconComponent={EyeInputSVG} size="24px" onClick={toggleRepeatPasswordVisibility} />
					</label>
				)}
				{isRegistration ? (
					<Button type="submit" margin="0 0 20px 0" width="100%" disabled={!!formError}>
						Зарегистрироваться
					</Button>
				) : (
					<Button type="submit" margin="0 0 20px 0" width="100%" disabled={!!formError}>
						Войти
					</Button>
				)}

				{errorMesage && <FormError>{errorMesage}</FormError>}

				{isRegistration ? (
					<StyledLink
						to=""
						color="#4878A6"
						onClick={() => {
							reset();
							dispatch(
								openModal({
									isOpen: true,
									isAuthorization: true,
								}),
							);
						}}
					>
						Я уже зарегистрирован
					</StyledLink>
				) : (
					<StyledLink
						to=""
						color="#4878A6"
						onClick={() => {
							reset();
							dispatch(
								openModal({
									isOpen: true,
									isRegistration: true,
								}),
							);
						}}
					>
						Зарегистрироваться
					</StyledLink>
				)}
			</form>
		</div>
	);
};

export const RegistrationOrAuthorization = styled(RegistrationOrAuthorizationContainer)`
	position: relative;
	top: 50%;
	transform: translate(0, -50%);
	width: 370px;
	margin: 0 auto;
	z-index: 10;
	background-color: #ffffff;

	& .header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #edf2f6;
		padding: 10px 20px 10px 30px;
	}

	& form {
		padding: 20px 30px 30px 30px;
	}

	& label {
		position: relative;
		display: block;
		width: 310px;
		font-size: 16px;
		line-height: 16px;
		margin-bottom: 20px;
	}

	& label > div:first-child {
		position: absolute;
		top: 50%;
		left: 0;
		margin-left: 20px;
	}

	& label > div:last-child {
		position: absolute;
		top: 50%;
		right: 0;
		margin-right: 10px;
	}

	& .input {
		height: 48px;
		margin-top: 8px;
		padding: 10px 10px 10px 20px;
		border: 1px solid #eaeaf0;
		color: #000;
	}

	& .input:focus {
		outline: none;
	}

	& label:nth-of-type(2) input {
		padding: 10px 10px 10px 50px;
	}

	& label:nth-of-type(3) input {
		padding: 10px 10px 10px 50px;
	}

	& a {
		display: block;
		text-align: center;
	}
`;
