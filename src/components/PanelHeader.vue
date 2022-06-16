<template>
	<v-row class="pl-5">
		<div class="panelHeader">
			<v-card elevation="0">
				<v-card-title>
					<v-icon left x-large color="primary">{{ icon }}</v-icon>
					<span class="font-weight-bold">{{ title }}</span>
				</v-card-title>

				<v-card-subtitle class="ml-1">{{ subTitle }}</v-card-subtitle>
			</v-card>

			<router-link v-if="type == 'index'" :to="`/${name.toLowerCase().replace(' ', '-')}/create`">
				<v-btn outlined class="blue--text mt-5 mr-8" :id="`create-${name.toLowerCase().replace(' ', '-')}`">
					<!-- <v-icon small dark> add </v-icon> -->
					Create
				</v-btn>
			</router-link>

			<router-link v-if="type == 'show'" :to="`/${name.toLowerCase().replace(' ', '-')}/${this.$route.params.id}/edit`">
				<v-btn outlined class="orange--text mt-5 mr-8" :id="`edit-${name.toLowerCase().replace(' ', '-')}`">
					<!-- <v-icon small dark> edit </v-icon> -->
					Edit
				</v-btn>
			</router-link>
		</div>
	</v-row>
</template>
<script>
export default {
	props: {
		icon: String,
		name: String,
		title: String,
		subTitle: String,
		subtitle: String,
		type: String
	},
	components: {}
}
</script>
<style scoped>
.panelHeader {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
}
</style>
