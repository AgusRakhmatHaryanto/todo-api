const app = require("../index.js")
const request = require("supertest")

describe("Todo Unit Test", () => {
  test("Add Todo Successfully", (done) => {
    const newTodo = {
      activity: "Todo",
    };

    request(app)
      .post("/api/todo")
      .send(newTodo)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toBe(200)
        expect(response.body.data).toBeDefined()
        done()
      })
      .catch(done)
  });

  test("Get all list", (done) => {
    request(app)
      .get("/api/todo")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toBeDefined()
        done()
      })
      .catch(done)
  })
  test("Get Detail Todo", (done) => {
    request(app)
      .get("/api/todo/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data).toBeDefined()
        done()
      })
      .catch(done)
  })

  test("Edit Todo", (done) => {
    const id = 1
    const updatedTodo = {
      activity: "Todo 1 Updated",
    }

    request(app)
      .put(`/api/todo/${id}`)
      .send(updatedTodo)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Data activity berhasil diupdate")
        done()
      })
      .catch(done)
  })

  test("Delete Todo", (done) => {
    const id = 1

    request(app)
      .delete(`/api/todo/${id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Data activity berhasil dihapus")
        done()
      })
      .catch(done)
  })
})
