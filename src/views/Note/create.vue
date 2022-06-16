<template>
	<v-container fluid class="my-1">
		<Navbar />
		<Breadcrumbs />
		<v-row>
			<v-col cols="12">
				<v-card elevation="2">
					<PanelHeader type="create" icon="mdi-note" title="Note" subTitle="Fill in details to create Note" />

					<v-form ref="form" lazy-validation v-model="valid" class="pa-5">
						<v-row>
							<v-col cols="12" sm="6" md="3">
								<v-text-field dense outlined v-model="name" :rules="form.rules.name" hint="Enter a short and unique note name." label="Name" required></v-text-field>
							</v-col>

							<v-col md="12">
								<v-combobox :items="all" v-model="select" label="Select Tag" multiple chips clear-icon="mdi-close-circle" deletable-chips></v-combobox>
							</v-col>
						</v-row>

						<v-row>
							<v-col cols="12" sm="6" md="4">
								<v-btn color="primary" outlined @click="validate()" :disabled="!valid"> Save </v-btn>
								<router-link :to="`/url-groups`">
									<v-btn text> Cancel </v-btn>
								</router-link>
							</v-col>
						</v-row>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import PanelHeader from '../../components/PanelHeader'

import axios from 'axios'

export default {
	components: {
		Navbar,
		Breadcrumbs,
		PanelHeader
	},
	beforeMount() {},
	data() {
		return {
			all: ['one', 'two', 'three', 'four'],
			select: ['one', 'two', 'three'],
			form: {
				errors: {},
				rules: {
					tags: [(v) => !!v || 'URL is required'],
					name: [(v) => !!v || 'Name is required']
				}
			},
			name: '',
			valid: false
		}
	},
	methods: {
		validate() {
			this.$refs.form.validate()
			if (this.$refs.form.validate()) {
				localStorage.setItem('alert', true)
				localStorage.setItem('alertColor', 'green')
				localStorage.setItem('alertMessage', this.name + ' - created successfully!')

				this.$router.push({
					path: `/notes`
				})
			} else {
				console.info(this.form.values)
			}
		}
	}
}
</script>

<style></style>
