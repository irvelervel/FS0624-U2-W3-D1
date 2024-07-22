// CREIAMO DEI CONTATTI A PARTIRE DAL FORM

// creo la classe per gli oggetti della rubrica
class Contact {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
}

// MEMORIA DELL'APP (elenco telefonico)

const contactsList = []

// eseguiamo del codice alla pressione del tasto SALVA CONTATTO

document
  .getElementsByTagName('form')[0] // prende il primo e unico form della pagina
  .addEventListener('submit', function (e) {
    // dobbiamo bloccare il comportamento di default del form, per evitare
    // che la pagina si aggiorni

    e.preventDefault() // <-- fondamentale

    // recuperiamo i riferimenti ai 3 campi input
    const firstNameInput = document.getElementById('firstName')
    const lastNameInput = document.getElementById('lastName')
    const phoneInput = document.getElementById('phone')

    // recuperiamo i VALORI dei 3 riferimenti
    const firstNameValue = firstNameInput.value // es. Stefano
    const lastNameValue = lastNameInput.value // es. Casasola
    const phoneValue = phoneInput.value // es. 123123

    console.log('firstNameValue:', firstNameValue)
    console.log('lastNameValue:', lastNameValue)
    console.log('phoneValue:', phoneValue)

    // creiamo con una classe un oggetto di tipo "Elemento rubrica"
    const element = new Contact(firstNameValue, lastNameValue, phoneValue)

    console.log('creo in rubrica', element)

    // devo salvare questo contatto in una memoria
    contactsList.push(element) // inserisco l'ultimo elemento appena creato

    // ricreo la lista telefonica (la <ul>)
    // prendo un riferimento alla <ul> iniziale vuota
    const unorderedList = document.getElementById('phone-list') // <ul></ul>

    // per evitare che i risultati si "accumulino", è meglio SVUOTARE la lista
    // per sicurezza ogni volta
    unorderedList.innerHTML = ''

    // a questo punto la lista va riempita con tanti <li> quanti sono gli elementi
    // della mia "memoria"
    //
    // ciclo contactsList (la memoria) per capire QUANTI <li> creare
    for (let i = 0; i < contactsList.length; i++) {
      // quest'operazione verrà ripetuta per OGNI elemento della memoria
      // creo un <li> vuoto
      const newLi = document.createElement('li') // <li>  </li>
      // ora lo riempio con i dati dell'elemento singolo della memoria
      newLi.innerText =
        contactsList[i].firstName +
        ' ' +
        contactsList[i].lastName +
        ' | ' +
        contactsList[i].phone
      // Stefano Casasola | 123123
      // <li>Stefano Casasola | 123123</li>
      newLi.classList.add('list-group-item')
      // <li class="list-group-item">Stefano Casasola | 123123</li>
      // ora, passo finale, appendo l'<li> appena creato e finito
      // nella lista non ordinata
      unorderedList.appendChild(newLi)
    }

    // resetto il form
    // firstNameInput.value = ''
    // lastNameInput.value = ''
    // phoneInput.value = ''
    document.getElementsByTagName('form')[0].reset() // più elegante :)
  })
