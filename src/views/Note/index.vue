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
					<Table name="notes" :headers="headers" :items="items" @deleteConfirm="deleteItem" />
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
import axios from 'axios'

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

				{ text: 'Tags', value: 'tags', width: '50%' },
				{ text: 'Actions', value: 'id', width: '20%' }
			],
			items: [],
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
			this.items = this.notes
		},

		deleteItem(item) {
			// console.log(item)
			let vc_url_group = {
				$root: 'vc_url_group',
				op: 'delete',
				brand: localStorage.getItem('brandCode'),
				groups: [
					{
						id: item.id,
						name: item.name
					}
				],
				_SESSION: localStorage.getItem('session')
			}

			axios.defaults.headers['Content-Type'] = 'application/json'
			axios
				.post(window.MTS_URL, vc_url_group)
				.then((response) => {
					if (response.data.status == 0) {
						this.alert = true
						this.alertColor = 'green'
						this.alertMessage = item.name + ' - deleted successfully !'

						this.getData()
					} else {
						alert(response.data.statustext)
						reject(response.data.statustext)
					}
				})
				.catch((err) => {
					console.log('Something went wrong: ', err)
				})
		}
	},

	mounted() {
		this.getData()
		this.checkLocalStorage()
	}
}
</script>
