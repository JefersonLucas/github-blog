import { ArrowUpRightSquare, Github, MapPin, Users } from 'lucide-react'
import { ProfileContainer, ProfileContent } from './styles'

export function Profile() {
	return (
		<ProfileContainer>
			<ProfileContent>
				<img src="https://github.com/JefersonLucas.png" alt="Github profile" />

				<div>
					<span>
						<h1>Jeferson Lucas</h1>
						<a href="">
							Github
							<ArrowUpRightSquare />
						</a>
					</span>

					<p>
						I'm Brazilian, specialist in Full Stack development and also
						specializing in mobile development, passionate about technology,
						music and games.
					</p>

					<ul>
						<li>
							<Github />
							<span>JefersonLucas</span>
						</li>
						<li>
							<MapPin />
							<span>Brasília, DF, Brazil</span>
						</li>
						<li>
							<Users />
							<span>232 seguidores</span>
						</li>
					</ul>
				</div>
			</ProfileContent>
		</ProfileContainer>
	)
}
