<template id="breadcrumb">
	<v-row>
		<v-breadcrumbs :items="links" class="black--text">
			<template v-slot:divider><v-icon>mdi-navigate_next</v-icon></template>
		</v-breadcrumbs>
	</v-row>
</template>
<script>
export default {
	name: 'Breadcrumbs',
	props: {
		title: String
	},
	computed: {
		links: function () {
			const split = window.location.href.split('#')
			const segments = split[1].split('/')
			const links = []
			var disabledLink = false

			for (var i = 0; i < segments.length; i++) {
				if (segments[i] == 'edit' || i == segments.length - 1) {
					disabledLink = true
				}

				const link = {
					text: i == 0 ? 'Home' : segments[i],
					disabled: disabledLink,
					href: i == 0 ? '/#/campaigns' : '/#/' + segments[i]
				}

				links.push(link)
			}

			// console.log(links)

			return links
		}
	}
}
</script>
<style lang=""></style>
