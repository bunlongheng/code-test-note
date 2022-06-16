<template>
	<v-container fluid class="my-1">
		<Breadcrumbs />

		<v-row>
			<v-col cols="12">
				<v-card elevation="2">
					<v-row class="pl-5">
						<v-card-title class="pb-0">
							<v-icon left x-large color="primary"> {{ icon }}</v-icon>
							<span class="font-weight-bold">{{ title }}</span>
						</v-card-title>
						<v-spacer></v-spacer>
					</v-row>
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
	components: { Breadcrumbs }
}
</script>
<style scoped></style>
