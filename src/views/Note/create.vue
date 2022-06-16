<template>
	<v-container fluid class="my-1">
		<Navbar />
		<Breadcrumbs />
		<v-row>
			<v-col cols="12">
				<v-card elevation="2">
					<PanelHeader type="create" icon="mdi-note" title="Notes" subTitle="Fill in the details to create note" name="Notes"> </PanelHeader>
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
		return {
			campaigns: []
		}
	}
}
</script>
