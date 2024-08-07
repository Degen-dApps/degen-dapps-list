// Projects data.

const projects = [
	{
		id: 0,
		title: 'Degen Chain Bridge',
		category: 'Bridge',
		img: require('@/assets/images/projects/degen-bridge.png'),
		url: 'https://bridge.degen.tips/'
	},
	{
		id: 0,
		title: 'NFTdegen.lol',
		category: 'NFT Launchpad & Marketplace',
		img: require('@/assets/images/projects/nft-degen-2.png'),
		url: 'https://nftdegen.lol'
	},
	{
		id: 0,
		title: 'DegenRadio.lol',
		category: 'Stream Music NFTs',
		img: require('@/assets/images/projects/degen-radio.png'),
		url: 'https://degenradio.lol'
	},
	{
		id: 0,
		title: 'DegenSwap',
		category: 'DEX',
		img: require('@/assets/images/projects/degenswap.png'),
		url: 'https://dex.swapdegen.tips/#/swap'
	},
	{
		id: 0,
		title: 'Mint.club',
		category: 'NFT & Token Launchpad',
		img: require('@/assets/images/projects/mint-club.png'),
		url: 'https://mint.club'
	},
	{
		id: 0,
		title: 'DegenName.lol',
		category: 'Identity',
		img: require('@/assets/images/projects/degen-name.png'),
		url: 'https://degenname.lol'
	},
	{
		id: 0,
		title: 'Lotto PGF',
		category: 'Gaming',
		img: require('@/assets/images/projects/lotto-pgf.png'),
		url: 'https://warpcast.com/lottopgf'
	},
	{
		id: 0,
		title: 'Degen Explorer',
		category: 'Blockchain Explorer',
		img: require('@/assets/images/projects/block-explorer.png'),
		url: 'https://explorer.degen.tips/'
	},
	{
		id: 0,
		title: 'NFTs2me',
		category: 'NFT Launchpad',
		img: require('@/assets/images/projects/nfts2me.png'),
		url: 'https://nfts2me.com/app'
	},
	{
		id: 0,
		title: 'DYORswap',
		category: 'DEX',
		img: require('@/assets/images/projects/dyorswap.png'),
		url: 'https://dyorswap.finance/swap/?chainId=666666666'
	},
	{
		id: 0,
		title: 'Send2name',
		category: 'Send tokens',
		img: require('@/assets/images/projects/send2name.png'),
		url: 'https://send2.name'
	},
	{
		id: 0,
		title: 'Cielo',
		category: 'Analytics',
		img: require('@/assets/images/projects/cielo.png'),
		url: 'https://cielo.finance/'
	},
	{
		id: 0,
		title: 'Revoke Cash',
		category: 'Security',
		img: require('@/assets/images/projects/revoke-cash.png'),
		url: 'https://revoke.cash/'
	},
	{
		id: 0,
		title: 'Relay',
		category: 'Bridge',
		img: require('@/assets/images/projects/relay.png'),
		url: 'https://relay.link/bridge/degen/?fromChainId=8453&currency=degen'
	},
	{
		id: 0,
		title: 'Onchain Blocks',
		category: 'Gaming',
		img: require('@/assets/images/projects/onchain-blocks.png'),
		url: 'https://warpcast.com/~/channel/onchain-blocks'
	},
	{
		id: 0,
		title: 'Berry',
		category: 'Alerts & Analytics',
		img: require('@/assets/images/projects/berry.png'),
		url: 'https://berrylab.xyz/'
	},
	{
		id: 0,
		title: 'Kibo Trade',
		category: 'Perpetuals',
		img: require('@/assets/images/projects/kibo-trade.png'),
		url: 'https://kibotrade.io/ '
	},
	{
		id: 0,
		title: 'Safu Frog',
		category: 'Token Launchpad',
		img: require('@/assets/images/projects/safu-frog.png'),
		url: 'https://safufrog.com/'
	},
	{
		id: 0,
		title: 'Payflow',
		category: 'Send tokens',
		img: require('@/assets/images/projects/payflow.png'),
		url: 'https://payflow.me/'
	},
	{
		id: 0,
		title: 'Poidh',
		category: 'Bounties',
		img: require('@/assets/images/projects/poidh.png'),
		url: 'https://poidh.xyz/degen'
	},
	{
		id: 0,
		title: 'DegenLink',
		category: 'Send tokens',
		img: require('@/assets/images/projects/degenlink.png'),
		url: 'https://www.degenlink.io/'
	},
	{
		id: 0,
		title: 'Rabby',
		category: 'Wallet',
		img: require('@/assets/images/projects/rabby.png'),
		url: 'https://rabby.io/'
	},
	{
		id: 0,
		title: 'Rainbow',
		category: 'Wallet',
		img: require('@/assets/images/projects/rainbow.png'),
		url: 'https://rainbow.me/'
	},
	{
		id: 0,
		title: 'Starta',
		category: 'Bridge',
		img: require('@/assets/images/projects/starta.png'),
		url: 'https://degen.starta.exchange/'
	},
	{
		id: 0,
		title: 'Zerion',
		category: 'Wallet & Portfolio Tracker',
		img: require('@/assets/images/projects/zerion.png'),
		url: 'https://zerion.io/'
	},
	{
		id: 0,
		title: 'Gas.zip',
		category: 'On-ramp Gas Bridge',
		img: require('@/assets/images/projects/gas-zip.png'),
		url: 'https://www.gas.zip/'
	},
	{
		id: 0,
		title: 'Degen Jeeves',
		category: 'Superapp',
		img: require('@/assets/images/projects/jeeves.png'),
		url: 'https://app.degenjeeves.com/'
	},
	{
		id: 0,
		title: 'Superfluid',
		category: 'Send tokens',
		img: require('@/assets/images/projects/superfluid.png'),
		url: 'https://app.superfluid.finance/'
	},
	{
		id: 0,
		title: 'Button Game',
		category: 'Gaming',
		img: require('@/assets/images/projects/button-game.png'),
		url: 'https://buttongame.xyz/'
	},
	{
		id: 0,
		title: 'Proxyswap',
		category: 'DEX',
		img: require('@/assets/images/projects/proxyswap.png'),
		url: 'https://www.proxyswap.tips/'
	},
	{
		id: 0,
		title: 'The Portal',
		category: 'Gaming',
		img: require('@/assets/images/projects/portal.png'),
		url: 'https://portal.robotandkid.com/'
	},
	{
		id: 0,
		title: 'Farcaster.vote',
		category: 'Governance',
		img: require('@/assets/images/projects/farcaster-vote.png'),
		url: 'https://farcaster.vote/'
	},
	{
		id: 0,
		title: 'Jeeves NFT Marketplace',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/jeeves-market.png'),
		url: 'https://jeeves.market/'
	},
];

export default projects;
