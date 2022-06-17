<template>
	<v-container fluid class="my-1">
		<v-snackbar timeout="2000" transition="true" v-model="alert" absolute top :color="`${alertColor}`" text outlined right>
			<strong>
				{{ alertMessage }}
			</strong>
		</v-snackbar>
		<Navbar />
		<Breadcrumbs />

		<v-row>
			<v-card :loading="loading" class="mx-auto my-12" max-width="374" v-if="notes.length == 0">
				<template slot="progress">
					<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
				</template>

				<v-img height="250" src="https://i.imgur.com/k6ZWhpk.png"></v-img>

				<v-card-title>No data available </v-card-title>

				<v-divider class="mx-4"></v-divider>

				<v-card-actions>
					<v-btn color="deep-purple lighten-2" text @click="create"> Create </v-btn>
				</v-card-actions>
			</v-card>

			<v-col cols="3" v-for="note in notes">
				<v-card :loading="loading" max-width="374">
					<template slot="progress">
						<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
					</template>

					<v-img height="250" :src="note.img"></v-img>

					<v-card-title>{{ note.name }}</v-card-title>

					<v-card-text>
						<div>{{ note.description }}</div>
					</v-card-text>

					<v-card-text>
						<v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
							<v-chip v-for="tag in note.tag">
								{{ tag }}
							</v-chip>
						</v-chip-group>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import PanelHeader from '../../components/PanelHeader'
import Table from '../../components/Table'

export default {
	data() {
		return {
			alert: localStorage.getItem('alert'),
			alertColor: localStorage.getItem('alertColor'),
			alertMessage: localStorage.getItem('alertMessage'),
			headers: [
				{
					text: 'Title',
					align: 'start',
					sortable: true,
					value: 'name',
					width: '20%'
				},
				{ text: 'Priority', value: 'priority', width: '10%' },
				{ text: 'Tags', value: 'tag', width: '30%' },
				{ text: 'Description', value: 'description', width: '20%' },
				{ text: 'Actions', value: 'id', width: '20%' }
			],
			notes: []
		}
	},
	components: {
		Navbar,
		Breadcrumbs,
		PanelHeader,
		Table
	},
	computed: {},
	methods: {
		checkLocalStorage() {
			localStorage.removeItem('alert')
			localStorage.removeItem('alertColor')
			localStorage.removeItem('alertMessage')
		},
		getData() {
			this.notes = JSON.parse(localStorage.getItem('notes'))
		},
		create() {
			// redirect
			// window.location.replace('http://www.w3schools.com')
		},
		deleteItem(item) {
			for (var i = 0; i < this.notes.length; i++) {
				let note = this.notes[i]
				if (note.id == item.id) {
					this.notes.splice(i, 1)
				}
			}

			localStorage.setItem('notes', JSON.stringify(this.notes))

			this.alert = true
			this.alertColor = 'green'
			this.alertMessage = item.name + ' - deleted successfully !'

			this.getData()
		}
	},
	mounted() {
		this.checkLocalStorage()
		this.getData()
	}
}
</script>
