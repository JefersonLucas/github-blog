import { CoverContainer, CoverContent } from './styles'

import logoImg from '@/assets/logo.svg'

export function Cover() {
	return (
		<CoverContainer>
			<CoverContent>
				<img src={logoImg} alt="" />
			</CoverContent>
		</CoverContainer>
	)
}
