import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/index.vue'

import Note from '../views/Note/index.vue'
import NoteShow from '../views/Note/show.vue'
import NoteCreate from '../views/Note/create.vue'
import NoteEdit from '../views/Note/edit.vue'

import NoteCard from '../views/Note/index-card.vue'

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
		path: '/cards',
		component: NoteCard,
		meta: {
			requiresAuth: false
		}
	},
	{
		path: '/notes/create',
		component: NoteCreate,
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
	},
	{
		path: '/notes/:id/edit',
		component: NoteEdit,
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
