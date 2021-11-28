import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { localStorage } from './localStorage.js'

// const { user, favoritesAmount } = localStorage
// const  user = localStorage.user
let name: unknown 
let avatarUrl: unknown
let amount: unknown

function getUserData(  user?: { userName: unknown; avatarUrl: unknown }){
  if(user == null){
    name = user + '';
    avatarUrl = user + '';
  } else if(user instanceof Object){
    name = user.userName ;
    avatarUrl = user.avatarUrl;
  } else{
    name = ''
    avatarUrl = ''
  }
}

function getFavoritesAmount(  favoritesAmount: unknown ){
  if ( favoritesAmount == 0 ) {
    amount = favoritesAmount + ''
  } else {
    amount = favoritesAmount;
  }

}


window.addEventListener('DOMContentLoaded', () => {
  getUserData(localStorage.user);
  getFavoritesAmount(localStorage.favoritesAmount);
  renderUserBlock(name, avatarUrl, amount)
 
  // const today = new Date();
  // const dateIn = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  // const dateCalcOut = today.setMonth(today.getMonth() + 2, 1);
  // const dateCalxOutResult = new Date(dateCalcOut - (60 * 60 * 24 * 1000));
  // const dateOut = `${dateCalxOutResult.getFullYear()}-${dateCalxOutResult.getMonth() + 1}-${dateCalxOutResult.getDate()}`
  
  renderSearchFormBlock(
    // dateIn, dateOut
  )
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
function favoritesAmount(favoritesAmount: any) {
  throw new Error('Function not implemented.')
}

