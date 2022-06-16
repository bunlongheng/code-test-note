<template>
	<nav>
		<v-app-bar app color="primary" dark>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-spacer></v-spacer>

			<span class="mr-2">{{ username }}</span>

			<v-menu bottom offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn right icon v-bind="attrs" v-on="on">
						<v-icon>expand_more</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item>
						<v-list-item-action>
							<v-icon @click="logout">logout</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title @click="logout"> Logout </v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app class="grey lighten-1">
			<v-list>
				<v-toolbar-title>Note Test</v-toolbar-title>

				<!-- <img class="ml-5 mb-3" src="https://i.imgur.com/IOfXcqC.png" width="70" /> -->

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
import axios from 'axios'

export default {
	data() {
		return {
			username: localStorage.getItem('email') || '',
			brandNames: [],
			brandName: '',
			brandCode: 0,
			drawer: true,
			links: [
				// { icon: 'home', text: 'Dashboard', route: '/dashboard', newTab: false },

				{ icon: 'qr_code', text: 'Notes', route: '/notes', newTab: false }
			]
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout').then(() => {
				this.$router.push('/')
			})
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
