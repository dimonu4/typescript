import { renderBlock } from './lib.js'
import { searchFormData } from './interfaces.js'

export function renderSearchFormBlock (
  // dateIn:string, dateOut:string
) {
  const today = new Date();
  const dateIn = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const dateCalcOut = today.setMonth(today.getMonth() + 2, 1);
  const dateCalxOutResult = new Date(dateCalcOut - (60 * 60 * 24 * 1000));
  const maxDateOut = `${dateCalxOutResult.getFullYear()}-${dateCalxOutResult.getMonth() + 1}-${dateCalxOutResult.getDate()}`
  // const dateOutthreeDays = today.setDate(today) 
  const dateOut = new Date(Date.now() + (60 * 60 * 24 * 1000 * 3))
  const dateOutCalc = `${dateOut.getFullYear()}-${dateOut.getMonth() + 1}-${(dateOut.getDate()) < 10 ?'0'+(dateOut.getDate()):(dateOut.getDate())}`
  
  let dateInArray = [];
  dateInArray = dateIn.split('-');
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${dateInArray[0]}-${dateInArray[1]}-${+dateInArray[2] + 1} min=${dateIn} max=${maxDateOut} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${dateOutCalc} min=${dateIn} max=${maxDateOut} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
  handleSearch(document.querySelector('#city'),
    document.querySelector('#check-in-date'),
    document.querySelector('#check-out-date'),
    document.querySelector('#max-price'))
}

function handleSearch (city, checkInDate, checkOutDate, maxPrice){
  const inputData = {
    city: city.value,
    inDate: checkInDate.value,
    outDate: checkOutDate.value,
    maxPrice: maxPrice.value
  }
  search(inputData)
}

function search(inputData: searchFormData){
  console.log(inputData)
}


