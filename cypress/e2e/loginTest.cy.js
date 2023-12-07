
describe('LOGIN TEST', () => {
  it('Comprobar cuando el usuario y contraseña son correctos que envía al página principal', () => {

    cy.visit('localhost:5173')

    cy.wait(1000);

    cy.get('input[name="user"]')
    .type('admin')

    cy.wait(1000);

    cy.get('input[name="password"]')
    .type('admin')

    cy.wait(1000);

    cy.contains("LOGIN").click()

    cy.wait(1000);

    cy.location().should((location) => {

      expect(location.origin).to.eq('http://localhost:5173')
      expect(location.pathname).to.eq('/')
    })

    cy.wait(1000);

    
  })

  it('Cuando el usuario o contraseña son incorrectos se tiene que quedar en la página del login',() => {

    cy.visit('localhost:5173')

    cy.wait(1000);

    cy.get('input[name="user"]')
    .type('admin')

    cy.wait(1000);

    cy.get('input[name="password"]')
    .type('1234')

    cy.wait(1000);

    cy.contains("LOGIN").click()

    cy.location().should((location) => {

      expect(location.origin).to.eq('http://localhost:5173')
      expect(location.pathname).to.eq('/login')
    })

    cy.wait(1000);

  })
})

describe('PROTECTED ROUTES', () => {

  it('Sin haber hecho el login comprobar que no podemos acceder a las rutas privadas', () => {

    cy.visit('localhost:5173/rooms')

    cy.wait(3000);

    cy.location().should((location) => {

      expect(location.origin).to.eq('http://localhost:5173')
      expect(location.pathname).to.eq('/login')
    })

    cy.wait(1000);

  })

  it('Despues de hacer el login comprobar que podemos navegar por las páginas del dashboard, pero no podemos volver al login',() => {

    cy.visit('localhost:5173')

    cy.wait(1000);

    cy.get('input[name="user"]')
    .type('admin')

    cy.wait(1000);

    cy.get('input[name="password"]')
    .type('admin')

    cy.wait(1000);

    cy.contains("LOGIN").click()

    cy.wait(1000);

    cy.visit('localhost:5173/rooms')

    cy.wait(1000);

    cy.visit('localhost:5173/bookings')

    cy.wait(1000);

    cy.visit('localhost:5173/contact')

    cy.wait(1000);

    cy.visit('localhost:5173/users')

    cy.wait(1000);

    cy.visit('localhost:5173/login')

    cy.wait(1000);

    cy.location().should((location) => {

      expect(location.origin).to.eq('http://localhost:5173')
      expect(location.pathname).to.eq('/')
    })

  })

})