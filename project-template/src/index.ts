import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Tom Hanks', '/img/avatar.png', 0)

  const today = new Date();
  const dateIn = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const dateCalcOut = today.setMonth(today.getMonth() + 2, 1);
  const dateCalxOutResult = new Date(dateCalcOut - (60 * 60 * 24 * 1000));
  const dateOut = `${dateCalxOutResult.getFullYear()}-${dateCalxOutResult.getMonth() + 1}-${dateCalxOutResult.getDate()}`
  
  renderSearchFormBlock(dateIn, dateOut)
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
