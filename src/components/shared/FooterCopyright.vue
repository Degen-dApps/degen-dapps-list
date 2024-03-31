<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Vue.js & Tailwind CSS Portfolio',
			author: 'Stoman',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>

			Don't see a project listed? 
			<a
				href="https://github.com/Degen-dApps/degen-dapps-list/issues/1"
				target="_blank"
				class="underline hover:text-violet-600 dark:hover:text-violet-300 duration-500"
			>
				Write a comment here
			</a>.
			
			<br />
			<br />

			Made by 
			<a
				href="https://warpcast.com/tempetechie.eth"
				target="_blank"
				class="font-general-medium hover:underline hover:text-violet-600 dark:hover:text-violet-300 duration-500"
			>
				Tempe Techie</a> &
				<a
				href="https://warpcast.com/tekr0x.eth"
				target="_blank"
				class="font-general-medium hover:underline hover:text-violet-600 dark:hover:text-violet-300 duration-500"
			>
				Tekr</a>. (<a
				href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
				target="_blank"
				class="font-general-medium hover:underline hover:text-violet-600 dark:hover:text-violet-300 duration-500"
			>Theme
			</a>
			by
			<a
				href="https://stoman.me"
				target="_blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-violet-600 dark:hover:text-violet-300 duration-500"
				>{{ author }}</a
			>)
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
