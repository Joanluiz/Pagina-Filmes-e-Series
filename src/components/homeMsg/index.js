import React from "react";
import styled from "styled-components";

const Box = styled.section`
	width: var(--card-container-size);
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: white;

	@media (max-width: 750px) {
		width: fit-content;
		height: calc(100vh - 90px);
	}
`;

const Content = styled.div`
	width: 60%;
`;

export default function msg() {
	return (
		<Box>
			<Content>
				<h2>Olá</h2>
				<h3>
					Aqui você irá encontrar os filmes e shows de TV mais famosos do MoviesDB database!
				</h3>
			</Content>
		</Box>
	);
}