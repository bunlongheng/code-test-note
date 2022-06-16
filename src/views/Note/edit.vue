<template>
	<v-container fluid class="my-1">
		<Navbar />
		<Breadcrumbs />
		<v-row>
			<v-col cols="12">
				<v-card elevation="2">
					<PanelHeader type="update" icon="mdi-note" title="Note" subTitle="Fill in details to update Note" />

					<v-form ref="form" lazy-validation v-model="valid" class="pa-5">
						<v-row>
							<v-col cols="md-6">
								<v-row>
									<v-col cols="12">
										<v-text-field dense outlined v-model="name" :rules="form.rules.name" label="Name" required></v-text-field>
									</v-col>

									<v-col cols="12">
										<v-file-input show-size v-model="img" @change="upload(img)" label="Change Image"></v-file-input>
									</v-col>

									<v-col cols="8">
										<v-combobox :items="tags" v-model="tag" label="Tag(s)" multiple chips clear-icon="mdi-close-circle" deletable-chips></v-combobox>
									</v-col>

									<v-col cols="4">
										<v-select :items="priorities" v-model="priority" label="priority" chips clear-icon="mdi-close-circle" deletable-chips></v-select>
									</v-col>

									<v-col cols="12">
										<v-textarea dense outlined v-model="description" :rules="form.rules.description" label="Description" required></v-textarea>
									</v-col>
								</v-row>
							</v-col>

							<v-col cols="md-6">
								<v-row>
									<v-col cols="12">
										<img v-if="showImage" class="image" :src="img" width="100%" />
									</v-col>
								</v-row>
							</v-col>
						</v-row>

						<v-row>
							<v-col cols="12" sm="6" md="4">
								<v-btn color="primary" outlined @click="done()" :disabled="!valid"> Done </v-btn>
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

export default {
	components: {
		Navbar,
		Breadcrumbs,
		PanelHeader
	},
	beforeMount() {},
	data() {
		return {
			id: 0,
			name: '',
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
			valid: false,
			showImage: true,
			imageUpdated: false
		}
	},
	methods: {
		getData() {
			this.notes = JSON.parse(localStorage.getItem('notes'))

			for (var i = 0; i < this.notes.length; i++) {
				let note = this.notes[i]
				if (note.id == this.$route.params.id) {
					this.id = note.id
					this.name = note.name
					this.img = note.img
					this.tag = note.tag
					this.priority = note.priority
					this.description = note.description
				}
			}
		},
		upload(img) {
			this.showImage = false
			this.imageUpdated = false

			var reader = new FileReader()
			reader.onloadend = function () {
				console.log('RESULT', reader.result)
				this.img = JSON.stringify(reader.result)
				localStorage.setItem('imgBase64', reader.result)
			}
			reader.readAsDataURL(img)
		},
		done() {
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
				note.img = localStorage.getItem('imgBase64')
				note.tag = this.tag
				note.priority = this.priority
				note.description = this.description

				//update
				for (var i = 0; i < this.notes.length; i++) {
					if (this.notes[i].id == this.id) {
						this.notes[i] = note
					}
				}

				if (this.imageUpdated) {
					localStorage.removeItem('imgBase64')
				}

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

<style></style>
