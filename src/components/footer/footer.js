import { ReactComponent as FacebookSVG } from '../../icons/facebook.svg';
import { ReactComponent as InstSVG } from '../../icons/instagram.svg';
import { ReactComponent as TwitterSVG } from '../../icons/twitter.svg';
import { ReactComponent as VkSVG } from '../../icons/vk.svg';
import { StyledLink } from '../styled-link/styled-link';
import { Logo } from '../header/components';
import { H1 } from '../h1/h1';
import { Icon } from '../icon/icon';
import styled from 'styled-components';

const Phone = styled.div`
	font-weight: bold;
`;

const FooterContainer = ({ className }) => {
	return (
		<footer className={className}>
			<div className="container">
				<div className="footer-info">
					<div className="info">
						<Logo />
						<div className="info-phone">
							<Phone>+7 (958) 111-95-03</Phone>
							<Phone>+7 (812) 660-50-54</Phone>
							<div className="working-hours">Пн-вс: с 10:00 до 21:00</div>
						</div>
						<div>
							Проспект Стачек 67 к.5 <br />
							Лиговский проспект 205 <br />
							Гражданский проспект, 116 к.5
						</div>
					</div>
					<div>
						<H1 size={3} margin="0 0 20px 0">
							Для клиента
						</H1>
						<div>
							<StyledLink to="/" color="#070C11">
								Как купить
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Доставка и оплата
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Кредит
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Политика конфиденциальности
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Вопросы и ответы (F.A.Q.)
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Сервис и гарантия
							</StyledLink>
						</div>
					</div>
					<div>
						<H1 size={3} margin="0 0 20px 0">
							О магазине
						</H1>
						<div>
							<StyledLink to="/" color="#070C11">
								Отзывы
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Наши преимущества
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								История компании
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Сотрудничество
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Партнерская программа
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Вакансии
							</StyledLink>
						</div>
					</div>
					<div>
						<H1 size={3} margin="0 0 20px 0">
							Сотрудничество
						</H1>
						<div>
							<StyledLink to="/" color="#070C11">
								Оптом
							</StyledLink>
							<br />
							<StyledLink to="/" color="#070C11">
								Дропшиппинг
							</StyledLink>
						</div>
					</div>
				</div>
				<div className="footer-links">
					<div className="textLeft">SmartТехника © 2021 Все права защищены</div>
					<div>
						<Icon IconComponent={TwitterSVG} size="48px" hoverIcon="#2A5275" />
						<Icon IconComponent={FacebookSVG} size="48px" hoverIcon="#2A5275" />
						<Icon IconComponent={VkSVG} size="48px" hoverIcon="#2A5275" />
						<Icon IconComponent={InstSVG} size="48px" hoverIcon="#2A5275" />
					</div>
					<div className="textRight">Разработка: websl.ru</div>
				</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	background-color: #edf2f6;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	bottom: 0;
	left: 0;
	right: 0;
	height: 418px;

	& .container {
		width: 1300px;
		height: 100%;
		margin: 40px auto 0;
	}

	& .footer-info {
		position: relative;
		display: flex;
		justify-content: space-between;
		padding-bottom: 40px;
	}

	& .footer-info::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #c8cacb;
		top: 100%;
	}

	& .info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	& .info-phone {
		margin: 20px 0;
		line-height: 20px;
	}

	& .working-hours {
		color: #838688;
	}

	& .footer-links {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 40px;
	}

	& .textLeft {
		color: #838688;
	}

	& .textRight {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		color: #838688;
	}
`;
