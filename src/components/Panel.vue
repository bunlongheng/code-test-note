<template>
	<v-container fluid class="my-1">
		<Breadcrumbs />

		<v-row>
			<v-col cols="12">
				<v-card elevation="2">
					<v-card-title class="pb-0">
						<v-icon left x-large color="primary"> {{ icon }}</v-icon>
						<span class="font-weight-bold">{{ title }}</span>
					</v-card-title>

					<v-img :aspect-ratio="16 / 9" :width="width" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import Breadcrumbs from '../components/Breadcrumbs'

export default {
	name: 'Panel',
	props: {
		icon: String,
		title: String,
		subtitle: String,
		type: String
	},
	components: { Breadcrumbs },
	data() {
		return {}
	}
}
</script>
<style scoped></style>
