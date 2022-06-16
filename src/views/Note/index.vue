<template>
	<v-container fluid class="my-1">
		<Breadcrumbs />
		<v-row>
			<v-col cols="12">
				<v-card elevation="2"> </v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Breadcrumbs from '../../components/Breadcrumbs'

export default {
	data() {
		return {
			notes: []
		}
	},
	components: {
		Breadcrumbs
	},
	methods: {}
}
</script>
