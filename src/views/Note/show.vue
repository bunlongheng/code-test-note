<template>
	<v-container fluid class="my-1">
		<Navbar />
		<Breadcrumbs />
		<v-row>
			<v-col cols="12">
				<v-card elevation="2">
					<PanelHeader type="show" icon="mdi-note" name="Notes" title="Note" subTitle="Fill in details to update Note" />

					<v-form ref="form" lazy-validation v-model="valid" class="pa-5">
						<v-row>
							<v-col cols="md-6">
								<v-row>
									<v-col cols="12">
										<v-text-field dense readonly v-model="name" :rules="form.rules.name" label="Name" required></v-text-field>
									</v-col>

									<v-col cols="8">
										<v-combobox readonly :items="tags" v-model="tag" label="Tag(s)" multiple chips clear-icon="mdi-close-circle" deletable-chips></v-combobox>
									</v-col>

									<v-col cols="4">
										<v-select readonly :items="priorities" v-model="priority" label="priority" chips clear-icon="mdi-close-circle" deletable-chips></v-select>
									</v-col>

									<v-col cols="12">
										<v-textarea dense readonly v-model="description" :rules="form.rules.description" label="Description" required></v-textarea>
									</v-col>
								</v-row>
							</v-col>

							<v-col cols="md-6">
								<v-row>
									<v-col cols="12">
										<img class="image" :src="img" width="100%" height="250" />
									</v-col>
								</v-row>
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

export default {
	components: {
		Navbar,
		Breadcrumbs,
		PanelHeader
	},
	beforeMount() {},
	data() {
		return {
			notes: [],
			tags: ['one', 'two', 'three', 'four'],
			tag: [],
			priorities: ['urgent', 'minor'],
			priority: '',
			description: '',
			form: {
				errors: {},
				rules: {
					tags: [(v) => !!v || 'URL is required'],
					name: [(v) => !!v || 'Name is required']
				}
			},
			name: '',
			valid: false,
			img: ''
		}
	},
	methods: {
		getData() {
			this.notes = JSON.parse(localStorage.getItem('notes'))

			for (var i = 0; i < this.notes.length; i++) {
				let note = this.notes[i]
				if (note.id == this.$route.params.id) {
					this.name = note.name
					this.img = note.img
					this.tag = note.tag
					this.priority = note.priority
					this.description = note.description
				}
			}
		},
		validate() {
			this.$refs.form.validate()
			if (this.$refs.form.validate()) {
				this.notes = JSON.parse(localStorage.getItem('notes'))

				//init
				if (!this.notes) {
					this.notes = []
				}

				let note = {}
				note.id = this.notes.length + 1
				note.name = this.name
				note.tag = this.tag
				note.priority = this.priority
				note.description = this.description

				this.notes.push(note)

				localStorage.setItem('notes', JSON.stringify(this.notes))

				localStorage.setItem('alert', true)
				localStorage.setItem('alertColor', 'green')
				localStorage.setItem('alertMessage', this.name + ' - updated successfully!')

				this.$router.push({
					path: `/notes`
				})
			} else {
				console.info(this.form.values)
			}
		}
	},
	mounted() {
		this.getData()
	}
}
</script>

<style>
.image {
	border: 3px solid black !important;
	border-radius: 10px !important;
}

div a {
	text-decoration: none !important;
}
</style>
