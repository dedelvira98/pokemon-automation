import home from '../selectors/home.css'

describe('Home page', () => {
    it('contains correct elements when logged out', () => {
        cy.visit('')
        cy.get(home.pokedex).click()
        cy.get(home.cookies).click()
        cy.get(home.searchpoke).type("pikachu")
        cy.get(home.buttonsearch).click()
        cy.get('[src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"]').click()
        cy.scrollTo(0,1200)
        cy.get('[href="/us/pokedex/"]').last().click()
        cy.scrollTo('bottom')
    })
})
