import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/index.vue'

import Note from '../views/Note/index.vue'
import NoteShow from '../views/Note/show.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home,
		meta: {
			requiresAuth: false
		}
	},
	{
		path: '/notes',
		component: Note,
		meta: {
			requiresAuth: false
		}
	},
	{
		path: '/notes/:id',
		component: NoteShow,
		meta: {
			requiresAuth: false
		}
	}
]

const router = new VueRouter({
	mode: 'hash',
	routes
})

export default router
