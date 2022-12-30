import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

const newPet = {
    "category": {
      "id": 0,
      "name": "dog"
    },
    "name": "doggie",
    "photoUrls": [
      ""
    ],
    "tags": [
      {
        "id": 0,
        "name": "white"
      }
    ],
    "status": "available"
};


Given('I create a new pet and modify it correctly', async () => {
    id = await cy.request('POST', 'https://petstore.swagger.io/v2/pet', newPet).then((response) => {
        // response.body is automatically serialized into JSON
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id'); // true
        expect(response.body).to.have.property('name', 'doggie'); // true
        expect(response.body).to.have.property('status', 'available'); // true

        const modifiedPet = {
            "id": response.body.id,
            "category": {
              "id": 0,
              "name": "dog"
            },
            "name": "modifieddoggie",
            "photoUrls": [
              ""
            ],
            "tags": [
              {
                "id": 0,
                "name": "white"
              }
            ],
            "status": "available"
        };
    
        cy.request('PUT', 'https://petstore.swagger.io/v2/pet', modifiedPet).then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', modifiedPet.id); // true
            expect(response.body).to.have.property('name', 'modifieddoggie'); // true
            expect(response.body).to.have.property('status', 'available'); // true

            cy.request('GET', 'https://petstore.swagger.io/v2/pet/'+ modifiedPet.id).then((response) => {
                // response.body is automatically serialized into JSON
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('id', modifiedPet.id); // true
                expect(response.body).to.have.property('name', 'modifieddoggie'); // true
                expect(response.body).to.have.property('status', 'available'); // true
            })
        })

    })
});
