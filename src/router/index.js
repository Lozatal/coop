import Vue from 'vue'
import Router from 'vue-router'
import Connexion from '@/components/identification/Connexion'
import MembreListe from '@/components/Membre/MembreListe'
import MembreCreation from '@/components/Membre/MembreCreation'
import ConversationListe from '@/components/Conversation/ConversationListe'
import ConversationCreation from '@/components/Conversation/ConversationCreation'
import ConversationDetail from '@/components/Conversation/ConversationDetail'
import MessageListe from '@/components/Message/MessageListe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connexion',
      component: Connexion
    },
    {
      path: '/membre',
      component: MembreListe
    },
    {
      path: '/membre-creation',
      component: MembreCreation
    },
    {
      path: '/conversation',
      component: ConversationListe
    },
    {
      path: '/conversation/:id',
      name: 'conversation',
      component: ConversationDetail
    },
    {
      path: '/conversation-creation',
      component: ConversationCreation
    },
    {
      path: '/conversation/:id/message',
      component: MessageListe
    },
    {
      path: '*',
      redirect: '/conversation'
    }
  ]
})
