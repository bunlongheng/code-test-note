<template>
	<div>
		<v-container fluid>
			<!-- Dialoge -->

			<v-dialog v-model="deleteStatus" width="500px" class="d-flex justify-center">
				<v-card style="padding: 30px">
					<v-card-title class="red--text text--lighten-1 d-flex justify-center"> Delete {{ name.replace('-', ' ').replace('s', '') }} </v-card-title>
					<v-card-text class="text-center"
						>Are you sure you want to delete <strong>{{ item.name }} </strong> ?</v-card-text
					>
					<v-card-actions class="d-flex justify-center">
						<v-btn small outlined color="darken-3 white--text" @click="deleteStatus = false" class="mx-2">No</v-btn>
						<v-btn small outlined @click="deleteConfirm()" class="mx-2 red--text">Yes</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>

			<!-- Dialoge -->

			<v-row class="pa-5">
				<v-col cols="12" sm="6" md="4" lg="4" xl="3">
					<v-text-field dense outlined v-model="search" append-icon="mdi-magnify" :label="`Search`" single-line hide-details></v-text-field>
				</v-col>

				<v-col cols="12" sm="6" md="4" lg="2" xl="1" v-if="name == 'campaigns'">
					<v-select dense outlined :items="statuses" label="Status" v-model="status" v-on:input="sortBy()"></v-select>
				</v-col>

				<v-col cols="12">
					<v-data-table :headers="headers" :items="items" :search="search">
						<template v-slot:item.img="{ item }">
							<div class="pt-2">
								<img class="image" :src="item.img" width="50%" height="50" />
							</div>
						</template>

						<template v-slot:item.name="{ item }">
							<router-link :to="`/${name}/${item.id}`"> {{ item.name }}</router-link>
						</template>

						<template v-slot:item.priority="{ item }">
							{{ item.priority }}
						</template>

						<template v-slot:item.tag="{ item }">
							<v-chip small outlined class="ma-2" v-for="tag in item.tag"> {{ tag }} </v-chip>
						</template>

						<template v-slot:item.description="{ item }" style="overflow-wrap: normal">
							<div class="description">
								{{ item.description }}
							</div>
						</template>

						<template v-slot:item.id="{ item }">
							<router-link :to="`/${name}/${item.id}/edit`">
								<v-btn small outlined class="orange--text"> Edit </v-btn>
							</router-link>
							&nbsp;
							<v-btn small outlined class="red--text" @click="handleDelete(item)"> Delete </v-btn>
						</template>
					</v-data-table>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'Table',
	props: {
		name: String,
		headers: Array,
		items: Array
	},
	data() {
		return {
			search: '',
			status: '',
			statuses: ['Active', 'Disabled'],
			deleteStatus: false,
			item: {}
		}
	},
	methods: {
		sortBy() {
			console.log(this.status)
			this.$emit('sortBy', this.status)
		},
		deleteConfirm() {
			// console.log(this.item)
			this.$emit('deleteConfirm', this.item)
			this.deleteStatus = false
		},
		handleDelete(item) {
			this.item = item
			this.deleteStatus = true
		}
	},
	mounted() {}
}
</script>
<style scoped>
>>> .description {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 250px;
}

>>> td a {
	text-decoration: none !important;
}

>>> td {
	vertical-align: middle !important;
}
</style>
