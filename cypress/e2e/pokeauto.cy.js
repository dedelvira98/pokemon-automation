import pokeauto from '../selectors/pokeauto.css'

describe('Home page', () => {
    it('Pokedex Automation', () => {
        cy.visit('')
        cy.get(pokeauto.pokedex).click()
        cy.get(pokeauto.cookies).click()
        cy.get(pokeauto.searchpoke).type("pikachu")
        cy.get(pokeauto.buttonsearch).click()
        cy.get('[src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"]').click()
        cy.scrollTo(0,1200)
        cy.get('[href="/us/pokedex/"]').last().click()
        cy.scrollTo('bottom')
    })
})
