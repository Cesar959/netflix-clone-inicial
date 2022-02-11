import React from 'react'
import './Header.css'

function Header ({ black })
{
	return (

		<header className={black ? 'black' : ''}>
			<div className="header--logo">
				<a href="/" rel="noreferrer">
					<img src="img/logo.png" alt="Netflix"/>
				</a>
			</div>
			<div className="header--user">
				<a href="/" rel="noreferrer">
					<img src="img/perfil.png" alt="Usuário"/>
				</a>
			</div>
		</header>

	)
}

export default Header
