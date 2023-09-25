import { api } from '@/lib/axios'
import { ArrowUpRightSquare, Github, MapPin, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ProfileContainer, ProfileContent } from './styles'

interface ProfileProps {
	name: string
	login: string
	bio: string
	html_url: string
	location: string
	followers: number
	avatar_url: string
}

export function Profile() {
	const [profile, setProfile] = useState<ProfileProps | null>(null)

	useEffect(() => {
		api
			.get('/users/JefersonLucas')
			.then((response) => setProfile(response.data))
	}, [])

	if (!profile) return null

	return (
		<ProfileContainer>
			<ProfileContent>
				<img src={profile.avatar_url} alt="Github profile" />

				<div>
					<span>
						<h1>{profile.name}</h1>
						<a href={profile.html_url} target="_blank">
							Github
							<ArrowUpRightSquare />
						</a>
					</span>

					<p>{profile.bio}</p>

					<ul>
						<li>
							<Github />
							<span>{profile.login}</span>
						</li>
						<li>
							<MapPin />
							<span>{profile.location}</span>
						</li>
						<li>
							<Users />
							<span>{profile.followers} seguidores</span>
						</li>
					</ul>
				</div>
			</ProfileContent>
		</ProfileContainer>
	)
}
