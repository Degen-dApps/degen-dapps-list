<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					bio:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/degen-logo.svg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				Degen Chain is a fast and cheap L3 chain built for the community around the $DEGEN memecoin.
			</p>

			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				The chain runs on top of Base L2 using Arbitrum's Orbit stack. Built by 
				<a 
					target="_blank" 
					class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-violet-600 dark:hover:text-violet-300 duration-500"
					href="https://syndicate.io/blog/degen-chain">
					Syndicate.
				</a>
			</p>

			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				Links:
				<ul>

					<li>
						<a 
							target="_blank" 
							class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-violet-600 dark:hover:text-violet-300 duration-500" 
							href="https://www.degen.tips/"
						>
							Official $DEGEN website
						</a>
					</li>

					<li>
						<a 
							target="_blank" 
							class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-violet-600 dark:hover:text-violet-300 duration-500" 
							href="https://syndicate.io"
						>
							Syndicate
						</a>
					</li>

					<li>
						<a 
							target="_blank" 
							class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-violet-600 dark:hover:text-violet-300 duration-500" 
							href="https://explorer.degen.tips/"
						>
							Block explorer
						</a>
					</li>
					
				</ul>
			</p>
		</div>
	</div>
</template>

<style scoped>
ul {
	padding-left: 20px;
  list-style: none; /* Remove default bullets */
}

ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #fff; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>