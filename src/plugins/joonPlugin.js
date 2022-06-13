export default {
  install(app){

    const joon = {
      name:'장경준',
      age:29,
    }

    app.provide('joon', joon);
    console.log(app)
  }
}