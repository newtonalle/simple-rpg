import Game from './pages/Game/Game.vue'
import Inventory from './pages/Inventory/Inventory.vue'
import Credits from './pages/Credits/Credits.vue'
import Tutorial from './pages/Tutorial/Tutorial.vue'


export default [
    { path: '/', component: Game, name: 'game' },
    { path: '/inventory', component: Inventory, name: 'inventory' },
    { path: '/credits', component: Credits, name: 'credits' },
    { path: '/tutorial', component: Tutorial, name: 'tutorial' },
]