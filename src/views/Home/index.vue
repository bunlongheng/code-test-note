<template>
	<div class="dashboard">
		<Navbar />
		<Panel type="dashboard" title="Dashboard" icon="home" subtitle="Overview details of our consumer engagement" />
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
	}
}
</script>
