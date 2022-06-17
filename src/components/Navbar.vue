<template>
	<nav>
		<v-app-bar app color="grey darken-3" dark>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-spacer></v-spacer>

			<!-- <Switcher @updateView="selectedView" /> -->

			<v-spacer></v-spacer>

			<span class="mr-2">Bunlong</span>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app class="grey lighten-1">
			<v-list>
				<img class="ml-5 mb-3" src="../assets/logo.png" width="100" />

				<v-list-item v-for="link in computedLinks" :key="link.text" v-bind="link.linkProps">
					<v-list-item-action>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title> {{ link.text }} </v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>
<script>
import Switcher from './Switcher'

export default {
	data() {
		return {
			username: localStorage.getItem('email') || '',
			brandNames: [],
			brandName: '',
			brandCode: 0,
			drawer: true,
			links: [
				{ icon: 'mdi-home', text: 'Home', route: '/', newTab: false },
				{ icon: 'mdi-sort', text: 'Notes (List)', route: '/notes', newTab: false },
				{ icon: 'mdi-card', text: 'Notes (Card)', route: '/cards', newTab: false }
			],
			selectedView: ''
		}
	},
	components: {
		Switcher
	},
	methods: {
		logout() {
			this.$store.dispatch('logout').then(() => {
				this.$router.push('/')
			})
		},
		updateView(selectedView) {
			console.log('selectedView', selectedView)
			localStorage.setItem('selectedView', selectedView)
		}
	},
	computed: {
		computedLinks() {
			return this.links.map((link) => {
				// use `href` for external links; and `to` for internal links
				const linkProps = {
					[/^((https?:)?\/\/)/.test(link.route) ? 'href' : 'to']: link.route
				}
				if (link.newTab) {
					linkProps.target = '_blank'
				}
				return {
					...link,
					linkProps
				}
			})
		}
	}
}
</script>
