<template>
	<v-container fluid class="my-1">
		<Navbar />
		<Breadcrumbs />
		<v-row>
			<v-col cols="12">
				<v-card elevation="2">
					<PanelHeader type="create" icon="mdi-home" title="Home" subTitle="Welcome home!" name="Notes"> </PanelHeader>

					<v-img :aspect-ratio="16 / 9" :width="width" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import PanelHeader from '../../components/PanelHeader'
export default {
	components: {
		Navbar,
		Breadcrumbs,
		PanelHeader
	},
	data() {
		return {}
	}
}
</script>
