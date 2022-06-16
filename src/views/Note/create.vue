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
							<v-col cols="md-6">
								<v-row>
									<v-col cols="12">
										<v-text-field dense outlined v-model="name" :rules="form.rules.name" label="Name" required></v-text-field>
									</v-col>

									<v-col cols="6">
										<v-combobox :items="tags" v-model="tag" label="Tag(s)" multiple chips clear-icon="mdi-close-circle" deletable-chips></v-combobox>
									</v-col>

									<v-col cols="6">
										<v-select :items="states" v-model="state" label="State" chips clear-icon="mdi-close-circle" deletable-chips></v-select>
									</v-col>

									<v-col cols="12">
										<v-textarea dense outlined v-model="description" :rules="form.rules.description" label="Description" required></v-textarea>
									</v-col>
								</v-row>
							</v-col>
						</v-row>

						<v-row>
							<v-col cols="12" sm="6" md="4">
								<v-btn color="primary" outlined @click="validate()" :disabled="!valid"> Save </v-btn>
								<router-link :to="`/notes`">
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
			tags: ['one', 'two', 'three', 'four'],
			tag: [],
			states: ['urgent', 'minor'],
			state: [],
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
