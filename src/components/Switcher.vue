</<template>
    <div>

        <v-btn-toggle v-model="selectedView" v-on:input="updateView(selectedView)">
				<v-btn>
					<v-icon>mdi-sort</v-icon>
				</v-btn>

				<v-btn>
					<v-icon>mdi-card</v-icon>
				</v-btn>
			</v-btn-toggle>
        
    </div>
</template>
<script>
export default {
	data() {
		return {
			selectedView: 0,
		}
	},
	methods: {
        updateView(selectedView) {
			console.log('selectedView',selectedView)
			this.$emit('selectedView', selectedView)
		},

    }
}

</script>

