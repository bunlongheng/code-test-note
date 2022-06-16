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
			<v-col cols="12">
				<v-card elevation="2">
					<PanelHeader type="index" icon="mdi-note" name="Notes" title="Notes" subTitle="Select any note to view, edit, or delete." />
					<Table name="notes" :headers="headers" :items="notes" @deleteConfirm="deleteItem" />
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
				// { text: 'Description', value: 'description', width: '20%' },
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
