import React from 'react'
import Link from 'gatsby-link'

const brands = [
	'Boohoo',
	'Missguided',
	'Lavish Alice',
	'Pretty Little Thing',
	'Glamorous',
	'Monki',
	'In The Style',
	'Linzishoes',
	'Matches Fashion',
	'Mr Porter',
	'Jacamo',
	'The Idle Man',
	'Percival',
	'Dover Street Market',
	'Goodhood',
	'COS',
	'LN-CC',
	'Net-a-Porter',
	'Avenue 32',
	'Far Fetch',
	'Moda Operandi',
	'Stylebop',
	'Selfridges',
	'Watch That Label',
	'My Theresa',
	'H&M',
	'GAP',
	'Forever 21',
	'Yoox',
	'Victoria\'s Secret',
	'Mango',
	'Vans',
	'ASOS',
	'Mint Velvet',
	'Coast',
	'Karen Millen',
	'Jigsaw',
	'Cath Kidston',
].sort()

// 		slugify :: String -> String
const slugify = (text) => (
	text.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
)


const IndexPage = () => (
  <div>
    <h1>My Fashion Inbox</h1>
    <p>Choose your favourite brands. We'll email you every week with their newest items!</p>
		<form
			name="signup"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			 <input type="hidden" name="form-name" value="signup" />
			<fieldset>
				<legend>Step 1: Choose your brands</legend>
				{brands.map((brand) => (
					<div key={slugify(brand)}>
						<label>
							<input type="checkbox" name={slugify(brand)} />
							{ brand }
						</label>
					</div>
				))}
			</fieldset>
			<fieldset>
				<legend>Where should we send it?</legend>
				<input type="email" placeholder="your email" name="email" />
			</fieldset>
			<button type="submit">Go!</button>
		</form>
  </div>
)

export default IndexPage
