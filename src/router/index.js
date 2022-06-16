import Vue from 'vue'
import VueRouter from 'vue-router'

import Note from '../views/Note/index.vue'
import NoteShow from '../views/Note/show.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/notes',
		component: Note,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/notes/:id',
		component: NoteShow,
		meta: {
			requiresAuth: true
		}
	}
]

const router = new VueRouter({
	mode: 'hash',
	routes
})

export default router
