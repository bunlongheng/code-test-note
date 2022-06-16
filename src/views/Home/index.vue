<template>
	<div class="dashboard">
		<Navbar />
		<Panel title="Home" icon="mdi-home" subtitle="Overview details of the dashboard." />
	</div>
</template>

<script>
import Navbar from '../../components/Navbar'
import Panel from '../../components/Panel'

export default {
	name: 'Dashboard',
	components: {
		Navbar,
		Panel
	},
	data() {
		return {}
	}
}
</script>
