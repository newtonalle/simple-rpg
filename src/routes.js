import Game from './pages/Game/Game.vue'
import Inventory from './pages/Inventory/Inventory.vue'
import BossFight from './pages/BossFight/BossFight.vue'
import ProgressionTracker from './pages/ProgressionTracker/ProgressionTracker.vue'
import Credits from './pages/Credits/Credits.vue'
import Tutorial from './pages/Tutorial/Tutorial.vue'
import Wiki from './pages/Wiki/Wiki.vue'
import Updates from './pages/Updates/Updates.vue'
import Debug from './pages/Debug/DebugPage.vue'


export default [
    { path: '/', component: Game, name: 'game' },
    { path: '/inventory', component: Inventory, name: 'inventory' },
    { path: '/boss-fight', component: BossFight, name: 'bossFight' },
    { path: '/progression-tracker', component: ProgressionTracker, name: 'progressionTracker' },
    { path: '/credits', component: Credits, name: 'credits' },
    { path: '/tutorial', component: Tutorial, name: 'tutorial' },
    { path: '/wiki', component: Wiki, name: 'wiki' },
    { path: '/updates', component: Updates, name: 'updates' },
    { path: '/debug', component: Debug, name: 'debug' },
]